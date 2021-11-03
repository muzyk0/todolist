(this["webpackJsonptodolist-ts"]=this["webpackJsonptodolist-ts"]||[]).push([[0],{103:function(t,e,r){},104:function(t,e,r){},134:function(t,e,r){"use strict";r.r(e);var a={};r.r(a),r.d(a,"selectIsLoggedIn",(function(){return _}));var n=r(0),s=r.n(n),i=r(11),o=r.n(i);r(103),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r(104);var c=r(179),d=r(192),u=r(180),l=r(181),p=r(182),f=r(171),j=r(136),b=r(176),h=r(184),O=r(185),v=r(183),x=r(10),m=r(190),g=r(187),k=r(23),y=r(15),w={setAppStatus:Object(y.b)("appActions/setAppStatus"),setAppError:Object(y.b)("appActions/setAppError")},C=r(27),I=function(){return Object(k.b)()};function T(t){var e=I();return Object(n.useMemo)((function(){return Object(C.b)(t,e)}),[t,e])}var S=r(3);function E(t){return Object(S.jsx)(g.a,Object(x.a)({elevation:6,variant:"filled"},t))}function A(){var t=Object(k.c)((function(t){return t.app.error})),e=T(w).setAppError,r=function(t,r){"clickaway"!==r&&e({error:null})},a=null!==t;return Object(S.jsx)(m.a,{open:a,autoHideDuration:6e3,onClose:r,children:Object(S.jsx)(E,{onClose:r,severity:"error",children:t})})}var L,P,N=function(t){return t.app.status},z=function(t){return t.app.isInitialized},F=r(8),W=r.n(F),D=r(16),R=r(84),M=r.n(R).a.create(Object(x.a)({baseURL:"https://social-network.samuraijs.com/api/1.1/"},{withCredentials:!0,headers:{"API-KEY":"5a0cdbca-9689-4621-a5f0-b22378b0e052"}})),V=function(){return M.get("todo-lists")},B=function(t){return M.post("todo-lists",{title:t})},U=function(t){return M.delete("todo-lists/".concat(t))},q=function(t,e){return M.put("todo-lists/".concat(t),{title:e})},G=function(t){return M.get("todo-lists/".concat(t,"/tasks"))},H=function(t,e){return M.delete("todo-lists/".concat(t,"/tasks/").concat(e))},K=function(t,e){return M.post("todo-lists/".concat(t,"/tasks"),{title:e})},J=function(t,e,r){return M.put("todo-lists/".concat(t,"/tasks/").concat(e),r)},X=function(t){return M.post("auth/login",t)},Y=function(){return M.delete("auth/login")},$=function(){return M.get("auth/me")},_=function(t){return t.auth.isLoggedIn},Q=r(172),Z=r(191),tt=r(173),et=r(174),rt=r(186),at=r(175),nt=r(188),st=r(87),it=function(t,e){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return r&&e.dispatch(w.setAppError({error:t.messages.length?t.messages[0]:"Some error occurred"})),e.dispatch(w.setAppStatus({status:"failed"})),e.rejectWithValue({errors:t.messages,fieldsErrors:t.fieldsErrors})},ot=function(t,e){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return r&&e.dispatch(w.setAppError({error:t.message?t.message:"Some error occurred"})),e.dispatch(w.setAppStatus({status:"failed"})),e.rejectWithValue({errors:[t.message],fieldsErrors:void 0})},ct=w.setAppStatus,dt=Object(y.c)("auth/login",function(){var t=Object(D.a)(W.a.mark((function t(e,r){var a;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.dispatch(ct({status:"loading"})),t.prev=1,t.next=4,X(e);case 4:if(0!==(a=t.sent).data.resultCode){t.next=10;break}return r.dispatch(ct({status:"succeeded"})),t.abrupt("return");case 10:return t.abrupt("return",it(a.data,r));case 11:t.next=16;break;case 13:return t.prev=13,t.t0=t.catch(1),t.abrupt("return",ot(t.t0,r));case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e,r){return t.apply(this,arguments)}}()),ut=Object(y.c)("auth/logout",function(){var t=Object(D.a)(W.a.mark((function t(e,r){var a;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.dispatch(ct({status:"loading"})),t.prev=1,t.next=4,Y();case 4:if(0!==(a=t.sent).data.resultCode){t.next=10;break}return r.dispatch(ct({status:"succeeded"})),t.abrupt("return");case 10:return t.abrupt("return",it(a.data,r));case 11:t.next=16;break;case 13:return t.prev=13,t.t0=t.catch(1),t.abrupt("return",ot(t.t0,r));case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e,r){return t.apply(this,arguments)}}()),lt={login:dt,logout:ut},pt=Object(y.d)({name:"auth",initialState:{isLoggedIn:!1},reducers:{setIsLoggedIn:function(t,e){t.isLoggedIn=e.payload.value}},extraReducers:function(t){t.addCase(dt.fulfilled,(function(t){t.isLoggedIn=!0})).addCase(ut.fulfilled,(function(t){t.isLoggedIn=!1}))}}),ft=(pt.reducer,pt.actions.setIsLoggedIn,r(18)),jt=function(){var t=I(),e=Object(k.c)(_),r=Object(st.a)({validate:function(t){return t.email?t.password?void 0:{password:"Password is required"}:{email:"Email is required"}},initialValues:{email:"",password:"",rememberMe:!1},onSubmit:function(){var e=Object(D.a)(W.a.mark((function e(r,a){var n,s,i,o,c;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(bt.login(r));case 2:n=e.sent,dt.rejected.match(n)&&(null===(s=n.payload)||void 0===s||null===(i=s.fieldsErrors)||void 0===i?void 0:i.length)&&(c=null===(o=n.payload)||void 0===o?void 0:o.fieldsErrors[0],a.setFieldError(c.field,c.error));case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()});return e?Object(S.jsx)(ft.a,{to:"/"}):Object(S.jsx)(Q.a,{container:!0,justify:"center",children:Object(S.jsx)(Q.a,{item:!0,xs:4,children:Object(S.jsx)("form",{onSubmit:r.handleSubmit,children:Object(S.jsxs)(Z.a,{children:[Object(S.jsxs)(tt.a,{children:[Object(S.jsxs)("p",{children:["To log in get registered"," ",Object(S.jsx)("a",{href:"https://social-network.samuraijs.com/",target:"_blank",rel:"noreferrer",children:"here"})]}),Object(S.jsx)("p",{children:"or use common test account credentials:"}),Object(S.jsx)("p",{children:" Email: free@samuraijs.com"}),Object(S.jsx)("p",{children:"Password: free"})]}),Object(S.jsxs)(et.a,{children:[Object(S.jsx)(rt.a,Object(x.a)({label:"Email",margin:"normal"},r.getFieldProps("email"))),r.errors.email?Object(S.jsx)("div",{children:r.errors.email}):null,Object(S.jsx)(rt.a,Object(x.a)({type:"password",label:"Password",margin:"normal"},r.getFieldProps("password"))),r.errors.password?Object(S.jsx)("div",{children:r.errors.password}):null,Object(S.jsx)(at.a,{label:"Remember me",control:Object(S.jsx)(nt.a,Object(x.a)(Object(x.a)({},r.getFieldProps("rememberMe")),{},{checked:r.values.rememberMe}))}),Object(S.jsx)(b.a,{type:"submit",variant:"contained",color:"primary",children:"Login"})]})]})})})})},bt=Object(x.a)(Object(x.a)({},lt),pt.actions),ht=pt.reducer,Ot=Object(y.c)("application/initializeApp",function(){var t=Object(D.a)(W.a.mark((function t(e,r){var a;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r.dispatch,t.next=3,$();case 3:0===t.sent.data.resultCode&&a(bt.setIsLoggedIn({value:!0}));case 5:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()),vt={initializeApp:Ot},xt=Object(y.d)({name:"app",initialState:{status:"idle",error:null,isInitialized:!1},reducers:{},extraReducers:function(t){t.addCase(Ot.fulfilled,(function(t,e){t.isInitialized=!0})).addCase(w.setAppStatus,(function(t,e){t.status=e.payload.status})).addCase(w.setAppError,(function(t,e){t.error=e.payload.error}))}}),mt=xt.reducer,gt=xt.actions,kt=Object(x.a)(Object(x.a)({},gt),vt),yt=w.setAppStatus,wt=Object(y.c)("todolists/fetchTodolists",function(){var t=Object(D.a)(W.a.mark((function t(e,r){var a;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.dispatch(yt({status:"loading"})),t.prev=1,t.next=4,V();case 4:return a=t.sent,r.dispatch(yt({status:"succeeded"})),t.abrupt("return",{todolists:a.data});case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",ot(t.t0,r));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,r){return t.apply(this,arguments)}}()),Ct=Object(y.c)("todolists/removeTodolist",function(){var t=Object(D.a)(W.a.mark((function t(e,r){var a;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r.dispatch,r.rejectWithValue,a(yt({status:"loading"})),a(Lt({id:e,status:"loading"})),t.next=5,U(e);case 5:return a(yt({status:"succeeded"})),t.abrupt("return",{id:e});case 7:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()),It=Object(y.c)("todolists/addTodolist",function(){var t=Object(D.a)(W.a.mark((function t(e,r){var a;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.dispatch(yt({status:"loading"})),t.prev=1,t.next=4,B(e);case 4:if(0!==(a=t.sent).data.resultCode){t.next=10;break}return r.dispatch(yt({status:"succeeded"})),t.abrupt("return",{todolist:a.data.data.item});case 10:return t.abrupt("return",it(a.data,r,!1));case 11:t.next=16;break;case 13:return t.prev=13,t.t0=t.catch(1),t.abrupt("return",ot(t.t0,r,!1));case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e,r){return t.apply(this,arguments)}}()),Tt=Object(y.c)("todolists/changeTodolistTitle",function(){var t=Object(D.a)(W.a.mark((function t(e,r){var a;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,q(e.id,e.title);case 3:if(0!==(a=t.sent).data.resultCode){t.next=9;break}return r.dispatch(yt({status:"succeeded"})),t.abrupt("return",{id:e.id,title:e.title});case 9:return t.abrupt("return",it(a.data,r));case 10:t.next=15;break;case 12:return t.prev=12,t.t0=t.catch(0),t.abrupt("return",ot(t.t0,r,!1));case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,r){return t.apply(this,arguments)}}()),St={fetchTodolistsTC:wt,removeTodolistTC:Ct,addTodolistTC:It,changeTodolistTitleTC:Tt},Et=Object(y.d)({name:"todolists",initialState:[],reducers:{changeTodolistFilter:function(t,e){var r=t.findIndex((function(t){return t.id===e.payload.id}));t[r].filter=e.payload.filter},changeTodolistEntityStatus:function(t,e){var r=t.findIndex((function(t){return t.id===e.payload.id}));t[r].entityStatus=e.payload.status}},extraReducers:function(t){t.addCase(wt.fulfilled,(function(t,e){return e.payload.todolists.map((function(t){return Object(x.a)(Object(x.a)({},t),{},{filter:"all",entityStatus:"idle"})}))})).addCase(Ct.fulfilled,(function(t,e){var r=t.findIndex((function(t){return t.id===e.payload.id}));r>-1&&t.splice(r,1)})).addCase(It.fulfilled,(function(t,e){t.unshift(Object(x.a)(Object(x.a)({},e.payload.todolist),{},{filter:"all",entityStatus:"idle"}))})).addCase(Tt.fulfilled,(function(t,e){var r=t.findIndex((function(t){return t.id===e.payload.id}));t[r].title=e.payload.title}))}}),At=Et.actions,Lt=(At.changeTodolistFilter,At.changeTodolistEntityStatus),Pt=Object(y.c)("tasks/fetchTasks",function(){var t=Object(D.a)(W.a.mark((function t(e,r){var a,n;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.dispatch(w.setAppStatus({status:"loading"})),t.prev=1,t.next=4,G(e);case 4:return a=t.sent,n=a.data.items,r.dispatch(w.setAppStatus({status:"succeeded"})),t.abrupt("return",{tasks:n,todolistId:e});case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",ot(t.t0,r));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,r){return t.apply(this,arguments)}}()),Nt=Object(y.c)("tasks/removeTask",function(){var t=Object(D.a)(W.a.mark((function t(e,r){return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H(e.todolistId,e.taskId);case 2:return t.abrupt("return",{taskId:e.taskId,todolistId:e.todolistId});case 3:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()),zt=Object(y.c)("tasks/addTask",function(){var t=Object(D.a)(W.a.mark((function t(e,r){var a;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.dispatch(w.setAppStatus({status:"loading"})),t.prev=1,t.next=4,K(e.todolistId,e.title);case 4:if(0!==(a=t.sent).data.resultCode){t.next=10;break}return r.dispatch(w.setAppStatus({status:"succeeded"})),t.abrupt("return",a.data.data.item);case 10:return it(a.data,r,!1),t.abrupt("return",r.rejectWithValue({errors:a.data.messages,fieldsErrors:a.data.fieldsErrors}));case 12:t.next=17;break;case 14:return t.prev=14,t.t0=t.catch(1),t.abrupt("return",ot(t.t0,r,!1));case 17:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(e,r){return t.apply(this,arguments)}}()),Ft=Object(y.c)("tasks/updateTask",function(){var t=Object(D.a)(W.a.mark((function t(e,r){var a,n,s,i;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=r.getState(),n=a.tasks[e.todolistId].find((function(t){return t.id===e.taskId}))){t.next=4;break}return t.abrupt("return",r.rejectWithValue("task not found in the state"));case 4:return s=Object(x.a)({deadline:n.deadline,description:n.description,priority:n.priority,startDate:n.startDate,title:n.title,status:n.status},e.model),t.next=7,J(e.todolistId,e.taskId,s);case 7:if(i=t.sent,t.prev=8,0!==i.data.resultCode){t.next=13;break}return t.abrupt("return",e);case 13:return t.abrupt("return",it(i.data,r));case 14:t.next=19;break;case 16:return t.prev=16,t.t0=t.catch(8),t.abrupt("return",ot(t.t0,r));case 19:case"end":return t.stop()}}),t,null,[[8,16]])})));return function(e,r){return t.apply(this,arguments)}}()),Wt={fetchTasks:Pt,removeTask:Nt,addTask:zt,updateTask:Ft},Dt=Object(y.d)({name:"tasks",initialState:{},reducers:{},extraReducers:function(t){t.addCase(St.addTodolistTC.fulfilled,(function(t,e){t[e.payload.todolist.id]=[]})).addCase(St.removeTodolistTC.fulfilled,(function(t,e){delete t[e.payload.id]})).addCase(St.fetchTodolistsTC.fulfilled,(function(t,e){e.payload.todolists.forEach((function(e){t[e.id]=[]}))})).addCase(Pt.fulfilled,(function(t,e){t[e.payload.todolistId]=e.payload.tasks})).addCase(Nt.fulfilled,(function(t,e){var r=t[e.payload.todolistId],a=r.findIndex((function(t){return t.id===e.payload.taskId}));a>-1&&r.splice(a,1)})).addCase(zt.fulfilled,(function(t,e){t[e.payload.todoListId].unshift(e.payload)})).addCase(Ft.fulfilled,(function(t,e){var r=t[e.payload.todolistId],a=r.findIndex((function(t){return t.id===e.payload.taskId}));a>-1&&(r[a]=Object(x.a)(Object(x.a)({},r[a]),e.payload.model))}))}}),Rt=r(47),Mt=r(177),Vt=s.a.memo((function(t){var e=t.addItem,r=t.disabled,a=void 0!==r&&r,s=Object(n.useState)(""),i=Object(Rt.a)(s,2),o=i[0],c=i[1],d=Object(n.useState)(null),u=Object(Rt.a)(d,2),l=u[0],p=u[1],j=function(){var t=Object(D.a)(W.a.mark((function t(){return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:""!==o.trim()?e(o,{setError:p,setTitle:c}):p("Title is required");case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(S.jsxs)("div",{children:[Object(S.jsx)(rt.a,{variant:"outlined",disabled:a,error:!!l,value:o,onChange:function(t){c(t.currentTarget.value)},onKeyPress:function(t){null!==l&&p(null),"Enter"===t.key&&j()},label:"Title",helperText:l}),Object(S.jsx)(f.a,{color:"primary",onClick:j,disabled:a,style:{marginLeft:"5px"},children:Object(S.jsx)(Mt.a,{})})]})})),Bt=r(88),Ut=s.a.memo((function(t){var e=Object(n.useState)(!1),r=Object(Rt.a)(e,2),a=r[0],s=r[1],i=Object(n.useState)(t.value),o=Object(Rt.a)(i,2),c=o[0],d=o[1];return a?Object(S.jsx)(rt.a,{color:"secondary",value:c,onChange:function(t){d(t.currentTarget.value)},autoFocus:!0,onBlur:function(){s(!1),t.onChange(c)},onKeyPress:function(e){"Enter"===e.key&&(s(!1),t.onChange(c))}}):Object(S.jsx)("span",{onDoubleClick:function(){s(!0),d(t.value)},children:t.value})})),qt=r(135),Gt=r(178);!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(L||(L={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(P||(P={}));var Ht=s.a.memo((function(t){var e=T(Yt),r=e.updateTask,a=e.removeTask,s=Object(n.useCallback)((function(){return a({taskId:t.task.id,todolistId:t.todolistId})}),[t.task.id,t.todolistId,a]),i=Object(n.useCallback)((function(e){r({taskId:t.task.id,model:{status:e.currentTarget.checked?L.Completed:L.New},todolistId:t.todolistId})}),[t.task.id,t.todolistId,r]),o=Object(n.useCallback)((function(e){r({taskId:t.task.id,model:{title:e},todolistId:t.todolistId})}),[t.task.id,t.todolistId,r]);return Object(S.jsxs)("div",{className:t.task.status===L.Completed?"is-done":"",style:{position:"relative"},children:[Object(S.jsx)(nt.a,{checked:t.task.status===L.Completed,color:"primary",onChange:i}),Object(S.jsx)(Ut,{value:t.task.title,onChange:o}),Object(S.jsx)(f.a,{size:"small",onClick:s,style:{position:"absolute",top:"2px",right:"2px"},children:Object(S.jsx)(Gt.a,{fontSize:"small"})})]},t.task.id)})),Kt=s.a.memo((function(t){var e=t.demo,r=void 0!==e&&e,a=Object(Bt.a)(t,["demo"]),s=T(Yt).fetchTasks,i=T(Xt),o=i.changeTodolistFilter,c=i.removeTodolistTC,d=i.changeTodolistTitleTC,u=I();Object(n.useEffect)((function(){r||a.tasks.length||s(a.todolist.id)}),[r,s,a.todolist.id,a.tasks.length]);var l=Object(n.useCallback)(function(){var t=Object(D.a)(W.a.mark((function t(e,r){var n,s,i,o,c,d;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Yt.addTask({title:e,todolistId:a.todolist.id}),t.next=3,u(n);case 3:s=t.sent,Yt.addTask.rejected.match(s)?(null===(i=s.payload)||void 0===i||null===(o=i.errors)||void 0===o?void 0:o.length)?(d=null===(c=s.payload)||void 0===c?void 0:c.errors[0],r.setError(d)):r.setError("Some error occured"):r.setTitle("");case 5:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),[a.todolist.id,u]),p=Object(n.useCallback)((function(t){d({id:a.todolist.id,title:t})}),[a.todolist.id,d]),j=Object(n.useCallback)((function(t){return o({filter:t,id:a.todolist.id})}),[a.todolist.id,o]),h=function(t){switch(a.todolist.filter){case"active":return a.tasks.filter((function(t){return t.status===L.New}));case"completed":return a.tasks.filter((function(t){return t.status===L.Completed}));default:return t}},O=function(t,e,r){return Object(S.jsx)(b.a,{variant:a.todolist.filter===t?"contained":"text",onClick:function(){return j(t)},color:e,children:r})};return Object(S.jsxs)(qt.a,{style:{padding:"10px",position:"relative"},children:[Object(S.jsx)(f.a,{size:"small",onClick:function(){c(a.todolist.id)},disabled:"loading"===a.todolist.entityStatus,style:{position:"absolute",right:"5px",top:"5px"},children:Object(S.jsx)(Gt.a,{fontSize:"small"})}),Object(S.jsx)("h3",{children:Object(S.jsx)(Ut,{value:a.todolist.title,onChange:p})}),Object(S.jsx)(Vt,{addItem:l,disabled:"loading"===a.todolist.entityStatus}),Object(S.jsxs)("div",{children:[h(a.tasks).map((function(t){return Object(S.jsx)(Ht,{task:t,todolistId:a.todolist.id},t.id)})),!h(a.tasks).length&&Object(S.jsx)("div",{style:{padding:"10px",color:"grey"},children:"No task"})]}),Object(S.jsxs)("div",{style:{paddingTop:"10px"},children:[O("all","default","All"),O("active","primary","Active"),O("completed","secondary","Completed")]})]})})),Jt=function(t){var e=t.demo,r=void 0!==e&&e,a=Object(k.c)((function(t){return t.todolists})),s=Object(k.c)((function(t){return t.tasks})),i=Object(k.c)(_),o=I(),c=T(Xt).fetchTodolistsTC,d=Object(n.useCallback)(function(){var t=Object(D.a)(W.a.mark((function t(e,r){var a,n,s,i,c,d;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=Xt.addTodolistTC(e),t.next=3,o(a);case 3:n=t.sent,Xt.addTodolistTC.rejected.match(n)?(null===(s=n.payload)||void 0===s||null===(i=s.errors)||void 0===i?void 0:i.length)?(d=null===(c=n.payload)||void 0===c?void 0:c.errors[0],r.setError(d)):r.setError("Some error occured"):r.setTitle("");case 5:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),[o]);return Object(n.useEffect)((function(){!r&&i&&(a.length||c())}),[r,c,i,a.length]),i?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(Q.a,{container:!0,style:{padding:"20px 0"},children:Object(S.jsx)(Vt,{addItem:d})}),Object(S.jsx)(Q.a,{container:!0,spacing:3,style:{flexWrap:"nowrap",overflowX:"scroll"},children:a.map((function(t){var e=s[t.id];return Object(S.jsx)(Q.a,{item:!0,children:Object(S.jsx)("div",{style:{width:"300px"},children:Object(S.jsx)(Kt,{todolist:t,tasks:e,demo:r})})},t.id)}))})]}):Object(S.jsx)(ft.a,{to:"/login"})},Xt=Object(x.a)(Object(x.a)({},St),Et.actions),Yt=Object(x.a)(Object(x.a)({},Wt),Dt.actions),$t=Et.reducer,_t=Dt.reducer,Qt=Object(c.a)((function(t){return Object(d.a)({root:{flexGrow:1},menuButton:{marginRight:t.spacing(2)},title:{flexGrow:1}})})),Zt=function(){var t=Qt(),e=Object(k.c)(N),r=Object(k.c)(z),s=Object(k.c)(a.selectIsLoggedIn),i=T(bt).logout,o=T(kt).initializeApp;Object(n.useEffect)((function(){r||o()}),[r,o]);var c=Object(n.useCallback)((function(){i()}),[i]);return r?Object(S.jsxs)("div",{className:"App",children:[Object(S.jsx)(A,{}),Object(S.jsxs)(l.a,{position:"static",children:[Object(S.jsxs)(p.a,{children:[Object(S.jsx)(f.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",children:Object(S.jsx)(v.a,{})}),Object(S.jsx)(j.a,{variant:"h6",className:t.title,children:"TodoList"}),s&&Object(S.jsx)(b.a,{color:"inherit",onClick:c,children:"Log out"})]}),"loading"===e&&Object(S.jsx)(h.a,{})]}),Object(S.jsx)(O.a,{maxWidth:"xl",children:Object(S.jsxs)(ft.d,{children:[Object(S.jsx)(ft.b,{exact:!0,path:"/",render:function(){return Object(S.jsx)(Jt,{demo:!1})}}),Object(S.jsx)(ft.b,{exact:!0,path:"/login",render:function(){return Object(S.jsx)(jt,{})}}),Object(S.jsx)(ft.b,{exact:!0,path:"/404",render:function(){return Object(S.jsx)("h1",{children:"404: PAGE NOT FOUND"})}})]})})]}):Object(S.jsx)("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"},children:Object(S.jsx)(u.a,{})})},te=r(51),ee=Object(C.c)({app:mt,auth:ht,todolists:$t,tasks:_t}),re=Object(y.a)({reducer:ee,middleware:function(t){return t().prepend(te.a)}});window.store=re;var ae=r(50);o.a.render(Object(S.jsx)(k.a,{store:re,children:Object(S.jsx)(ae.a,{children:Object(S.jsx)(Zt,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[134,1,2]]]);
//# sourceMappingURL=main.9e54ea39.chunk.js.map