(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{QjE0:function(e,t,a){"use strict";var r;a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return n})),a.d(t,"b",(function(){return i})),function(e){e.Password="password",e.BasicAuthPassword="basicAuthPassword"}(r||(r={}));var n=function(e,t){return function(a){a.preventDefault(),e.current[t]=void 0,e.current.secureJsonFields[t]=!1,e.current.secureJsonData=e.current.secureJsonData||{},e.current.secureJsonData[t]=""}},i=function(e,t){return function(a){e.current.secureJsonData=e.current.secureJsonData||{},e.current.secureJsonData[t]=a.currentTarget.value}}},"XXK+":function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return o}));var r=a("LvDl"),n=a.n(r);function i(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s=function e(t){u(this,e),this.type=t.type,t.label?this.label=t.label:this.label=this.type[0].toUpperCase()+this.type.substring(1)+":",this.style=t.style,"function"===this.style?(this.wrapOpen="(",this.wrapClose=")",this.separator=", "):(this.wrapOpen=" ",this.wrapClose=" ",this.separator=" "),this.params=t.params,this.defaultParams=t.defaultParams},o=function(){function e(t,a){if(u(this,e),this.part=t,this.def=a,!this.def)throw{message:"Could not find sql part "+t.type};this.datatype=t.datatype,t.name?(this.name=t.name,this.label=a.label+" "+t.name):(this.name="",this.label=a.label),t.params=t.params||n.a.clone(this.def.defaultParams),this.params=t.params}var t,a,r;return t=e,(a=[{key:"updateParam",value:function(e,t){""===e&&this.def.params[t].optional?this.params.splice(t,1):this.params[t]=e,this.part.params=this.params}}])&&i(t.prototype,a),r&&i(t,r),e}()},"qSU+":function(e,t,a){"use strict";a.r(t);var r=a("LvDl"),n=a.n(r),i=a("F/XL"),u=a("67Y/"),s=a("aGNc"),o=a("9Z1F"),l=a("t8hP");function c(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t,a,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.target=t,this.templateSrv=a,this.scopedVars=r,t.format=t.format||"time_series",t.timeColumn=t.timeColumn||"time",t.metricColumn=t.metricColumn||"none",t.group=t.group||[],t.where=t.where||[{type:"macro",name:"$__timeFilter",params:[]}],t.select=t.select||[[{type:"column",params:["value"]}]],"rawQuery"in this.target||(t.rawQuery="rawSql"in t),this.interpolateQueryStr=this.interpolateQueryStr.bind(this)}var t,a,r;return e.$inject=["target","templateSrv","scopedVars"],t=e,(a=[{key:"unquoteIdentifier",value:function(e){return'"'===e[0]&&'"'===e[e.length-1]?e.substring(1,e.length-1).replace(/""/g,'"'):e}},{key:"quoteIdentifier",value:function(e){return'"'+e.replace(/"/g,'""')+'"'}},{key:"quoteLiteral",value:function(e){return"'"+e.replace(/'/g,"''")+"'"}},{key:"escapeLiteral",value:function(e){return String(e).replace(/'/g,"''")}},{key:"hasTimeGroup",value:function(){return n.a.find(this.target.group,(function(e){return"time"===e.type}))}},{key:"hasMetricColumn",value:function(){return"none"!==this.target.metricColumn}},{key:"interpolateQueryStr",value:function(e,t,a){return t.multi||t.includeAll?"string"==typeof e?this.quoteLiteral(e):n.a.map(e,this.quoteLiteral).join(","):this.escapeLiteral(e)}},{key:"render",value:function(e){var t=this.target;return this.target.rawQuery||"table"in this.target?(t.rawQuery||(t.rawSql=this.buildQuery()),e?this.templateSrv.replace(t.rawSql,this.scopedVars,this.interpolateQueryStr):t.rawSql):""}},{key:"hasUnixEpochTimecolumn",value:function(){return["int","bigint","double"].indexOf(this.target.timeColumnType)>-1}},{key:"buildTimeColumn",value:function(){var e,t,a=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],r=this.hasTimeGroup(),n="$__timeGroup";return r?(t=r.params.length>1&&"none"!==r.params[1]?r.params.join(","):r.params[0],this.hasUnixEpochTimecolumn()&&(n="$__unixEpochGroup"),a&&(n+="Alias"),e=n+"("+this.target.timeColumn+","+t+")"):(e=this.target.timeColumn,a&&(e+=' AS "time"')),e}},{key:"buildMetricColumn",value:function(){return this.hasMetricColumn()?this.target.metricColumn+" AS metric":""}},{key:"buildValueColumns",value:function(){var e="",t=!0,a=!1,r=void 0;try{for(var n,i=this.target.select[Symbol.iterator]();!(t=(n=i.next()).done);t=!0){var u=n.value;e+=",\n  "+this.buildValueColumn(u)}}catch(e){a=!0,r=e}finally{try{t||null==i.return||i.return()}finally{if(a)throw r}}return e}},{key:"buildValueColumn",value:function(e){var t="";t=n.a.find(e,(function(e){return"column"===e.type})).params[0];var a=n.a.find(e,(function(e){return"aggregate"===e.type}));a&&(t=a.params[0]+"("+t+")");var r=n.a.find(e,(function(e){return"alias"===e.type}));return r&&(t+=" AS "+this.quoteIdentifier(r.params[0])),t}},{key:"buildWhereClause",value:function(){var e=this,t="",a=n.a.map(this.target.where,(function(t,a){switch(t.type){case"macro":return t.name+"("+e.target.timeColumn+")";case"expression":return t.params.join(" ")}}));return a.length>0&&(t="\nWHERE\n  "+a.join(" AND\n  ")),t}},{key:"buildGroupClause",value:function(){for(var e="",t="",a=0;a<this.target.group.length;a++){var r=this.target.group[a];a>0&&(t+=", "),"time"===r.type?t+="1":t+=r.params[0]}return t.length&&(e="\nGROUP BY "+t,this.hasMetricColumn()&&(e+=",2")),e}},{key:"buildQuery",value:function(){var e="SELECT";return e+="\n  "+this.buildTimeColumn(),this.hasMetricColumn()&&(e+=",\n  "+this.buildMetricColumn()),e+=this.buildValueColumns(),e+="\nFROM "+this.target.table,e+=this.buildWhereClause(),e+=this.buildGroupClause(),e+="\nORDER BY "+this.buildTimeColumn(!1)}}])&&c(t.prototype,a),r&&c(t,r),e}();function h(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a,r;return t=e,(a=[{key:"processQueryResult",value:function(e){var t=[];if(!e.data.results)return{data:t};for(var a in e.data.results){var r=e.data.results[a];if(r.series){var n=!0,i=!1,u=void 0;try{for(var s,o=r.series[Symbol.iterator]();!(n=(s=o.next()).done);n=!0){var l=s.value;t.push({target:l.name,datapoints:l.points,refId:r.refId,meta:r.meta})}}catch(e){i=!0,u=e}finally{try{n||null==o.return||o.return()}finally{if(i)throw u}}}if(r.tables){var c=!0,m=!1,h=void 0;try{for(var p,d=r.tables[Symbol.iterator]();!(c=(p=d.next()).done);c=!0){var f=p.value;f.type="table",f.refId=r.refId,f.meta=r.meta,t.push(f)}}catch(e){m=!0,h=e}finally{try{c||null==d.return||d.return()}finally{if(m)throw h}}}}return{data:t}}},{key:"parseMetricFindQueryResult",value:function(e,t){if(!t||0===t.data.length||0===t.data.results[e].meta.rowCount)return[];var a=t.data.results[e].tables[0].columns,r=t.data.results[e].tables[0].rows,n=this.findColIndex(a,"__text"),i=this.findColIndex(a,"__value");return 2===a.length&&-1!==n&&-1!==i?this.transformToKeyValueList(r,n,i):this.transformToSimpleList(r)}},{key:"transformToKeyValueList",value:function(e,t,a){for(var r=[],n=0;n<e.length;n++)this.containsKey(r,e[n][t])||r.push({text:e[n][t],value:e[n][a]});return r}},{key:"transformToSimpleList",value:function(e){for(var t=[],a=0;a<e.length;a++)for(var r=0;r<e[a].length;r++){var i=e[a][r];-1===t.indexOf(i)&&t.push(i)}return n.a.map(t,(function(e){return{text:e}}))}},{key:"findColIndex",value:function(e,t){for(var a=0;a<e.length;a++)if(e[a].text===t)return a;return-1}},{key:"containsKey",value:function(e,t){for(var a=0;a<e.length;a++)if(e[a].text===t)return!0;return!1}},{key:"transformAnnotationResponse",value:function(e,t){for(var a=t.data.results[e.annotation.name].tables[0],r=-1,n=-1,i=-1,u=-1,s=0;s<a.columns.length;s++)if("time_sec"===a.columns[s].text||"time"===a.columns[s].text)r=s;else if("timeend"===a.columns[s].text)n=s;else{if("title"===a.columns[s].text)throw{message:"The title column for annotations is deprecated, now only a column named text is returned"};"text"===a.columns[s].text?i=s:"tags"===a.columns[s].text&&(u=s)}if(-1===r)throw{message:"Missing mandatory time column (with time_sec column alias) in annotation query."};for(var o=[],l=0;l<a.rows.length;l++){var c=a.rows[l],m=-1!==n&&c[n]?Math.floor(c[n]):void 0;o.push({annotation:e.annotation,time:Math.floor(c[r]),timeEnd:m,text:c[i]?c[i].toString():"",tags:c[u]?c[u].trim().split(/\s*,\s*/):[]})}return o}}])&&h(t.prototype,a),r&&h(t,r),e}(),d=a("5kRJ"),f=a("NPB1"),y=a("+JjO");function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function g(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function S(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t){var a=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object(d.a)(),i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Object(f.a)();b(this,e),this.templateSrv=r,this.timeSrv=i,this.interpolateVariable=function(e,t){return"string"==typeof e?t.multi||t.includeAll?a.queryModel.quoteLiteral(e):e:"number"==typeof e?e:n.a.map(e,(function(e){return a.queryModel.quoteLiteral(e)})).join(",")},this.name=t.name,this.id=t.id,this.responseParser=new p,this.queryModel=new m({}),this.interval=(t.jsonData||{}).timeInterval||"1m"}var t,a,r;return t=e,(a=[{key:"interpolateVariablesInQueries",value:function(e,t){var a=this,r=e;return e&&e.length>0&&(r=e.map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(Object(a),!0).forEach((function(t){g(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{datasource:a.name,rawSql:a.templateSrv.replace(e.rawSql,t,a.interpolateVariable),rawQuery:!0})}))),r}},{key:"query",value:function(e){var t=this,a=n.a.filter(e.targets,(function(e){return!0!==e.hide})).map((function(a){var r=new m(a,t.templateSrv,e.scopedVars);return{refId:a.refId,intervalMs:e.intervalMs,maxDataPoints:e.maxDataPoints,datasourceId:t.id,rawSql:r.render(t.interpolateVariable),format:a.format}}));return 0===a.length?Object(i.a)({data:[]}):Object(l.getBackendSrv)().fetch({url:"/api/tsdb/query",method:"POST",data:{from:e.range.from.valueOf().toString(),to:e.range.to.valueOf().toString(),queries:a}}).pipe(Object(u.a)(this.responseParser.processQueryResult))}},{key:"annotationQuery",value:function(e){var t=this;if(!e.annotation.rawQuery)return Promise.reject({message:"Query missing in annotation definition"});var a={refId:e.annotation.name,datasourceId:this.id,rawSql:this.templateSrv.replace(e.annotation.rawQuery,e.scopedVars,this.interpolateVariable),format:"table"};return Object(l.getBackendSrv)().fetch({url:"/api/tsdb/query",method:"POST",data:{from:e.range.from.valueOf().toString(),to:e.range.to.valueOf().toString(),queries:[a]}}).pipe(Object(u.a)((function(a){return t.responseParser.transformAnnotationResponse(e,a)}))).toPromise()}},{key:"metricFindQuery",value:function(e,t){var a=this,r="tempvar";t&&t.variable&&t.variable.name&&(r=t.variable.name);var n=this.templateSrv.replace(e,Object(y.d)({query:e,wildcardChar:"%",options:t}),this.interpolateVariable),i={refId:r,datasourceId:this.id,rawSql:n,format:"table"},s=this.timeSrv.timeRange(),o={queries:[i],from:s.from.valueOf().toString(),to:s.to.valueOf().toString()};return t&&t.range&&t.range.from&&(o.from=t.range.from.valueOf().toString()),t&&t.range&&t.range.to&&(o.to=t.range.to.valueOf().toString()),Object(l.getBackendSrv)().fetch({url:"/api/tsdb/query",method:"POST",data:o}).pipe(Object(u.a)((function(e){return a.responseParser.parseMetricFindQueryResult(r,e)}))).toPromise()}},{key:"testDatasource",value:function(){return Object(l.getBackendSrv)().fetch({url:"/api/tsdb/query",method:"POST",data:{from:"5m",to:"now",queries:[{refId:"A",intervalMs:1,maxDataPoints:1,datasourceId:this.id,rawSql:"SELECT 1",format:"table"}]}}).pipe(Object(s.a)({status:"success",message:"Database Connection OK"}),Object(o.a)((function(e){return console.error(e),e.data&&e.data.message?Object(i.a)({status:"error",message:e.data.message}):Object(i.a)({status:"error",message:e.status})}))).toPromise()}},{key:"targetContainsTemplate",value:function(e){var t="";return t=(t=e.rawQuery?e.rawSql:new m(e).buildQuery()).replace("$__",""),this.templateSrv.variableExists(t)}}])&&S(t.prototype,a),r&&S(t,r),e}(),P=a("Xmxp");function C(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.target=t,this.queryModel=a}var t,a,r;return t=e,(a=[{key:"getOperators",value:function(e){switch(e){case"double":case"float":return["=","!=","<","<=",">",">="];case"text":case"tinytext":case"mediumtext":case"longtext":case"varchar":case"char":return["=","!=","<","<=",">",">=","IN","NOT IN","LIKE","NOT LIKE"];default:return["=","!=","<","<=",">",">=","IN","NOT IN"]}}},{key:"quoteIdentAsLiteral",value:function(e){return this.queryModel.quoteLiteral(this.queryModel.unquoteIdentifier(e))}},{key:"findMetricTable",value:function(){return"\n  SELECT\n    table_name as table_name,\n    ( SELECT\n        column_name as column_name\n      FROM information_schema.columns c\n      WHERE\n        c.table_schema = t.table_schema AND\n        c.table_name = t.table_name AND\n        c.data_type IN ('timestamp', 'datetime')\n      ORDER BY ordinal_position LIMIT 1\n    ) AS time_column,\n    ( SELECT\n        column_name AS column_name\n      FROM information_schema.columns c\n      WHERE\n        c.table_schema = t.table_schema AND\n        c.table_name = t.table_name AND\n        c.data_type IN('float', 'int', 'bigint')\n      ORDER BY ordinal_position LIMIT 1\n    ) AS value_column\n  FROM information_schema.tables t\n  WHERE\n    t.table_schema = database() AND\n    EXISTS\n    ( SELECT 1\n      FROM information_schema.columns c\n      WHERE\n        c.table_schema = t.table_schema AND\n        c.table_name = t.table_name AND\n        c.data_type IN ('timestamp', 'datetime')\n    ) AND\n    EXISTS\n    ( SELECT 1\n      FROM information_schema.columns c\n      WHERE\n        c.table_schema = t.table_schema AND\n        c.table_name = t.table_name AND\n        c.data_type IN('float', 'int', 'bigint')\n    )\n  LIMIT 1\n;"}},{key:"buildTableConstraint",value:function(e){var t="";if(e.includes(".")){var a=e.split(".");return t="table_schema = "+this.quoteIdentAsLiteral(a[0]),t+=" AND table_name = "+this.quoteIdentAsLiteral(a[1])}return t="table_schema = database() AND table_name = "+this.quoteIdentAsLiteral(e)}},{key:"buildTableQuery",value:function(){return"SELECT table_name FROM information_schema.tables WHERE table_schema = database() ORDER BY table_name"}},{key:"buildColumnQuery",value:function(e){var t="SELECT column_name FROM information_schema.columns WHERE ";switch(t+=this.buildTableConstraint(this.target.table),e){case"time":t+=" AND data_type IN ('timestamp','datetime','bigint','int','double','float')";break;case"metric":t+=" AND data_type IN ('text','tinytext','mediumtext','longtext','varchar','char')";break;case"value":t+=" AND data_type IN ('bigint','int','smallint','mediumint','tinyint','double','decimal','float')",t+=" AND column_name <> "+this.quoteIdentAsLiteral(this.target.timeColumn);break;case"group":t+=" AND data_type IN ('text','tinytext','mediumtext','longtext','varchar','char')"}return t+=" ORDER BY column_name"}},{key:"buildValueQuery",value:function(e){var t="SELECT DISTINCT QUOTE("+e+")";return t+=" FROM "+this.target.table,t+=" WHERE $__timeFilter("+this.target.timeColumn+")",t+=" ORDER BY 1 LIMIT 100"}},{key:"buildDatatypeQuery",value:function(e){var t="\nSELECT data_type\nFROM information_schema.columns\nWHERE ";return t+=" table_name = "+this.quoteIdentAsLiteral(this.target.table),t+=" AND column_name = "+this.quoteIdentAsLiteral(e)}}])&&C(t.prototype,a),r&&C(t,r),e}(),E=a("LzXI"),x=a("XXK+"),O=[];function k(e){O[e.type]=new x.b(e)}k({type:"column",style:"label",params:[{type:"column",dynamicLookup:!0}],defaultParams:["value"]}),k({type:"expression",style:"expression",label:"Expr:",params:[{name:"left",type:"string",dynamicLookup:!0},{name:"op",type:"string",dynamicLookup:!0},{name:"right",type:"string",dynamicLookup:!0}],defaultParams:["value","=","value"]}),k({type:"macro",style:"label",label:"Macro:",params:[],defaultParams:[]}),k({type:"aggregate",style:"label",params:[{name:"name",type:"string",options:["avg","count","min","max","sum","stddev","variance"]}],defaultParams:["avg"]}),k({type:"alias",style:"label",params:[{name:"name",type:"string",quote:"double"}],defaultParams:["alias"]}),k({type:"time",style:"function",label:"time",params:[{name:"interval",type:"interval",options:["$__interval","1s","10s","1m","5m","10m","15m","1h"]},{name:"fill",type:"string",options:["none","NULL","previous","0"]}],defaultParams:["$__interval","none"]});var T={create:function(e){var t=O[e.type];return t?new x.a(e,t):null}},Q=a("GQ3c"),R=a("Obii");function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var D=function(e){function t(e,a,r,n){var i,u,s;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u=this,s=I(t).call(this,e,a),(i=!s||"object"!==q(s)&&"function"!=typeof s?M(u):s).templateSrv=r,i.uiSegmentSrv=n,i.target=i.target,i.queryModel=new m(i.target,r,i.panel.scopedVars),i.metaBuilder=new _(i.target,i.queryModel),i.updateProjection(),i.formats=[{text:"Time series",value:"time_series"},{text:"Table",value:"table"}],i.target.rawSql||("table"===i.panelCtrl.panel.type?(i.target.format="table",i.target.rawSql="SELECT 1",i.target.rawQuery=!0):(i.target.rawSql="SELECT\n  UNIX_TIMESTAMP(<time_column>) as time_sec,\n  <value column> as value,\n  <series name column> as metric\nFROM <table name>\nWHERE $__timeFilter(time_column)\nORDER BY <time_column> ASC\n",i.datasource.metricFindQuery(i.metaBuilder.findMetricTable()).then((function(e){if(e.length>0){i.target.table=e[0].text;var t=i.uiSegmentSrv.newSegment(i.target.table);i.tableSegment.html=t.html,i.tableSegment.value=t.value,i.target.timeColumn=e[1].text,t=i.uiSegmentSrv.newSegment(i.target.timeColumn),i.timeColumnSegment.html=t.html,i.timeColumnSegment.value=t.value,i.target.timeColumnType="timestamp",i.target.select=[[{type:"column",params:[e[2].text]}]],i.updateProjection(),i.updateRawSqlAndRefresh()}})))),i.target.table?i.tableSegment=n.newSegment(i.target.table):i.tableSegment=n.newSegment({value:"select table",fake:!0}),i.timeColumnSegment=n.newSegment(i.target.timeColumn),i.metricColumnSegment=n.newSegment(i.target.metricColumn),i.buildSelectMenu(),i.whereAdd=i.uiSegmentSrv.newPlusButton(),i.groupAdd=i.uiSegmentSrv.newPlusButton(),i.panelCtrl.events.on(R.PanelEvents.dataReceived,i.onDataReceived.bind(M(i)),e),i.panelCtrl.events.on(R.PanelEvents.dataError,i.onDataError.bind(M(i)),e),i}var a,r,i;return t.$inject=["$scope","$injector","templateSrv","uiSegmentSrv"],function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,e),a=t,(r=[{key:"showQueryInspector",value:function(){Object(l.getLocationSrv)().update({query:{inspect:this.panel.id,inspectTab:"query"},partial:!0})}},{key:"updateRawSqlAndRefresh",value:function(){this.target.rawQuery||(this.target.rawSql=this.queryModel.buildQuery()),this.panelCtrl.refresh()}},{key:"updateProjection",value:function(){this.selectParts=n.a.map(this.target.select,(function(e){return n.a.map(e,T.create).filter((function(e){return e}))})),this.whereParts=n.a.map(this.target.where,T.create).filter((function(e){return e})),this.groupParts=n.a.map(this.target.group,T.create).filter((function(e){return e}))}},{key:"updatePersistedParts",value:function(){this.target.select=n.a.map(this.selectParts,(function(e){return n.a.map(e,(function(e){return{type:e.def.type,datatype:e.datatype,params:e.params}}))})),this.target.where=n.a.map(this.whereParts,(function(e){return{type:e.def.type,datatype:e.datatype,name:e.name,params:e.params}})),this.target.group=n.a.map(this.groupParts,(function(e){return{type:e.def.type,datatype:e.datatype,params:e.params}}))}},{key:"buildSelectMenu",value:function(){this.selectMenu=[],this.selectMenu.push({text:"Aggregate Functions",value:"aggregate",submenu:[{text:"Average",value:"avg"},{text:"Count",value:"count"},{text:"Maximum",value:"max"},{text:"Minimum",value:"min"},{text:"Sum",value:"sum"},{text:"Standard deviation",value:"stddev"},{text:"Variance",value:"variance"}]}),this.selectMenu.push({text:"Alias",value:"alias"}),this.selectMenu.push({text:"Column",value:"column"})}},{key:"toggleEditorMode",value:function(){var e=this;this.target.rawQuery?P.b.emit(Q.CoreEvents.showConfirmModal,{title:"Warning",text2:"Switching to query builder may overwrite your raw SQL.",icon:"exclamation-triangle",yesText:"Switch",onConfirm:function(){e.target.rawQuery=!e.target.rawQuery}}):this.target.rawQuery=!this.target.rawQuery}},{key:"resetPlusButton",value:function(e){var t=this.uiSegmentSrv.newPlusButton();e.html=t.html,e.value=t.value}},{key:"getTableSegments",value:function(){return this.datasource.metricFindQuery(this.metaBuilder.buildTableQuery()).then(this.transformToSegments({})).catch(this.handleQueryError.bind(this))}},{key:"tableChanged",value:function(){var e=this;this.target.table=this.tableSegment.value,this.target.where=[],this.target.group=[],this.updateProjection();var t=this.uiSegmentSrv.newSegment("none");this.metricColumnSegment.html=t.html,this.metricColumnSegment.value=t.value,this.target.metricColumn="none";var a=this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery("time")).then((function(t){if(t.length>0&&!n.a.find(t,(function(t){return t.text===e.target.timeColumn}))){var a=e.uiSegmentSrv.newSegment(t[0].text);e.timeColumnSegment.html=a.html,e.timeColumnSegment.value=a.value}return e.timeColumnChanged(!1)})),r=this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery("value")).then((function(t){t.length>0&&(e.target.select=[[{type:"column",params:[t[0].text]}]],e.updateProjection())}));Promise.all([a,r]).then((function(){e.updateRawSqlAndRefresh()}))}},{key:"getTimeColumnSegments",value:function(){return this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery("time")).then(this.transformToSegments({})).catch(this.handleQueryError.bind(this))}},{key:"timeColumnChanged",value:function(e){var t=this;return this.target.timeColumn=this.timeColumnSegment.value,this.datasource.metricFindQuery(this.metaBuilder.buildDatatypeQuery(this.target.timeColumn)).then((function(a){var r;1===a.length&&(t.target.timeColumnType!==a[0].text&&(t.target.timeColumnType=a[0].text),r=t.queryModel.hasUnixEpochTimecolumn()?T.create({type:"macro",name:"$__unixEpochFilter",params:[]}):T.create({type:"macro",name:"$__timeFilter",params:[]}),t.whereParts.length>=1&&"macro"===t.whereParts[0].def.type?t.whereParts[0]=r:t.whereParts.splice(0,0,r)),t.updatePersistedParts(),!1!==e&&t.updateRawSqlAndRefresh()}))}},{key:"getMetricColumnSegments",value:function(){return this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery("metric")).then(this.transformToSegments({addNone:!0})).catch(this.handleQueryError.bind(this))}},{key:"metricColumnChanged",value:function(){this.target.metricColumn=this.metricColumnSegment.value,this.updateRawSqlAndRefresh()}},{key:"onDataReceived",value:function(e){this.lastQueryError=null}},{key:"onDataError",value:function(e){if(e.data&&e.data.results){var t=e.data.results[this.target.refId];t&&(this.lastQueryError=t.error)}}},{key:"transformToSegments",value:function(e){var t=this;return function(a){var r=n.a.map(a,(function(e){return t.uiSegmentSrv.newSegment({value:e.text,expandable:e.expandable})}));if(e.addTemplateVars){var i=!0,u=!1,s=void 0;try{for(var o,l=t.templateSrv.getVariables()[Symbol.iterator]();!(i=(o=l.next()).done);i=!0){var c=o.value,m=void 0;m="$"+c.name,e.templateQuoter&&!1===c.multi&&(m=e.templateQuoter(m)),r.unshift(t.uiSegmentSrv.newSegment({type:"template",value:m,expandable:!0}))}}catch(e){u=!0,s=e}finally{try{i||null==l.return||l.return()}finally{if(u)throw s}}}return e.addNone&&r.unshift(t.uiSegmentSrv.newSegment({type:"template",value:"none",expandable:!0})),r}}},{key:"findAggregateIndex",value:function(e){return n.a.findIndex(e,(function(e){return"aggregate"===e.def.type||"percentile"===e.def.type}))}},{key:"findWindowIndex",value:function(e){return n.a.findIndex(e,(function(e){return"window"===e.def.type||"moving_window"===e.def.type}))}},{key:"addSelectPart",value:function(e,t,a){var r=t.value;a&&a.type&&(r=a.type);var i=T.create({type:r});a&&(i.params[0]=a.value);var u=!1;switch(r){case"column":var s=n.a.map(e,(function(e){return T.create({type:e.def.type,params:n.a.clone(e.params)})}));this.selectParts.push(s);break;case"percentile":case"aggregate":0===this.target.group.length&&this.addGroup("time","$__interval");var o=this.findAggregateIndex(e);-1!==o?e[o]=i:e.splice(1,0,i),n.a.find(e,(function(e){return"alias"===e.def.type}))||(u=!0);break;case"moving_window":case"window":var l=this.findWindowIndex(e);if(-1!==l)e[l]=i;else{var c=this.findAggregateIndex(e);-1!==c?e.splice(c+1,0,i):e.splice(1,0,i)}n.a.find(e,(function(e){return"alias"===e.def.type}))||(u=!0);break;case"alias":u=!0}u&&(i=T.create({type:"alias",params:[e[0].params[0].replace(/"/g,"")]}),"alias"===e[e.length-1].def.type?e[e.length-1]=i:e.push(i)),this.updatePersistedParts(),this.updateRawSqlAndRefresh()}},{key:"removeSelectPart",value:function(e,t){if("column"===t.def.type){if(this.selectParts.length>1){var a=n.a.indexOf(this.selectParts,e);this.selectParts.splice(a,1)}}else{var r=n.a.indexOf(e,t);e.splice(r,1)}this.updatePersistedParts()}},{key:"handleSelectPartEvent",value:function(e,t,a){switch(a.name){case"get-param-options":switch(t.def.type){case"column":return this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery("value")).then(this.transformToSegments({})).catch(this.handleQueryError.bind(this))}case"part-param-changed":this.updatePersistedParts(),this.updateRawSqlAndRefresh();break;case"action":this.removeSelectPart(e,t),this.updateRawSqlAndRefresh();break;case"get-part-actions":return Promise.resolve([{text:"Remove",value:"remove-part"}])}}},{key:"handleGroupPartEvent",value:function(e,t,a){switch(a.name){case"get-param-options":return this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery()).then(this.transformToSegments({})).catch(this.handleQueryError.bind(this));case"part-param-changed":this.updatePersistedParts(),this.updateRawSqlAndRefresh();break;case"action":this.removeGroup(e,t),this.updateRawSqlAndRefresh();break;case"get-part-actions":return Promise.resolve([{text:"Remove",value:"remove-part"}])}}},{key:"addGroup",value:function(e,t){var a=[t];"time"===e&&(a=["$__interval","none"]);var r=T.create({type:e,params:a});"time"===e?this.groupParts.splice(0,0,r):this.groupParts.push(r);var n=!0,i=!1,u=void 0;try{for(var s,o=this.selectParts[Symbol.iterator]();!(n=(s=o.next()).done);n=!0){var l=s.value;if(!l.some((function(e){return"aggregate"===e.def.type}))){var c=T.create({type:"aggregate",params:["avg"]});if(l.splice(1,0,c),!l.some((function(e){return"alias"===e.def.type}))){var m=T.create({type:"alias",params:[l[0].part.params[0]]});l.push(m)}}}}catch(e){i=!0,u=e}finally{try{n||null==o.return||o.return()}finally{if(i)throw u}}this.updatePersistedParts()}},{key:"removeGroup",value:function(e,t){"time"===e.def.type&&(this.selectParts=n.a.map(this.selectParts,(function(e){return n.a.filter(e,(function(e){return"aggregate"!==e.def.type&&"percentile"!==e.def.type}))}))),this.groupParts.splice(t,1),this.updatePersistedParts()}},{key:"handleWherePartEvent",value:function(e,t,a,r){var n=this;switch(a.name){case"get-param-options":switch(a.param.name){case"left":return this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery()).then(this.transformToSegments({})).catch(this.handleQueryError.bind(this));case"right":return["int","bigint","double","datetime"].indexOf(t.datatype)>-1?Promise.resolve([]):this.datasource.metricFindQuery(this.metaBuilder.buildValueQuery(t.params[0])).then(this.transformToSegments({addTemplateVars:!0,templateQuoter:function(e){return n.queryModel.quoteLiteral(e)}})).catch(this.handleQueryError.bind(this));case"op":return Promise.resolve(this.uiSegmentSrv.newOperators(this.metaBuilder.getOperators(t.datatype)));default:return Promise.resolve([])}case"part-param-changed":this.updatePersistedParts(),this.datasource.metricFindQuery(this.metaBuilder.buildDatatypeQuery(t.params[0])).then((function(e){1===e.length&&(t.datatype=e[0].text)})),this.updateRawSqlAndRefresh();break;case"action":e.splice(r,1),this.updatePersistedParts(),this.updateRawSqlAndRefresh();break;case"get-part-actions":return Promise.resolve([{text:"Remove",value:"remove-part"}])}}},{key:"getWhereOptions",value:function(){var e=[];return this.queryModel.hasUnixEpochTimecolumn()?e.push(this.uiSegmentSrv.newSegment({type:"macro",value:"$__unixEpochFilter"})):e.push(this.uiSegmentSrv.newSegment({type:"macro",value:"$__timeFilter"})),e.push(this.uiSegmentSrv.newSegment({type:"expression",value:"Expression"})),Promise.resolve(e)}},{key:"addWhereAction",value:function(e,t){switch(this.whereAdd.type){case"macro":var a=T.create({type:"macro",name:this.whereAdd.value,params:[]});this.whereParts.length>=1&&"macro"===this.whereParts[0].def.type?this.whereParts[0]=a:this.whereParts.splice(0,0,a);break;default:this.whereParts.push(T.create({type:"expression",params:["value","=","value"]}))}this.updatePersistedParts(),this.resetPlusButton(this.whereAdd),this.updateRawSqlAndRefresh()}},{key:"getGroupOptions",value:function(){var e=this;return this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery("group")).then((function(t){var a=[];e.queryModel.hasTimeGroup()||a.push(e.uiSegmentSrv.newSegment({type:"time",value:"time($__interval,none)"}));var r=!0,n=!1,i=void 0;try{for(var u,s=t[Symbol.iterator]();!(r=(u=s.next()).done);r=!0){var o=u.value;a.push(e.uiSegmentSrv.newSegment({type:"column",value:o.text}))}}catch(e){n=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(n)throw i}}return a})).catch(this.handleQueryError.bind(this))}},{key:"addGroupAction",value:function(){this.groupAdd.value,this.addGroup(this.groupAdd.type,this.groupAdd.value),this.resetPlusButton(this.groupAdd),this.updateRawSqlAndRefresh()}},{key:"handleQueryError",value:function(e){return this.error=e.message||"Failed to issue metric query",[]}}])&&A(a.prototype,r),i&&A(a,i),t}(E.QueryCtrl);D.templateUrl="partials/query.editor.html";var L=a("QjE0");function N(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}a.d(t,"ConfigCtrl",(function(){return F})),a.d(t,"AnnotationsQueryCtrl",(function(){return B})),a.d(t,"MysqlDatasource",(function(){return w})),a.d(t,"Datasource",(function(){return w})),a.d(t,"QueryCtrl",(function(){return D}));var F=function e(){N(this,e),this.onPasswordReset=Object(L.c)(this,L.a.Password),this.onPasswordChange=Object(L.b)(this,L.a.Password)};F.templateUrl="partials/config.html";var B=function e(){N(this,e),this.annotation.rawQuery=this.annotation.rawQuery||"SELECT\n    UNIX_TIMESTAMP(<time_column>) as time_sec,\n    <text_column> as text,\n    <tags_column> as tags\n  FROM <table name>\n  WHERE $__timeFilter(time_column)\n  ORDER BY <time_column> ASC\n  LIMIT 100\n  "};B.templateUrl="partials/annotations.editor.html"}}]);
//# sourceMappingURL=mysqlPlugin.8a471c5cf34b9a2fcca5.js.map