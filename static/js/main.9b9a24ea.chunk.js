(this["webpackJsonpimpltech-task"]=this["webpackJsonpimpltech-task"]||[]).push([[0],{11:function(e,t,n){e.exports={header:"Person_header__WD6kP",container:"Person_container__4gKjQ"}},12:function(e,t,n){e.exports={header:"PeopleView_header__15TPD",container:"PeopleView_container__3wby0"}},26:function(e,t,n){e.exports={card:"PeopleList_card__U5yKf"}},31:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(22),o=n.n(c),s=(n(31),n(3)),i=(Object(s.oneOfType)([Object(s.arrayOf)(s.node),s.node]),Object(s.shape)({name:s.string.isRequired,birth_year:s.string.isRequired}),n(0)),u=function(e){var t=e.children;return Object(i.jsx)("main",{children:t})},m=n(13),j=n(6),d=n(7),b=n(10),l=n.n(b),f=n(23),p=n(24),h=n.n(p).a.create({baseURL:"https://swapi.dev/api/",headers:{get:{Accept:"application/json","Content-Type":"application/json"}}}),O="/people/",x=function(){var e=Object(f.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get(O);case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=n(11),v=n.n(_),w=function(e){var t=e.person;return Object(i.jsxs)("article",{className:v.a.container,children:[Object(i.jsx)("h2",{className:v.a.header,children:t.name}),Object(i.jsxs)("em",{children:["Birth year: ",t.birth_year]}),t.comments.map((function(e){return Object(i.jsx)("p",{children:e.comment},e.id)}))]})};w.defaultProps={name:"Name required",birth_year:"Year required",comments:[]};var y=a.a.memo(w),g=n(8),N=n.n(g),C=function(e){var t=e.id,n=e.addComment,a=function(e){var t=Object(r.useState)(e),n=Object(d.a)(t,2),a=n[0],c=n[1];return{value:a,setValue:c,reset:function(){return c("")},bind:{value:a,onChange:function(e){c(e.target.value)}}}}(""),c=a.value,o=a.bind,s=a.reset;return Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n(t,c),s()},className:N.a.form,children:[Object(i.jsx)("label",{children:Object(i.jsx)("textarea",Object(j.a)({className:N.a.textarea,rows:"3",required:!0,placeholder:"Your comment.."},o))}),Object(i.jsx)("input",{className:N.a.button,type:"submit",value:"add"})]})},P=n(25),k=function(){return window.URL.createObjectURL(new Blob([])).substring(31)},q=n(26),F=n.n(q),L=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),n=t[0],a=t[1];Object(r.useEffect)((function(){x().then((function(e){var t=e.results;a(function(e){if(!e||!Array.isArray(e))throw new Error("Can't add checkboxes, array of employee objects is missing.");var t,n=Object(P.a)(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;r.comments=[],r.id=k()}}catch(a){n.e(a)}finally{n.f()}return e}(t))}))}),[]);var c=function(e,t){var r={id:k(),comment:t},c=n.map((function(t){return t.id===e?Object(j.a)(Object(j.a)({},t),{},{comments:[].concat(Object(m.a)(t.comments),[r])}):t}));a((function(){return Object(m.a)(c)}))};return n.length?Object(i.jsx)(i.Fragment,{children:n.map((function(e){return Object(i.jsxs)("section",{className:F.a.card,children:[Object(i.jsx)(y,{person:e}),Object(i.jsx)(C,{id:e.id,addComment:c})]},e.id)}))}):Object(i.jsx)(i.Fragment,{children:"Just a sec..."})},R=n(12),U=n.n(R),J=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:U.a.header,children:"List of people"}),Object(i.jsx)("section",{className:U.a.container,children:Object(i.jsx)(L,{})})]})},A=function(){return Object(i.jsx)(u,{children:Object(i.jsx)(J,{})})};o.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(A,{})}),document.getElementById("root"))},8:function(e,t,n){e.exports={form:"NewCommentForm_form__1UURA",label:"NewCommentForm_label__3Jzyv",textarea:"NewCommentForm_textarea__2XLw7",button:"NewCommentForm_button__2nJqq"}}},[[54,1,2]]]);
//# sourceMappingURL=main.9b9a24ea.chunk.js.map