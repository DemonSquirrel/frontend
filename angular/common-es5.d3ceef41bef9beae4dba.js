!function(){function i(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function e(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function t(i,t,n){return t&&e(i.prototype,t),n&&e(i,n),i}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{YTzd:function(e,n,o){"use strict";o.d(n,"a",function(){return p});var r=o("fXoL"),s=o("3Pt+"),c=o("quSY"),a=o("tyNb"),l=o("gbi4"),d=o("Avyq"),b=o("yTNM"),f=o("ofXK"),h=o("bTqV");function u(i,e){if(1&i){var t=r.Vb();r.Ub(0,"div",1),r.Ub(1,"div",2),r.Ub(2,"div",3),r.Ub(3,"p",4),r.Qc(4," H\u1ecdc sinh "),r.Ub(5,"b"),r.Qc(6),r.Tb(),r.Qc(7),r.Ub(8,"b"),r.Qc(9),r.Tb(),r.Qc(10,". N\u1ebfu b\u1ea1n v\u1eabn ch\u1eafc ch\u1eafn \u0111\xf3 \u0111\xfang l\xe0 t\xean b\u1ea1n, vui l\xf2ng b\u1ea5m n\xfat "),r.Ub(11,"b"),r.Qc(12,'"B\xe1o gi\xe1o vi\xean"'),r.Tb(),r.Qc(13," \u0111\u1ec3 gi\xe1o vi\xean ki\u1ec3m tra l\u1ea1i. "),r.Tb(),r.Tb(),r.Ub(14,"div",5),r.Ub(15,"button",6),r.bc("click",function(){return r.Cc(t),r.fc().sendRequest()}),r.Qc(16," B\xe1o gi\xe1o vi\xean "),r.Tb(),r.Ub(17,"div",7),r.Ub(18,"button",8),r.bc("click",function(){return r.Cc(t),r.fc().btnCloseDialog(!1)}),r.Qc(19," H\u1ee7y "),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Tb()}if(2&i){var n=r.fc();r.Cb(6),r.Rc(n.studentObj.fullName),r.Cb(1),r.Sc(" \u0111\xe3 \u0111\u01b0\u1ee3c ch\u1ecdn b\u1edfi T\xe0i kho\u1ea3n v\u1edbi ",""!=n.studentObj.last4DigitPhone?"\u0111u\xf4i s\u1ed1 \u0110T - xxx xxx":"v\u1edbi t\xean Zalo - "," "),r.Cb(2),r.Rc(""!=n.studentObj.last4DigitPhone?n.studentObj.last4DigitPhone:n.studentObj.zaloName)}}var p=function(){var e=function(){function e(t,n,o,a,l,d){i(this,e),this.fb=t,this.activeRoute=n,this.router=o,this.commonService=a,this.localize=l,this.apiService=d,this.isMobile=!1,this.closeDialog=new r.o,this.confirmSend=new r.o,this.subscriptions=new c.a,this.formName=new s.k({}),this.status_obj={loading:!1,error:!1,error_obj:{message:""}},this.studentObjs=[],this.studentObj={}}return t(e,[{key:"sendRequest",value:function(){var i=this;this.status_obj={loading:!0,error:!1,error_obj:{message:""}},this.apiService.sendRequestReApprove(this.data.classId,this.data.studentObj.id?this.data.studentObj.id:0).subscribe(function(e){i.confirmSend.emit(1==e.success)})}},{key:"getError",value:function(i){return!(!this.formName.controls[i]||!this.formName.controls[i].errors)&&this.formName.controls[i].errors}},{key:"getErrorType",value:function(i,e){return!!(this.formName.controls[i]&&this.formName.controls[i].errors&&this.formName.controls[i].errors[e])&&this.formName.controls[i].errors[e]}},{key:"getFormObj",value:function(i){var e=i.value;for(var t in e)e[t]=i.get(t).value;return e}},{key:"isEmpty",value:function(i){for(var e in i)if(i.hasOwnProperty(e))return!1;return!0}},{key:"btnCloseDialog",value:function(i){this.closeDialog.emit(i)}},{key:"goToLogin",value:function(){this.commonService.redirectToLoginBackLinkWithFromRegister(""+this.router.url)}},{key:"ngOnChanges",value:function(){this.data.studentObj&&(this.studentObj=this.data.studentObj)}},{key:"ngOnInit",value:function(){this.data.studentObj&&(this.studentObj=this.data.studentObj)}},{key:"ngOnDestroy",value:function(){this.subscriptions.unsubscribe()}}]),e}();return e.\u0275fac=function(i){return new(i||e)(r.Ob(s.g),r.Ob(a.a),r.Ob(a.i),r.Ob(l.a),r.Ob(d.e),r.Ob(b.a))},e.\u0275cmp=r.Ib({type:e,selectors:[["app-send-request"]],inputs:{data:"data",isMobile:"isMobile",back_link:"back_link"},outputs:{closeDialog:"closeDialog",confirmSend:"confirmSend"},features:[r.Ab],decls:1,vars:1,consts:[["class","school-info_bg",4,"ngIf"],[1,"school-info_bg"],[1,"school-info","p-4"],[1,"text-center"],[1,"h5","para_respon","font-weight-normal"],[1,"d-flex","justify-content-center","mt-3"],["mat-raised-button","","color","primary",3,"click"],[1,"azt-block-button",2,"margin-left","15px"],["mat-raised-button","",3,"click"]],template:function(i,e){1&i&&r.Oc(0,u,20,3,"div",0),2&i&&r.mc("ngIf",e.data.isShow)},directives:[f.m,h.b],styles:[".school-info_bg[_ngcontent-%COMP%]{z-index:9990;width:100%;display:flex;left:0;top:0;position:fixed;height:100%;background:rgba(0,0,0,.5607843137254902);min-height:100vh}.school-info[_ngcontent-%COMP%]{z-index:9990;top:50%;left:50%;min-width:30%;transform:translate(-50%,-50%);position:fixed;background:#fff;margin-left:auto;margin-right:auto;box-shadow:0 0 13px 3px rgba(0,0,0,.58)}.close-btn[_ngcontent-%COMP%]{position:absolute;top:-8px;right:-7px;padding:5px 10px;background:#dadada;cursor:pointer;border-radius:20px}.note[_ngcontent-%COMP%]{font-style:italic;font-size:15px;font-weight:600}@media only screen and (max-width:1024px){.school-info[_ngcontent-%COMP%]{width:95%;max-width:95%}}"]}),e}()},wAhq:function(e,n,o){"use strict";o.d(n,"a",function(){return x});var r=o("fXoL"),s=o("quSY"),c=o("BTbT"),a=o("gbi4"),l=o("jhN1"),d=o("ofXK"),b=o("NFeN"),f=o("IkSl");function h(i,e){1&i&&(r.Ub(0,"div",2),r.Ub(1,"div",3),r.Ub(2,"span",4),r.Qc(3,"Loading..."),r.Tb(),r.Tb(),r.Tb())}function u(i,e){if(1&i&&(r.Ub(0,"div"),r.Ub(1,"div",23),r.Ub(2,"audio",24),r.Pb(3,"source",25),r.Qc(4," Your browser does not support the audio element. "),r.Tb(),r.Tb(),r.Tb()),2&i){var t=r.fc(2);r.Cb(3),r.mc("src",t.cdn_link,r.Gc),r.Db("type",t.fileOption.mimes)}}function p(i,e){if(1&i&&(r.Ub(0,"div"),r.Ub(1,"div",26),r.Ub(2,"video",27),r.Pb(3,"source",25),r.Ub(4,"p",28),r.Qc(5," B\u1ea1n \u0111ang s\u1eed d\u1ee5ng tr\xecnh duy\u1ec7t kh\xf4ng h\u1ed7 tr\u1ee3 xem video tr\u1ef1c tuy\u1ebfn. "),r.Tb(),r.Tb(),r.Tb(),r.Tb()),2&i){var t=r.fc(2);r.Cb(2),r.nc("poster",t.video_thumb_url,r.Gc),r.Cb(1),r.mc("src",t.cdn_link,r.Gc),r.Db("type",t.fileOption.mimes)}}function g(i,e){if(1&i&&(r.Ub(0,"div"),r.Pb(1,"iframe",29),r.Tb()),2&i){var t=r.fc(2);r.Cb(1),r.mc("src",t.cdn_link,r.Ec)}}function m(i,e){if(1&i&&(r.Ub(0,"div"),r.Ub(1,"div",26),r.Pb(2,"img",30),r.Tb(),r.Tb()),2&i){var t=r.fc(2);r.Cb(2),r.Db("src",t.cdn_link,r.Gc)}}function v(i,e){if(1&i&&(r.Ub(0,"div"),r.Ub(1,"div",31),r.Pb(2,"iframe",32),r.Tb(),r.Tb()),2&i){var t=r.fc(2);r.Cb(2),r.mc("src",t.cdn_link,r.Ec)}}function _(i,e){if(1&i&&(r.Ub(0,"div"),r.Ub(1,"div",33),r.Pb(2,"pdf-viewer",34),r.Tb(),r.Tb()),2&i){var t=r.fc(2);r.Cb(2),r.mc("src",t.cdn_link)("show-all",!0)}}function w(i,e){if(1&i){var t=r.Vb();r.Ub(0,"div",5),r.Ub(1,"div",6),r.Ub(2,"div",7),r.Ub(3,"div",8),r.Pb(4,"div",9),r.Tb(),r.Ub(5,"div",10),r.Qc(6),r.Tb(),r.Ub(7,"div",11),r.Qc(8),r.Tb(),r.Tb(),r.Ub(9,"div",12),r.Ub(10,"span",13),r.Ub(11,"a",14),r.Ub(12,"mat-icon",15),r.Qc(13,"save_alt"),r.Tb(),r.Tb(),r.Tb(),r.Ub(14,"span",16),r.bc("click",function(){return r.Cc(t),r.fc().btnClosePreview()}),r.Ub(15,"mat-icon",15),r.Qc(16,"close"),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Ub(17,"div",17),r.Ub(18,"div",18),r.Ub(19,"div",19),r.Oc(20,u,5,2,"div",20),r.Oc(21,p,6,3,"div",20),r.Oc(22,g,2,1,"div",20),r.Oc(23,m,3,1,"div",20),r.Oc(24,v,3,1,"div",20),r.Oc(25,_,3,2,"div",20),r.Pb(26,"div",21),r.Tb(),r.Pb(27,"div",22),r.Tb(),r.Tb(),r.Tb()}if(2&i){var n=r.fc();r.Cb(6),r.Rc(n.fileOption.name),r.Cb(2),r.Tc("Dung l\u01b0\u1ee3ng: ",n.file_mb," MB | Lo\u1ea1i : ",n.fileOption.mimes,""),r.Cb(3),r.Db("href",n.root_link,r.Gc)("download",n.fileOption.name),r.Cb(9),r.mc("ngIf","audio"===n.typeFile),r.Cb(1),r.mc("ngIf","video"===n.typeFile),r.Cb(1),r.mc("ngIf","vimeo"===n.typeFile),r.Cb(1),r.mc("ngIf","image"===n.typeFile),r.Cb(1),r.mc("ngIf","officeapps"===n.typeFile),r.Cb(1),r.mc("ngIf","pdf"===n.typeFile)}}var x=function(){var e=function(){function e(t,n,o){i(this,e),this.commonService=t,this.dom=n,this.sanitizer=o,this.closePreview=new r.o,this.subscriptions=new s.a,this.typeFile="",this.cdn_link="",this.root_link="",this.file_mb=0,this.video_thumb_url="",this.isVimeoLink=!1,this.isLoading=!1}return t(e,[{key:"ngOnInit",value:function(){var i=this;this.isLoading=!0,setTimeout(function(){i.initData()},0),this.video_thumb_url="https://cdn.jsdelivr.net/gh/azota889/storage_public/azota_assets/images/video-thumb.png"}},{key:"initData",value:function(){if(this.cdn_link=this.commonService.getMyCdn(this.fileOption.url),this.root_link=this.cdn_link,this.file_mb=this.getFileMB(this.fileOption.size),this.typeFile=Object(c.c)(this.fileOption.mimes),this.isVimeoLink=this.cdn_link.includes("https://player.vimeo.com/")||this.cdn_link.includes("https://mega.nz"),this.isVimeoLink&&(this.typeFile="vimeo"),""!=this.cdn_link)switch(this.typeFile){case"pdf":this.cdn_link=this.cdn_link;break;case"officeapps":this.cdn_link=this.dom.bypassSecurityTrustResourceUrl(this.commonService.getLinkEmbedDocument(this.cdn_link));break;case"video":default:this.cdn_link=this.dom.bypassSecurityTrustResourceUrl(this.cdn_link)}this.isLoading=!1}},{key:"btnClosePreview",value:function(){this.closePreview.emit()}},{key:"getFileMB",value:function(i){return i>0?(i/=1048576).toFixed(2):0}},{key:"reloadFrame",value:function(i){var e=document.getElementById(i);e&&e.parentNode.replaceChild(e.cloneNode(),e)}},{key:"ngOnDestroy",value:function(){this.subscriptions.unsubscribe()}}]),e}();return e.\u0275fac=function(i){return new(i||e)(r.Ob(a.a),r.Ob(l.b),r.Ob(l.b))},e.\u0275cmp=r.Ib({type:e,selectors:[["azt-preview-media"]],inputs:{fileOption:"fileOption"},outputs:{closePreview:"closePreview"},decls:2,vars:2,consts:[["class","loading-block",4,"ngIf"],["class","file-preview",4,"ngIf"],[1,"loading-block"],["role","status",1,"spinner-border","text-secondary",2,"width","5rem","height","5rem"],[1,"sr-only"],[1,"file-preview"],[1,"file-preview__header","flx","flx-sp-btw"],[1,"file-preview__header-left"],["title","",1,"avatar","avatar--xs"],[1,"avatar-img",2,"background-image",'url("https://cdn.jsdelivr.net/gh/azota889/storage_public/azota_assets/images/documents.png")',"background-size","cover"],[1,"file-preview__header__title"],[1,"file-preview__header__send-time"],[1,"file-preview__header-right"],[1,"file-preview__controls-container"],["target","_blank",1,"clickable","download"],[2,"color","rgb(53, 53, 53)","cursor","pointer"],[1,"file-preview__buttons-container",3,"click"],[1,"file-preview__main","flx",2,"overflow-x","auto","flex","1 1 auto"],[1,"file-preview__main-iframe","mx-auto"],[1,"file-preview__notify"],[4,"ngIf"],[1,"tool-hide"],[1,"file-preview__main-comments"],[1,"container-fluid","mt-3"],["controls",""],[3,"src"],[1,"pl-2","pr-2","mt-3"],["id","my-video","playsinline","playsinline","controls","","preload","auto","data-setup","{}",1,"video-js",2,"max-height","calc(100vh - 80px)","width","100%","padding-bottom","1rem",3,"poster"],[1,"vjs-no-js"],["frameborder","0","allowfullscreen","",2,"width","100vw","height","95vh","max-height","calc(100vh - 60px)","padding-bottom","1rem",3,"src"],["alt","Responsive image",1,"img-fluid","image-preview",2,"max-height","calc(100vh - 80px)","padding-bottom","1rem"],[1,"pl-2","pr-2","mp-0"],["frameborder","0",2,"width","100vw","height","95vh","max-height","calc(100vh - 60px)","padding-bottom","1rem",3,"src"],[1,"container-fluid","mp-0"],[2,"width","100vw","height","95vh","max-height","calc(100vh - 60px)","padding-bottom","1rem","display","block",3,"src","show-all"]],template:function(i,e){1&i&&(r.Oc(0,h,4,0,"div",0),r.Oc(1,w,28,11,"div",1)),2&i&&(r.mc("ngIf",e.isLoading),r.Cb(1),r.mc("ngIf",null!=e.fileOption&&!e.isLoading))},directives:[d.m,b.a,f.a],styles:[".file-preview[_ngcontent-%COMP%]{background:#ecf0f5;position:absolute;height:100vh;z-index:9999;flex-direction:column}.file-preview[_ngcontent-%COMP%], .loading-block[_ngcontent-%COMP%]{width:100%;display:flex;left:0;top:0}.loading-block[_ngcontent-%COMP%]{z-index:1000;justify-content:center;align-items:center;position:fixed;height:100%;min-height:100vh;background-color:#ecf0f5}.file-preview__main[_ngcontent-%COMP%]{margin-top:65px;width:100%;min-height:100%;min-width:277px;display:flex;position:fixed;background:#ecf0f5}.file-preview__header[_ngcontent-%COMP%]{padding-top:10px;height:65px;background:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.2);position:fixed;align-items:center;z-index:1;top:0;width:100%}.flx-sp-btw[_ngcontent-%COMP%]{justify-content:space-between}.flx[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap}.file-preview__header-left[_ngcontent-%COMP%]{margin-left:20px;margin-right:10px;margin-bottom:12px;flex:1 1 50px;min-width:0}.file-preview__header-left[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{float:left;margin-right:10px}.avatar--xs[_ngcontent-%COMP%]{width:40px;height:40px;font-size:17px}.avatar[_ngcontent-%COMP%]{position:relative;color:#fff;contain:layout size style}.avatar--xs[_ngcontent-%COMP%] > .avatar-img[_ngcontent-%COMP%]{width:40px;height:40px;background-color:#e5efff}.avatar-img[_ngcontent-%COMP%]{border-radius:100%}.file-preview__header__title[_ngcontent-%COMP%]{font-size:15px;color:#222;font-weight:500}.file-preview__header__send-time[_ngcontent-%COMP%], .file-preview__header__title[_ngcontent-%COMP%]{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.file-preview__header__send-time[_ngcontent-%COMP%]{padding-top:2px;font-size:13px;color:#a0a0a0}.file-preview__header-right[_ngcontent-%COMP%]{color:#fff;margin-right:15px;white-space:nowrap;display:flex}.file-preview__controls-container[_ngcontent-%COMP%]{margin-right:40px}.file-preview__buttons-container[_ngcontent-%COMP%]{display:inline-flex;align-items:center;position:relative}.mp-0[_ngcontent-%COMP%]{margin:0!important;padding:0!important}"]}),e}()}}])}();