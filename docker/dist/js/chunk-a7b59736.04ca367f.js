(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a7b59736"],{"5c17":function(t,e,a){},"8c2b":function(t,e,a){"use strict";var l=a("5c17"),i=a.n(l);i.a},"9dde":function(t,e,a){"use strict";var l=a("e6a7"),i=a.n(l);i.a},d843:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user"},[a("Query")],1)},i=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Query"},[a("el-container",[a("el-aside",{attrs:{width:"25%"}},[a("h3",{staticClass:"head"},[t._v("朋友，想找份心仪的实习吗？")]),a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"实习岗位"}},[a("el-input",{model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),a("el-form-item",{attrs:{label:"实习地点"}},[a("el-input",{model:{value:t.form.city,callback:function(e){t.$set(t.form,"city",e)},expression:"form.city"}})],1),a("el-form-item",{attrs:{label:"查询个数"}},[a("el-input",{model:{value:t.form.limit,callback:function(e){t.$set(t.form,"limit",e)},expression:"form.limit"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("查询")]),a("el-button",[t._v("取消")])],1)],1)],1),a("el-main",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{prop:"title",label:"岗位名称",width:"220"}}),a("el-table-column",{attrs:{prop:"salary",label:"预计薪资",width:"150"}}),a("el-table-column",{attrs:{prop:"city",label:"工作地点",width:"150"}}),a("el-table-column",{attrs:{prop:"time",label:"发布时间",width:"250"}}),a("el-table-column",{attrs:{prop:"company",label:"公司名称"}})],1)],1)],1)],1)},o=[],r=a("4328"),s=a.n(r),c=a("bc3a"),m=a.n(c),u={name:"query",data:function(){return{form:{title:"",city:"",limit:""},tableData:[]}},methods:{onSubmit:function(){var t=this,e="/api/v1/info/query",a=s.a.stringify(this.form),l={method:"POST",headers:{"content-type":"application/x-www-form-urlencoded"}};m.a.post(e,a,l).then((function(e){var a=e.data;a.code>0?t.$notify.error({title:"查询失败",message:a.msg}):(t.$notify({title:"查询成功",message:"总计有".concat(a.data.total,"个符合条件的岗位等待投递"),type:"success"}),t.tableData=a.data.items)})).catch((function(e){t.$notify.error({title:"网路错误，或者服务器宕机",message:e})}))}},components:{}},f=u,p=(a("9dde"),a("2877")),d=Object(p["a"])(f,n,o,!1,null,null,null),b=d.exports,y={name:"user",components:{Query:b}},h=y,v=(a("8c2b"),Object(p["a"])(h,l,i,!1,null,null,null));e["default"]=v.exports},e6a7:function(t,e,a){}}]);
//# sourceMappingURL=chunk-a7b59736.04ca367f.js.map