(function(e){function t(t){for(var s,r,c=t[0],d=t[1],i=t[2],u=0,f=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(s in d)Object.prototype.hasOwnProperty.call(d,s)&&(e[s]=d[s]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],s=!0,c=1;c<n.length;c++){var d=n[c];0!==a[d]&&(s=!1)}s&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var s={},a={app:0},o=[];function r(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=s,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var l=d;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},4678:function(e,t,n){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=o,e.exports=a,a.id="4678"},"5c0b":function(e,t,n){"use strict";n("9c0ce")},"765c":function(e,t,n){"use strict";n("a62e")},"9c0ce":function(e,t,n){},a62e:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("section",{staticClass:"todo-app"},[n("ControlPanel"),n("Searching"),n("Todos")],1)])},o=[],r=(n("202f"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("a-input",{attrs:{placeholder:"Enter todo"},on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.todoCreate()},function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"]))return null;e.value=""}]},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)}),c=[],d=n("b558");s["a"].use(d["a"]);var i=s["a"].extend({name:"ControlPannel",data:function(){return{value:""}},methods:{todoCreate:function(){this.$store.commit("add",this.value),this.value=""}}}),l=i,u=n("2877"),f=Object(u["a"])(l,r,c,!1,null,"613d5698",null),j=f.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("a-input-search",{attrs:{placeholder:"Find todo",allowClear:""},on:{search:function(t){return e.search()}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},p=[];s["a"].use(d["a"]);var m=s["a"].extend({name:"Searching",data:function(){return{value:""}},methods:{search:function(){this.$store.commit("setFilterString",this.value)}}}),h=m,v=Object(u["a"])(h,b,p,!1,null,"d8c05752",null),y=v.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-list",{attrs:{bordered:"","data-source":e.todos}},e._l(e.todos,(function(e){return n("Todo",{key:e.id,attrs:{id:e.id,completed:e.completed,text:e.text}})})),1)},g=[],x=(n("4de4"),n("c975"),n("fe2b")),O=n("5efb"),_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-list-item",{staticClass:"list-item",class:{completed:e.completed}},[n("a-button",{attrs:{slot:"actions",type:"primary",shape:"circle",icon:"edit"},on:{click:function(t){e.editMode=!0}},slot:"actions"}),n("a-button",{attrs:{slot:"actions",type:"danger",icon:"delete"},on:{click:e.confirmDelete},slot:"actions"}),n("a-checkbox",{attrs:{checked:e.completed},on:{change:function(t){return e.todoComplete()}}},[e.editMode?e._e():n("span",[e._v(e._s(e.text))]),e.editMode?n("a-input",{staticClass:"edit-todo",on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.todoCreate()}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}):e._e()],1)],1)},w=[],S=(n("a9e3"),n("bb76")),z=n("ed3b"),C=(n("99af"),n("7db0"),n("13d5"),n("498a"),n("2f62")),E="vue-todos-state",T=function(){try{var e=localStorage.getItem(E);return null===e?[]:JSON.parse(e).todos}catch(t){return[]}},M=function(e){try{var t=JSON.stringify(e);localStorage.setItem(E,t)}catch(n){}};s["a"].use(C["a"]);var P=new C["a"].Store({state:{todos:[],filterString:""},mutations:{initialiseStore:function(e){e.todos=T()},add:function(e,t){var n=e.todos,s=n.reduce((function(e,t){return e<t.id?t.id:e}),0);n.unshift({text:t,id:s+1,completed:!1})},delete:function(e,t){e.todos=e.todos.filter((function(e){return e.id!==t}))},complete:function(e,t){var n=e.todos.find((function(e){return e.id===t.id}));n.completed=t.completed,e.todos=e.todos.filter((function(e){return e.id!==t.id})).concat(n)},updateText:function(e,t){var n=e.todos,s=n.find((function(e){return e.id===t.id}));s.text=t.text},setFilterString:function(e,t){e.filterString=t.trim()}}});s["a"].use(S["a"]),s["a"].use(x["b"]),s["a"].use(d["a"]);var $=s["a"].extend({name:"Todo",data:function(){return{editMode:!1,value:this.text}},props:{id:Number,completed:Boolean,text:String},methods:{todoCreate:function(){this.editMode=!1,P.commit("updateText",{text:this.value,id:this.id})},todoComplete:function(){P.commit("complete",{id:this.id,completed:!this.completed})},confirmDelete:function(){var e=this.id;z["a"].confirm({title:"Do you really want to remove the todo?",onOk:function(){P.commit("delete",e)}})}}}),D=$,N=(n("765c"),Object(u["a"])(D,_,w,!1,null,"a4383730",null)),F=N.exports;s["a"].use(x["b"]),s["a"].use(O["a"]);var J=s["a"].extend({name:"Todos",computed:{todos:function(){var e=P.state,t=e.todos,n=e.filterString;return n?t.filter((function(e){return-1!==e.text.indexOf(n)})):t}},components:{Todo:F}}),q=J,G=Object(u["a"])(q,k,g,!1,null,"14c18dae",null),I=G.exports,U=s["a"].extend({name:"App",components:{ControlPanel:j,Searching:y,Todos:I},store:P,beforeCreate:function(){this.$store.commit("initialiseStore")}});P.subscribe((function(e,t){M({todos:t.todos})}));var A=U,B=(n("5c0b"),Object(u["a"])(A,a,o,!1,null,null,null)),L=B.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(L)}}).$mount("#app")}});
//# sourceMappingURL=app.d9dd6d93.js.map