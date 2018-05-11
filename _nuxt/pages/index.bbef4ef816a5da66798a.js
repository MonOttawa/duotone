/*! For license information please see LICENSES */
webpackJsonp([0],{"+ptz":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",[e._m(0),a("section",{staticClass:"container"},[a("aside",{staticClass:"sidebar"},[a("h3",[e._v("1. Select a file")]),a("input",{ref:"fileInput",attrs:{type:"file",accept:"image/*"},on:{change:e.previewImage}}),a("h3",[e._v("2. Choose a filter")]),a("div",{staticClass:"scrolling-panel"},[a("a",{staticClass:"gradient-wrapper",attrs:{href:"#"},on:{click:function(t){e.selectedFilter=void 0}}},[a("div",{class:e.selectedFilter?"gradient":"gradient active"},[a("div",{staticClass:"label"},[e._v("No filter")])])]),e._l(e.filters,function(t){return a("a",{key:t.name,staticClass:"gradient-wrapper",attrs:{href:"#"},on:{click:function(a){e.selectedFilter=t.id}}},[a("div",{class:e.selectedFilter===t.id?"gradient active":"gradient",style:"background: linear-gradient(to right, "+t.colours+")"},[a("div",{staticClass:"label"},[e._v(e._s(t.name))])])])})],2),a("h3",[e._v("3. Download the result")]),a("button",{on:{click:e.downloadImage}},[e._v("Download")])]),a("div",{staticClass:"preview"},[a("div",{staticClass:"preview-image",attrs:{id:"svg-container"}},[a("svg",{staticClass:"image-preview",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e._l(e.filters,function(t){return a("filter",{key:t.name,attrs:{id:t.id}},[a("feColorMatrix",{attrs:{type:"matrix",result:"gray",values:"1 0 0 0 0\n                            1 0 0 0 0\n                            1 0 0 0 0\n                            0 0 0 1 0"}}),t.colours?a("feComponentTransfer",{attrs:{"color-interpolation-filters":"sRGB",result:"duotone"}},[a("feFuncR",{attrs:{type:"table",tableValues:t.colours.map(function(t){return e.hexToRgb(t).r/255}).join(" ")}}),a("feFuncG",{attrs:{type:"table",tableValues:t.colours.map(function(t){return e.hexToRgb(t).g/255}).join(" ")}}),a("feFuncB",{attrs:{type:"table",tableValues:t.colours.map(function(t){return e.hexToRgb(t).b/255}).join(" ")}}),a("feFuncA",{attrs:{type:"table",tableValues:"0 1"}})],1):e._e()],1)}),a("image",{key:e.selectedFilter,attrs:{x:"0",y:"0",width:"100%",height:"100%","xlink:href":e.imageData,filter:e.selectedFilter?"url(#"+e.selectedFilter+")":""}})],2)])])]),a("div",{staticClass:"offscreen"},[a("canvas",{attrs:{id:"canvas",width:e.imageWidth,height:e.imageHeight}}),a("div",{attrs:{id:"png-container"}})])])};n._withStripped=!0;var i={render:n,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("header",[t("div",{staticClass:"brand"},[t("span",{staticClass:"duo"},[this._v("duo")]),t("span",{staticClass:"tone"},[this._v("tone")])]),t("div",{staticClass:"attribution"},[this._v("\n        made by "),t("a",{attrs:{href:"https://twitter.com/psyked"}},[this._v("@psyked")])])])}]};t.a=i},"/TYz":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("HLlr"),i=a("+ptz"),r=!1;var o=function(e){r||a("WhWF")},l=a("VU/8")(n.a,i.a,!1,o,null,null);l.options.__file="pages/index.vue",t.default=l.exports},HLlr:function(e,t,a){"use strict";var n=a("lDdF"),i=a.n(n);t.a={components:{},data:function(){return{selectedFilter:"",filters:[{id:"greyscale",name:"Greyscale",colours:["#000000","#ffffff"]},{id:"avocado",name:"Avocado",colours:["#0F7073","#65B993","#E8E280"]},{id:"asparagus",name:"Asparagus",colours:["#26454D","#684C64","#8B9E88","#ADE0AB","#FDF8CC"]},{id:"greenorange",name:"Green / Orange",colours:["#433C45","#39725A","#8AAD63","#FE9A65","#E5E79C"]},{id:"darkblue",name:"Dark Blue",colours:["#01283c","#026192"]},{id:"redblue",name:"Red / Blue",colours:["#011d67","#ef3124"]},{id:"lightblue",name:"Light Blue",colours:["#320a41","#93d7fa"]},{id:"bluedarkorange",name:"Blue / Dark Orange",colours:["#002436","#fc7c51"]},{id:"blueorange",name:"Blue / Orange",colours:["#002436","#f49722"]},{id:"seafoam",name:"Seafoam",colours:["#002436","#2aa88c"]},{id:"bluetan",name:"Blue / Tan",colours:["#002436","#f0efe1"]},{id:"spotify_blue",name:"Spotify Blue",colours:["#4222f1","#9eefe1"]},{id:"spotify_peachy",name:"Spotify Peachy",colours:["#ed3ea4","#fec76c"]},{id:"deeson_green",name:"Deeson Green",colours:["#3eb09b","#edeee9"]},{id:"deeson_blue",name:"Deeson Blue",colours:["#5595d2","#edeee9"]},{id:"deeson_red",name:"Deeson Red",colours:["#ff0046","#edeee9"]}],imageWidth:800,imageHeight:400,imageData:"./preview.jpg"}},methods:{previewImage:function(e){var t=this,a=this.$refs.fileInput;if(a.files&&a.files[0]){var n=new FileReader;n.onload=function(e){t.imageData=e.target.result;var a=new Image;a.src=e.target.result,a.onload=function(){t.imageWidth=a.width,t.imageHeight=a.height}},n.readAsDataURL(a.files[0])}},downloadImage:function(){var e=(new XMLSerializer).serializeToString(document.querySelector(".image-preview")),t=document.getElementById("canvas"),a=t.getContext("2d"),n=self.URL||self.webkitURL||self,r=new Image,o=new Blob([e],{type:"image/svg+xml;charset=utf-8"}),l=n.createObjectURL(o);r.onload=function(){a.drawImage(r,0,0),t.toBlob(function(e){i.a.saveAs(e,"download.png")})},r.src=l},hexToRgb:function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}}}},LGuY:function(e,t){e.exports=function(){throw new Error("define cannot be used indirect")}},WhWF:function(e,t,a){var n=a("eca9");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("8a6070c8",n,!1,{sourceMap:!1})},eca9:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"*{-webkit-box-sizing:border-box;box-sizing:border-box}main{-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;overflow:hidden;width:100vw;height:100vh}header,main{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-direction:normal}header{background:#333;font-family:Nunito,sans-serif;color:#fff;padding:.8em 1em;font-size:1.2em;font-weight:700;-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row}header .duo{color:#fdc66c}header .tone{color:#ed3ea4}header .attribution{font-size:.8em;-webkit-box-flex:1;-ms-flex:1;flex:1;margin-top:.2em;text-align:right}header a,header a:active,header a:hover,header a:link,header a:visited{color:#14bdcc;text-decoration:none}button{font-family:Nunito,sans-serif;color:#fff;font-size:1em;padding:.8em 1em;background:#14bdcc;border-radius:3px;border:none}section{overflow:hidden}aside{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;background:#fff;padding:.8em 1em;color:#333}.preview,aside{display:-webkit-box;display:-ms-flexbox;display:flex}.preview{-webkit-box-flex:1;-ms-flex:1;flex:1;background:#f0f0f0;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;text-align:center;padding:2em;background-image:-moz-linear-gradient(45deg,#e6e6e6 25%,transparent 25%),-moz-linear-gradient(-45deg,#e6e6e6 25%,transparent 25%),-moz-linear-gradient(45deg,transparent 75%,#e6e6e6 75%),-moz-linear-gradient(-45deg,transparent 75%,#e6e6e6 75%);background-image:-webkit-gradient(linear,0 100%,100% 0,color-stop(.25,#e6e6e6),color-stop(.25,transparent)),-webkit-gradient(linear,0 0,100% 100%,color-stop(.25,#e6e6e6),color-stop(.25,transparent)),-webkit-gradient(linear,0 100%,100% 0,color-stop(.75,transparent),color-stop(.75,#e6e6e6)),-webkit-gradient(linear,0 0,100% 100%,color-stop(.75,transparent),color-stop(.75,#e6e6e6));background-size:50px 50px;-webkit-background-size:50px 51px;background-position:0 0,25px 0,25px -25px,0 25px;position:relative}.preview-image{-webkit-box-flex:1;-ms-flex:1;flex:1;font-size:0}.container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-flex:1;-ms-flex:1;flex:1}.image-preview{width:100%;height:100%}.offscreen{visibility:hidden;position:absolute}h3{margin:1em 0 .5em}.gradient-wrapper{text-decoration:none;font-size:.9em;color:#fff}.gradient{width:100%;border:.2em solid #fff;padding:.3em}.gradient .label{background:#000;color:#fff;display:inline-block;padding:0 .2em}.gradient.active{border-color:#000}.gradient.active .label{color:#000;background:#fff}.scrolling-panel{overflow:scroll}",""])},lDdF:function(e,t,a){var n,i=i||function(e){"use strict";if(!(void 0===e||"undefined"!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))){var t=e.document,a=function(){return e.URL||e.webkitURL||e},n=t.createElementNS("http://www.w3.org/1999/xhtml","a"),i="download"in n,r=/constructor/i.test(e.HTMLElement)||e.safari,o=/CriOS\/[\d]+/.test(navigator.userAgent),l=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},s=function(e){setTimeout(function(){"string"==typeof e?a().revokeObjectURL(e):e.remove()},4e4)},c=function(e){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([String.fromCharCode(65279),e],{type:e.type}):e},d=function(t,d,f){f||(t=c(t));var u,p=this,g="application/octet-stream"===t.type,m=function(){!function(e,t,a){for(var n=(t=[].concat(t)).length;n--;){var i=e["on"+t[n]];if("function"==typeof i)try{i.call(e,a||e)}catch(e){l(e)}}}(p,"writestart progress write writeend".split(" "))};if(p.readyState=p.INIT,i)return u=a().createObjectURL(t),void setTimeout(function(){var e,t;n.href=u,n.download=d,e=n,t=new MouseEvent("click"),e.dispatchEvent(t),m(),s(u),p.readyState=p.DONE});!function(){if((o||g&&r)&&e.FileReader){var n=new FileReader;return n.onloadend=function(){var t=o?n.result:n.result.replace(/^data:[^;]*;/,"data:attachment/file;");e.open(t,"_blank")||(e.location.href=t),t=void 0,p.readyState=p.DONE,m()},n.readAsDataURL(t),void(p.readyState=p.INIT)}u||(u=a().createObjectURL(t)),g?e.location.href=u:e.open(u,"_blank")||(e.location.href=u);p.readyState=p.DONE,m(),s(u)}()},f=d.prototype;return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(e,t,a){return t=t||e.name||"download",a||(e=c(e)),navigator.msSaveOrOpenBlob(e,t)}:(f.abort=function(){},f.readyState=f.INIT=0,f.WRITING=1,f.DONE=2,f.error=f.onwritestart=f.onprogress=f.onwrite=f.onabort=f.onerror=f.onwriteend=null,function(e,t,a){return new d(e,t||e.name||"download",a)})}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content);void 0!==e&&e.exports?e.exports.saveAs=i:null!==a("LGuY")&&null!==a("nErl")&&(void 0===(n=function(){return i}.call(t,a,t,e))||(e.exports=n))},nErl:function(e,t){(function(t){e.exports=t}).call(t,{})}});