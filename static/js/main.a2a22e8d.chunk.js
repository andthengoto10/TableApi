(window.webpackJsonptable=window.webpackJsonptable||[]).push([[0],{142:function(e,t,a){e.exports=a(290)},288:function(e,t,a){},290:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(27),c=a.n(l),m=a(30),i=a(33),o=a(15),u=a(10),s=a(16),b=a(17),d=a(18),p=a(42),E=a(305),h=a(306),f=a(304),v=function(e){var t=e.input,a=e.label,n=e.type,l=e.meta,c=l.touched,m=l.error;return r.a.createElement("div",null,r.a.createElement("label",null,a),r.a.createElement("div",null,r.a.createElement("input",Object.assign({},t,{type:n,placeholder:a})),c&&m&&r.a.createElement("span",null,m)))},y=function(e){var t=e.fields,a=e.meta,n=a.error,l=a.submitFailed;return r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("button",{type:"button",onClick:function(){return t.push({})}},"Add Member"),l&&n&&r.a.createElement("span",null,n)),t.map((function(e,a){return r.a.createElement("li",{key:a},r.a.createElement("button",{type:"button",onClick:function(){return t.remove(a)}},"Remove Member"),r.a.createElement("h4",null,"Member #",a+1),r.a.createElement(E.a,{name:"".concat(e,".id"),type:"number",component:v,label:"ID"}),r.a.createElement(E.a,{name:"".concat(e,".mNummer"),type:"number",component:v,label:"MatrikelNummer"}),r.a.createElement(E.a,{name:"".concat(e,".name"),type:"text",component:v,label:"Name"}),r.a.createElement(E.a,{name:"".concat(e,".email"),type:"e-mail",component:v,label:"E-mail"}),r.a.createElement(E.a,{name:"".concat(e,".city"),type:"text",component:v,label:"Stadt"}))})))},g=Object(f.a)({form:"MyForm"})((function(e){var t=e.handleSubmit,a=e.pristine,n=e.reset,l=e.submitting;return r.a.createElement("form",{onSubmit:t},r.a.createElement(h.a,{name:"members",component:y}),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",disabled:l},"Submit"),r.a.createElement("button",{type:"button",disabled:a||l,onClick:n},"Clear Values")))})),j=a(300),O=a(303),k=a(309),w=a(301),N=a(302),T=a(299),C=a(308),x=Object(m.b)((function(e){return{values:Object(C.a)("MyForm")(e)}}))((function(e){var t=e.values,a=void 0===t?{members:["1","1234","andthen","qwer@qwe.qwe","Newport"]}:t;return r.a.createElement(T.a,null,r.a.createElement(j.a,null,r.a.createElement(w.a,null,r.a.createElement(N.a,null,r.a.createElement(k.a,null,"ID"),r.a.createElement(k.a,{align:"right"},"Matrikel Nummer"),r.a.createElement(k.a,{align:"right"},"Name"),r.a.createElement(k.a,{align:"right"},"E-mail"),r.a.createElement(k.a,{align:"right"},"Stadt"))),r.a.createElement(O.a,null,a.members.map((function(e){return r.a.createElement(N.a,{key:"".concat(e.id)},r.a.createElement(k.a,{align:"right"},e.id),r.a.createElement(k.a,{align:"right"},e.mNummer),r.a.createElement(k.a,{align:"right"},e.name),r.a.createElement(k.a,{align:"right"},e.email),r.a.createElement(k.a,{align:"right"},e.city))})))))})),M=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"My form"),r.a.createElement(g,null),r.a.createElement(x,null))}}]),t}(n.Component),S=a(23),F=a.n(S),D=a(41),B=function(e){return r.a.createElement(T.a,null,r.a.createElement(j.a,null,r.a.createElement(w.a,null,r.a.createElement(N.a,null,r.a.createElement(k.a,null,"ID"),r.a.createElement(k.a,{align:"right"},"Name "),r.a.createElement(k.a,{align:"right"},"Username"),r.a.createElement(k.a,{align:"right"},"E-mail"))),r.a.createElement(O.a,null,e.data.map((function(e){return r.a.createElement(N.a,{key:"".concat(e.id)},r.a.createElement(k.a,{align:"right"},e.id),r.a.createElement(k.a,{align:"right"},e.name),r.a.createElement(k.a,{align:"right"},e.username),r.a.createElement(k.a,{align:"right"},e.email))})))))},H=(a(83),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={data:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(D.a)(F.a.mark((function e(){var t,a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(" https://jsonplaceholder.typicode.com/users");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a),this.setState({data:a});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(B,{data:this.state.data}))}}]),t}(n.Component)),I=a(24),A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(b.a)(t).call(this,e))).state={data:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(D.a)(F.a.mark((function e(){var t,a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(" https://jsonplaceholder.typicode.com/users");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a),this.setState({data:a});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(I.BootstrapTable,{ref:"table",data:this.state.data},r.a.createElement(I.TableHeaderColumn,{ref:"id",dataField:"id",isKey:!0},"Student ID"),r.a.createElement(I.TableHeaderColumn,{ref:"name",dataField:"name"},"Name"),r.a.createElement(I.TableHeaderColumn,{ref:"username",dataField:"username"},"Username"),r.a.createElement(I.TableHeaderColumn,{ref:"email",dataField:"email"},"Email"))}}]),t}(r.a.Component),U=function(e){return r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"ID"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"UserName"),r.a.createElement("th",null,"E-mail"))),r.a.createElement("tbody",null,e.data.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.id),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.username),r.a.createElement("td",null,e.email))}))))},q=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={data:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(D.a)(F.a.mark((function e(){var t,a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(" https://jsonplaceholder.typicode.com/users");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a),this.setState({data:a});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(U,{data:this.state.data}))}}]),t}(n.Component),R=(a(288),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"about"},r.a.createElement("h1",{className:"thisis"},"One task with different results."))}}]),t}(n.Component)),J=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(b.a)(t).call(this,e))).state={data:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(D.a)(F.a.mark((function e(){var t,a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(" https://jsonplaceholder.typicode.com/users");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a),this.setState({data:a});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(I.BootstrapTable,{ref:"table",data:this.state.data,pagination:!0,search:!0},r.a.createElement(I.TableHeaderColumn,{dataField:"id",isKey:!0},"ID"),r.a.createElement(I.TableHeaderColumn,{dataField:"name"},"Name"),r.a.createElement(I.TableHeaderColumn,{dataField:"username"},"Username"),r.a.createElement(I.TableHeaderColumn,{dataField:"email"},"E-mail")))}}]),t}(r.a.Component),K=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"content"},r.a.createElement("div",{className:"menu navbar navbar-fixed-top"},r.a.createElement("ul",{className:"list-group list-group-horizontal"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement(i.b,{to:"/"},"About")),r.a.createElement("li",{className:"list-group-item"},r.a.createElement(i.b,{to:"/my"},"My")),r.a.createElement("li",{className:"list-group-item"},r.a.createElement(i.b,{to:"/simpleTable"},"Simple Table")),r.a.createElement("li",{className:"list-group-item"},r.a.createElement(i.b,{to:"/muiTable"},"Mui Table")),r.a.createElement("li",{className:"list-group-item"},r.a.createElement(i.b,{to:"/reactBotstrapTable"},"React Botstrap Table")),r.a.createElement("li",{className:"list-group-item"},r.a.createElement(i.b,{to:"/searchTable"},"Search Botstrap Table")))),r.a.createElement("div",{className:"App-body"},r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",component:R}),r.a.createElement(p.b,{path:"/My",component:M}),r.a.createElement(p.b,{path:"/SimpleTable",component:q}),r.a.createElement(p.b,{path:"/MuiTable",component:H}),r.a.createElement(p.b,{path:"/ReactBotstrapTable",component:A}),r.a.createElement(p.b,{path:"/SearchTable",component:J}),r.a.createElement(p.a,{to:"/"}))))}}]),t}(n.Component),W=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(K,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=a(8),V=a(307),$=Object(z.b)({form:V.a}),G=Object(z.c)($);c.a.render(r.a.createElement(m.a,{store:G},r.a.createElement(i.a,null,r.a.createElement(W,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[142,1,2]]]);
//# sourceMappingURL=main.a2a22e8d.chunk.js.map