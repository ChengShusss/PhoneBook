(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{39:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t(1),o=t(15),a=t.n(o),i=t(6),u=t(3),s=function(e){var n=e.filter,t=e.onChange;return Object(r.jsxs)("div",{children:["filter show with ",Object(r.jsx)("input",{value:n,onChange:t})]})},d=function(e){var n=e.person,t=e.deletePerson;return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:n.name}),Object(r.jsx)("td",{children:n.number}),Object(r.jsx)("td",{children:Object(r.jsx)("button",{onClick:function(){return t(n)},children:"delete"})})]})},l=function(e){var n=e.persons,t=e.filterString,c=e.deletePerson;return Object(r.jsx)("table",{children:Object(r.jsx)("tbody",{children:n.filter((function(e){return null!==e.name.toLowerCase().match(t)})).map((function(e){return Object(r.jsx)(d,{person:e,deletePerson:c},e.name)}))})})},j=function(e){var n=e.addPerson,t=e.newName,c=e.newNumber,o=e.handleNewName,a=e.handleNewNumber;return Object(r.jsxs)("form",{onSubmit:n,children:[Object(r.jsxs)("div",{children:["name: ",Object(r.jsx)("input",{value:t,onChange:o})]}),Object(r.jsxs)("div",{children:["number: ",Object(r.jsx)("input",{value:c,onChange:a})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"submit",children:"add"})})]})},b=t(4),f=t.n(b),h="/api/persons",m=function(){return f.a.get(h).then((function(e){return e.data}))},O=function(e){return f.a.post(h,e).then((function(e){return e.data}))},v=function(e,n){return f.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},x=function(e){return f.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))},p=(t(39),function(e){var n=e.message;return null===n?null:Object(r.jsx)("div",{className:n.isError?"error":"msg",children:n.str})}),w=function(){var e=Object(c.useState)([]),n=Object(u.a)(e,2),t=n[0],o=n[1],a=Object(c.useState)(""),d=Object(u.a)(a,2),b=d[0],f=d[1],h=Object(c.useState)(""),w=Object(u.a)(h,2),g=w[0],N=w[1],y=Object(c.useState)(""),S=Object(u.a)(y,2),k=S[0],C=S[1],P=Object(c.useState)(null),E=Object(u.a)(P,2),I=E[0],J=E[1],A=function(e,n){J({str:e,isError:n}),setTimeout((function(){J(null)}),5e3)};Object(c.useEffect)((function(){m().then((function(e){o(e)}))}),[]);return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Phonebook"}),Object(r.jsx)(p,{message:I}),Object(r.jsx)(s,{filter:k,onChange:function(e){C(e.target.value)}}),Object(r.jsx)("h2",{children:"add a new"}),Object(r.jsx)(j,{addPerson:function(e){e.preventDefault();var n=t.find((function(e){return e.name===b}));void 0!==n?window.confirm("".concat(b," is already added to phonebook, replace the old number with a new one ?"))&&(n=Object(i.a)(Object(i.a)({},n),{},{number:g}),v(n.id,n).then((function(e){o(t.map((function(t){return t.id!==n.id?t:e})))})),A("'".concat(b,"' was already modified in server"),!1)):(O({name:b,number:g}).then((function(e){o(t.concat(e)),f(""),N("")})),A("'".concat(b,"' was already add to server"),!1))},newName:b,newNumber:g,handleNewName:function(e){f(e.target.value)},handleNewNumber:function(e){N(e.target.value)}}),Object(r.jsx)("h2",{children:"Numbers"}),Object(r.jsx)(l,{persons:t,filterString:k,deletePerson:function(e){if(console.log("to delete id "+e.id),window.confirm("Are you sure to delete the phone of ".concat(e.name))){var n=x(e.id).catch((function(n){A("Information of '".concat(e.name,"' has been removed from server"),!0)}));console.log("delete result: "+n),o(t.filter((function(n){return n.id!==e.id}))),A("'".concat(e.name,"' was already delete from server"),!0)}}})]})};a.a.render(Object(r.jsx)(w,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.e5561f38.chunk.js.map