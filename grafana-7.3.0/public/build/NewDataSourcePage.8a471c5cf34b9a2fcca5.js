(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"5BCB":function(e,t,n){"use strict";var r=n("ZFWI"),a=n("NXk7"),i=n("WnbS"),o=n("3SGO"),c=n("HUMP"),u=n("okuo"),s=n("Vw/f"),l=n("FFN/"),d=n("Obii");function f(e){var t=[{id:"tsdb",title:"Time series databases",plugins:[]},{id:"logging",title:"Logging & document databases",plugins:[]},{id:"tracing",title:"Distributed tracing",plugins:[]},{id:"sql",title:"SQL",plugins:[]},{id:"cloud",title:"Cloud",plugins:[]},{id:"enterprise",title:"Enterprise plugins",plugins:[]},{id:"iot",title:"Industrial & IoT",plugins:[]},{id:"other",title:"Others",plugins:[]}].filter((function(e){return e})),n={},r={},a=[g({id:"grafana-splunk-datasource",name:"Splunk",description:"Visualize & explore Splunk logs",imgUrl:"public/img/plugins/splunk_logo_128.png"}),g({id:"grafana-oracle-datasource",name:"Oracle",description:"Visualize & explore Oracle SQL",imgUrl:"public/img/plugins/oracle.png"}),g({id:"grafana-dynatrace-datasource",name:"Dynatrace",description:"Visualize & explore Dynatrace data",imgUrl:"public/img/plugins/dynatrace.png"}),g({id:"grafana-servicenow-datasource",description:"ServiceNow integration & data source",name:"ServiceNow",imgUrl:"public/img/plugins/servicenow.svg"}),g({id:"grafana-datadog-datasource",description:"DataDog integration & data source",name:"DataDog",imgUrl:"public/img/plugins/datadog.png"}),g({id:"grafana-newrelic-datasource",description:"New Relic integration & data source",name:"New Relic",imgUrl:"public/img/plugins/newrelic.svg"}),g({id:"grafana-mongodb-datasource",description:"MongoDB integration & data source",name:"MongoDB",imgUrl:"public/img/plugins/mongodb.svg"}),g({id:"grafana-snowflake-datasource",description:"Snowflake integration & data source",name:"Snowflake",imgUrl:"public/img/plugins/snowflake.svg"}),g({id:"grafana-wavefront-datasource",description:"Wavefront integration & data source",name:"Wavefront",imgUrl:"public/img/plugins/wavefront.svg"}),g({id:"dlopes7-appdynamics-datasource",description:"AppDynamics integration & data source",name:"AppDynamics",imgUrl:"public/img/plugins/appdynamics.svg"})],i=!0,o=!1,c=void 0;try{for(var u,s=t[Symbol.iterator]();!(i=(u=s.next()).done);i=!0){var l=u.value;n[l.id]=l}}catch(e){o=!0,c=e}finally{try{i||null==s.return||s.return()}finally{if(o)throw c}}var f=!0,m=!1,v=void 0;try{for(var h,b=function(){var e=h.value;if((e.enterprise||a.find((function(t){return t.id===e.id})))&&(e.category="enterprise"),e.info.links){var i=!0,o=!1,c=void 0;try{for(var u,s=e.info.links[Symbol.iterator]();!(i=(u=s.next()).done);i=!0){u.value.name="Learn more"}}catch(e){o=!0,c=e}finally{try{i||null==s.return||s.return()}finally{if(o)throw c}}}(t.find((function(t){return t.id===e.category}))||n.other).plugins.push(e),r[e.id]=e},y=e[Symbol.iterator]();!(f=(h=y.next()).done);f=!0)b()}catch(e){m=!0,v=e}finally{try{f||null==y.return||y.return()}finally{if(m)throw v}}var w=!0,S=!1,k=void 0;try{for(var x,O=t[Symbol.iterator]();!(w=(x=O.next()).done);w=!0){var j=x.value;if("cloud"===j.id&&j.plugins.push({id:"gcloud",name:"Grafana Cloud",type:d.PluginType.datasource,module:"phantom",baseUrl:"",info:{description:"Hosted Graphite, Prometheus and Loki",logos:{small:"public/img/grafana_icon.svg",large:"asd"},author:{name:"Grafana Labs"},links:[{url:"https://grafana.com/products/cloud/",name:"Learn more"}],screenshots:[],updated:"2019-05-10",version:"1.0.0"}}),"enterprise"===j.id){var E=!0,D=!1,C=void 0;try{for(var L,P=a[Symbol.iterator]();!(E=(L=P.next()).done);E=!0){var N=L.value;r[N.id]||j.plugins.push(N)}}catch(e){D=!0,C=e}finally{try{E||null==P.return||P.return()}finally{if(D)throw C}}}p(j.plugins)}}catch(e){S=!0,k=e}finally{try{w||null==O.return||O.return()}finally{if(S)throw k}}return t.filter((function(e){return e.plugins.length>0}))}function p(e){var t={prometheus:100,graphite:95,loki:90,mysql:80,jaeger:100,postgres:79,gcloud:-1};e.sort((function(e,n){var r=t[e.id]||0,a=t[n.id]||0;return r>a?-1:r<a?1:e.name>n.name?-1:1}))}function g(e){return{id:e.id,name:e.name,type:d.PluginType.datasource,module:"phantom",baseUrl:"",info:{description:e.description,logos:{small:e.imgUrl,large:e.imgUrl},author:{name:"Grafana Labs"},links:[{url:"https://grafana.com/grafana/plugins/"+e.id,name:"Install now"}],screenshots:[],updated:"2019-05-10",version:"1.0.0"}}}var m=n("frIo");function v(e,t,n,r,a,i,o){try{var c=e[i](o),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,a)}function h(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){v(i,r,a,o,c,"next",e)}function c(e){v(i,r,a,o,c,"throw",e)}o(void 0)}))}}n.d(t,"c",(function(){return b})),n.d(t,"g",(function(){return y})),n.d(t,"f",(function(){return w})),n.d(t,"d",(function(){return S})),n.d(t,"a",(function(){return k})),n.d(t,"e",(function(){return x})),n.d(t,"h",(function(){return O})),n.d(t,"b",(function(){return j}));var b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{loadDataSource:S,getDataSource:m.a,getDataSourceMeta:m.b,importDataSourcePlugin:s.b};return(function(){var n=h(regeneratorRuntime.mark((function n(r,a){var i,o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!isNaN(e)){n.next=3;break}return r(Object(l.g)(new Error("Invalid ID"))),n.abrupt("return");case 3:return n.prev=3,n.next=6,r(t.loadDataSource(e));case 6:if(!a().dataSourceSettings.plugin){n.next=8;break}return n.abrupt("return");case 8:return i=t.getDataSource(a().dataSources,e),o=t.getDataSourceMeta(a().dataSources,i.type),n.next=12,t.importDataSourcePlugin(o);case 12:c=n.sent,r(Object(l.h)(c)),n.next=20;break;case 16:n.prev=16,n.t0=n.catch(3),console.error("Failed to import plugin module",n.t0),r(Object(l.g)(n.t0));case 20:case"end":return n.stop()}}),n,null,[[3,16]])})));return function(e,t){return n.apply(this,arguments)}}())},y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{getDatasourceSrv:i.a,getBackendSrv:a.c};return(function(){var n=h(regeneratorRuntime.mark((function n(r,a){var i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.getDatasourceSrv().get(e);case 2:if((i=n.sent).testDatasource){n.next=5;break}return n.abrupt("return");case 5:r(Object(l.o)()),t.getBackendSrv().withNoBackendCache(h(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.testDatasource();case 3:t=e.sent,r(Object(l.p)(t)),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),n="",n=e.t0.statusText?"HTTP Error "+e.t0.statusText:e.t0.message,r(Object(l.n)({message:n}));case 12:case"end":return e.stop()}}),e,null,[[0,7]])}))));case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}())};function w(){return function(){var e=h(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(a.c)().get("/api/datasources");case 2:n=e.sent,t(Object(l.e)(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function S(e){return function(){var t=h(regeneratorRuntime.mark((function t(n){var r,i,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(a.c)().get("/api/datasources/".concat(e));case 2:return r=t.sent,t.next=5,Object(u.a)(r.type);case 5:return i=t.sent,t.next=8,Object(s.b)(i);case 8:d=t.sent,n(Object(l.a)(r)),n(Object(l.b)(i)),n(Object(o.e)(Object(c.a)(r,d)));case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function k(e){return function(){var t=h(regeneratorRuntime.mark((function t(n,r){var i,c,u;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(w());case 2:return i=r().dataSources.dataSources,c={name:e.name,type:e.id,access:"proxy",isDefault:0===i.length},E(i,c.name)&&(c.name=D(i,c.name)),t.next=7,Object(a.c)().post("/api/datasources",c);case 7:u=t.sent,n(Object(o.d)({path:"/datasources/edit/".concat(u.id)}));case 9:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}function x(){return function(){var e=h(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Object(l.c)()),e.next=3,Object(a.c)().get("/api/plugins",{enabled:1,type:"datasource"});case 3:n=e.sent,r=f(n),t(Object(l.d)({plugins:n,categories:r}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function O(e){return function(){var t=h(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(a.c)().put("/api/datasources/".concat(e.id),e);case 2:return t.next=4,C();case 4:return t.abrupt("return",n(S(e.id)));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function j(){return function(){var e=h(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n().dataSources.dataSource,e.next=3,Object(a.c)().delete("/api/datasources/".concat(r.id));case 3:return e.next=5,C();case 5:t(Object(o.d)({path:"/datasources"}));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}function E(e,t){return e.filter((function(e){return e.name.toLowerCase()===t.toLowerCase()})).length>0}function D(e,t){for(;E(e,t);)t=L(t)?"".concat(N(t)).concat((n=P(t),isNaN(n)?1:n+1)):"".concat(t,"-1");var n;return t}function C(){return Object(a.c)().get("/api/frontend/settings").then((function(e){r.b.datasources=e.datasources,r.b.defaultDatasource=e.defaultDatasource,Object(i.a)().init()}))}function L(e){return e.endsWith("-",e.length-1)}function P(e){return parseInt(e.slice(-1),10)}function N(e){return e.slice(0,e.length-1)}},Fofh:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"getNavModel",(function(){return j}));var r=n("q1tI"),a=n.n(r),i=n("/MKj"),o=n("0cfB"),c=n("kDLi"),u=n("Csm0"),s=n("ZGyg"),l=n("5BCB"),d=n("frIo"),f=n("EKT6"),p=n("FFN/"),g=n("R7n3"),m=n("jcCG"),v=n("xLfX");function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var x=function(e){function t(){var e,n;b(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=w(this,(e=S(t)).call.apply(e,[this].concat(a)))).onDataSourceTypeClicked=function(e){n.props.addDataSource(e)},n.onSearchQueryChange=function(e){n.props.setDataSourceTypeSearchQuery(e)},n.onLearnMoreClick=function(e){e.stopPropagation()},n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.props.loadDataSourcePlugins()}},{key:"renderPlugins",value:function(e){var t=this;return e&&e.length?a.a.createElement(c.List,{items:e,getItemKey:function(e){return e.id.toString()},renderItem:function(e){return a.a.createElement(O,{plugin:e,onClick:function(){return t.onDataSourceTypeClicked(e)},onLearnMoreClick:t.onLearnMoreClick})}}):null}},{key:"renderCategories",value:function(){var e=this,t=this.props.categories;return a.a.createElement(a.a.Fragment,null,t.map((function(t){return a.a.createElement("div",{className:"add-data-source-category",key:t.id},a.a.createElement("div",{className:"add-data-source-category__header"},t.title),e.renderPlugins(t.plugins))})),a.a.createElement("div",{className:"add-data-source-more"},a.a.createElement(c.LinkButton,{variant:"secondary",href:"https://grafana.com/plugins?type=datasource&utm_source=grafana_add_ds",target:"_blank",rel:"noopener"},"Find more data source plugins on grafana.com")))}},{key:"render",value:function(){var e=this.props,t=e.navModel,n=e.isLoading,r=e.searchQuery,i=e.plugins;return a.a.createElement(s.a,{navModel:t},a.a.createElement(s.a.Contents,{isLoading:n},a.a.createElement("div",{className:"page-action-bar"},a.a.createElement(f.a,{value:r,onChange:this.onSearchQueryChange,placeholder:"Filter by name or type"}),a.a.createElement("div",{className:"page-action-bar__spacer"}),a.a.createElement(c.LinkButton,{href:"datasources"},"Cancel")),!r&&a.a.createElement(v.a,null,a.a.createElement(a.a.Fragment,null,a.a.createElement("br",null),a.a.createElement("p",null,"Note that ",a.a.createElement("strong",null,"unsigned front-end datasource plugins")," are still usable, but this is subject to change in the upcoming releases of Grafana"))),a.a.createElement("div",null,r&&this.renderPlugins(i),!r&&this.renderCategories())))}}])&&y(n.prototype,r),i&&y(n,i),t}(r.PureComponent),O=function(e){var t=e.plugin,n=e.onLearnMoreClick,r="phantom"===t.module,i=r?function(){}:e.onClick,o=t.info.links&&t.info.links.length>0?t.info.links[0]:null;return a.a.createElement(m.a,{title:t.name,description:t.info.description,ariaLabel:u.selectors.pages.AddDataSource.dataSourcePlugins(t.name),logoUrl:t.info.logos.small,actions:a.a.createElement(a.a.Fragment,null,o&&a.a.createElement(c.LinkButton,{variant:"secondary",href:"".concat(o.url,"?utm_source=grafana_add_ds"),target:"_blank",rel:"noopener",onClick:n,icon:"external-link-alt"},o.name),!r&&a.a.createElement(c.Button,null,"Select")),labels:!r&&a.a.createElement("div",null,a.a.createElement(g.a,{status:t.signature})),className:r?"add-data-source-item--phantom":"",onClick:i,"aria-label":u.selectors.pages.AddDataSource.dataSourcePlugins(t.name)})};function j(){var e={icon:"database",id:"datasource-new",text:"Add data source",href:"datasources/new",subTitle:"Choose a data source type"};return{main:e,node:e}}var E={addDataSource:l.a,loadDataSourcePlugins:l.e,setDataSourceTypeSearchQuery:p.j};t.default=Object(o.hot)(e)(Object(i.connect)((function(e){return{navModel:j(),plugins:Object(d.c)(e.dataSources),searchQuery:e.dataSources.dataSourceTypeSearchQuery,categories:e.dataSources.categories,isLoading:e.dataSources.isLoadingDataSources}}),E)(x))}.call(this,n("3UD+")(e))},HUMP:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o}));var r=n("Obii"),a=n("ZFWI");function i(e,t){var n=t.meta,r={img:n.info.logos.large,id:"datasource-"+e.id,subTitle:"Type: ".concat(n.name),url:"",text:e.name,breadcrumbs:[{title:"Data Sources",url:"datasources"}],children:[{active:!1,icon:"sliders-v-alt",id:"datasource-settings-".concat(e.id),text:"Settings",url:"datasources/edit/".concat(e.id,"/")}]};if(t.configPages){var i=!0,o=!1,c=void 0;try{for(var u,s=t.configPages[Symbol.iterator]();!(i=(u=s.next()).done);i=!0){var l=u.value;r.children.push({active:!1,text:l.title,icon:l.icon,url:"datasources/edit/".concat(e.id,"/?page=").concat(l.id),id:"datasource-page-".concat(l.id)})}}catch(e){o=!0,c=e}finally{try{i||null==s.return||s.return()}finally{if(o)throw c}}}return n.includes&&void 0!==n.includes.find((function(e){return"dashboard"===e.type}))&&r.children.push({active:!1,icon:"apps",id:"datasource-dashboards-".concat(e.id),text:"Dashboards",url:"datasources/edit/".concat(e.id,"/dashboards")}),a.b.licenseInfo.hasLicense&&(r.children.push({active:!1,icon:"lock",id:"datasource-permissions-".concat(e.id),text:"Permissions",url:"datasources/edit/".concat(e.id,"/permissions")}),r.children.push({active:!1,icon:"info-circle",id:"datasource-insights-".concat(e.id),text:"Insights",url:"datasources/edit/".concat(e.id,"/insights")})),r}function o(e){var t,n=i({access:"",basicAuth:!1,basicAuthUser:"",basicAuthPassword:"",withCredentials:!1,database:"",id:1,isDefault:!1,jsonData:{authType:"credentials",defaultRegion:"eu-west-2"},name:"Loading",orgId:1,password:"",readOnly:!1,type:"Loading",typeLogoUrl:"public/img/icn-datasource.svg",url:"",user:"",secureJsonFields:{}},{meta:{id:"1",type:r.PluginType.datasource,name:"",info:{author:{name:"",url:""},description:"",links:[{name:"",url:""}],logos:{large:"",small:""},screenshots:[],updated:"",version:""},includes:[],module:"",baseUrl:""}}),a=!0,o=!1,c=void 0;try{for(var u,s=n.children[Symbol.iterator]();!(a=(u=s.next()).done);a=!0){var l=u.value;if(l.id.indexOf(e)>0){l.active=!0,t=l;break}}}catch(e){o=!0,c=e}finally{try{a||null==s.return||s.return()}finally{if(o)throw c}}return{main:n,node:t}}},frIo:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"g",(function(){return c})),n.d(t,"f",(function(){return u})),n.d(t,"e",(function(){return s}));var r=function(e){var t=new RegExp(e.searchQuery,"i");return e.dataSources.filter((function(e){return t.test(e.name)||t.test(e.database)||t.test(e.type)}))},a=function(e){var t=new RegExp(e.dataSourceTypeSearchQuery,"i");return e.plugins.filter((function(e){return t.test(e.name)}))},i=function(e,t){return e.dataSource.id===parseInt(t,10)?e.dataSource:{}},o=function(e,t){return e.dataSourceMeta.id===t?e.dataSourceMeta:{}},c=function(e){return e.searchQuery},u=function(e){return e.layoutMode},s=function(e){return e.dataSourcesCount}},jcCG:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("q1tI"),a=n.n(r),i=n("kDDq"),o=function(e){var t=e.logoUrl,n=e.title,r=e.description,o=e.labels,c=e.actions,u=e.onClick,s=e.ariaLabel,l=e.className,d=Object(i.cx)("add-data-source-item",l);return a.a.createElement("div",{className:d,onClick:u,"aria-label":s},t&&a.a.createElement("img",{className:"add-data-source-item-logo",src:t}),a.a.createElement("div",{className:"add-data-source-item-text-wrapper"},a.a.createElement("span",{className:"add-data-source-item-text"},n),r&&a.a.createElement("span",{className:"add-data-source-item-desc"},r),o&&a.a.createElement("div",null,o)),c&&a.a.createElement("div",{className:"add-data-source-item-actions"},c))}},xLfX:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return k}));var r=n("q1tI"),a=n.n(r),i=n("Csm0"),o=n("kDLi"),c=n("R7n3"),u=n("y6t6"),s=n("jGYO"),l=n("aBYM"),d=n.n(l),f=n("/MKj"),p=n("0cfB"),g=n("kDDq");function m(){var e=b(["\n                    margin-top: 0;\n                  "]);return m=function(){return e},e}function v(){var e=b(["\n                margin-top: ",";\n              "]);return v=function(){return e},e}function h(){var e=b(["\n            list-style-type: circle;\n          "]);return h=function(){return e},e}function b(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function y(e,t,n,r,a,i,o){try{var c=e[i](o),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,a)}function w(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){y(i,r,a,o,c,"next",e)}function c(e){y(i,r,a,o,c,"throw",e)}o(void 0)}))}}var S={loadPluginsErrors:s.d},k=Object(p.hot)(e)(Object(f.connect)((function(e){return{errors:Object(u.a)(e.plugins)}}),S)((function(e){var t=e.loadPluginsErrors,n=e.errors,r=e.children,u=Object(o.useTheme)();return d()(w(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:case"end":return e.stop()}}),e)}))),[s.c]).loading||0===n.length?null:a.a.createElement(o.InfoBox,{"aria-label":i.selectors.pages.PluginsList.signatureErrorNotice,severity:"warning",urlTitle:"Read more about plugin signing",url:"https://grafana.com/docs/grafana/latest/plugins/plugin-signature-verification/"},a.a.createElement("div",null,a.a.createElement("p",null,"We have encountered"," ",a.a.createElement("a",{href:"https://grafana.com/docs/grafana/latest/developers/plugins/backend/",target:"_blank"},"data source backend plugins")," ","that are unsigned. Grafana Labs cannot guarantee the integrity of unsigned plugins and recommends using signed plugins only."),"The following plugins are disabled and not shown in the list below:",a.a.createElement(o.List,{items:n,className:Object(g.css)(h()),renderItem:function(e){return a.a.createElement("div",{className:Object(g.css)(v(),u.spacing.sm)},a.a.createElement(o.HorizontalGroup,{spacing:"sm",justify:"flex-start",align:"center"},a.a.createElement("strong",null,e.pluginId),a.a.createElement(c.a,{status:Object(c.c)(e.errorCode),className:Object(g.css)(m())})))}}),r))})))}).call(this,n("3UD+")(e))},y6t6:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return i}));var r=function(e){var t=new RegExp(e.searchQuery,"i");return e.plugins.filter((function(e){return t.test(e.name)||t.test(e.info.author.name)||t.test(e.info.description)}))},a=function(e){return e.errors},i=function(e){return e.searchQuery}}}]);
//# sourceMappingURL=NewDataSourcePage.8a471c5cf34b9a2fcca5.js.map