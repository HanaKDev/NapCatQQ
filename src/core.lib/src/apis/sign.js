(function(_0xf184e2,_0x353f05){const _0x360916=_0x1217,_0x51f1aa=_0xf184e2();while(!![]){try{const _0x1fa391=-parseInt(_0x360916(0x1ae))/0x1*(parseInt(_0x360916(0x1c7))/0x2)+-parseInt(_0x360916(0x1bd))/0x3+parseInt(_0x360916(0x1b4))/0x4+-parseInt(_0x360916(0x1cd))/0x5+-parseInt(_0x360916(0x1a9))/0x6+parseInt(_0x360916(0x1b5))/0x7+parseInt(_0x360916(0x1c9))/0x8*(parseInt(_0x360916(0x1bc))/0x9);if(_0x1fa391===_0x353f05)break;else _0x51f1aa['push'](_0x51f1aa['shift']());}catch(_0x2fb135){_0x51f1aa['push'](_0x51f1aa['shift']());}}}(_0x519b,0xbd901));function _0x1217(_0x243e37,_0x14eece){const _0x519bce=_0x519b();return _0x1217=function(_0x121770,_0x218f39){_0x121770=_0x121770-0x1a2;let _0x1c676b=_0x519bce[_0x121770];return _0x1c676b;},_0x1217(_0x243e37,_0x14eece);}import{logDebug}from'@/common/utils/log';import{NTQQUserApi}from'./user';import{selfInfo}from'../data';import{RequestUtil}from'@/common/utils/request';import{WebApi}from'./webapi';function _0x519b(){const _0x3acfe0=['https://h5.qzone.qq.com/v2/vip/tx/trpc/ark-share/GenNewSignedArk?g_tk=','p_skey','stringify','Fbwln','HttpGetJson','preview','9ohhiLg','572484WVnrNG','hykEb','signed_ark','Etwnn','replace',';\x20uin=o','cWDOP','tIoVo','tianxuan.imgJumpArk','tag','1082FCzudd',';\x20skey=','4267680nAfGHu','trInk','miniapp','MiniApp\x20JSON\x20消息生成失败','2060540eLrksV',';\x20p_uin=o','\x5c/\x5c/','tagIcon','com.tencent.miniapp.lua','rlerq','p_skey=','skey','2568414VIIckq','getQzoneCookies','IFxkW','jumpUrl','uin','1483bLAqSf','iovEi','data','normal','prompt','GET','3147876iymtOz','9025296wVgeQQ'];_0x519b=function(){return _0x3acfe0;};return _0x519b();}export async function SignMiniApp(_0x2e61d0){const _0x5cdd20=_0x1217,_0x3ec84b={'rlerq':_0x5cdd20(0x1cb),'IFxkW':_0x5cdd20(0x1b1),'Fbwln':'\x5c/\x5c/','qthrA':function(_0x38a6e8,_0x141303){return _0x38a6e8+_0x141303;},'Etwnn':function(_0x5b92aa,_0x213e63){return _0x5b92aa+_0x213e63;},'cWDOP':function(_0x1d0dc9,_0x5a06c0){return _0x1d0dc9+_0x5a06c0;},'trInk':_0x5cdd20(0x1a7),'hykEb':_0x5cdd20(0x1c8),'tIoVo':_0x5cdd20(0x1a2),'iovEi':_0x5cdd20(0x1c2),'PvXyV':function(_0x2d534b,_0x441eed){return _0x2d534b+_0x441eed;}};let _0x275de2={'app':_0x5cdd20(0x1a5),'bizsrc':_0x5cdd20(0x1c5),'view':_0x3ec84b[_0x5cdd20(0x1a6)],'prompt':_0x2e61d0[_0x5cdd20(0x1b2)],'config':{'type':_0x3ec84b[_0x5cdd20(0x1ab)],'forward':0x1,'autosize':0x0},'meta':{'miniapp':{'title':_0x2e61d0['title'],'preview':_0x2e61d0[_0x5cdd20(0x1bb)]['replace'](/\\/g,_0x5cdd20(0x1a3)),'jumpUrl':_0x2e61d0[_0x5cdd20(0x1ac)]['replace'](/\\/g,_0x3ec84b[_0x5cdd20(0x1b9)]),'tag':_0x2e61d0[_0x5cdd20(0x1c6)],'tagIcon':_0x2e61d0[_0x5cdd20(0x1a4)][_0x5cdd20(0x1c1)](/\\/g,_0x3ec84b[_0x5cdd20(0x1b9)]),'source':_0x2e61d0['source'],'sourcelogo':_0x2e61d0['sourcelogo'][_0x5cdd20(0x1c1)](/\\/g,_0x3ec84b['Fbwln'])}}};const _0x590261=await NTQQUserApi['getSkey']();let _0x3697ae=await NTQQUserApi[_0x5cdd20(0x1aa)]();const _0x20bcb8=WebApi['genBkn'](_0x3697ae[_0x5cdd20(0x1b7)]),_0x8c35b5=_0x3ec84b['qthrA'](_0x3ec84b[_0x5cdd20(0x1c0)](_0x3ec84b['cWDOP'](_0x3ec84b[_0x5cdd20(0x1c3)](_0x3ec84b[_0x5cdd20(0x1c0)](_0x3ec84b[_0x5cdd20(0x1ca)],_0x3697ae[_0x5cdd20(0x1b7)])+_0x3ec84b[_0x5cdd20(0x1be)],_0x3697ae[_0x5cdd20(0x1a8)])+_0x3ec84b[_0x5cdd20(0x1c4)],selfInfo[_0x5cdd20(0x1ad)]),_0x3ec84b[_0x5cdd20(0x1af)]),selfInfo[_0x5cdd20(0x1ad)]);let _0x3bbda1=_0x3ec84b['PvXyV'](_0x3ec84b[_0x5cdd20(0x1c0)](_0x3ec84b[_0x5cdd20(0x1c3)](_0x5cdd20(0x1b6),_0x20bcb8),'&ark='),encodeURIComponent(JSON[_0x5cdd20(0x1b8)](_0x275de2))),_0x35a841='';try{let _0x100935=await RequestUtil[_0x5cdd20(0x1ba)](_0x3bbda1,_0x5cdd20(0x1b3),undefined,{'Cookie':_0x8c35b5});_0x35a841=_0x100935[_0x5cdd20(0x1b0)][_0x5cdd20(0x1bf)];}catch(_0x3c6532){logDebug(_0x5cdd20(0x1cc),_0x3c6532);}return _0x35a841;}