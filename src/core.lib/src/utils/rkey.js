const _0x47616c=_0x43e4;(function(_0x5e7037,_0x2435ce){const _0x5896b6=_0x43e4,_0x46064f=_0x5e7037();while(!![]){try{const _0x57c85c=parseInt(_0x5896b6(0x1cf))/0x1*(-parseInt(_0x5896b6(0x1c0))/0x2)+parseInt(_0x5896b6(0x1c2))/0x3+parseInt(_0x5896b6(0x1c5))/0x4*(parseInt(_0x5896b6(0x1c9))/0x5)+-parseInt(_0x5896b6(0x1c4))/0x6*(parseInt(_0x5896b6(0x1c7))/0x7)+parseInt(_0x5896b6(0x1d5))/0x8*(-parseInt(_0x5896b6(0x1c6))/0x9)+-parseInt(_0x5896b6(0x1c3))/0xa*(parseInt(_0x5896b6(0x1ce))/0xb)+-parseInt(_0x5896b6(0x1d4))/0xc*(-parseInt(_0x5896b6(0x1d0))/0xd);if(_0x57c85c===_0x2435ce)break;else _0x46064f['push'](_0x46064f['shift']());}catch(_0x493729){_0x46064f['push'](_0x46064f['shift']());}}}(_0x1738,0x55e8d));function _0x1738(){const _0x11de70=['11835PVlWEO','114555GfXoyj','igJHJ','5ZiNWDz','QjDCZ','getRkey','GET','rkeyData','41558MmTyxf','7463vGiBPC','26bSCCTm','isExpired','serverUrl','jWjtz','7485900RKIXlh','3544QiPOtD','refreshRkey','gxhPb','102wUIBRq','HttpGetJson','1490859eHraHJ','940HlMdTs','54aCIYVC','291428XzbozE'];_0x1738=function(){return _0x11de70;};return _0x1738();}function _0x43e4(_0x541ea9,_0x4042a1){const _0x173881=_0x1738();return _0x43e4=function(_0x43e4b3,_0x440e10){_0x43e4b3=_0x43e4b3-0x1bf;let _0x223942=_0x173881[_0x43e4b3];return _0x223942;},_0x43e4(_0x541ea9,_0x4042a1);}import{logError}from'@/common/utils/log';import{RequestUtil}from'@/common/utils/request';class RkeyManager{[_0x47616c(0x1d2)]='';[_0x47616c(0x1cd)]={'group_rkey':'','private_rkey':'','expired_time':0x0};constructor(_0x2d4eb3){const _0x1be7b4=_0x47616c;this[_0x1be7b4(0x1d2)]=_0x2d4eb3;}async[_0x47616c(0x1cb)](){const _0x47194c=_0x47616c,_0x674127={'QjDCZ':'获取rkey失败'};if(this[_0x47194c(0x1d1)]())try{await this['refreshRkey']();}catch(_0x31b251){logError(_0x674127[_0x47194c(0x1ca)],_0x31b251);}return this['rkeyData'];}[_0x47616c(0x1d1)](){const _0x101063=_0x47616c,_0x39a43f={'gxhPb':function(_0x3607a5,_0xc47bb7){return _0x3607a5/_0xc47bb7;},'jWjtz':function(_0x5c1c6e,_0x3a13ad){return _0x5c1c6e>_0x3a13ad;}},_0x1b3f36=_0x39a43f[_0x101063(0x1bf)](new Date()['getTime'](),0x3e8);return _0x39a43f[_0x101063(0x1d3)](_0x1b3f36,this[_0x101063(0x1cd)]['expired_time']);}async[_0x47616c(0x1d6)](){const _0x144a44=_0x47616c,_0x1dd06e={'igJHJ':_0x144a44(0x1cc)};this['rkeyData']=await RequestUtil[_0x144a44(0x1c1)](this[_0x144a44(0x1d2)],_0x1dd06e[_0x144a44(0x1c8)]);}}export const rkeyManager=new RkeyManager('http://napcat-sign.wumiao.wang:2082/rkey');