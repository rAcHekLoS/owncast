"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2700],{44974:function(e,t,n){let r;n.d(t,{gG:function(){return i},me:function(){return V},FI:function(){return I},Q:function(){return L},L4:function(){return T},j$:function(){return k},vZ:function(){return j},g1:function(){return v},g8:function(){return P},db:function(){return _},ap:function(){return U},di:function(){return H},hz:function(){return M},YW:function(){return x},We:function(){return G},RI:function(){return O},pH:function(){return B},Gt:function(){return D}});var o,a,s,i,c=n(67294),l=n(4480),u=n(99717);let d=(0,c.createContext)(class{static async getConfig(){let e=await fetch("/api/config"),t=await e.json();return t}});var h=n(81453);let f=(0,c.createContext)(class{static async getChatHistory(e){try{let t=await (0,h.$l)("".concat("/api/chat","?accessToken=").concat(e));return t}catch(e){return[]}}static async registerUser(e){let t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({displayName:e})},n=await (0,h.$l)("/api/chat/register",t);return n}});var E=n(28997);class g{createAndConnect(){if(!this.host||this.isShutdown)return;let e=new URL(this.host);e.protocol="https:"===window.location.protocol?"wss:":"ws:",e.pathname="/ws",e.port="3000"===window.location.port?"8080":window.location.port,e.searchParams.append("accessToken",this.accessToken);let t=new WebSocket(e.toString());t.onopen=this.onOpen.bind(this),t.onerror=this.onError.bind(this),t.onmessage=this.onMessage.bind(this),this.websocket=t}onOpen(){this.websocketReconnectTimer&&clearTimeout(this.websocketReconnectTimer),this.socketConnected(),this.backOff=0}onError(){console.error("Chat has been disconnected and is likely not working for you. It's possible you were removed from chat. If this is a server configuration issue, visit troubleshooting steps to resolve. https://owncast.online/docs/troubleshooting/#chat-is-disabled"),this.socketDisconnected(),this.websocket.close(),this.isShutdown||this.scheduleReconnect()}scheduleReconnect(){this.isShutdown||(this.websocketReconnectTimer&&clearTimeout(this.websocketReconnectTimer),this.websocketReconnectTimer=setTimeout(this.createAndConnect,Math.min(this.backOff,1e4)),this.backOff+=1e3)}shutdown(){this.isShutdown=!0,this.websocket.close()}onMessage(e){let t;let n=e.data.split("\n");for(let e=0;e<n.length;e++){try{t=JSON.parse(n[e]),this.handleMessage&&this.handleMessage(t)}catch(e){console.error(e,e.data);return}if(!t.type){console.error("No type provided",t);return}if(t.type===E.C.PING){this.sendPong();return}}}isConnected(){var e,t;return(null===(e=this.websocket)||void 0===e?void 0:e.readyState)===(null===(t=this.websocket)||void 0===t?void 0:t.OPEN)}send(e){e.type&&E.C[e.type]||console.warn('Outbound message: Unknown socket message type: "'.concat(e.type,'" sent.'));let t=JSON.stringify(e);this.websocket.send(t)}sendPong(){let e={type:E.C.PONG};this.send(e)}constructor(e,t,n){this.isShutdown=!1,this.backOff=0,this.accessToken=e,this.path=t,this.websocketReconnectTimer=null,this.isShutdown=!1,this.host=n,this.createAndConnect=this.createAndConnect.bind(this),this.shutdown=this.shutdown.bind(this),this.createAndConnect()}}var p=n(4723);let y={chatAvailable:!0,chatLoading:!1,videoAvailable:!0,appLoading:!1};(o=s||(s={})).Loading="LOADING",o.Loaded="LOADED",o.Online="ONLINE",o.Offline="OFFLINE",o.NeedsRegister="NEEDS_REGISTER",o.Fail="FAIL",o.ChatUserDisabled="CHAT_USER_DISABLED";let w=(0,p.C)({id:"appState",initial:"loading",predictableActionArguments:!0,states:{loading:{meta:{chatAvailable:!1,chatLoading:!1,videoAvailable:!1,appLoading:!0},on:{NEEDS_REGISTER:{target:"loading"},LOADED:{target:"ready"},FAIL:{target:"serverFailure"}}},ready:{initial:"offline",states:{online:{meta:{...y},on:{OFFLINE:{target:"goodbye"},CHAT_USER_DISABLED:{target:"chatUserDisabled"}}},offline:{meta:{chatAvailable:!1,chatLoading:!1,videoAvailable:!1,appLoading:!1},on:{ONLINE:{target:"online"}}},goodbye:{on:{ONLINE:{target:"online"}},meta:{chatAvailable:!0,chatLoading:!1,videoAvailable:!1,appLoading:!1},after:{3e5:{target:"offline"}}},chatUserDisabled:{meta:{...y,chatAvailable:!1}}}},serverFailure:{type:"final"},userfailure:{type:"final"}}});var b=n(61225),m=n(63516);let S=(0,c.createContext)(class{static async getStatus(){let e=await fetch("/api/status"),t=await e.json();return t}});l.zl.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED=!1;let A="accessToken",N=!1,C=!1,R="Cannot connect to the Owncast service. Please check your internet connection and verify this Owncast server is running.",O=(0,l.cn)({key:"serverStatusState",default:{online:!1,viewerCount:0,serverTime:new Date}}),v=(0,l.cn)({key:"clientConfigState",default:{name:"",summary:"",offlineMessage:"",logo:"",tags:[],nsfw:!1,extraPageContent:"",socialHandles:[],chatDisabled:!1,externalActions:[],customStyles:"",appearanceVariables:new Map,maxSocketPayloadSize:0,federation:{enabled:!1,account:"",followerCount:0},notifications:{browser:{enabled:!1,publicKey:""}},authentication:{indieAuthEnabled:!1}}}),I=(0,l.cn)({key:"accessTokenAtom",default:null}),_=(0,l.cn)({key:"currentUserAtom",default:null}),k=(0,l.cn)({key:"chatMessages",default:[]}),T=(0,l.cn)({key:"chatAuthenticatedAtom",default:!1}),D=(0,l.cn)({key:"websocketServiceAtom",default:null,dangerouslyAllowMutability:!0}),L=(0,l.cn)({key:"appState",default:{chatAvailable:!1,chatLoading:!0,videoAvailable:!1,appLoading:!0}}),M=(0,l.cn)({key:"isMobileAtom",default:void 0}),G=(0,l.cn)({key:"isVideoPlayingAtom",default:!1}),U=(0,l.cn)({key:"fatalErrorStateAtom",default:null}),P=(0,l.cn)({key:"clockSkewAtom",default:0}),F=(0,l.cn)({key:"removedMessageIds",default:[]}),H=(0,l.nZ)({key:"isChatAvailableSelector",get:e=>{let{get:t}=e,n=t(L),r=t(I);return r&&n.chatAvailable&&!C}});(a=i||(i={}))[a.VISIBLE=0]="VISIBLE",a[a.HIDDEN=1]="HIDDEN",a[a.POPPED_OUT=2]="POPPED_OUT",a[a.EMBEDDED=3]="EMBEDDED";let j=(0,l.cn)({key:"chatState",default:(()=>{var e;let t=globalThis;return(null==t?void 0:null===(e=t.location)||void 0===e?void 0:e.pathname)==="/embed/chat/readwrite/"?i.EMBEDDED:i.VISIBLE})()}),x=(0,l.nZ)({key:"isOnlineSelector",get:e=>{let{get:t}=e,n=t(L),r=t(G);return n.videoAvailable||r}}),B=(0,l.nZ)({key:"visibleChatMessagesSelector",get:e=>{let{get:t}=e,n=t(k),r=t(F);return n.filter(e=>!r.includes(e.id))}}),V=()=>{let e;let t=(0,c.useContext)(d),n=(0,c.useContext)(f),o=(0,c.useContext)(S),[a,i,h]=(0,u.e)(w),[p,y]=(0,l.FV)(_),M=(0,l.Zl)(T),[G,H]=(0,l.FV)(v),j=(0,l.Zl)(O),x=(0,l.Zl)(P),B=(0,l.Zl)(k),[V,Y]=(0,l.FV)(I),Z=(0,l.Zl)(L),J=(0,l.Zl)(U),W=(0,l.Zl)(D),K=(0,l.Zl)(F),[Q,$]=(0,c.useState)(!1),X=(e,t)=>{J({title:e,message:t})},z=e=>{i(e)},q=e=>{if(a.matches("loading")){let t=[s.Loaded];e.online?t.push(s.Online):t.push(s.Offline),z(t);return}e.online&&a.matches("ready")?z([s.Online]):e.online||a.matches("ready.offline")||z([s.Offline])},ee=async()=>{try{let e=await t.getConfig();H(e),J(null),$(!0)}catch(e){X("Unable to reach Owncast server",R),console.error("ClientConfigService -> getConfig() ERROR: \n",e)}},et=async()=>{try{let e=await o.getStatus();q(e),j(e);let{serverTime:t}=e,n=new Date(t).getTime()-Date.now();x(n),J(null)}catch(e){z([s.Fail]),X("Unable to reach Owncast server",R),console.error("serverStatusState -> getStatus() ERROR: \n",e)}},en=async e=>{let t=(0,b.$o)(A);if(t){Y(t);return}try{z([s.NeedsRegister]);let t=await n.registerUser(e),{accessToken:r,displayName:o,displayColor:a}=t;if(!r)return;y({...p,displayName:o,displayColor:a}),Y(r),(0,b.qQ)(A,r)}catch(e){z([s.Fail]),console.error("ChatService -> registerUser() ERROR: \n".concat(e))}},er=()=>{var t;(0,b.qQ)(A,""),Y(null),null===(t=e)||void 0===t||t.shutdown(),en()},eo=e=>{let{ids:t,visible:n}=e;n?K(e=>e.filter(e=>!t.includes(e))):K(e=>[...e,...t])},ea=()=>{C=!0},es=()=>{C=!1},ei=e=>{var t;switch(e.type){case E.C.ERROR_NEEDS_REGISTRATION:er();break;case E.C.CONNECTED_USER_INFO:if(!function(e,t,n){let{user:r}=e,{id:o,displayName:a,displayColor:s,scopes:i,authenticated:c}=r;t(c),n({id:o.toString(),displayName:a,displayColor:s,isModerator:null==i?void 0:i.includes("MODERATOR")})}(e,M,y),e){let n=new E.s(e);!N&&(null===(t=n.user)||void 0===t?void 0:t.isModerator)&&(B(t=>[...t,e]),N=!0)}break;case E.C.CHAT:B(t=>[...t,e]);break;case E.C.NAME_CHANGE:y(t=>t.id===e.user.id?{...t,displayName:e.user.displayName}:t),B(t=>[...t,e]);break;case E.C.USER_JOINED:B(t=>[...t,e]);break;case E.C.USER_PARTED:B(t=>[...t,e]);break;case E.C.SYSTEM:B(t=>[...t,e]);break;case E.C.CHAT_ACTION:B(t=>[...t,e]);break;case E.C.FEDIVERSE_ENGAGEMENT_FOLLOW:B(t=>[...t,e]);break;case E.C.FEDIVERSE_ENGAGEMENT_LIKE:B(t=>[...t,e]);break;case E.C.FEDIVERSE_ENGAGEMENT_REPOST:B(t=>[...t,e]);break;case E.C.VISIBILITY_UPDATE:eo(e);break;case E.C.ERROR_USER_DISABLED:console.log("User has been disabled"),z([s.ChatUserDisabled]);break;default:console.error("Unknown socket message type: ",e.type)}},ec=async()=>{try{let e=await n.getChatHistory(V);e&&B(t=>[...t,...e])}catch(e){console.error("ChatService -> getChatHistory() ERROR: \n".concat(e))}},el=async()=>{try{if(e){var t;null===(t=e)||void 0===t||t.shutdown(),W(null),e=null}let{socketHostOverride:n}=G,r=window.location;r.hash="";let o=r.toString().replaceAll("#",""),a=n||o;(e=new g(V,"/ws",a)).handleMessage=ei,e.socketDisconnected=ea,e.socketConnected=es,W(e)}catch(e){console.error("ChatService -> startChat() ERROR: \n".concat(e)),z([s.ChatUserDisabled])}};return(0,c.useEffect)(()=>{try{if(window.configHydration){let e=JSON.parse(window.configHydration);H(e),$(!0)}}catch(e){console.error("Error parsing config hydration",e)}try{if(window.statusHydration){let e=JSON.parse(window.statusHydration);j(e),q(e)}}catch(e){console.error("error parsing status hydration",e)}try{window.configHydration&&window.statusHydration&&z([s.Loaded])}catch(e){console.error("error sending loaded event",e)}},[]),(0,c.useEffect)(()=>{!G.chatDisabled&&V&&Q&&!e&&el()},[Q,V]),(0,c.useEffect)(()=>(window.configHydration||ee(),en(),window.statusHydration||et(),clearInterval(r),r=setInterval(()=>{et()},5e3),()=>{clearInterval(r)}),[]),(0,c.useEffect)(()=>{V&&ec()},[V]),(0,c.useEffect)(()=>{h.onTransition(e=>{let t=(0,m.YR)(e.meta);Z(t)})},[]),null}},21756:function(e,t,n){n.d(t,{Q:function(){return l}});var r=n(85893),o=n(9008),a=n.n(o),s=n(67294),i=n(4480),c=n(44974);let l=()=>{let e=(0,i.sJ)(c.g1),{appearanceVariables:t,customStyles:n}=e,o=Object.keys(t||{}).filter(e=>!!t[e]).map(e=>"--".concat(e,": ").concat(t[e])),[l,u]=(0,s.useState)("#fff");return(0,s.useEffect)(()=>{let e=getComputedStyle(document.documentElement).getPropertyValue("--theme-color-background-header");u(e)},[o]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a(),{children:(0,r.jsx)("meta",{name:"theme-color",content:l})}),(0,r.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n				:root {\n					".concat(o.join(";\n"),"\n				}\n			")}}),(0,r.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n				".concat(n,"\n			")}})]})}},69183:function(e,t,n){n.d(t,{A:function(){return c}});var r=n(85893),o=n(4863),a=n(65400);let s=()=>{window.open("https://github.com/owncast/owncast/issues/new?assignees=&labels=&template=bug-report-feature-request.yml","_blank")},i=e=>{let{message:t,componentName:n,details:o,canRetry:a}=e;return(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"There was an unexpected error. It would be appreciated if you would report this so it can be fixed in the future."}),!!a&&(0,r.jsx)("p",{children:"You may optionally retry, however functionality might not work as expected."}),(0,r.jsxs)("code",{children:[(0,r.jsx)("div",{children:t&&"Error: ".concat(t)}),(0,r.jsxs)("div",{children:["Component: ",n]}),(0,r.jsx)("div",{children:o&&o})]})]})},c=e=>{let{message:t,componentName:n,details:c,retryFunction:l}=e;return(0,r.jsx)(o.default,{message:"Error",showIcon:!0,description:(0,r.jsx)(i,{message:t,details:c,componentName:n,canRetry:!!l}),type:"error",action:(0,r.jsxs)(r.Fragment,{children:[l&&(0,r.jsx)(a.default,{ghost:!0,size:"small",onClick:l,children:"Retry"}),(0,r.jsx)(a.default,{ghost:!0,size:"small",danger:!0,onClick:s,children:"Report Error"})]})})}},28997:function(e,t,n){n.d(t,{C:function(){return o},s:function(){return s}});var r,o,a=n(25449);(r=o||(o={})).CHAT="CHAT",r.PING="PING",r.NAME_CHANGE="NAME_CHANGE",r.COLOR_CHANGE="COLOR_CHANGE",r.PONG="PONG",r.SYSTEM="SYSTEM",r.USER_JOINED="USER_JOINED",r.USER_PARTED="USER_PARTED",r.CHAT_ACTION="CHAT_ACTION",r.FEDIVERSE_ENGAGEMENT_FOLLOW="FEDIVERSE_ENGAGEMENT_FOLLOW",r.FEDIVERSE_ENGAGEMENT_LIKE="FEDIVERSE_ENGAGEMENT_LIKE",r.FEDIVERSE_ENGAGEMENT_REPOST="FEDIVERSE_ENGAGEMENT_REPOST",r.CONNECTED_USER_INFO="CONNECTED_USER_INFO",r.ERROR_USER_DISABLED="ERROR_USER_DISABLED",r.ERROR_NEEDS_REGISTRATION="ERROR_NEEDS_REGISTRATION",r.ERROR_MAX_CONNECTIONS_EXCEEDED="ERROR_MAX_CONNECTIONS_EXCEEDED",r.VISIBILITY_UPDATE="VISIBILITY-UPDATE";class s{constructor(e){this.id=e.id,this.timestamp=e.timestamp,this.type=e.type,this.body=e.body,e.user&&(this.user=new a.n(e.user))}}},25449:function(e,t,n){n.d(t,{n:function(){return r}});class r{constructor(e){this.id=e.id,this.displayName=e.displayName,this.displayColor=e.displayColor,this.createdAt=e.createdAt,this.previousNames=e.previousNames,this.nameChangedAt=e.nameChangedAt,this.scopes=e.scopes,this.authenticated=e.authenticated,this.isBot=e.isBot,this.scopes&&this.scopes.length>0&&(this.isModerator=this.scopes.includes("MODERATOR"))}}},81453:function(e,t,n){n.d(t,{$i:function(){return M},$l:function(){return Z},Bu:function(){return y},E8:function(){return P},Ff:function(){return v},GC:function(){return m},GR:function(){return Q},HP:function(){return U},IO:function(){return k},Kp:function(){return E},Kt:function(){return W},M_:function(){return D},N$:function(){return x},NE:function(){return c},NM:function(){return p},Q_:function(){return l},Qc:function(){return O},RB:function(){return w},UJ:function(){return V},WB:function(){return s},WE:function(){return C},WQ:function(){return N},Wr:function(){return _},XA:function(){return T},Y9:function(){return F},a_:function(){return f},ao:function(){return d},bl:function(){return u},e_:function(){return G},hn:function(){return R},iG:function(){return L},iV:function(){return h},jr:function(){return b},kb:function(){return H},kg:function(){return J},ms:function(){return I},nx:function(){return S},op:function(){return j},qk:function(){return g},rQ:function(){return Y},sG:function(){return A},um:function(){return B}});var r=n(34155);let o=r.env.NEXT_PUBLIC_ADMIN_USERNAME,a=r.env.NEXT_PUBLIC_ADMIN_STREAMKEY,s="/",i="".concat(s,"api/admin/"),c=15e3,l="".concat(i,"status"),u="".concat(i,"serverconfig"),d="".concat(i,"config"),h="".concat(i,"viewersOverTime"),f="".concat(i,"viewers"),E="".concat(i,"chat/clients"),g="".concat(i,"chat/users/disabled"),p="".concat(i,"chat/users/setenabled"),y="".concat(i,"chat/users/ipbans"),w="".concat(i,"chat/users/ipbans/remove"),b="".concat(i,"chat/users/setmoderator"),m="".concat(i,"chat/users/moderators"),S="".concat(i,"hardwarestats"),A="".concat(i,"logs"),N="".concat(i,"logs/warnings"),C="".concat(i,"chat/messages"),R="/api/admin/chat/messagevisibility",O="".concat(i,"emoji/upload"),v="".concat(i,"emoji/delete"),I="".concat(i,"accesstokens"),_="".concat(i,"accesstokens/delete"),k="".concat(i,"accesstokens/create"),T="".concat(i,"webhooks"),D="".concat(i,"webhooks/delete"),L="".concat(i,"webhooks/create"),M="".concat(s,"api/socialplatforms"),G="".concat(i,"federation/send"),U="".concat(i,"followers"),P="".concat(i,"followers/pending"),F="".concat(i,"followers/blocked"),H="".concat(i,"followers/approve"),j="".concat(i,"federation/actions"),x="".concat(i,"metrics/video"),B="".concat(i,"config/streamkeys"),V="".concat(i,"yp/reset");async function Y(e,t){let{data:n,method:r="GET",auth:s=!0}=t||{},i={method:r};if(n&&(i.body=JSON.stringify(n)),s&&o&&a){let e=btoa("".concat(o,":").concat(a));i.headers={Authorization:"Basic ".concat(e)},i.mode="cors",i.credentials="include"}let c=await fetch(e,i),l=await c.json();if(!c.ok){let e=l.message||"An error has occurred: ".concat(c.status);throw Error(e)}return l}async function Z(e,t){let n={method:"GET",auth:!1,...t};return Y(e,n)}async function J(e){try{let t=await fetch(e,{referrerPolicy:"no-referrer",referrer:""});if(!t.ok){let e="An error has occured: ".concat(t.status);throw Error(e)}let n=await t.json();return n}catch(e){console.log(e)}return{}}async function W(){return J("https://api.github.com/repos/owncast/owncast/releases/latest")}let K=/^\d+(\.\d+){0,2}$/;async function Q(e){let t=await W(),n=t.tag_name;return("v"===n.substr(0,1)&&(n=n.substr(1)),!function(e,t){if(!e||!t||0===e.length||0===t.length)return!1;if(e===t)return!0;if(K.test(e)&&K.test(t)){let n=e.split(".");for(;n.length<3;)n.push("0");let r=t.split(".");for(;r.length<3;)r.push("0");for(let e=0;e<3;e++){let t=parseInt(n[e],10),o=parseInt(r[e],10);if(t!==o)return t>o}return!0}return e>=t}(e,n))?n:null}},63516:function(e,t,n){n.d(t,{C9:function(){return c},Xb:function(){return s},YR:function(){return i},_6:function(){return a},rZ:function(){return l}});var r=n(42238),o=n.n(r);function a(e,t){return 1===t?e:"".concat(e,"s")}function s(e){let t="string"==typeof e?new Date(e):e;return(new Date-t)/864e5}function i(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return Object.assign(t,r),t},{})}let c=()=>{try{let e=navigator.userAgent,t=new(o())(e),n=t.getBrowser(),r=t.getDevice();if("Apple"!==r.vendor||"mobile"!==r.type&&"tablet"!==r.type)return!1;return"Mobile Safari"===n.name||"Safari"===n.name}catch(e){return!1}},l=()=>!!c()&&"standalone"in window.navigator&&window.navigator.standalone},61225:function(e,t,n){n.d(t,{$o:function(){return o},dA:function(){return r},qQ:function(){return a}});let r={username:"username",hasDisplayedNotificationModal:"HAS_DISPLAYED_NOTIFICATION_MODAL",userVisitCount:"USER_VISIT_COUNT"};function o(e){try{return localStorage.getItem(e)}catch(e){console.error(e)}return null}function a(e,t){try{return""!==t&&null!==t?localStorage.setItem(e,t):localStorage.removeItem(e),!0}catch(e){console.error(e)}return!1}}}]);