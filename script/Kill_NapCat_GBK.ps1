# BAT ��ͷ��wmicд������, ûд����,��Copilotд��һ��,�ܶ����� qwq
# ��ȡ NapCat �����̵� PID
$mainProcesses = Get-Process | Where-Object { $_.MainWindowTitle -match "^����Ա:  NapCat|^Administrator:  NapCat" }
if (-not $mainProcesses) {
    Write-Output "δ�ҵ��κ� NapCat ������"
    exit 1
}

foreach ($mainProcess in $mainProcesses) {
    $mainPID = $mainProcess.Id
    Write-Output "�ҵ� NapCat �����̣�PID: $mainPID"

    # ���庯���������ӽ���
    function Get-ChildProcesses($parentPID) {
        $childProcesses = Get-WmiObject Win32_Process | Where-Object { $_.ParentProcessId -eq $parentPID }
        return $childProcesses
    }

    # ���� NapCatWinBootMain.exe ���ӽ���
    $napCatChild = Get-ChildProcesses -parentPID $mainPID | Where-Object { $_.Name -eq "NapCatWinBootMain.exe" }
    if ($napCatChild) {
        $napCatChildPID = $napCatChild.ProcessId
        Write-Output "�ҵ� NapCatWinBootMain.exe ���̣�PID: $napCatChildPID"

        # ���� qq.exe ���ӽ���
        $qqProcess = Get-ChildProcesses -parentPID $napCatChildPID | Where-Object { $_.Name -eq "qq.exe" }
        if ($qqProcess) {
            $qqPID = $qqProcess.ProcessId
            Write-Output "�ҵ� QQ ���̣�PID: $qqPID"
            
            # ���� qq.exe
            Stop-Process -Id $qqPID -Force
            Write-Output "�ѽ��� QQ ����"
        } else {
            # ���û���ҵ� qq.exe������� NapCatWinBootMain.exe
            Stop-Process -Id $napCatChildPID -Force
            Write-Output "δ�ҵ� QQ ���̣��ѽ��� NapCatWinBootMain.exe"
        }
    } else {
        Write-Output "δ�ҵ� NapCatWinBootMain.exe ����"
    }

    # ��������ǰ�� NapCat ������
    Stop-Process -Id $mainPID -Force
    Write-Output "�ѽ�����ǰ�� NapCat ������"
}
