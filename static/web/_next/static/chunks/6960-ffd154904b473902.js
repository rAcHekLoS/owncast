"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6960],{73615:function(e,t,a){a.d(t,{E:function(){return r}});var n=a(85893);a(67294);var s=a(94184),i=a.n(s);let r=e=>{let{status:t}=e,{type:a,icon:s,message:r}=t||{},l=i()({"status-container":!0,["status-".concat(a)]:a,empty:!r});return(0,n.jsxs)("span",{className:l,children:[s?(0,n.jsx)("span",{className:"status-icon",children:s}):null,r?(0,n.jsx)("span",{className:"status-message",children:r}):null]})};t.Z=r},79139:function(e,t,a){a.d(t,{A8:function(){return f},Kx:function(){return m},Sk:function(){return g},mG:function(){return p},nv:function(){return y},xA:function(){return b}});var n=a(85893),s=a(67294),i=a(94184),r=a.n(i),l=a(79292),o=a(79531),c=a(79915),u=a(71577),d=a(73615),h=a(90745);let m="default",f="password",p="numeric",g="textarea",b="url",y=e=>{let{className:t,disabled:a,fieldName:i,label:m,maxLength:y,onBlur:x,onChange:v,onPressEnter:w,onHandleSubmit:j,pattern:P,placeholder:k,required:N,status:L,tip:S,type:C,useTrim:T,value:E,hasComplexityRequirements:A}=e,[O,Z]=(0,s.useState)(!1),[U,q]=(0,s.useState)(!1),[G]=l.Z.useForm(),M=e=>{if(v){let t=C===p?e:e.target.value;q(!0),A&&h.Uq.test(t)?Z(!0):Z(!1),v({fieldName:i,value:T?t.trim():t})}};(0,s.useEffect)(()=>{G.setFieldsValue({inputFieldPassword:E})},[E]);let D=e=>{let t=e.target.value;x&&x({value:t})},F=()=>{w&&w()},R=[],H=o.Z,I={};C===g?(H=o.Z.TextArea,I={autoSize:!0}):C===f?(h.RQ.forEach(e=>{R.push(e)}),H=o.Z.Password,I={visibilityToggle:!0}):C===p?(H=c.Z,I={type:"number",min:1,max:10**y-1}):C===b&&(I={type:"url",pattern:P});let z="field-".concat(i),{type:B}=L||{},_=r()({"formfield-container":!0,"textfield-container":!0,["type-".concat(C)]:!0,required:N,["status-".concat(B)]:L});return(0,n.jsxs)("div",{className:_,children:[m?(0,n.jsx)("div",{className:"label-side",children:(0,n.jsx)("label",{htmlFor:z,className:"formfield-label",children:m})}):null,A?(0,n.jsx)("div",{className:"input-side",children:(0,n.jsx)("div",{className:"input-group",children:(0,n.jsxs)(l.Z,{name:"basic",form:G,initialValues:{inputFieldPassword:E},style:{width:"100%"},children:[(0,n.jsx)(l.Z.Item,{name:"inputFieldPassword",rules:R,children:(0,n.jsx)(o.Z.Password,{id:z,className:"field ".concat(t," ").concat(z),onChange:M,onBlur:D,placeholder:k,onPressEnter:F,disabled:a,value:E})}),U&&(0,n.jsx)("div",{style:{display:"flex",flexDirection:"row-reverse"},children:(0,n.jsx)(u.Z,{type:"primary",size:"small",className:"submit-button",onClick:j,disabled:!O,children:"Update"})}),(0,n.jsx)(d.E,{status:L}),(0,n.jsx)("p",{className:"field-tip",children:S})]})})}):(0,n.jsxs)("div",{className:"input-side",children:[(0,n.jsx)("div",{className:"input-group",children:(0,n.jsx)(H,{id:z,className:"field ".concat(t," ").concat(z),...I,...C!==p&&{allowClear:!0},placeholder:k,maxLength:y,onChange:M,onBlur:D,onPressEnter:F,disabled:a,value:E})}),(0,n.jsx)(d.E,{status:L}),(0,n.jsx)("p",{className:"field-tip",children:S})]})]})};y.defaultProps={className:"",disabled:!1,label:"",maxLength:255,placeholder:"",required:!1,status:null,tip:"",type:m,value:"",pattern:"",useTrim:!1,useTrimLead:!1,hasComplexityRequirements:!1,onSubmit:()=>{},onBlur:()=>{},onChange:()=>{},onPressEnter:()=>{},onHandleSubmit:()=>{}}},46551:function(e,t,a){a.d(t,{$7:function(){return p},Sk:function(){return m},xA:function(){return f}});var n=a(85893),s=a(71577),i=a(94184),r=a.n(i),l=a(67294),o=a(90745),c=a(41983),u=a(99519),d=a(73615),h=a(79139);let m="textarea",f="url",p=e=>{let{apiPath:t,configPath:a="",initialValue:i,useTrim:m,useTrimLead:f,...p}=e,[g,b]=(0,l.useState)(null),[y,x]=(0,l.useState)(!1),v=(0,l.useContext)(u.aC),{setFieldInConfigState:w}=v||{},j=null,{fieldName:P,required:k,tip:N,status:L,value:S,hasComplexityRequirements:C,onChange:T,onSubmit:E}=p,A=()=>{b(null),x(!1),clearTimeout(j),j=null};(0,l.useEffect)(()=>{k&&(""===S||null===S)||S===i?x(!1):(A(),x(!0))},[S]);let O=e=>{let{fieldName:t,value:a}=e;if(T){let e=a;m?e=a.trim():f&&(e=a.replace(/^\s+/g,"")),T({fieldName:t,value:e})}},Z=e=>{let{value:t}=e;T&&k&&""===t&&T({fieldName:P,value:i})},U=async()=>{(k&&""!==S||S!==i)&&(b((0,c.kg)(c.Jk)),await (0,o.Si)({apiPath:t,data:{value:S},onSuccess:()=>{w({fieldName:P,value:S,path:a}),b((0,c.kg)(c.zv))},onError:e=>{b((0,c.kg)(c.Un,"There was an error: ".concat(e)))}}),j=setTimeout(A,o.sI),E&&E())},q=r()({"textfield-with-submit-container":!0,submittable:y});return(0,n.jsxs)("div",{className:q,children:[(0,n.jsx)("div",{className:"textfield-component",children:(0,n.jsx)(h.nv,{...p,onSubmit:null,onBlur:Z,onChange:O,onHandleSubmit:U})}),(0,n.jsxs)("div",{className:"formfield-container lower-container",children:[(0,n.jsx)("p",{className:"label-spacer"}),(0,n.jsxs)("div",{className:"lower-content",children:[(0,n.jsx)("div",{className:"field-tip",children:N}),(0,n.jsx)(d.E,{status:L||g}),(0,n.jsx)("div",{className:"update-button-container",children:!C&&(0,n.jsx)(s.Z,{type:"primary",size:"small",className:"submit-button",onClick:U,disabled:!y,children:"Update"})})]})]})]})};p.defaultProps={configPath:"",initialValue:""}},6960:function(e,t,a){a.d(t,{l:function(){return B}});var n=a(85893),s=a(99519),i=a(82661),r=a(67294),l=a(41664),o=a.n(l),c=a(9008),u=a.n(c),d=a(11699),h=a(11163),m=a(97183),f=a(14670),p=a(66516),g=a(26713),b=a(94199),y=a(71577),x=a(94184),v=a.n(x),w=a(5152),j=a.n(w),P=a(64777),k=a(70241),N=a(50738),L=a(46551),S=a(90745),C=a(79531),T=a(85402),E=a(41983);let{TextArea:A}=C.Z,O=e=>{let{open:t,handleClose:a}=e,[s,i]=(0,r.useState)(""),[l,o]=(0,r.useState)(!1),[c,u]=(0,r.useState)(null);function d(){o(!1),u(null),a()}async function h(){o(!0);try{await (0,P.rQ)(P.e_,{data:{value:s},method:"POST",auth:!0}),u(E.zv),setTimeout(d,1e3)}catch(e){console.error(e),u(E.Un)}o(!1)}return(0,n.jsxs)(T.Z,{destroyOnClose:!0,width:600,title:"Post to Followers",open:t,onCancel:a,footer:[(0,n.jsx)(y.Z,{onClick:()=>a(),children:"Cancel"}),(0,n.jsx)(y.Z,{type:"primary",onClick:h,disabled:l||c,loading:l,children:(null==c?void 0:c.toUpperCase())||"Post"})],children:[(0,n.jsx)("h3",{children:"Tell the world about your future streaming plans or let your followers know to tune in."}),(0,n.jsx)(A,{placeholder:"I'm still live, come join me!",size:"large",showCount:!0,maxLength:500,style:{height:"150px",width:"100%"},onChange:function(e){i(e.target.value)}})]})},Z=j()(()=>Promise.all([a.e(2074),a.e(1264)]).then(a.t.bind(a,63126,23)),{loadableGenerated:{webpack:()=>[63126]},ssr:!1}),U=j()(()=>Promise.all([a.e(2074),a.e(863)]).then(a.t.bind(a,50863,23)),{loadableGenerated:{webpack:()=>[50863]},ssr:!1}),q=j()(()=>Promise.all([a.e(2074),a.e(9073)]).then(a.t.bind(a,99073,23)),{loadableGenerated:{webpack:()=>[99073]},ssr:!1}),G=j()(()=>Promise.all([a.e(2074),a.e(7090)]).then(a.t.bind(a,87090,23)),{loadableGenerated:{webpack:()=>[87090]},ssr:!1}),M=j()(()=>Promise.all([a.e(2074),a.e(4927)]).then(a.t.bind(a,64927,23)),{loadableGenerated:{webpack:()=>[64927]},ssr:!1}),D=j()(()=>Promise.all([a.e(2074),a.e(7434)]).then(a.t.bind(a,27434,23)),{loadableGenerated:{webpack:()=>[27434]},ssr:!1}),F=j()(()=>Promise.all([a.e(2074),a.e(3840)]).then(a.t.bind(a,3840,23)),{loadableGenerated:{webpack:()=>[3840]},ssr:!1}),R=j()(()=>Promise.all([a.e(2074),a.e(5672)]).then(a.t.bind(a,65672,23)),{loadableGenerated:{webpack:()=>[65672]},ssr:!1}),H=j()(()=>Promise.all([a.e(2074),a.e(7123)]).then(a.t.bind(a,85258,23)),{loadableGenerated:{webpack:()=>[85258]},ssr:!1}),I=j()(()=>Promise.all([a.e(2074),a.e(775)]).then(a.t.bind(a,10775,23)),{loadableGenerated:{webpack:()=>[10775]},ssr:!1}),z=e=>{let{children:t}=e,a=(0,r.useContext)(s.aC),{serverConfig:l,online:c,broadcaster:x,versionNumber:w}=a||{},{instanceDetails:j,chatDisabled:C,federation:T}=l,{enabled:E}=T,[A,z]=(0,r.useState)(""),[B,_]=(0,r.useState)(!1),V=(0,r.useContext)(i.k),W=(0,h.useRouter)(),{route:K}=W||{},{Header:Q,Footer:$,Content:J,Sider:X}=m.Z,[Y,ee]=(0,r.useState)(""),et=async()=>{try{let e=await (0,P.GR)(w);ee(e)}catch(e){console.log("==== error",e)}};(0,r.useEffect)(()=>{et()},[w]),(0,r.useEffect)(()=>{z(j.streamTitle)},[j]);let ea=e=>{let{value:t}=e;z(t)},en=()=>{_(!0)},es=v()({"app-container":!0,online:c}),ei=()=>{V.setMessage(null)},er=V.message?(0,n.jsx)(f.Z,{message:V.message,afterClose:ei,banner:!0,closable:!0}):null,el=x?(0,k.wS)((0,d.Z)(new Date,new Date(x.time))):"",eo=c?(0,n.jsx)(M,{}):(0,n.jsx)(D,{}),ec=(0,n.jsxs)("div",{className:"online-status-indicator",children:[(0,n.jsx)("span",{className:"status-label",children:c?"Online ".concat(el):"Offline"}),(0,n.jsx)("span",{className:"status-icon",children:eo})]}),eu=[{label:(0,n.jsx)(o(),{href:"/admin/webhooks",children:"Webhooks"}),key:"webhooks"},{label:(0,n.jsx)(o(),{href:"/admin/access-tokens",children:"Access Tokens"}),key:"access-tokens"},{label:(0,n.jsx)(o(),{href:"/admin/actions",children:"External Actions"}),key:"actions"}],ed=[{label:(0,n.jsx)(o(),{href:"/admin/chat/messages",children:"Messages"}),key:"messages"},{label:(0,n.jsx)(o(),{href:"/admin/chat/users",children:"Users"}),key:"chat-users"},{label:(0,n.jsx)(o(),{href:"/admin/chat/emojis",children:"Emojis"}),key:"emojis"}],eh=[{label:(0,n.jsx)(o(),{href:"/admin/hardware-info",children:"Hardware"}),key:"hardware-info"},{label:(0,n.jsx)(o(),{href:"/admin/stream-health",children:"Stream Health"}),key:"stream-health"},{label:(0,n.jsx)(o(),{href:"/admin/logs",children:"Logs"}),key:"logs"},E&&{label:(0,n.jsx)(o(),{href:"/admin/federation/actions",children:"Social Actions"}),key:"federation-activities"}],em=[{label:(0,n.jsx)(o(),{href:"/admin/config/general",children:"General"}),key:"config-public-details"},{label:(0,n.jsx)(o(),{href:"/admin/config/server",children:"Server Setup"}),key:"config-server"},{label:(0,n.jsx)(o(),{href:"/admin/config-video",children:"Video"}),key:"config-video"},{label:(0,n.jsx)(o(),{href:"/admin/config-chat",children:"Chat"}),key:"config-chat"},{label:(0,n.jsx)(o(),{href:"/admin/config-federation",children:"Social"}),key:"config-federation"},{label:(0,n.jsx)(o(),{href:"/admin/config-notify",children:"Notifications"}),key:"config-notify"}],ef=[{label:(0,n.jsx)(o(),{href:"/admin",children:"Home"}),icon:(0,n.jsx)(U,{}),key:"home"},{label:(0,n.jsx)(o(),{href:"/admin/viewer-info",children:"Viewers"}),icon:(0,n.jsx)(q,{}),key:"viewer-info"},!C&&{label:(0,n.jsx)("span",{children:"Chat & Users"}),icon:(0,n.jsx)(R,{}),children:ed,key:"chat-and-users"},E&&{key:"fediverse-followers",label:(0,n.jsx)(o(),{href:"/admin/federation/followers",children:"Followers"}),icon:(0,n.jsx)("img",{alt:"fediverse icon",src:"/img/fediverse-black.png",width:"17rem",style:{opacity:.6,position:"relative",top:"-1px"}})},{key:"configuration",label:"Configuration",icon:(0,n.jsx)(Z,{}),children:em},{key:"utilities",label:"Utilities",icon:(0,n.jsx)(G,{}),children:eh},{key:"integrations",label:"Integrations",icon:(0,n.jsx)(H,{}),children:eu},Y&&{key:"upgrade",label:(0,n.jsx)(o(),{href:"/admin/upgrade",children:"Upgrade to v".concat("".concat(Y)||"")})},{key:"help",label:(0,n.jsx)(o(),{href:"/admin/help",children:"Help"}),icon:(0,n.jsx)(F,{})}];return(0,n.jsxs)(m.Z,{className:es,children:[(0,n.jsxs)(u(),{children:[(0,n.jsx)("title",{children:"Owncast Admin"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/img/favicon/favicon-32x32.png"})]}),(0,n.jsxs)(X,{width:240,className:"side-nav",children:[(0,n.jsxs)("h1",{className:"owncast-title",children:[(0,n.jsx)("span",{className:"logo-container",children:(0,n.jsx)(N.C,{variant:"simple"})}),(0,n.jsx)("span",{className:"title-label",children:"Owncast Admin"})]}),(0,n.jsx)(p.Z,{defaultSelectedKeys:[K.substring(1)||"home"],defaultOpenKeys:Y?["utilities-menu"]:[],mode:"inline",className:"menu-container",items:ef})]}),(0,n.jsxs)(m.Z,{className:"layout-main",children:[(0,n.jsxs)(Q,{className:"layout-header",children:[(0,n.jsx)(g.Z,{direction:"horizontal",children:(0,n.jsx)(b.Z,{title:"Compose post to your social followers",children:(0,n.jsx)(y.Z,{type:"link",icon:(0,n.jsx)(I,{}),size:"small",onClick:en,style:{display:E?"block":"none",margin:"10px"},children:"Compose Post"})})}),(0,n.jsx)("div",{className:"global-stream-title-container",children:(0,n.jsx)(L.$7,{fieldName:"streamTitle",...S.$t,placeholder:"What are you streaming now? (Stream title)",value:A,initialValue:j.streamTitle,onChange:ea})}),(0,n.jsx)(g.Z,{direction:"horizontal",children:ec})]}),er,(0,n.jsx)(J,{className:"main-content-container",children:t}),(0,n.jsx)($,{className:"footer-container",children:(0,n.jsxs)("a",{href:"https://owncast.online/?source=admin",target:"_blank",rel:"noopener noreferrer",children:["About Owncast v",w]})})]}),(0,n.jsx)(O,{open:B,handleClose:()=>_(!1)})]})},B=e=>{let{page:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("link",{rel:"stylesheet",href:"/styles/admin/main-layout.css"}),(0,n.jsx)("link",{rel:"stylesheet",href:"/styles/admin/form-textfields.css"}),(0,n.jsx)("link",{rel:"stylesheet",href:"/styles/admin/config-socialhandles.css"}),(0,n.jsx)("link",{rel:"stylesheet",href:"/styles/admin/config-storage.css"}),(0,n.jsx)("link",{rel:"stylesheet",href:"/styles/admin/config-edit-string-tags.css"}),(0,n.jsx)("link",{rel:"stylesheet",href:"/styles/admin/config-video-variants.css"}),(0,n.jsx)("link",{rel:"stylesheet",href:"/styles/admin/config-public-details.css"}),(0,n.jsx)("link",{rel:"stylesheet",href:"/styles/admin/home.css"}),(0,n.jsx)("link",{rel:"stylesheet",href:"/styles/admin/chat.css"}),(0,n.jsx)(s.ZP,{children:(0,n.jsx)(i.Z,{children:(0,n.jsx)(z,{children:t})})})]})}},82661:function(e,t,a){a.d(t,{k:function(){return i}});var n=a(85893),s=a(67294);let i=s.createContext({message:null,setMessage:e=>null}),r=e=>{let{children:t}=e,[a,r]=(0,s.useState)("");return(0,n.jsx)(i.Provider,{value:{message:a,setMessage:r},children:t})};t.Z=r},90745:function(e,t,a){a.d(t,{$t:function(){return k},$w:function(){return h},AA:function(){return l},AN:function(){return B},AP:function(){return g},BF:function(){return K},B_:function(){return J},CJ:function(){return b},CQ:function(){return v},Dg:function(){return z},EY:function(){return G},FE:function(){return W},HM:function(){return ei},I$:function(){return el},IX:function(){return S},JZ:function(){return c},KB:function(){return E},Kl:function(){return _},LC:function(){return V},ME:function(){return U},P:function(){return M},RE:function(){return P},RQ:function(){return ef},SS:function(){return es},Si:function(){return j},Uq:function(){return ep},Xc:function(){return Q},Xq:function(){return et},ZQ:function(){return C},_X:function(){return D},c9:function(){return m},cf:function(){return y},cj:function(){return Z},d$:function(){return o},dL:function(){return Y},dR:function(){return X},dj:function(){return I},gX:function(){return F},i3:function(){return eo},kB:function(){return H},lT:function(){return O},mv:function(){return em},nm:function(){return ee},os:function(){return x},oy:function(){return eh},pE:function(){return w},rE:function(){return A},rd:function(){return L},rs:function(){return N},sI:function(){return r},sv:function(){return f},t$:function(){return er},tQ:function(){return T},vv:function(){return p},wC:function(){return ec},x8:function(){return ea},yC:function(){return en},y_:function(){return q},yi:function(){return $},yj:function(){return R},z_:function(){return eu},zm:function(){return ed}});var n=a(64777),s=a(79139),i=a(37174);let r=3e3,l="/pagecontent",o="/customstyles",c="/customjavascript",u="/serverurl",d="/nsfw",h="/s3",m="/socialhandles",f="/video/streamlatencylevel",p="/video/streamoutputvariants",g="/directoryenabled",b="/chat/forbiddenusernames",y="/chat/suggestedusernames",x="/externalactions",v="/video/codec",w="/federation/blockdomains";async function j(e){let{apiPath:t,data:a,onSuccess:s,onError:i}=e,r=await (0,n.rQ)("".concat(n.ao).concat(t),{data:a,method:"POST",auth:!0});r.success&&s?s(r.message):i&&i(r.message)}let P={apiPath:"/name",configPath:"instanceDetails",maxLength:255,placeholder:"Owncast site name",label:"Name",tip:"The name of your Owncast server",required:!0,useTrimLead:!0},k={apiPath:"/streamtitle",configPath:"instanceDetails",maxLength:100,placeholder:"Doing cool things...",label:"Stream Title",tip:"What is your stream about today?"},N={apiPath:"/serversummary",configPath:"instanceDetails",maxLength:500,placeholder:"",label:"About",tip:"A brief blurb about you, your server, or what your stream is about."},L={apiPath:"/offlinemessage",configPath:"instanceDetails",maxLength:2500,placeholder:"An optional message you can leave people when your stream is not live.",label:"Offline Message",tip:"An optional message you can leave people when your stream is not live."},S={apiPath:"/welcomemessage",configPath:"instanceDetails",maxLength:2500,placeholder:"",label:"Welcome Message",tip:"A system chat message sent to viewers when they first connect to chat. Leave blank to disable."},C={apiPath:"/logo",configPath:"instanceDetails",maxLength:255,placeholder:"/img/mylogo.png",label:"Logo",tip:"Upload your logo if you have one (max size 2 MB). We recommend that you use a square image that is at least 256x256. SVGs are discouraged as they cannot be displayed on all social media platforms."},T={apiPath:"/adminpass",configPath:"",maxLength:255,placeholder:"abc123",label:"Admin Password",tip:"Save this password somewhere safe, you will need it to login to the admin dashboard!",required:!0,hasComplexityRequirements:!0},E={apiPath:"/ffmpegpath",configPath:"",maxLength:255,placeholder:"/usr/local/bin/ffmpeg",label:"FFmpeg Path",tip:"Absolute file path of the FFMPEG application on your server",required:!0,hasComplexityRequirements:!1},A={apiPath:"/webserverport",configPath:"",maxLength:6,placeholder:"8080",label:"Owncast port",tip:"What port is your Owncast web server listening? Default is 8080",required:!0,hasComplexityRequirements:!1},O={apiPath:"/rtmpserverport",configPath:"",maxLength:6,placeholder:"1935",label:"RTMP port",tip:"What port should accept inbound broadcasts? Default is 1935",required:!0,hasComplexityRequirements:!1},Z={apiPath:u,configPath:"yp",maxLength:255,placeholder:"https://owncast.mysite.com",label:"Server URL",tip:"The full url to your Owncast server.",type:s.xA,pattern:i.ax,useTrim:!0},U={apiPath:"/sockethostoverride",configPath:"",maxLength:255,placeholder:"https://owncast.mysite.com",label:"Websocket host override",tip:"The direct URL of your Owncast server.",type:s.xA,pattern:i.ax,useTrim:!0},q={apiPath:"/tags",configPath:"instanceDetails",maxLength:24,placeholder:"Add a new tag",required:!0,label:"",tip:""},G={apiPath:d,configPath:"instanceDetails",label:"NSFW?",tip:"Turn this ON if you plan to steam explicit or adult content. Please respectfully set this flag so unexpected eyes won't accidentally see it in the Directory."},M={apiPath:g,configPath:"yp",label:"Enable directory",tip:"Turn this ON to request to show up in the directory."},D={apiPath:"/hideviewercount",configPath:"",label:"Hide viewer count",tip:"Turn this ON to hide the viewer count the web page."},F={framerate:24,videoPassthrough:!1,videoBitrate:800,audioPassthrough:!0,audioBitrate:0,cpuUsageLevel:3,scaledHeight:null,scaledWidth:null,name:""},R={apiPath:"/chat/disable",configPath:"",label:"Chat",tip:"Turn the chat functionality on/off on your Owncast server.",useSubmit:!0},H={apiPath:"/chat/joinmessagesenabled",configPath:"",label:"Join Messages",tip:"Show when a viewer joins the chat.",useSubmit:!0},I={apiPath:"/chat/establishedusermode",configPath:"",label:"Established users only",tip:"Only users who have previously been established for some time may chat.",useSubmit:!0},z={apiPath:b,placeholder:"username",label:"Forbidden usernames",tip:"A list of words in chat usernames you disallow."},B={apiPath:y,placeholder:"username",label:"Default usernames",tip:"An optional list of chat usernames that new users get assigned. If the list holds less then 10 items, random names will be generated.  Users can change their usernames afterwards and the same username may be given out multple times.",min_not_reached:"At least 10 items are required for this feature.",no_entries:"The default name generator is used."},_={apiPath:"/federation/enable",configPath:"federation",label:"Enable Social Features",tip:"Send and receive activities on the Fediverse.",useSubmit:!0},V={apiPath:"/federation/private",configPath:"federation",label:"Private",tip:"Follow requests will require approval and only followers will see your activity.",useSubmit:!0},W={apiPath:"/federation/showengagement",configPath:"showEngagement",label:"Show engagement",tip:"Following, liking and sharing will appear in the chat feed.",useSubmit:!0},K={apiPath:"/federation/livemessage",configPath:"federation",maxLength:500,placeholder:"My stream has started, tune in!",label:"Now Live message",tip:"The message sent announcing that your live stream has begun. Tags will be automatically added. Leave blank to disable."},Q={apiPath:"/federation/username",configPath:"federation",maxLength:10,placeholder:"owncast",default:"owncast",label:"Username",tip:'The username used for sending and receiving activities from the Fediverse. For example, if you use "bob" as a username you would send messages to the fediverse from @bob@yourserver. Once people start following your instance you should not change this.'},$={apiPath:u,configPath:"yp",maxLength:255,placeholder:"https://owncast.mysite.com",label:"Server URL",tip:"The full url to your Owncast server is required to enable social features. Must use SSL (https). Once people start following your instance you should not change this.",type:s.xA,pattern:i.ax,useTrim:!0},J={apiPath:d,configPath:"instanceDetails",label:"Potentially NSFW",tip:"Turn this ON if you plan to steam explicit or adult content so previews of your stream can be marked as potentially sensitive."},X={apiPath:w,configPath:"federation",label:"Blocked domains",placeholder:"bad.domain.biz",tip:"You can block specific domains from interacting with you."},Y={audioBitrate:{min:600,max:1200,defaultValue:800,unit:"kbps",incrementBy:100,tip:"nothing to see here"},videoPassthrough:{tip:"If enabled, all other settings will be disabled. Otherwise configure as desired."},audioPassthrough:{tip:"If No is selected, then you should set your desired Audio Bitrate."},scaledWidth:{fieldName:"scaledWidth",label:"Resized Width",maxLength:4,placeholder:"1080",tip:"Optionally resize this content's width."},scaledHeight:{fieldName:"scaledHeight",label:"Resized Height",maxLength:4,placeholder:"720",tip:"Optionally resize this content's height."}},ee={min:24,max:120,defaultValue:24,unit:"fps",incrementBy:null,tip:"Reducing your framerate will decrease the amount of video that needs to be encoded and sent to your viewers, saving CPU and bandwidth at the expense of smoothness.  A lower value is generally is fine for most content."},et={[ee.min]:"".concat(ee.min," ").concat(ee.unit),25:" ",30:" ",50:" ",60:" ",90:" ",[ee.max]:"".concat(ee.max," ").concat(ee.unit)},ea={[ee.min]:"".concat(ee.min,"fps - Good for film, presentations, music, low power/bandwidth servers."),25:"25fps - Good for film, presentations, music, low power/bandwidth servers.",30:"30fps - Good for slow/casual games, chat, general purpose.",50:"50fps - Good for fast/action games, sports, HD video.",60:"60fps - Good for fast/action games, sports, HD video.",90:"90fps - Good for newer fast games and hardware.",[ee.max]:"".concat(ee.max,"fps - Experimental, use at your own risk!")},en={min:400,max:6e3,defaultValue:1200,unit:"kbps",incrementBy:100,tip:"The overall quality of your stream is generally impacted most by bitrate."},es={fieldName:"name",label:"Name",maxLength:15,placeholder:"HD or Low",tip:"Human-readable name for for displaying in the player."},ei={[en.min]:{style:{marginLeft:"24px"},label:"".concat(en.min," ").concat(en.unit)},3e3:3e3,4500:4500,[en.max]:{style:{marginLeft:"-10px"},label:"".concat(en.max," ").concat(en.unit)}},er={0:{style:{marginLeft:"15px"},label:"lowest"},1:"",2:"",3:"",4:{style:{marginLeft:"-15px"},label:"highest"}},el={0:"Lowest hardware usage - lowest quality video",1:"Low hardware usage - low quality video",2:"Medium hardware usage - average quality video",3:"High hardware usage - high quality video",4:"Highest hardware usage - higher quality video"},eo={VIDEO_HEIGHT:1080,VIDEO_BITRATE:3e3,HELP_TEXT:"You have only set one video quality variant. If your server has the computing resources, consider adding another, lower-quality variant, so more people can view your content!"},ec={url:"",platform:""},eu="OTHER_SOCIAL_HANDLE_OPTION",ed={accessKey:{fieldName:"accessKey",label:"Access Key",maxLength:255,placeholder:"access key 123",tip:""},acl:{fieldName:"acl",label:"ACL",maxLength:255,placeholder:"",tip:"Optional specific access control value to add to your content.  Generally not required."},bucket:{fieldName:"bucket",label:"Bucket",maxLength:255,placeholder:"bucket 123",tip:"Create a new bucket for each Owncast instance you may be running."},endpoint:{fieldName:"endpoint",label:"Endpoint",maxLength:255,placeholder:"https://your.s3.provider.endpoint.com",tip:'The full URL (with "https://") endpoint from your storage provider.',useTrim:!0,type:s.xA,pattern:i.ax},region:{fieldName:"region",label:"Region",maxLength:255,placeholder:"region 123",tip:""},secret:{fieldName:"secret",label:"Secret key",maxLength:255,placeholder:"your secret key",tip:""},servingEndpoint:{fieldName:"servingEndpoint",label:"Serving Endpoint",maxLength:255,placeholder:"http://cdn.ss3.provider.endpoint.com",tip:"Optional URL that content should be accessed from instead of the default.  Used with CDNs and specific storage providers. Generally not required.",type:s.xA,pattern:i.ax,useTrim:!0},forcePathStyle:{fieldName:"forcePathStyle",label:"Force path-style",tip:"If your S3 provider doesn't support virtual-hosted-style URLs set this to ON (i.e. Oracle Cloud Object Storage)"}},eh={webhookUrl:{fieldName:"webhook",label:"Webhook URL",maxLength:255,placeholder:"https://discord.com/api/webhooks/837/jf38-6iNEv",tip:"The webhook assigned to your channel.",type:s.xA,pattern:i.ax,useTrim:!0},goLiveMessage:{fieldName:"goLiveMessage",label:"Go Live Text",maxLength:300,tip:"The text to send when you go live.",placeholder:"I've gone live! Come watch!"}},em={goLiveMessage:{fieldName:"goLiveMessage",label:"Go Live Text",maxLength:200,tip:"The text to send when you go live.",placeholder:"I've gone live! Come watch!"}},ef=[{min:8,message:"- minimum 8 characters"},{max:192,message:"- maximum 192 characters"},{pattern:/^(?=.*[a-z])/,message:"- at least one lowercase letter"},{pattern:/^(?=.*[A-Z])/,message:"- at least one uppercase letter"},{pattern:/\d/,message:"- at least one digit"},{pattern:/^(?=.*?[#?!@$%^&*-])/,message:"- at least one special character: !@#$%^&*"}],ep=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*]).{8,192}$/},70241:function(e,t,a){a.d(t,{AB:function(){return c},Qr:function(){return r},t5:function(){return i},wS:function(){return o}});var n=a(42238),s=a.n(n);function i(e){let t=e.split(":");t[t.length-1]="";let a=t.join(":");return"[::1]"===(a=a.slice(0,a.length-1))||"127.0.0.1"===a?"Localhost":a}function r(e){return!e||0===Object.keys(e).length&&e.constructor===Object}function l(e,t,a){return String(t.repeat(a)+e).slice(-a)}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=Number.isFinite(+e)?Math.abs(e):0,a=Math.floor(t/86400),n=a>0?"".concat(a," day").concat(a>1?"s":""," "):"",s=Math.floor(t/3600%24),i=s||a?l("".concat(s,":"),"0",3):"",r=l("".concat(Math.floor(t/60%60),":"),"0",3),o=l("".concat(Math.floor(t%60)),"0",2);return n+i+r+o}function c(e){let t=s()(e),{device:a,os:n,browser:i}=t,{major:r,name:l}=i,{version:o,name:c}=n,{model:u,type:d}=a;return"libmpv"===e?"mpv media player":l&&r&&c?"".concat(l," ").concat(r," on ").concat(c," ").concat(o,"\n  ").concat(u||d?" (".concat(u||d,")"):""):e}},41983:function(e,t,a){a.d(t,{Jk:function(){return h},Un:function(){return u},dG:function(){return f},kg:function(){return g},zv:function(){return m}});var n=a(85893),s=a(5152),i=a.n(s);let r=i()(()=>Promise.all([a.e(2074),a.e(7431)]).then(a.t.bind(a,37431,23)),{loadableGenerated:{webpack:()=>[37431]},ssr:!1}),l=i()(()=>Promise.all([a.e(2074),a.e(2461)]).then(a.t.bind(a,42461,23)),{loadableGenerated:{webpack:()=>[42461]},ssr:!1}),o=i()(()=>Promise.all([a.e(2074),a.e(628)]).then(a.t.bind(a,628,23)),{loadableGenerated:{webpack:()=>[628]},ssr:!1}),c=i()(()=>Promise.all([a.e(2074),a.e(7282)]).then(a.t.bind(a,97282,23)),{loadableGenerated:{webpack:()=>[97282]},ssr:!1}),u="error",d="invalid",h="proessing",m="success",f="warning",p={[m]:{type:m,icon:(0,n.jsx)(r,{style:{color:"green"}}),message:"Success!"},[u]:{type:u,icon:(0,n.jsx)(l,{style:{color:"red"}}),message:"An error occurred."},[d]:{type:d,icon:(0,n.jsx)(l,{style:{color:"red"}}),message:"An error occurred."},[h]:{type:h,icon:(0,n.jsx)(o,{}),message:""},[f]:{type:f,icon:(0,n.jsx)(c,{style:{color:"#fc0"}}),message:""}};function g(e,t){return e&&p[e]?t?{type:e,icon:p[e].icon,message:t}:p[e]:null}},99519:function(e,t,a){a.d(t,{aC:function(){return c}});var n=a(85893),s=a(67294),i=a(64777),r=a(90745);let l={streamKeys:[],streamKeyOverridden:!1,adminPassword:"",instanceDetails:{customStyles:"",customJavascript:"",extraPageContent:"",logo:"",name:"",nsfw:!1,socialHandles:[],streamTitle:"",summary:"",tags:[],title:"",welcomeMessage:"",offlineMessage:"",appearanceVariables:{}},ffmpegPath:"",rtmpServerPort:"",webServerPort:"",socketHostOverride:null,s3:{accessKey:"",acl:"",bucket:"",enabled:!1,endpoint:"",region:"",secret:"",servingEndpoint:"",forcePathStyle:!1},yp:{enabled:!1,instanceUrl:""},videoSettings:{latencyLevel:4,cpuUsageLevel:3,videoQualityVariants:[r.gX]},federation:{enabled:!1,isPrivate:!1,username:"",goLiveMessage:"",showEngagement:!0,blockedDomains:[]},notifications:{browser:{enabled:!1,goLiveMessage:""},discord:{enabled:!1,webhook:"",goLiveMessage:""}},externalActions:[],supportedCodecs:[],videoCodec:"",forbiddenUsernames:[],suggestedUsernames:[],chatDisabled:!1,chatJoinMessagesEnabled:!0,chatEstablishedUserMode:!1,hideViewerCount:!1},o={broadcastActive:!1,broadcaster:null,currentBroadcast:null,online:!1,viewerCount:0,sessionMaxViewerCount:0,sessionPeakViewerCount:0,overallPeakViewerCount:0,versionNumber:"0.0.0",streamTitle:"",chatDisabled:!1,health:{healthy:!0,healthPercentage:100,message:"",representation:0}},c=s.createContext({...o,serverConfig:l,setFieldInConfigState:e=>null}),u=e=>{let{children:t}=e,[a,r]=(0,s.useState)(o),[u,d]=(0,s.useState)(l),h=async()=>{try{let e=await (0,i.rQ)(i.Q_);r({...e})}catch(e){}},m=async()=>{try{let e=await (0,i.rQ)(i.bl);d(e)}catch(e){}},f=e=>{let{fieldName:t,value:a,path:n}=e,s=n?{...u,[n]:{...u[n],[t]:a}}:{...u,[t]:a};d(s)};(0,s.useEffect)(()=>{let e=null;return h(),e=setInterval(h,i.NE),m(),()=>{clearInterval(e)}},[]);let p={...a,serverConfig:u,setFieldInConfigState:f};return(0,n.jsx)(c.Provider,{value:p,children:t})};t.ZP=u},37174:function(e,t,a){a.d(t,{Kf:function(){return i},ax:function(){return n},bu:function(){return r},jv:function(){return s}});let n="https?://.*";function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["http:","https:"];try{let a=new URL(e);if(""===a.protocol||""===a.hostname||!t.includes(a.protocol))return!1}catch(e){return!1}return!0}function i(e,t){e.startsWith("@")&&(e=e.slice(1));let a=e.split(/:|@/),[n,s,i]=a;return console.log({account:e,protocol:t,service:n,user:s,host:i}),n===t&&3===a.length&&!!n&&!!s&&!!i}function r(e){if(!e.startsWith("matrix:"))return!1;(e=e.slice(7)).startsWith("@")&&(e=e.slice(1));let t=e.split(":"),[a,n]=t;return 2===t.length&&!!a&&!!n}}}]);