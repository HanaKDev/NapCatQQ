@ECHO OFF&PUSHD %~DP0&TITLE Requesting UAC Privileges ...&CHCP 936
SET "PARAMS=%*"
if not defined PARAMS (
    reg query "HKU\S-1-5-19">NUL 2>&1||powershell -Command "Start-Process '%~sdpnx0' -Verb RunAs"&&EXIT
) else (
    reg query "HKU\S-1-5-19">NUL 2>&1||powershell -Command "Start-Process '%~sdpnx0' -ArgumentList '%*' -Verb RunAs"&&EXIT
)
ECHO.
:: �����˲��ر�����, ���Լ��� qwq (ɢװbat, �ܶ�����)
SET WORK_DIR=%~dp0
setlocal
TITLE Checking...
reg query "HKLM\Hardware\Description\System\CentralProcessor\0" /v "Identifier" | find /i "x86" >nul 2>&1 && (set arch=x86) || (set arch=x64)
:: ��ѯע����ȡ��ǰϵͳ�汾��
for /f "tokens=3" %%i in ('reg query "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion" /v CurrentBuild') do set build=%%i

:: �ж�ϵͳ�汾���Ƿ���ڵ���7601 [GBK�Ļ�,�����ϵͳ�Ƚ���,ֻҪ��Win7 SP1���ϵ�Ӧ�ö����� !!32λ�����в���!!]
if %build% GEQ 7601 (
    goto launchnapcat
) else (
    goto unsupportedos
)

:launchnapcat
echo.��ǰϵͳ�汾����Ҫ��^: ^[%BUILD%_%ARCH%^]
echo.��ǰ����Ŀ¼Ϊ: %WORK_DIR%
echo.

SET NAPCAT_LAUNCHER_PATH=%WORK_DIR%NapCatWinBootMain.exe
SET NAPCAT_PATCH_PACKAGE=%WORK_DIR%qqnt.json
SET NAPCAT_MAIN_PATH=%WORK_DIR%napcat.mjs
SET NAPCAT_LOAD_PATH=%WORK_DIR%loadNapCat.js
SET NAPCAT_INJECT_PATH=%WORK_DIR%NapCatWinBootHook.dll

:: ͨ��ע������ж������QQ����·��
for /f "tokens=2*" %%a in ('reg query "HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\Uninstall\QQ" /v "UninstallString"') do (
set RetString=%%b
)
for %%a in ("%RetString%") do (
set "pathWithoutUninstall=%%~dpa"
)
SET QQ_PATH=%pathWithoutUninstall%QQ.exe

echo.��ǰ���������Ѿ�����Ϊ:
set NAPCAT
set QQ

goto checkpass
ECHO. && ECHO �ļ����^:
if exist "%NAPCAT_LAUNCHER_PATH%" (
    echo    NAPCAT_LAUNCHER_PATH         ...^[PASS^]
    ) else (
    goto filenoexist
    )
if exist "%NAPCAT_PATCH_PACKAGE%" (
    echo    NAPCAT_PATCH_PACKAGE         ...^[PASS^]
    ) else (
    goto filenoexist
    )
if exist "%NAPCAT_MAIN_PATH%" (
    echo    NAPCAT_MAIN_PATH             ...^[PASS^]
    ) else (
    goto filenoexist
    )
if exist "%NAPCAT_INJECT_PATH%" (
    echo    NAPCAT_INJECT_PATH           ...^[PASS^]
    ) else (
    goto filenoexist
    )
if exist "%QQ_PATH%" (
    echo    QQ_PATH                      ...^[PASS^]
    ) else (
    color 4F
    echo.����^,QQȥ������...
    goto end
    )

:checkpass
TITLE NapCat
ECHO. && ECHO Command: "%NAPCAT_LAUNCHER_PATH%" "%QQ_PATH%" "%NAPCAT_INJECT_PATH%" %*

:: �滻��б��Ϊ��б�ܲ������NAPCAT_LOAD_PATH
set "NAPCAT_MAIN_PATH_POSIX=%NAPCAT_MAIN_PATH:\=/%"
echo (async () =^> {await import("file:///%NAPCAT_MAIN_PATH_POSIX%")})() > "%NAPCAT_LOAD_PATH%"

:: ��� %* �Ƿ�Ϊ�գ������Ϊ�գ�ֱ�����û�����������ת�� ncloop
if "%~1" NEQ "" (
    if "%~2" NEQ "" (
        COLOR 1F
        ECHO. �����Ҫ���ٵ�¼^,��ȷ�������� ^"�����ű�.bat^" -q^<QQ��^>
        ECHO. ����^: ^"NapCat_Win10.bat ^-q10000^"
        ECHO. �밴���������...
        PAUSE > NUL
        COLOR 07
    )
    goto ncloop
) else (
    COLOR 2F
    ECHO. && ECHO �밴���������...
    PAUSE > NUL
    COLOR 07
)

:ncloop
ECHO.
"%NAPCAT_LAUNCHER_PATH%" "%QQ_PATH%" "%NAPCAT_INJECT_PATH%" %*
ECHO  ����: LOADER�����ѽ���, ������Ҫ������̨���...
ECHO  ��������˳�
PAUSE > NUL
goto end

:unsupportedos
:: ����CMD���ڵ���ɫΪ��װ���
color 4F 
:: ����CMD���ڳߴ�Ϊ5��23��
mode con: cols=56 lines=5
TITLE Error
ECHO. && ECHO. && ECHO Not supported by current system version. ^[%BUILD%_%ARCH%^]
goto end

:filenoexist
TITLE FILE_CHECK_FAILED
color 4F
mode con: cols=56 lines=5
CLS && ECHO. && ECHO. && ECHO ȱʧ NapCat ��������ļ�... ����һ���ǲ��ǽ�ѹ©��

:end
endlocal
PAUSE > NUL
EXIT 1