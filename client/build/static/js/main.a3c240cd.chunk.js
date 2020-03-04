(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{153:function(e,t,a){e.exports=a(299)},228:function(e,t,a){},299:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),l=a.n(c),o=a(306),u=a(302),s=a(22),i=a.n(s),m=a(43),p=a(35),d=a(87),E=a.n(d),f=a(9),y=a(67),T=function(e,t){switch(t.type){case"GET_TRANSACTION":return Object(y.a)({},e,{loading:!1,transactions:t.payload});case"ADD_TRANSACTION":return Object(y.a)({},e,{transactions:[].concat(Object(f.a)(e.transactions),[t.payload])});case"DELETE_TRANSACTION":return Object(y.a)({},e,{transactions:e.transactions.filter((function(e){return e._id!==t.payload}))});case"TRANSACTION_ERROR":return Object(y.a)({},e,{error:t.payload});default:return e}},b={transactions:[],error:null,loading:!0},x=Object(n.createContext)(b),v=function(e){var t=e.children,a=Object(n.useReducer)(T,b),c=Object(p.a)(a,2),l=c[0],o=c[1];function u(){return(u=Object(m.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("/api/v1/transactions");case 3:t=e.sent,o({type:"GET_TRANSACTION",payload:t.data.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),o({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function s(){return(s=Object(m.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.delete("/api/v1/transactions/".concat(t));case 3:o({type:"DELETE_TRANSACTION",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),o({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function d(){return(d=Object(m.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,E.a.post("/api/v1/transactions",t,a);case 4:n=e.sent,o({type:"ADD_TRANSACTION",payload:n.data.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),o({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}return r.a.createElement(x.Provider,{value:{transactions:l.transactions,error:l.error,deleteTransaction:function(e){return s.apply(this,arguments)},addTransaction:function(e){return d.apply(this,arguments)},getTransactions:function(){return u.apply(this,arguments)}}},t)};function O(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}var g=u.a.Title,h=function(){var e=Object(n.useContext)(x).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{style:{textAlign:"center"}},"Your Balance"),r.a.createElement(g,{level:2,style:{textAlign:"center"}},"$",O(e)))},A=(a(228),a(58)),N=a(31),R=a(303),j=u.a.Text,C=function(){var e=Object(n.useContext)(x).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),a=e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0).toFixed(2);return r.a.createElement(A.a,null,r.a.createElement(N.a,{span:12},r.a.createElement(R.a,{title:"Income",bordered:!0},r.a.createElement(j,{style:{color:"#00a854",fontSize:"18px"}},"$",O(t)))),r.a.createElement(N.a,{span:12},r.a.createElement(R.a,{title:"Expense",bordered:!0},r.a.createElement(j,{style:{color:"#f04134",fontSize:"18px"}},"$",O(Math.abs(a))))))},S=a(109),I=a(301),k=u.a.Text,_=function(){var e=Object(n.useContext)(x),t=e.transactions,a=e.deleteTransaction,c=e.getTransactions;return Object(n.useEffect)((function(){c()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,{size:"large",header:r.a.createElement("div",null,"History"),bordered:!0,dataSource:t,renderItem:function(e){return r.a.createElement(I.a.Item,null,r.a.createElement(k,{style:e.amount<0?{color:"red",fontSize:"20px"}:{color:"green",fontSize:"20px"}},O(e.text)),r.a.createElement(k,{style:{fontSize:"20px"}},e.amount<0?" -$":"+$",O(Math.abs(e.amount))),"  ","  ",r.a.createElement(S.a,{onClick:function(){return a(e._id)},type:"danger"},"x"))}}))},w=a(304),F=a(305),z=u.a.Title,D=function(){var e=Object(n.useContext)(x).addTransaction,t=Object(n.useState)(""),a=Object(p.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(500),u=Object(p.a)(o,2),s=u[0],i=u[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,{level:3},"Add Transaction"),r.a.createElement(w.a,{name:"basic",initialValues:{remember:!0},onFinish:function(){var t={id:Math.floor(1e8*Math.random()),text:c,amount:+s};e(t)}},r.a.createElement(w.a.Item,{label:"Text ",name:"text",rules:[{required:!0,message:"Please add some text!"}]},r.a.createElement(F.a,{value:c,onChange:function(e){return l(e.target.value)}})),r.a.createElement(w.a.Item,{label:"Amount",name:"amount",rules:[{required:!0,message:"Please add amount!"}]},r.a.createElement(F.a,{type:"number",value:s,onChange:function(e){return i(e.target.value)}})),r.a.createElement(w.a.Item,null,r.a.createElement(S.a,{type:"primary",htmlType:"submit"},"Submit"))))},$=o.a.Header,M=o.a.Content,B=o.a.Footer,H=u.a.Title;var P=function(){return r.a.createElement(v,null,r.a.createElement(o.a,null,r.a.createElement($,{style:{position:"fixed",zIndex:1,width:"100%"}},r.a.createElement("div",{className:"logo"},r.a.createElement(H,{level:3,type:"warning"},"Expense Tracker App"))),r.a.createElement(M,{className:"site-layout",style:{padding:"0 50px",margin:"auto"}},r.a.createElement("div",{className:"site-layout-background",style:{padding:24,minHeight:500,marginTop:50}},r.a.createElement(h,null),r.a.createElement(C,null),r.a.createElement(_,null),r.a.createElement("hr",null),r.a.createElement(D,null))),r.a.createElement(B,{style:{textAlign:"center"}},"Expense Tracker \xa92020 Created by Abdullah Naser")))};l.a.render(r.a.createElement(P,null),document.getElementById("root"))}},[[153,1,2]]]);
//# sourceMappingURL=main.a3c240cd.chunk.js.map