(function(e){function t(t){for(var n,i,o=t[0],c=t[1],l=t[2],u=0,f=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(f.length)f.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},s=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/schemaui/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=c;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"176a":function(e,t,a){},"19a3":function(e,t){t.FieldTypes={Object:"object",ObjectId:"objectId",String:"string",Number:"number",Date:"date",Boolean:"boolean"},t.formats={uiDate:"YYYY-MM-DD HH:mm",dateFormat:"YYYY-MM-DD",timeFormat:"HH:mm"}},2712:function(e,t,a){},"358e":function(e,t,a){"use strict";var n=a("176a"),r=a.n(n);r.a},4678:function(e,t,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc10","./be.js":"1fc10","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=s,e.exports=r,r.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("e623"),a("e379"),a("5dc8"),a("37e1");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[e.headless?e._e():a("v-app-bar",{attrs:{app:"","clipped-left":"",color:"orange"}},[a("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!e.drawer}}}),a("span",{staticClass:"title ml-3 mr-5"},[e._v(" Schema UI "),a("span",{staticClass:"font-weight-light"},[e._v("Dashboard")])]),a("v-spacer")],1),e.headless?e._e():a("v-navigation-drawer",{attrs:{app:"",clipped:"",color:"grey lighten-4"},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{staticClass:"grey lighten-4",attrs:{rounded:""}},[a("v-subheader",[e._v("COLLECTIONS")]),a("v-list-item-group",{attrs:{"active-class":"active"}},e._l(e.collections,(function(t){return a("v-list-item",{key:t.name,class:{active:e.$route.params&&t.name===e.$route.params.collection},attrs:{link:"",to:"/collection/"+t.name}},[a("v-list-item-action",[a("v-icon",[e._v("mdi-chevron-right")])],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"grey--text"},[e._v(" "+e._s(e._.startCase(t.name))+" ")])],1)],1)})),1)],1),a("v-spacer"),a("div",{staticClass:"credit"},[a("a",{attrs:{href:"https://github.com/molaga"}},[e._v(" Made with ♡ by "),a("v-icon",[e._v("mdi-github-circle")]),e._v(" molaga ")],1)])],1),a("v-content",[e.hasCollections?[a("router-view")]:e._e()],2)],1)},s=[],i=(a("b64b"),a("96cf"),a("1da1")),o=(a("d3b7"),"/schemaui/api/");function c(e){if(!0===e.success)return e.data;throw new Error(e.data)}var l={methods:{get:function(e){return fetch(o+e,{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return c(e)}))},post:function(e,t){return fetch(o+e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){return c(e)}))},delete:function(e){return fetch(o+e,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return c(e)}))}}},d=a("2ef0"),u=a.n(d),f={name:"App",mixins:[l],mounted:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.get("collections");case 2:this.collections=e.sent,this.$router.collections=this.collections,this.headless="true"===this.$route.query.headless;case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),computed:{_:function(){return u.a},hasCollections:function(){return Boolean(Object.keys(this.collections).length)}},data:function(){return{loaded:!1,drawer:!0,headless:!0,selectedCollection:"Glossary",collections:{}}}},p=f,m=(a("5c0b"),a("2877")),h=a("6544"),b=a.n(h),v=a("7496"),y=a("40dc"),j=a("5bc1"),g=a("a75b"),k=a("132d"),w=a("8860"),x=a("da13"),_=a("1800"),D=a("5d23"),C=a("1baa"),M=a("f774"),O=a("2fa4"),T=a("e0c7"),I=Object(m["a"])(p,r,s,!1,null,null,null),V=I.exports;b()(I,{VApp:v["a"],VAppBar:y["a"],VAppBarNavIcon:j["a"],VContent:g["a"],VIcon:k["a"],VList:w["a"],VListItem:x["a"],VListItemAction:_["a"],VListItemContent:D["a"],VListItemGroup:C["a"],VListItemTitle:D["b"],VNavigationDrawer:M["a"],VSpacer:O["a"],VSubheader:T["a"]});var F=a("f309");n["a"].use(F["a"]);var $=new F["a"]({}),P=a("8c4f"),S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{cols:"12"}},[a("v-row",{attrs:{align:"center",justify:"center"}},[e.model?a("v-col",{attrs:{xs:"12",sm:"10"}},[a("v-card",[a("v-card-title",[e._v(" "+e._s(e.$route.params.collection)+" "),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"mdi-search",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("v-data-table",{attrs:{headers:e.headers,items:e.items,"footer-props":{"items-per-page-options":[10,50,100,200,500]},"show-expand":"","item-key":"_id","single-expand":!0,expanded:e.expanded,options:e.options,"server-items-length":e.totalItems,loading:e.loading},on:{"update:expanded":function(t){e.expanded=t},"update:options":function(t){e.options=t}},scopedSlots:e._u([{key:"expanded-item",fn:function(t){var n=t.headers,r=t.item;return[r&&r._id?a("td",{staticStyle:{"background-color":"#efefef"},attrs:{colspan:n.length}},[a("document-edit",{attrs:{"allowed-fields":e.model.fields,document:r},on:{documentUpdate:e.onDocumentUpdate,documentDelete:e.onDocumentDelete}})],1):e._e()]}}],null,!1,2597553475)})],1),a("v-btn",{attrs:{color:"blue",dark:"",big:"",fixed:"",bottom:"",right:"",fab:""},on:{click:function(t){e.newDocumentModal=!0}}},[a("v-icon",[e._v("mdi-plus")])],1)],1):e._e(),e.model?e._e():a("v-col",[e._v(" Model not found :( ")])],1),a("v-snackbar",{attrs:{timeout:3e3},model:{value:e.toast.open,callback:function(t){e.$set(e.toast,"open",t)},expression:"toast.open"}},[e._v(" "+e._s(e.toast.message)+" "),a("v-btn",{attrs:{color:"blue",text:""},on:{click:function(t){e.toast.open=!1}}},[e._v(" Close ")])],1),e.model&&e.newDocumentModal?a("v-dialog",{ref:"dateModal",attrs:{width:"70%"},model:{value:e.newDocumentModal,callback:function(t){e.newDocumentModal=t},expression:"newDocumentModal"}},[a("document-edit",{staticClass:"popup-hosting",attrs:{"allowed-fields":e.model.fields,"new-item":!0},on:{documentUpdate:e.onDocumentUpdate}})],1):e._e(),a("v-dialog",{attrs:{width:"290px"},model:{value:e.errorPopup.open,callback:function(t){e.$set(e.errorPopup,"open",t)},expression:"errorPopup.open"}},[a("v-card",[a("v-card-title",{staticClass:"red--text text--darken-4"},[a("v-icon",{staticStyle:{"margin-right":"5px"},attrs:{color:"#B71C1C"}},[e._v("mdi-alert-circle-outline")]),e._v(" Oops... ")],1),a("v-card-text",[e._v(" "+e._s(e.errorPopup.message)+" ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary",type:"button"},on:{click:function(t){e.errorPopup.open=!1}}},[e._v("Got it")])],1)],1)],1)],1)},q=[],z=(a("7db0"),a("c740"),a("a15b"),a("d81d"),a("4e827"),a("a434"),a("ac1f"),a("841c"),a("1276"),a("ade3")),B=a("19a3"),A=a("c1df"),N=a.n(A),R={mixins:[l],data:function(){return{model:null,options:{},loading:!0,errorPopup:{open:!1},expanded:[],toast:{open:!1},newDocumentModal:!1,search:"",totalItems:0,headers:[],items:[],searchTimeut:0}},mounted:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.init();case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),watch:{$route:function(){this.init(),this.fetchResults()},search:function(){return this.searchDebounce()},options:{handler:function(){return this.fetchResults()},deep:!0}},methods:{init:function(){this.search="",this.model=this.$router.collections[this.$route.params.collection]},searchDebounce:function(){var e=this;clearTimeout(this.searchTimeut),this.searchTimeut=setTimeout((function(){e.fetchResults()}),700)},fetchResults:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,a,n,r,s,i,o,c,l,d,f=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.prev=1,t=this.options,a=t.sortBy,n=t.sortDesc,r=t.page,s=t.itemsPerPage,i={search:this.search,itemsPerPage:s,page:r},a.length&&(i.sort=Object(z["a"])({},a[0],n.length&&!0===n[0]?-1:1)),e.next=7,this.post("collections/"+this.$route.params.collection,i);case 7:o=e.sent,c=o.items,l=o.fields,d=o.totalItems,this.totalItems=d,this.items=c.map((function(e){return l.map((function(t){if(B["FieldTypes"].Date===f.model.fields[t].type&&u.a.get(e,t)){var a=u.a.get(e,t);u.a.set(e,t,N()(a).format(B["formats"].uiDate))}})),e})),this.headers=l.map((function(e){var t=e.split(".").map((function(e){return u.a.startCase(e)})).join(" > ");return{value:e,text:t}})),e.next=20;break;case 16:e.prev=16,e.t0=e["catch"](1),this.errorPopup.message=e.t0.message,this.errorPopup.open=!0;case 20:this.loading=!1;case 21:case"end":return e.stop()}}),e,this,[[1,16]])})));function t(){return e.apply(this,arguments)}return t}(),onDocumentUpdate:function(e){var t=this.items.find((function(t){return t._id===e._id}));t?(Object.assign(t,e),this.openToast("Document Successfully Saved!")):(this.newDocumentModal=!1,this.options.page=1,this.search=e._id)},onDocumentDelete:function(e){var t=this.items.findIndex((function(t){return t._id===e}));-1<t&&(this.items.splice(t,1),this.openToast("Document Deleted Successfully!"))},openToast:function(e){this.toast.message=e,this.toast.open=!0}}},E=R,L=(a("358e"),a("8336")),U=a("b0af"),Y=a("99d9"),G=a("62ad"),H=a("a523"),J=a("8fea"),K=a("169a"),Q=a("0fd9b"),W=a("2db4"),X=a("8654"),Z=Object(m["a"])(E,S,q,!1,null,"9a96d808",null),ee=Z.exports;b()(Z,{VBtn:L["a"],VCard:U["a"],VCardActions:Y["a"],VCardText:Y["b"],VCardTitle:Y["c"],VCol:G["a"],VContainer:H["a"],VDataTable:J["a"],VDialog:K["a"],VIcon:k["a"],VRow:Q["a"],VSnackbar:W["a"],VSpacer:O["a"],VTextField:X["a"]}),n["a"].use(P["a"]);var te=new P["a"]({mode:"history",base:"schemaui",routes:[{path:"/collection/:collection",component:ee}]}),ae=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-form",{ref:"editForm",on:{submit:function(t){return t.preventDefault(),e.saveDocument(t)}}},[e.fields&&Object.keys(e.fields).length?a("v-card",{staticClass:"fields-container"},[e.newItem?e._e():a("v-row",[a("v-col",{staticClass:"d-flex justify-end id-label grey--text text--accent-4"},[e._v(" ID: "+e._s(e.item._id)+" ")])],1),a("v-row",[a("v-col",{attrs:{sm:"10",md:"8",lg:"6"}},[e.fields[e.fieldTypes.String]?e._l(e.fields[e.fieldTypes.String],(function(t){return a("dynamic-field",{key:t.key,attrs:{field:t},model:{value:e.item[t.key],callback:function(a){e.$set(e.item,t.key,a)},expression:"item[field.key]"}})})):e._e(),e.fields[e.fieldTypes.Number]?e._l(e.fields[e.fieldTypes.Number],(function(t){return a("dynamic-field",{key:t.key,attrs:{field:t},model:{value:e.item[t.key],callback:function(a){e.$set(e.item,t.key,a)},expression:"item[field.key]"}})})):e._e(),e.fields[e.fieldTypes.ObjectId]?e._l(e.fields[e.fieldTypes.ObjectId],(function(t){return a("dynamic-field",{key:t.key,attrs:{field:t},model:{value:e.item[t.key],callback:function(a){e.$set(e.item,t.key,a)},expression:"item[field.key]"}})})):e._e(),e.fields[e.fieldTypes.Date]?[e._l(e.fields[e.fieldTypes.Date],(function(t,n){return a("v-text-field",{key:t.key,attrs:{outlined:!0,dense:!0,rules:e.requiredField(t.required,t.key),required:t.required,label:e.getFieldName(t.key),"prepend-icon":"mdi-calendar",readonly:""},on:{click:function(a){return e.openDateModal(t.key,n)},focus:function(a){return e.openDateModal(t.key,n)}},model:{value:e.item[t.key],callback:function(a){e.$set(e.item,t.key,a)},expression:"item[field.key]"}})})),a("v-dialog",{ref:"dateModal",attrs:{persistent:"",width:"290px"},model:{value:e.dateModal.open,callback:function(t){e.$set(e.dateModal,"open",t)},expression:"dateModal.open"}},[1===e.dateModal.step?a("v-date-picker",{attrs:{scrollable:""},model:{value:e.dateModal.date,callback:function(t){e.$set(e.dateModal,"date",t)},expression:"dateModal.date"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.dateModal.open=!1}}},[e._v("Cancel")]),a("v-btn",{attrs:{text:"",color:"primary",disabled:!e.dateModal.date},on:{click:function(t){e.dateModal.step=2}}},[e._v("Next")])],1):e._e(),2===e.dateModal.step?a("v-time-picker",{attrs:{format:"24hr","full-width":""},model:{value:e.dateModal.time,callback:function(t){e.$set(e.dateModal,"time",t)},expression:"dateModal.time"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.dateModal.step=1}}},[e._v("Back")]),a("v-btn",{attrs:{text:"",color:"primary",disabled:!e.dateModal.time},on:{click:function(t){return e.saveDateModal()}}},[e._v("OK")])],1):e._e()],1)]:e._e(),e.fields[e.fieldTypes.Boolean]?e._l(e.fields[e.fieldTypes.Boolean],(function(t){return a("dynamic-field",{key:t.key,attrs:{field:t},model:{value:e.item[t.key],callback:function(a){e.$set(e.item,t.key,a)},expression:"item[field.key]"}})})):e._e()],2)],1),a("v-card-actions",[a("v-spacer"),e.newItem?a("v-btn",{attrs:{raised:"",color:"primary",loading:e.loading,disabled:e.loading,type:"submit"}},[e._v("Create new Document")]):e._e(),e.newItem?e._e():[a("v-btn",{attrs:{text:"",color:"#f00",disabled:e.loading,type:"button"},on:{click:function(t){e.openDeleteConfirm=!0}}},[e._v("Delete")]),a("v-btn",{attrs:{raised:"",color:"primary",loading:e.loading,disabled:e.loading,type:"submit"}},[e._v("Save Changes")])]],2),a("v-dialog",{ref:"openDeleteConfirm",attrs:{width:"290px"},model:{value:e.openDeleteConfirm,callback:function(t){e.openDeleteConfirm=t},expression:"openDeleteConfirm"}},[a("v-card",[a("v-card-title",[e._v("Are you sure?")]),a("v-card-text",[e._v(" You're about to delete this document, proceed with this action? ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary",type:"button",disabled:e.loading},on:{click:function(t){return e.deleteItem()}}},[e._v("Sure, DO IT!")])],1)],1)],1),a("v-dialog",{attrs:{width:"290px"},model:{value:e.errorPopup.open,callback:function(t){e.$set(e.errorPopup,"open",t)},expression:"errorPopup.open"}},[a("v-card",[a("v-card-title",{staticClass:"red--text text--darken-4"},[a("v-icon",{staticStyle:{"margin-right":"5px"},attrs:{color:"#B71C1C"}},[e._v("mdi-alert-circle-outline")]),e._v(" Oops... ")],1),a("v-card-text",[e._v(" "+e._s(e.errorPopup.message)+" ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary",type:"button"},on:{click:function(t){e.errorPopup.open=!1}}},[e._v("Got it")])],1)],1)],1)],1):e._e(),!1===e.loaded?a("v-progress-circular",{attrs:{size:50,color:"primary",indeterminate:""}}):e._e()],1)],1)},ne=[],re=(a("99af"),a("498a"),{methods:{getFieldName:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.split(".").map((function(e){return u.a.startCase(e)})).join(" > ")}}}),se={mixins:[l,re],props:["allowedFields","document","newItem"],data:function(){return{fieldTypes:B["FieldTypes"],loaded:!1,loading:!1,openDeleteConfirm:!1,errorPopup:{open:!1},fields:{},item:{},dateModal:{}}},mounted:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.init();case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),computed:{_:function(){return u.a}},methods:{requiredField:function(e,t){return e?[function(e){return!!e||"Missing "+u.a.startCase(t)},function(e){return Boolean("string"===typeof e&&e.trim().length)||"Invalid "+u.a.startCase(t)}]:[]},parseModelFromDb:function(e){for(var t={},a=Object.keys(this.allowedFields),n=0,r=a;n<r.length;n++){var s=r[n];if(u.a.has(e,s)){var i=u.a.get(e,s),o=u.a.get(this.allowedFields,s);B["FieldTypes"].Date===o.type&&i&&i.length?t[s]=N()(i).format(B["formats"].uiDate):t[s]=i}}return t},formatModelToDb:function(e){for(var t={},a=Object.keys(this.allowedFields),n=0,r=a;n<r.length;n++){var s=r[n];if(e.hasOwnProperty(s)){var i=u.a.get(this.allowedFields,s);B["FieldTypes"].Date===i.type&&e[s]&&e[s].length?u.a.set(t,s,N()(e[s],B["formats"].uiDate).toISOString()):u.a.set(t,s,e[s])}}return t},init:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.newItem){e.next=7;break}return e.next=3,this.get("collections/".concat(this.$route.params.collection,"/initial"));case 3:t=e.sent,this.item=this.parseModelFromDb(t),e.next=11;break;case 7:return e.next=9,this.get("collections/".concat(this.$route.params.collection,"/").concat(this.document._id));case 9:a=e.sent,this.item=this.parseModelFromDb(a);case 11:this.fields=u.a.groupBy(this.allowedFields,"type"),this.loaded=!0;case 13:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),saveDateModal:function(){this.item[this.dateModal.key]="".concat(this.dateModal.date," ").concat(this.dateModal.time),this.dateModal={}},openDateModal:function(e){if(this.dateModal={key:e,step:1,open:!0},this.item[e]&&this.item[e].length){var t=N()(this.item[e],B["formats"].uiDate);this.dateModal.date=t.format(B["formats"].dateFormat),this.dateModal.time=t.format(B["formats"].timeFormat)}},saveDocument:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,a,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=this.$refs.editForm.validate(),t){e.next=3;break}return e.abrupt("return");case 3:if(!0!==this.loading){e.next=5;break}return e.abrupt("return");case 5:return this.loading=!0,e.prev=6,a=u.a.cloneDeep(this.item),n=this.formatModelToDb(a),e.next=11,this.post("collections/".concat(this.$route.params.collection,"/save"),n);case 11:r=e.sent,this.newItem?this.$emit("documentUpdate",{_id:r._id}):this.$emit("documentUpdate",a),e.next=19;break;case 15:e.prev=15,e.t0=e["catch"](6),this.errorPopup.message=e.t0.message,this.errorPopup.open=!0;case 19:this.loading=!1;case 20:case"end":return e.stop()}}),e,this,[[6,15]])})));function t(){return e.apply(this,arguments)}return t}(),deleteItem:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!0!==this.loading){e.next=2;break}return e.abrupt("return");case 2:return this.loading=!0,e.prev=3,t=this.document._id,e.next=7,this.delete("collections/".concat(this.$route.params.collection,"/").concat(t));case 7:this.$emit("documentDelete",t),this.openDeleteConfirm=!1,e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](3),this.errorPopup.message=e.t0.message,this.errorPopup.open=!0;case 15:this.loading=!1;case 16:case"end":return e.stop()}}),e,this,[[3,11]])})));function t(){return e.apply(this,arguments)}return t}()},watch:{document:function(){this.loaded=!1,this.fields={},this.item={},this.init()}}},ie=se,oe=(a("953e"),a("2e4b")),ce=a("4bd4"),le=a("490a"),de=a("c964"),ue=Object(m["a"])(ie,ae,ne,!1,null,"8f814988",null),fe=ue.exports;b()(ue,{VBtn:L["a"],VCard:U["a"],VCardActions:Y["a"],VCardText:Y["b"],VCardTitle:Y["c"],VCol:G["a"],VDatePicker:oe["a"],VDialog:K["a"],VForm:ce["a"],VIcon:k["a"],VProgressCircular:le["a"],VRow:Q["a"],VSpacer:O["a"],VTextField:X["a"],VTimePicker:de["b"]});a("4de4"),a("e25e");var pe,me,he=a("3835"),be=a("2b5d"),ve=a("b974"),ye=a("a844"),je=a("b73d"),ge={props:["value"],mixins:[re],computed:{_:function(){return u.a}},methods:{requiredField:function(e,t){return e?[function(e){return!!e||"Missing "+u.a.startCase(t)},function(e){return Boolean("string"===typeof e&&e.trim().length)||"Invalid "+u.a.startCase(t)}]:[]},requiredNumber:function(e,t){return e?[function(e){return"undefined"!==typeof e||!!e||"Missing "+u.a.startCase(t)},function(e){return Boolean("number"===typeof e)||"Invalid "+u.a.startCase(t)}]:[]},requiredFieldArray:function(e,t){return e?[function(e){return Array.isArray(e)&&Boolean(e.length)||"Missing "+u.a.startCase(t)},function(e){return Array.isArray(e)&&0===e.filter((function(e){return 0===e.trim().length})).length||"Invalid "+u.a.startCase(t)}]:[]},requiredObjectId:function(e,t){return e?[function(e){return!!e||"Missing "+u.a.startCase(t)},function(e){return Boolean("string"===typeof e&&/^[a-z0-9]{24}$/.test(e))||"Invalid "+u.a.startCase(t)}]:[]},requiredObjectIdArray:function(e,t){return e?[function(e){return Array.isArray(e)&&Boolean(e.length)||"Missing "+u.a.startCase(t)},function(e){return Array.isArray(e)&&0===e.filter((function(e){return!1===/^[a-z0-9]{24}$/.test(e)})).length||"Invalid "+u.a.startCase(t)}]:[]}},render:function(e){var t=this,a=t.$attrs.field,n=c(),r=Object(he["a"])(n,2),s=r[0],i=r[1];if("_id"!==a.key)return e(s,{props:i,on:{input:function(e){return t.$emit("input",o(e))},change:function(e){B["FieldTypes"].Boolean===a.type&&t.$emit("input",Boolean(e))}}});function o(e){return a.type===B["FieldTypes"].Number&&!1===isNaN(parseInt(e))?parseInt(e):e}function c(){var e=X["a"],n={value:t.value,placeholder:t.getFieldName(a.key),label:t.getFieldName(a.key),outlined:!0,required:a.required,dense:!0,rules:t.requiredField(a.required,a.key)},r=a.hasOwnProperty("enum");switch(a.type){case B["FieldTypes"].String:a.multi||!0===r?(e=a.multi?be["a"]:ve["a"],n.multiple=a.multi,n.chips=a.multi,n.rules=a.multi?t.requiredFieldArray(a.required,a.key):t.requiredField(a.required,a.key),!0===r&&(e=ve["a"],n.items=a.enum,n.clearable=!0)):!0===a.textarea&&(e=ye["a"],n["auto-grow"]=!0);break;case B["FieldTypes"].ObjectId:a.multi?(e=be["a"],n.multiple=!0,n.chips=!0,n.rules=t.requiredObjectIdArray(a.required,a.key)):n.rules=t.requiredObjectId(a.required,a.key);break;case B["FieldTypes"].Number:e=X["a"],n.type=a.type,n.rules=t.requiredNumber(a.required,a.key);break;case B["FieldTypes"].Boolean:e=je["a"],n["input-value"]=t.value,delete n.value,delete n.required,delete n.rules;break;default:throw new Error("Couldn't find any type for ".concat(a.key))}return[e,n]}}},ke=ge,we=Object(m["a"])(ke,pe,me,!1,null,null,null),xe=we.exports;n["a"].config.productionTip=!1,n["a"].component("document-edit",fe),n["a"].component("dynamic-field",xe),new n["a"]({vuetify:$,router:te,render:function(e){return e(V)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var n=a("7694"),r=a.n(n);r.a},7694:function(e,t,a){},"953e":function(e,t,a){"use strict";var n=a("2712"),r=a.n(n);r.a}});