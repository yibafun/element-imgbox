!function(e){function t(o){if(i[o])return i[o].exports;var n=i[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var i={};t.m=e,t.c=i,t.d=function(e,i,o){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=0)}([function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(1),n={install:function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n||(n=new i);for(var t in e)n.options[t]=e[t];if(!n.$el){var o=n.$mount();document.querySelector("body").appendChild(o.$el)}return n.options.enablePick?n.options.enableUpload?"upload"===n.activeTab&&n.options.enablePick&&(n.activeTab="pick"):n.activeTab="pick":n.activeTab="upload",n.options.multiple||n.handleCancelAll(),n.visible=!0,n}var i=e.extend(o.a),n=void 0;e.elxImgbox=e.prototype.$elxImgbox=t}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(n),t.default=n},function(e,t,i){"use strict";function o(e){i(2)}var n=i(8),l=i(9),a=i(7),s=o,r=a(n.a,l.a,!1,s,null,null);t.a=r.exports},function(e,t,i){var o=i(3);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);i(5)("01448a87",o,!0)},function(e,t,i){t=e.exports=i(4)(void 0),t.push([e.i,'.elx-imgbox .el-dialog{width:720px}.elx-imgbox .el-dialog .el-dialog__header{border-bottom:1px solid #e8e8e8}.elx-imgbox .el-dialog .el-dialog__body{padding:0;background:#f6f6f6}.elx-imgbox .el-tabs .el-tabs__header{margin-right:0;margin-top:5px}.elx-imgbox .el-tabs .el-tabs__header .el-tabs__nav-wrap:after{background:#f6f6f6}.elx-imgbox .el-tabs .el-tabs__item.is-active{background:#fff}.elx-imgbox .el-tabs .el-tabs--left .el-tabs__nav-wrap{padding-top:15px}.elx-imgbox .el-tabs .el-tabs__content{height:560px;background:#fff}.elx-imgbox .elx-foot{padding:15px 0 0 10px}.elx-imgbox .elx-foot .el-button{margin:0 0 0 10px}.elx-imgbox .pick-block{position:relative}.elx-imgbox .pick-block .img-list-loading{position:absolute;z-index:9;left:0;right:0;width:100%;height:450px;background:#fff;text-align:center}.elx-imgbox .pick-block .img-list-loading .el-icon-loading{font-size:50px;color:#409eff;line-height:250px}.elx-imgbox .pick-block .img-list{padding:10px;height:433px}.elx-imgbox .pick-block .img-list .img-item{float:left;margin:10px;width:100px;cursor:pointer;position:relative;font-size:12px}.elx-imgbox .pick-block .img-list .img-item img{width:100px;height:100px;display:block}.elx-imgbox .pick-block .img-list .img-item .title{line-height:24px;height:24px;display:block;overflow:hidden;background:#f6f6f6;padding:0 5px}.elx-imgbox .pick-block .img-list .img-item .label{position:absolute;z-index:9;left:0;bottom:24px;width:100%;height:21px;line-height:21px;text-align:center;color:#fff}.elx-imgbox .pick-block .img-list .img-item .label:after{content:" ";position:absolute;left:0;bottom:0;width:100%;height:21px;background:#000;opacity:.3;z-index:-1}.elx-imgbox .pick-block .img-list .img-item .selected{position:absolute;right:-3px;top:-3px;width:100%;height:100%;border:3px solid #409eff;border-radius:3px;text-align:right}.elx-imgbox .pick-block .img-list .img-item .selected .icon{background:#409eff;text-align:center;height:24px;width:24px;line-height:24px;display:inline-block;font-size:16px;color:#fff;border-radius:0 0 0 3px;position:absolute;right:0;top:0}.elx-imgbox .pick-block .img-list:after{content:" ";display:table;height:0;clear:both;visibility:hidden}.elx-imgbox .pick-block .el-pagination{background:#f9f9f9;position:relative;padding:5px;margin:0 24px 0 20px}.elx-imgbox .pick-block .el-pagination *{background:none}.elx-imgbox .pick-block .el-pagination{text-align:right}.elx-imgbox .upload-block .upload-img-preview{padding:20px}.elx-imgbox .upload-block .upload-img-preview .el-upload--picture-card,.elx-imgbox .upload-block .upload-img-preview .el-upload-list--picture-card .el-upload-list__item{width:90px;height:90px;line-height:98px;background-size:cover;background-position:50% 50%}.elx-imgbox .upload-block .upload-img-preview .el-upload--picture-card .el-upload-list__item-thumbnail,.elx-imgbox .upload-block .upload-img-preview .el-upload-list--picture-card .el-upload-list__item .el-upload-list__item-thumbnail{display:none}.elx-imgbox .upload-block .upload-tip{padding:0 20px;font-size:13px;color:#999}.elx-imgbox .upload-block .upload-title{font-size:16px;color:#666;padding:20px 0 0 20px}.elx-imgbox .el-upload-list--picture-card .el-upload-list__item-status-label i{margin-top:12px;vertical-align:top}',""])},function(e,t){function i(e,t){var i=e[1]||"",n=e[3];if(!n)return i;if(t&&"function"==typeof btoa){var l=o(n);return[i].concat(n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"})).concat([l]).join("\n")}return[i].join("\n")}function o(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o=i(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},n=0;n<this.length;n++){var l=this[n][0];"number"==typeof l&&(o[l]=!0)}for(n=0;n<e.length;n++){var a=e[n];"number"==typeof a[0]&&o[a[0]]||(i&&!a[2]?a[2]=i:i&&(a[2]="("+a[2]+") and ("+i+")"),t.push(a))}},t}},function(e,t,i){function o(e){for(var t=0;t<e.length;t++){var i=e[t],o=p[i.id];if(o){o.refs++;for(var n=0;n<o.parts.length;n++)o.parts[n](i.parts[n]);for(;n<i.parts.length;n++)o.parts.push(l(i.parts[n]));o.parts.length>i.parts.length&&(o.parts.length=i.parts.length)}else{for(var a=[],n=0;n<i.parts.length;n++)a.push(l(i.parts[n]));p[i.id]={id:i.id,refs:1,parts:a}}}}function n(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function l(e){var t,i,o=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(o){if(f)return m;o.parentNode.removeChild(o)}if(b){var l=g++;o=u||(u=n()),t=a.bind(null,o,l,!1),i=a.bind(null,o,l,!0)}else o=n(),t=s.bind(null,o),i=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else i()}}function a(e,t,i,o){var n=i?"":o.css;if(e.styleSheet)e.styleSheet.cssText=h(t,n);else{var l=document.createTextNode(n),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(l,a[t]):e.appendChild(l)}}function s(e,t){var i=t.css,o=t.media,n=t.sourceMap;if(o&&e.setAttribute("media",o),n&&(i+="\n/*# sourceURL="+n.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=i(6),p={},d=r&&(document.head||document.getElementsByTagName("head")[0]),u=null,g=0,f=!1,m=function(){},b="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,i){f=i;var n=c(e,t);return o(n),function(t){for(var i=[],l=0;l<n.length;l++){var a=n[l],s=p[a.id];s.refs--,i.push(s)}t?(n=c(e,t),o(n)):n=[];for(var l=0;l<i.length;l++){var s=i[l];if(0===s.refs){for(var r=0;r<s.parts.length;r++)s.parts[r]();delete p[s.id]}}}};var h=function(){var e=[];return function(t,i){return e[t]=i,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var i=[],o={},n=0;n<t.length;n++){var l=t[n],a=l[0],s=l[1],r=l[2],c=l[3],p={id:e+":"+n,css:s,media:r,sourceMap:c};o[a]?o[a].parts.push(p):i.push(o[a]={id:a,parts:[p]})}return i}},function(e,t){e.exports=function(e,t,i,o,n,l){var a,s=e=e||{},r=typeof e.default;"object"!==r&&"function"!==r||(a=e,s=e.default);var c="function"==typeof s?s.options:s;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),i&&(c.functional=!0),n&&(c._scopeId=n);var p;if(l?(p=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(l)},c._ssrRegister=p):o&&(p=o),p){var d=c.functional,u=d?c.render:c.beforeCreate;d?(c._injectStyles=p,c.render=function(e,t){return p.call(t),u(e,t)}):c.beforeCreate=u?[].concat(u,p):[p]}return{esModule:a,exports:s,options:c}}},function(e,t,i){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.a={name:"ElxImgbox",props:{},data:function(){return{options:{uploadUrl:"",listUrl:"",multiple:!0,limit:10,callback:null,enablePick:!0,enableUpload:!0,maxSize:2},isLoading:!0,visible:!0,activeTab:"pick",selectedImgs:{},selectedImgCount:0,uploadSuccessCount:0,fixThumbInterval:null,imgRes:{list:[],total:0}}},methods:{syncSelectedImgCount:function(){var e=0;$.each(this.selectedImgs,function(t,i){e++}),this.selectedImgCount=e},handleSelectImage:function(e){if("object"===o(this.selectedImgs[e.thumb])){e.selected=!1;var t={};this.options.multiple&&$.each(this.selectedImgs,function(i,o){i!==e.thumb&&(t[i]=o)}),this.selectedImgs=t}else{if(this.options.limit>0&&this.selectedImgCount>=this.options.limit)return void this.$message({message:"最多只能选择"+this.options.limit+"张图片",type:"warning"});this.options.multiple||this.handleCancelAll(),e.selected=!0,this.selectedImgs[e.thumb]=JSON.parse(JSON.stringify(e))}this.syncSelectedImgCount()},loadImgList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=this.options.listUrl;if(t){var i=this.$data;this.isLoading=!0,$(function(){$.getJSON(t,{page:e,rows:15,_r:Math.random()},function(e){var t=[];i.imgRes.total=parseInt(e.total);var n=0;for(var l in e.list){if(++n>15)break;var a=e.list[l];if("string"!=typeof a.thumb){var s="图片数据必须包含'thumb'属性！";throw alert(s),s}"string"!=typeof a.name&&(a.name=a.thumb.substr(a.thumb.lastIndexOf("/")+1)),"string"!=typeof a.label&&(a.label=""),a.selected="object"===o(i.selectedImgs[a.thumb]),t.push(a)}i.imgRes.list=t,i.isLoading=!1})})}},handlePageChange:function(e){this.loadImgList(e)},handleCancelAll:function(){this.selectedImgCount=0,this.selectedImgs={};for(var e in this.imgRes.list)this.imgRes.list[e].selected=!1},handleConfirmSelect:function(){if("function"!=typeof this.options.callback)return ELEMENT.Message.error("请先设置回调函数"),!1;var e=$.Callbacks();e.add(this.options.callback);for(var t in this.selectedImgs){var i=this.selectedImgs[t];e.fire(i)}this.visible=!1,this.reset()},handleConfirmUpload:function(){this.$refs.upload.submit()},handleOnProgress:function(e,t,i){},handleOnChange:function(e,t){!this.options.multiple&&t.length>1&&(t=t.shift()),this.fixPreviewThumb()},fixPreviewThumb:function(){clearInterval(this.fixThumbInterval);var e=(new Date).getTime(),t=this.fixThumbInterval=setInterval(function(){$.each($(".upload-img-preview li"),function(e,t){var i=$(".upload-img-preview li").eq(e);i.find("img").length>0&&i.css("background-image","url("+i.find("img").attr("src")+")")}),(new Date).getTime()-e>=5e3&&clearInterval(t)},500)},beforeUpload:function(e){var t="image/jpeg"===e.type,i="image/png"===e.type,o="image/gif"===e.type,n=e.size/1048576<this.options.maxSize;return t||i||o?!!n||(ELEMENT.Message.error("上传图片大小不能超过 "+this.options.maxSize+"M"),!1):(ELEMENT.Message.error("仅支持 JPG/PNG/GIF 3种格式"),!1)},handleUploadError:function(e,t,i){ELEMENT.Message.info("服务器打了个盹^_^"),console.log(e)},handleUploadSuccess:function(e,t,i){if("function"!=typeof this.options.callback)return ELEMENT.Message.error("请先设置回调函数"),!1;var o=$.Callbacks();o.add(this.options.callback),o.fire(e.uploadfile_response),this.uploadSuccessCount++,i.length===this.uploadSuccessCount&&(this.visible=!1,this.reset())},onExceedTip:function(){ELEMENT.Message.warning("最多只能选择"+this.options.limit+"张图片")},reset:function(){void 0!==this.$refs.upload&&this.$refs.upload.clearFiles(),this.uploadSuccessCount=0,this.handleCancelAll()}},mounted:function(){this.loadImgList()},computed:{}}},function(e,t,i){"use strict";var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{staticClass:"elx-imgbox",attrs:{title:"我的图片",visible:e.visible,id:"elx-imgbox",top:"5vh"},on:{"update:visible":function(t){e.visible=t}}},[i("el-tabs",{attrs:{"tab-position":"left"},model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[e.options.enablePick?i("el-tab-pane",{staticClass:"pick-block",attrs:{label:"选择图片",name:"pick"}},[e.isLoading?i("div",{staticClass:"img-list-loading"},[i("div",{staticClass:"el-icon-loading"})]):e._e(),e._v(" "),i("div",{staticClass:"elx-main img-list"},e._l(e.imgRes.list,function(t,o){return i("div",{staticClass:"img-item",on:{click:function(i){e.handleSelectImage(t)}}},[i("div",{staticClass:"thumb-wp"},[i("img",{attrs:{src:t.thumb,alt:"img.name"}})]),e._v(" "),i("div",{staticClass:"title"},[e._v(e._s(t.name))]),e._v(" "),t.label?i("div",{staticClass:"label"},[e._v(e._s(t.label))]):e._e(),e._v(" "),t.selected?i("span",{staticClass:"selected"},[i("span",{staticClass:"icon el-icon-check"})]):e._e()])})),e._v(" "),i("el-pagination",{attrs:{layout:"total, prev, pager, next",total:e.imgRes.total},on:{"current-change":e.handlePageChange}}),e._v(" "),i("div",{staticClass:"elx-foot"},[i("el-badge",{staticClass:"item",attrs:{value:e.selectedImgCount}},[i("el-button",{attrs:{type:"primary",size:"medium",disabled:0==e.selectedImgCount},on:{click:e.handleConfirmSelect}},[e._v("确定选择")])],1),e._v(" "),e.options.enableUpload?i("el-button",{attrs:{type:"primary",size:"medium",plain:""},on:{click:function(t){e.activeTab="upload"}}},[e._v("上传图片")]):e._e(),e._v(" "),e.options.multiple?i("el-button",{attrs:{type:"text"},on:{click:e.handleCancelAll}},[e._v("取消已选")]):e._e()],1)],1):e._e(),e._v(" "),e.options.enableUpload?i("el-tab-pane",{staticClass:"upload-block",attrs:{label:"上传图片",name:"upload"}},[i("div",{staticClass:"elx-main"},[i("div",{staticClass:"upload-title"},[e._v("请选择本地图片上传：")]),e._v(" "),i("el-upload",{ref:"upload",staticClass:"upload-img-preview",attrs:{"list-type":"picture-card",accept:"image/*",action:e.options.uploadUrl,"auto-upload":!1,multiple:e.options.multiple,limit:e.options.limit,"before-upload":e.beforeUpload,"on-change":e.handleOnChange,"on-progress":e.handleOnProgress,"on-success":e.handleUploadSuccess,"on-error":e.handleUploadError,"on-exceed":e.onExceedTip}},[i("i",{staticClass:"el-icon-plus"})]),e._v(" "),i("div",{staticClass:"upload-tip"},[e._v("仅支持jpg、gif、png三种格式, 大小不超过2 MB")]),e._v(" "),i("div",{staticClass:"elx-foot"},[i("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.handleConfirmUpload}},[e._v("确定上传")])],1)],1)]):e._e()],1)],1)},n=[],l={render:o,staticRenderFns:n};t.a=l}]);
//# sourceMappingURL=imgbox.js.map