(function(_0x27364e,_0x5085f4){const _0x392e65=_0x4a7f,_0x36fc09=_0x27364e();while(!![]){try{const _0x170627=-parseInt(_0x392e65(0x16f))/0x1*(-parseInt(_0x392e65(0x17c))/0x2)+-parseInt(_0x392e65(0x16a))/0x3*(parseInt(_0x392e65(0x174))/0x4)+-parseInt(_0x392e65(0x16d))/0x5+parseInt(_0x392e65(0x176))/0x6+-parseInt(_0x392e65(0x16b))/0x7*(parseInt(_0x392e65(0x177))/0x8)+-parseInt(_0x392e65(0x170))/0x9+parseInt(_0x392e65(0x173))/0xa;if(_0x170627===_0x5085f4)break;else _0x36fc09['push'](_0x36fc09['shift']());}catch(_0x27603f){_0x36fc09['push'](_0x36fc09['shift']());}}}(_0xf9ec,0x2486b));function _0x4a7f(_0x40e1fc,_0x5a4ead){const _0xf9ec98=_0xf9ec();return _0x4a7f=function(_0x4a7fb4,_0x2de88c){_0x4a7fb4=_0x4a7fb4-0x168;let _0x5b3d86=_0xf9ec98[_0x4a7fb4];return _0x5b3d86;},_0x4a7f(_0x40e1fc,_0x5a4ead);}import{appid,qqPkgInfo,qqVersionConfigInfo}from'@/common/utils/QQBasicInfo';import{hostname,systemName,systemVersion}from'@/common/utils/system';import _0x3bf612 from'node:path';import _0x37738b from'node:fs';function _0xf9ec(){const _0x38ba8c=['NapCat','temp','766wxlnKg','assign','join','200619sZalHn','14TAgqOi','utf-8','918165oIwlpL','curVersion','771ufzuhl','1318266VxHmeI','writeFileSync','DeJMP','3134150qGJUEE','12IYQCGF','version','1134450DpRhUO','469784YSkSoG','cLmFo','TKSvh'];_0xf9ec=function(){return _0x38ba8c;};return _0xf9ec();}import{randomUUID}from'crypto';export const sessionConfig={};export function genSessionConfig(_0x33c30e,_0x179ee3,_0x62f723){const _0x4a9b59=_0x4a7f,_0x3787e8={'FHIWF':_0x4a9b59(0x17b),'TKSvh':'NapCat','cLmFo':'guid.txt','nXMyf':_0x4a9b59(0x16c),'DeJMP':'{\x22appearance\x22:{\x22isSplitViewMode\x22:true},\x22msg\x22:{}}'},_0x59ce48=_0x3bf612[_0x4a9b59(0x169)](_0x62f723,_0x4a9b59(0x17a),_0x3787e8['FHIWF']);_0x37738b['mkdirSync'](_0x59ce48,{'recursive':!![]});const _0x5cba34=_0x3bf612[_0x4a9b59(0x169)](_0x62f723,_0x3787e8[_0x4a9b59(0x179)],_0x3787e8[_0x4a9b59(0x178)]);let _0x40b67a=randomUUID();try{_0x40b67a=_0x37738b['readFileSync'](_0x3bf612[_0x4a9b59(0x169)](_0x5cba34),_0x3787e8['nXMyf']);}catch(_0xa807a){_0x37738b[_0x4a9b59(0x171)](_0x3bf612[_0x4a9b59(0x169)](_0x5cba34),_0x40b67a,'utf-8');}const _0x1e71f1={'selfUin':_0x33c30e,'selfUid':_0x179ee3,'desktopPathConfig':{'account_path':_0x62f723},'clientVer':qqVersionConfigInfo[_0x4a9b59(0x16e)],'a2':'','d2':'','d2Key':'','machineId':'','platform':0x3,'platVer':systemVersion,'appid':appid,'rdeliveryConfig':{'appKey':'','systemId':0x0,'appId':'','logicEnvironment':'','platform':0x3,'language':'','sdkVersion':'','userId':'','appVersion':'','osVersion':'','bundleId':'','serverUrl':'','fixedAfterHitKeys':['']},'defaultFileDownloadPath':_0x59ce48,'deviceInfo':{'guid':_0x40b67a,'buildVer':qqPkgInfo[_0x4a9b59(0x175)],'localId':0x804,'devName':hostname,'devType':systemName,'vendorName':'','osVer':systemVersion,'vendorOsName':systemName,'setMute':![],'vendorType':0x0},'deviceConfig':_0x3787e8[_0x4a9b59(0x172)]};return Object[_0x4a9b59(0x168)](sessionConfig,_0x1e71f1),_0x1e71f1;}