(function(e){function t(t){for(var r,o,u=t[0],s=t[1],c=t[2],p=0,d=[];p<u.length;p++)o=u[p],i[o]&&d.push(i[o][0]),i[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==i[s]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},i={app:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/vue-note/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),i=n.n(r);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"header"},[n("h4",[n("span",{staticClass:"margin"},[e._v("\n        title:\n        "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],attrs:{type:"text"},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}})]),e._v(" |\n      "),n("span",{staticClass:"margin"},[e._v("id: "+e._s(e.id))]),n("button",{staticClass:"margin",on:{click:e.save}},[e._v(e._s(e.btnLabel))])])]),n("div",{staticClass:"editor-container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.lineNumbers,expression:"lineNumbers"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.lineNumbers)?e._i(e.lineNumbers,null)>-1:e.lineNumbers},on:{change:function(t){var n=e.lineNumbers,r=t.target,i=!!r.checked;if(Array.isArray(n)){var a=null,o=e._i(n,a);r.checked?o<0&&(e.lineNumbers=n.concat([a])):o>-1&&(e.lineNumbers=n.slice(0,o).concat(n.slice(o+1)))}else e.lineNumbers=i}}}),e._v(" Linenumbers\n    "),n("prism-editor",{staticClass:"my-editor",attrs:{language:"js","line-numbers":e.lineNumbers},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1)])},a=[],o=(n("386d"),n("28a5"),n("96cf"),n("3b8d")),u=n("431a"),s=n.n(u),c=n("bc3a"),l=n.n(c),p="https://api.myjson.com/bins",d=function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.a.post(p,t);case 2:return n=e.sent,r=n.data.uri.split("/bins/")[1],e.abrupt("return",r);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.a.get(p+"/"+t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.a.put(p+"/"+n,t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),b={name:"App",components:{PrismEditor:s.a},data:function(){return{btnLabel:"Save",id:"",title:"",code:null,lineNumbers:!0}},watch:{title:function(){this.title.length>0&&(document.title=this.title+" - Vue-Note - ")}},methods:{save:function(){this.id.length>0?m({code:this.code,title:this.title},this.id):d({code:this.code,title:this.title}).then(function(e){document.location.search="?"+e})}},created:function(){var e=this,t=document.location.search;t.length>0?(t=t.substr(1),this.id=t,f(this.id).then(function(n){e.code=n.code,e.title=n.title||t,e.btnLabel="Update"})):this.title="New Note"}},h=b,v=(n("034f"),n("2877")),g=Object(v["a"])(h,i,a,!1,null,null,null),y=g.exports;n("c197"),n("84bf"),n("fdfb");r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(y)}}).$mount("#app")},"64a9":function(e,t,n){}});
//# sourceMappingURL=app.66fb0bda.js.map