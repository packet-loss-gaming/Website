(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{NlRO:function(e,n,t){"use strict";t.r(n);var r=t("q1tI"),a=t.n(r),s=t("sl+q"),u=t("6yR0"),o=t("Ik23"),l=t("ln6h"),c=t.n(l),i=t("O40h"),f=t("0iUn"),d=t("sLSF"),h=t("MI3g"),p=t("a7VT"),m=t("AT/M"),v=t("Tit0"),b=t("hfKm"),w=t.n(b);function g(e,n,t){return n in e?w()(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t("zgjP");var E=function(e){function n(){var e,t;Object(f.default)(this,n);for(var r=arguments.length,s=new Array(r),u=0;u<r;u++)s[u]=arguments[u];return t=Object(h.default)(this,(e=Object(p.default)(n)).call.apply(e,[this].concat(s))),g(Object(m.default)(t),"getChannelIndent",function(e){return 0===e?0:40}),g(Object(m.default)(t),"getUserIndent",function(e){return 40}),g(Object(m.default)(t),"renderChannelName",function(e,n){return 0===n?null:a.a.createElement("span",{className:"font-weight-bold"},a.a.createElement("span",{className:"oi oi-people pr-2",title:"icon name","aria-hidden":"true"}),e.name)}),g(Object(m.default)(t),"renderChannelUsers",function(e,n){var r=[];return e.users.forEach(function(e){var s={marginLeft:t.getUserIndent(n)+"px"};r.push(a.a.createElement("div",{style:s},a.a.createElement("span",{className:"oi oi-person pr-2",title:"icon name","aria-hidden":"true"}),e))}),r}),g(Object(m.default)(t),"renderSubChannels",function(e,n){var r=[];return e.channels.forEach(function(e){r.push(t.renderChannel(e,n+1))}),r}),g(Object(m.default)(t),"renderChannel",function(e,n){var r={marginLeft:t.getChannelIndent(n)+"px"};return a.a.createElement("div",{className:"mt-1",style:r},t.renderChannelName(e,n),t.renderChannelUsers(e,n),t.renderSubChannels(e,n))}),t}return Object(v.default)(n,e),Object(d.default)(n,[{key:"componentDidMount",value:function(){var e=Object(i.default)(c.a.mark(function e(){var n,t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.packetloss.gg/voip/current-users");case 2:return n=e.sent,e.next=5,n.json();case 5:t=e.sent,this.setState(function(e){return{rootChannel:t}});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e;return e=this.state?this.renderChannel(this.state.rootChannel,0):a.a.createElement("div",{className:"d-flex justify-content-center mt-5"},a.a.createElement("div",{className:"spinner-border",role:"status"},a.a.createElement("span",{className:"sr-only"},"Loading..."))),a.a.createElement("div",null,e)}}]),n}(a.a.Component);n.default=function(){return a.a.createElement("div",null,a.a.createElement(s.a,null,a.a.createElement("title",null,"Packet Loss Gaming - VoIP Current Users"),a.a.createElement("script",{charSet:"UTF-8",src:"/static/scripts/voip/current-user-notification-bootstrap.js"})),a.a.createElement(u.a,null),a.a.createElement(o.a,null,a.a.createElement("h1",null,"VoIP Current Users"),a.a.createElement(E,null)))}},bRzj:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/voip/current-users",function(){var e=t("NlRO");return{page:e.default||e}}])},"m/Gl":function(e,n,t){"use strict";t.r(n),n.default=function(e,n){return n=n||{},new Promise(function(t,r){var a=new XMLHttpRequest;for(var s in a.open(n.method||"get",e,!0),n.headers)a.setRequestHeader(s,n.headers[s]);function u(){var e,n=[],t=[],r={};return a.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(a,s,u){n.push(s=s.toLowerCase()),t.push([s,u]),r[s]=(e=r[s])?e+","+u:u}),{ok:2==(a.status/100|0),status:a.status,statusText:a.statusText,url:a.responseURL,clone:u,text:function(){return Promise.resolve(a.responseText)},json:function(){return Promise.resolve(a.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([a.response]))},headers:{keys:function(){return n},entries:function(){return t},get:function(e){return r[e.toLowerCase()]},has:function(e){return e.toLowerCase()in r}}}}a.withCredentials="include"==n.credentials,a.onload=function(){t(u())},a.onerror=r,a.send(n.body||null)})}},zgjP:function(e,n,t){e.exports=window.fetch||(window.fetch=t("m/Gl").default||t("m/Gl"))}},[["bRzj",1,0]]]);