(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],[,,,,function(e,a,t){e.exports={nav:"Nav_nav__31oOR",item:"Nav_item__3P_J2",active:"Nav_active__2zAJx"}},,function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__1GeB8",dialog:"Dialogs_dialog__1L4us",link:"Dialogs_link__1dZaN",active:"Dialogs_active__3x-ZD",messages:"Dialogs_messages__1-XU-",message:"Dialogs_message__385fq"}},,function(e,a,t){e.exports={newPost:"MyPosts_newPost__4MoWQ",wrapperText:"MyPosts_wrapperText__2mWns",wrapperBtn:"MyPosts_wrapperBtn__QDoyt"}},,,,,function(e,a,t){e.exports={item:"Post_item__PUjuK",avatar:"Post_avatar__g7vEn"}},function(e,a,t){e.exports={discriptionBlock:"ProfileInfo_discriptionBlock__27kqu"}},function(e,a,t){e.exports={appWrapper:"App_appWrapper__29t9T",appWrapperContent:"App_appWrapperContent__3oliH"}},,,,,function(e,a,t){},function(e,a,t){e.exports={header:"Header_header__2MjTW"}},function(e,a,t){e.exports=t.p+"static/media/logo.e6d9ba36.png"},function(e,a,t){e.exports=t(34)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(18),r=t.n(i),l=(t(28),t(4)),c=t.n(l),m=t(5),o=function(){return s.a.createElement("nav",{className:c.a.nav},s.a.createElement(m.b,{className:c.a.item,activeClassName:c.a.active,to:"/profile"},"Profile"),s.a.createElement(m.b,{className:c.a.item,activeClassName:c.a.active,to:"/dialogs"},"Messages"),s.a.createElement(m.b,{className:c.a.item,activeClassName:c.a.active,to:"/news"}," News"),s.a.createElement(m.b,{className:c.a.item,activeClassName:c.a.active,to:"/music"}," Music"),s.a.createElement(m.b,{className:c.a.item,activeClassName:c.a.active,to:"settings"},"Settings"))},p=t(13),u=t.n(p),d=function(e){return s.a.createElement("div",{className:u.a.item},s.a.createElement("img",{className:u.a.avatar,src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPmeVA7-9PgEZEKzr2bK6y-2fcHFfUbP_liQ&usqp=CAU",alt:""}),e.message,s.a.createElement("div",null,"Like ",e.likeCount))},g=t(8),_=t.n(g),E=function(e){var a=e.posts.map((function(e){return s.a.createElement(d,{message:e.message,likeCount:e.likeCount})}));return s.a.createElement("div",null,s.a.createElement("h3",{className:_.a.newPost},"New posts"),s.a.createElement("div",{className:_.a.wrapperText},s.a.createElement("textarea",null,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435")),s.a.createElement("div",{className:_.a.wrapperBtn},s.a.createElement("button",null,"Add Post")),s.a.createElement("div",{className:_.a.posts},a))},v=t(14),f=t.n(v),N=function(){return s.a.createElement("div",null,s.a.createElement("img",{className:f.a.bgImage,src:"https://pm1.narvii.com/6911/d76ea35645ae06a9fe61855ed6bfa59ee5d07b45r4-736-368_00.jpg",alt:""}),s.a.createElement("div",{className:f.a.discriptionBlock},"ava + description"))},P=t(20),b=t.n(P),w=function(e){return s.a.createElement("div",{className:b.a.bg},s.a.createElement(N,null),s.a.createElement(E,{posts:e.posts}))},k=t(21),h=t.n(k),x=t(22),C=t.n(x),W=function(){return s.a.createElement("header",{className:h.a.header},s.a.createElement("img",{src:C.a,alt:""}))},A=t(6),B=t.n(A),D=function(e){var a="dialogs/"+e.id;return s.a.createElement("div",{className:B.a.dialog},s.a.createElement(m.b,{className:B.a.link,to:a},e.name))},M=function(e){return s.a.createElement("div",{className:B.a.message},e.message)},y=function(e){var a=e.dialogs.map((function(e){return s.a.createElement(D,{name:e.name,id:e.id})})),t=e.messages.map((function(e){return s.a.createElement(M,{message:e.message})}));return s.a.createElement("div",{className:B.a.dialogs},s.a.createElement("div",{className:B.a.dialogsItem},a),s.a.createElement("div",{className:B.a.messages},t))},T=function(){return s.a.createElement("div",null,"News")},I=function(){return s.a.createElement("div",null,"Music")},q=function(){return s.a.createElement("div",null,"Settings")},H=t(1),J=t(15),Q=t.n(J),U=function(e){return s.a.createElement(m.a,null,s.a.createElement("div",{className:Q.a.appWrapper},s.a.createElement(W,null),s.a.createElement(o,null),s.a.createElement("div",{className:Q.a.appWrapperContent},s.a.createElement(H.a,{path:"/dialogs",render:function(){return s.a.createElement(y,{dialogs:e.state.dialogsPage.dialogs,messages:e.state.dialogsPage.messages})}}),s.a.createElement(H.a,{path:"/profile",render:function(){return s.a.createElement(w,{posts:e.state.profilePage.posts})}}),s.a.createElement(H.a,{path:"/news",component:T}),s.a.createElement(H.a,{path:"/music",component:I}),s.a.createElement(H.a,{path:"/settings",component:q}))))},j={profilePage:{posts:[{id:1,message:"Obito",likeCount:10},{id:2,message:"Pain",likeCount:20}]},dialogsPage:{dialogs:[{id:1,name:"Tobi"},{id:2,name:"Pain"},{id:3,name:"Conan"},{id:4,name:"Itachi"},{id:5,name:"Hidan"}],messages:[{id:1,message:"\u041f\u0440\u0438\u0432\u0435\u0442"},{id:2,message:"\u0425\u0430\u0439"},{id:3,message:"\u041f\u043e\u043a\u0430"}]}};r.a.render(s.a.createElement(U,{state:j}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.0792548b.chunk.js.map