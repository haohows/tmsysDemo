(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{227:function(t,e,n){var content=n(259);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("7e9be7dc",content,!0,{sourceMap:!1})},258:function(t,e,n){"use strict";var o=n(227);n.n(o).a},259:function(t,e,n){(e=n(36)(!1)).push([t.i,".card-body.card-body-box[data-v-1effdf37]{height:calc(100vh - 130px);width:calc(100vw - 36px);padding:15px 0;border-bottom:15px solid #fff3cd}.nav-box[data-v-1effdf37]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}.card-nav-bg-c[data-v-1effdf37]{width:100%;background-color:rgba(0,0,0,.055);margin:0 auto}.nav-item[data-v-1effdf37]{width:28%;text-align:center;cursor:pointer}.Mission-Main[data-v-1effdf37]{width:90%;border:2px solid #343a40;margin:0 auto;border-radius:10px;overflow:hidden}.Mission-content[data-v-1effdf37]{width:100%;background-color:#fff;margin:0 auto;height:calc(100vh - 275px);overflow:auto}.theScoreStyle[data-v-1effdf37]{width:90%;margin:0 auto 15px;height:40px;line-height:40px;padding:0 10px;display:-webkit-box;display:flex;color:#000}.cardWrapStyle[data-v-1effdf37]{border-radius:10px;border:2px solid rgba(0,0,0,.6)!important;overflow:hidden}",""]),t.exports=e},306:function(t,e,n){"use strict";n.r(e);n(6),n(4),n(2),n(1),n(5),n(10);var o=n(0),r=n(38);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={layout:"wrap",middleware:"checkGameVersion",data:function(){return{resetNum:0}},computed:d({},Object(r.d)(["pagination","score","extinctVirusNum","systemSet","paw","missionIntroduction"])),methods:d({changePage:function(t){t!=this.pagination&&(this.changePagination(t),this.$router.replace({name:"main-MissionContent-".concat(this.pagination)}))},countToReset:function(){this.resetNum+=1},goToResetPage:function(){12==this.resetNum?(this.$router.replace({name:"main-MissionContent-ResetMission"}),this.resetNum=0):this.resetNum=0}},Object(r.c)(["changePagination","initialPagination"])),mounted:function(){this.initialPagination()}},f=(n(258),n(26)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"card cardWrapStyle"},[n("h5",{staticClass:"card-header text-center bg-dark text-white",on:{click:t.countToReset}},[t._v(t._s(t.missionIntroduction.titleText))]),t._v(" "),n("div",{staticClass:"card-body card-body-box alert-warning"},[n("div",{staticClass:"alert alert-primary theScoreStyle",attrs:{role:"alert"}},[n("div",{staticClass:"ml-5"},[n("fa",{attrs:{icon:["fas","clipboard"]}}),t._v("\n            ： "+t._s(t.score)+"\n          ")],1),t._v(" "),n("div",{staticClass:"ml-auto mr-5"},[n("fa",{attrs:{icon:["fas","paw"]}}),t._v("\n            ： "+t._s(t.paw)+"\n          ")],1)]),t._v(" "),n("div",{staticClass:"Mission-Main"},[n("div",{staticClass:"card-nav-bg-c"},[n("ul",{staticClass:"nav nav-tabs nav-box pt-3"},[n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",class:{active:"MissionClue"==t.pagination},on:{click:function(e){return t.changePage("MissionClue")}}},[t._v("線索")])]),t._v(" "),t.systemSet.propsSys?n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",class:{active:"MissionVirus"==t.pagination},on:{click:function(e){return t.changePage("MissionVirus")}}},[t._v(t._s(t.systemSet.propsText))])]):t._e(),t._v(" "),t.systemSet.promptSys?n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",class:{active:"MissionPrompt"==t.pagination},on:{click:function(e){return t.changePage("MissionPrompt")}}},[t._v(t._s(t.systemSet.promptText))])]):t._e()])]),t._v(" "),n("div",{staticClass:"Mission-content"},[n("nuxt-child")],1)])]),t._v(" "),n("div",{staticClass:"card-footer text-center bg-dark text-white",on:{click:t.goToResetPage}},[t._v(t._s(t.missionIntroduction.footerText))])])])])}),[],!1,null,"1effdf37",null);e.default=component.exports}}]);