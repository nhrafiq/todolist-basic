(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{144:function(e,t,a){e.exports=a(270)},256:function(e,t,a){},261:function(e,t,a){},270:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),c=a.n(l),i=a(102),o=a(44),u=a(43),m=a(275),d=a(281),s=a(273),E=a(276),f=a(272);a(87);var h=function(e){var t=e.handleSubmit,a=Object(n.useState)(""),l=Object(o.a)(a,2),c=l[0],i=l[1],u=Object(n.useState)(""),m=Object(o.a)(u,2),d=m[0],h=m[1],p=Object(n.useState)(null),b=Object(o.a)(p,2),v=b[0],O=b[1],g=s.a.useForm(),j=Object(o.a)(g,1)[0];return r.a.createElement("div",null,r.a.createElement(s.a,{name:"addItem",id:"addItemForm",form:j,onFinish:function(){t({title:c,desc:d,dueDate:v}),i(""),h(""),O(""),j.resetFields()}},r.a.createElement(s.a.Item,{name:"title",label:"Title",rules:[{required:!0,message:"Please provide a title"}]},r.a.createElement(E.a,{placeholder:"Enter name",onChange:function(e){return i(e.target.value)}})),r.a.createElement(s.a.Item,{name:"desc",label:"Description"},r.a.createElement(E.a,{placeholder:"Enter description",onChange:function(e){return h(e.target.value)}})),r.a.createElement(s.a.Item,{name:"dueDate",label:"Due date"},r.a.createElement(f.a,{format:"MM/DD/YYYY",onChange:function(e,t){return O(t)}}))))},p=a(274),b=a(277),v=a(278),O=a(279),g=a(280);a(256);var j=function(e){var t=e.item,a=e.handleDelete,l=e.handleReorder,c=Object(n.useState)(t.isDone),i=Object(o.a)(c,2),m=i[0],d=i[1];return r.a.createElement("div",{id:"item-container"},r.a.createElement(p.a,{id:"item",className:m&&"completed-item",title:t.title,actions:[r.a.createElement(u.a,{type:"text"},r.a.createElement(b.a,{checked:m,onChange:function(){d(!m),m||l(t,"bottom")}},"Done?")),r.a.createElement(u.a,{type:"text",icon:r.a.createElement(v.a,null),onClick:function(){return a(t)}},"Delete"),r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{type:"text",icon:r.a.createElement(O.a,null),onClick:function(){return l(t,"up")}}),r.a.createElement(u.a,{type:"text",icon:r.a.createElement(g.a,null),onClick:function(){return l(t,"down")}}))]},r.a.createElement("p",null,t.desc),t.dueDate&&r.a.createElement("p",{id:"due-date"},"Due: ",t.dueDate)))};a(261);var D=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),s=Object(o.a)(c,2),E=s[0],f=s[1];function p(e){l(a.filter((function(t){return t!==e})))}function b(e,t){var n=a.indexOf(e);if(!(0===n&&"up"===t||n===a.length-1&&"down"===t)){var r=0;switch(t){case"up":r=n-1;break;case"down":r=n+1;break;case"bottom":r=a.length-1}l((function(e){var t=Object(i.a)(e);return t.splice(r,1,t.splice(n,1,t[r])[0]),t}))}}function v(){f(!E)}return r.a.createElement("div",{id:"container"},r.a.createElement("header",null,r.a.createElement("h1",null,"To Do List"),r.a.createElement("h3",null,"What do you want to focus on today?")),!a.length&&r.a.createElement("p",{id:"get-started"},"Click the + button in the lower right hand corner to add your first task."),a&&a.map((function(e){return r.a.createElement(j,{item:e,handleDelete:p,handleReorder:b,key:e.title})})),r.a.createElement(u.a,{id:"addItemButton",type:"primary",shape:"circle",size:"large",icon:r.a.createElement(d.a,null),onClick:v}),r.a.createElement(m.a,{title:"Add New Item",visible:E,footer:[r.a.createElement(u.a,{form:"addItemForm",type:"primary",htmlType:"submit"},"Submit")],onCancel:v},r.a.createElement(h,{handleSubmit:function(e){l((function(t){return[].concat(Object(i.a)(t),[e])})),f(!E)}})))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root"))}},[[144,1,2]]]);
//# sourceMappingURL=main.155a98a5.chunk.js.map