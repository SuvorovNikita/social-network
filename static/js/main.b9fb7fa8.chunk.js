(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],[,,,,function(e,a,t){e.exports={nav:"Nav_nav__282eS",item:"Nav_item__1Wb4D",active:"Nav_active__2WM7o"}},,function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__2VTAf",dialog:"Dialogs_dialog__1itnl",link:"Dialogs_link__2k7ga",active:"Dialogs_active__W54GM",messages:"Dialogs_messages__2auYW",message:"Dialogs_message__2gIgp"}},,function(e,a,t){e.exports={newPost:"MyPosts_newPost__1W9ww",wrapperText:"MyPosts_wrapperText__PR3sl",wrapperBtn:"MyPosts_wrapperBtn__fcMhp"}},,,,,function(e,a,t){e.exports={item:"Post_item__4Tvim",avatar:"Post_avatar__AfDLb"}},function(e,a,t){e.exports={discriptionBlock:"ProfileInfo_discriptionBlock__EFpt0"}},function(e,a,t){e.exports={appWrapper:"App_appWrapper__4kq__",appWrapperContent:"App_appWrapperContent__2Mmga"}},,,,,function(e,a,t){},function(e,a,t){e.exports={header:"Header_header__3pUoX"}},function(e,a,t){e.exports=t.p+"static/media/logo.e6d9ba36.png"},function(e,a,t){e.exports=t(34)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(18),r=t.n(i),c=(t(28),t(4)),l=t.n(c),o=t(5),m=function(){return s.a.createElement("nav",{className:l.a.nav},s.a.createElement(o.b,{className:l.a.item,activeClassName:l.a.active,to:"/profile"},"Profile"),s.a.createElement(o.b,{className:l.a.item,activeClassName:l.a.active,to:"/dialogs"},"Messages"),s.a.createElement(o.b,{className:l.a.item,activeClassName:l.a.active,to:"/news"}," News"),s.a.createElement(o.b,{className:l.a.item,activeClassName:l.a.active,to:"/music"}," Music"),s.a.createElement(o.b,{className:l.a.item,activeClassName:l.a.active,to:"settings"},"Settings"))},p=t(13),d=t.n(p),u=function(e){return s.a.createElement("div",{className:d.a.item},s.a.createElement("img",{className:d.a.avatar,src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPmeVA7-9PgEZEKzr2bK6y-2fcHFfUbP_liQ&usqp=CAU",alt:""}),e.message,s.a.createElement("div",null,"Like ",e.likeCount))},g=t(8),_=t.n(g),v=function(e){var a=e.posts.map((function(e){return s.a.createElement(u,{key:e.id,message:e.message,likeCount:e.likeCount})})),t=s.a.createRef();return s.a.createElement("div",null,s.a.createElement("h3",{className:_.a.newPost},"New posts"),s.a.createElement("div",{className:_.a.wrapperText},s.a.createElement("textarea",{ref:t})),s.a.createElement("div",{className:_.a.wrapperBtn},s.a.createElement("button",{onClick:function(){var a=t.current&&t.current.value;e.addPost(a)}},"Add Post")),s.a.createElement("div",{className:_.a.posts},a))},E=t(14),f=t.n(E),N=function(){return s.a.createElement("div",null,s.a.createElement("img",{className:f.a.bgImage,src:"https://pm1.narvii.com/6911/d76ea35645ae06a9fe61855ed6bfa59ee5d07b45r4-736-368_00.jpg",alt:""}),s.a.createElement("div",{className:f.a.discriptionBlock},"ava + description"))},P=t(20),b=t.n(P),k=function(e){return s.a.createElement("div",{className:b.a.bg},s.a.createElement(N,null),s.a.createElement(v,{posts:e.posts,addPost:e.addPost}))},w=t(21),h=t.n(w),C=t(22),x=t.n(C),W=function(){return s.a.createElement("header",{className:h.a.header},s.a.createElement("img",{src:x.a,alt:""}))},M=t(6),A=t.n(M),D=function(e){var a="dialogs/"+e.id;return s.a.createElement("div",{className:A.a.dialog},s.a.createElement(o.b,{className:A.a.link,to:a},e.name))},y=function(e){return s.a.createElement("div",{className:A.a.message},e.message)},B=function(e){var a=e.dialogs.map((function(e){return s.a.createElement(D,{name:e.name,id:e.id})})),t=e.messages.map((function(e){return s.a.createElement(y,{message:e.message})}));return s.a.createElement("div",{className:A.a.dialogs},s.a.createElement("div",{className:A.a.dialogsItem},a),s.a.createElement("div",{className:A.a.messages},t))},I=function(){return s.a.createElement("div",null,"News")},T=function(){return s.a.createElement("div",null,"Music")},q=function(){return s.a.createElement("div",null,"Settings")},H=t(1),S=t(15),U=t.n(S),F=function(e){return s.a.createElement("div",{className:U.a.appWrapper},s.a.createElement(W,null),s.a.createElement(m,null),s.a.createElement("div",{className:U.a.appWrapperContent},s.a.createElement(H.a,{path:"/dialogs",render:function(){return s.a.createElement(B,{dialogs:e.state.dialogsPage.dialogs,messages:e.state.dialogsPage.messages})}}),s.a.createElement(H.a,{path:"/profile",render:function(){return s.a.createElement(k,{posts:e.state.profilePage.posts,addPost:e.addPost})}}),s.a.createElement(H.a,{path:"/news",component:I}),s.a.createElement(H.a,{path:"/music",component:T}),s.a.createElement(H.a,{path:"/settings",component:q})))},G={profilePage:{posts:[{id:1,message:"Obito",likeCount:10},{id:2,message:"Pain",likeCount:20}]},dialogsPage:{dialogs:[{id:1,name:"Tobi"},{id:2,name:"Pain"},{id:3,name:"Conan"},{id:4,name:"Itachi"},{id:5,name:"Hidan"}],messages:[{id:1,message:"\u041f\u0440\u0438\u0432\u0435\u0442"},{id:2,message:"\u0425\u0430\u0439"},{id:3,message:"\u041f\u043e\u043a\u0430"}]}},J=G;r.a.render(s.a.createElement(o.a,null,s.a.createElement(F,{state:J,addPost:function(e){var a={id:5,message:e,likeCount:12};G.profilePage.posts.push(a)}})),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.b9fb7fa8.chunk.js.map