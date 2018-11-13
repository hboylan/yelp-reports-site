(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{203:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(26),i=t.n(o),c=t(207),s=t(56),l=(t(94),t(96),t(31)),m={palette:{primary:{50:"#fce9e3",100:"#f8c9ba",200:"#f3a58c",300:"#553766",400:"#ea653c",500:"#2b103b",600:"#e34316",700:"#070017",800:"#db320e",900:"#d52208",A100:"#fffefe",A200:"#ffd0cb",A400:"#ffa298",A700:"#ff8b7f",contrastDefaultColor:"light"},secondary:{50:"#fcf9fb",100:"#f9f1f5",200:"#f5e8ee",300:"#579fdc",400:"#edd8e1",500:"#1071aa",600:"#e7ccd8",700:"#00467a",800:"#e1c0ce",900:"#dbb5c5",A100:"#ffffff",A200:"#ffffff",A400:"#ffffff",A700:"#ffffff",contrastDefaultColor:"dark"}}},u=t(13),p=t(14),h=t(16),f=t(15),d=t(17),b=t(208),g=t(205),E=t(206),v=t(209),w=t(204),y=t(79),O=t.n(y),j=t(82),k=t.n(j),x=t(81),S=t.n(x),N=t(11),A=t.n(N),C=t(83),W=t.n(C),R=t(78),B=t.n(R),T=function(e){function a(){return Object(u.a)(this,a),Object(h.a)(this,Object(f.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(O.a,{className:e.appBar},r.a.createElement(S.a,null,r.a.createElement("img",{className:e.logo,alt:"Capgemeni Sogeti",src:B.a}),"\xa0",r.a.createElement(A.a,{variant:"title",color:"inherit",className:e.flex,noWrap:!0},r.a.createElement(w.a,{className:e.link,to:"/"},"Team Unseenstars")),r.a.createElement(k.a,{color:"secondary",onClick:function(){return window.open("https://s3.us-east-2.amazonaws.com/unseenstars/maryland-unseenstars.pptx","_blank")}},r.a.createElement(W.a,null),"\xa0Presentation")))}}]),a}(n.Component),z=t(70),D=t.n(z),M=Object(s.withStyles)(function(e){return{root:{padding:40,background:e.palette.primary[500],marginTop:40},text:{color:e.palette.background.paper}}})(function(e){var a=e.classes;return r.a.createElement(D.a,{className:a.root,square:!0},r.a.createElement(A.a,{variant:"body1",align:"center",classes:{root:a.text}},"\xa9 2018 Sogeti USA"))}),P=function(e){function a(){return Object(u.a)(this,a),Object(h.a)(this,Object(f.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e=this.props,a=e.children,t=e.classes,n={classes:t};return r.a.createElement("div",{className:t.root},r.a.createElement("div",{className:t.appFrame},r.a.createElement(T,n),r.a.createElement("main",{className:t.content},a,r.a.createElement(M,null))))}}]),a}(n.Component),H=Object(s.withStyles)(function(e){var a;return a={root:{width:"100%",height:"100%",zIndex:1,overflow:"hidden",position:"absolute",backgroundColor:e.palette.background.default},logo:{height:40,width:40},appFrame:{position:"relative",display:"flex",width:"100%",height:"100%"},appBar:{position:"absolute",transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},content:{width:"100%",flexGrow:1,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),height:"calc(100% - 56px)",marginTop:56,overflowY:"auto",overflowX:"hidden",WebkitOverflowScrolling:"touch"}},Object(l.a)(a,e.breakpoints.up("sm"),{content:{height:"calc(100% - 64px)",marginTop:64}}),Object(l.a)(a,"flex",{flex:1}),Object(l.a)(a,"link",{color:"white",textDecoration:"none"}),a})(P),I=t(66),J=t.n(I),L=t(57),Y=t.n(L),q=t(65),F=t.n(q),G=t(71),K=t.n(G),U=t(85),_=t.n(U),V=t(72),X=t.n(V),$=t(84),Q=t.n($),Z=t(87),ee=t.n(Z),ae=t(86),te=t.n(ae),ne=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(h.a)(this,(e=Object(f.a)(a)).call.apply(e,[this].concat(r)))).state={team:[{name:"Saurav Kumar",pic:"saurav.kumar",title:"Manager Consultant"},{name:"Hugh Boylan",pic:"hugh.boylan"},{name:"Sumanta Ghosh",pic:"sumanta.ghosh"},{name:"Lee Whieldon",pic:"lee.whieldon"},{name:"Morgan Robinson",pic:"morgan.robinson"},{name:"Aravind Krishnakurupsreekumarann"}]},t}return Object(d.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e=this.props.classes,a=this.state.team;return r.a.createElement(Y.a,{className:e.root,container:!0,spacing:24},r.a.createElement(Y.a,{item:!0,xs:12},r.a.createElement(A.a,{variant:"h4",color:"inherit",className:e.flex,noWrap:!0},"Sogeti I&D Hackathon 2018")),r.a.createElement(Y.a,{item:!0,xs:12,md:4},r.a.createElement(A.a,{variant:"h5",color:"inherit",className:e.flex,noWrap:!0},"Members"),r.a.createElement(F.a,null,a.map(function(e,a){return r.a.createElement(re,{m:e,key:a})}))),r.a.createElement(Y.a,{className:e.root,container:!0,xs:12,md:8,spacing:24},r.a.createElement(Y.a,{item:!0,xs:12},r.a.createElement(A.a,{variant:"h5",color:"inherit",className:e.flex,noWrap:!0},"Objective"),r.a.createElement(A.a,{variant:"body1",color:"inherit"},"To design a generic big data system to collect, process, and analyze data to provide valuable business insights. Our solution will utilize the Yelp academic dataset to help answer common questions about how to improve the success of a business.")),r.a.createElement(Y.a,{item:!0,xs:12},r.a.createElement(A.a,{variant:"h5",color:"inherit",className:e.flex,noWrap:!0},"Architecture"),r.a.createElement("img",{className:e.architecture,alt:"Architecture Diagram",src:"https://s3.us-east-2.amazonaws.com/unseenstars/architecture.png"})),r.a.createElement(Y.a,{item:!0,xs:12},r.a.createElement(A.a,{variant:"h5",color:"inherit",className:e.flex,noWrap:!0},"Tableau Reports"),r.a.createElement(F.a,null,r.a.createElement(oe,{link:"/business",title:"Yelp Businesses",description:"Browse businesses geographically to view detailed insights about each",icon:r.a.createElement(Q.a,null)}))),r.a.createElement(Y.a,{item:!0,xs:12},r.a.createElement(A.a,{variant:"h5",color:"inherit",className:e.flex,noWrap:!0},"Code Repositories"),r.a.createElement(F.a,null,r.a.createElement(oe,{link:"https://github.com/hboylan/s3-processing-lambda",title:"Processing Lambda",description:"Process data files from S3 using Lambda"}),r.a.createElement(oe,{link:"https://github.com/hboylan/s3-processing-spark",title:"Processing Spark",description:"Spark JAR to load yelp data into Redshift or Snowflake"})))))}}]),a}(n.Component),re=function(e){var a=e.m;return r.a.createElement(K.a,null,r.a.createElement(_.a,null,a.pic?r.a.createElement(J.a,{src:"https://s3.us-east-2.amazonaws.com/unseenstars/profile_pics/"+a.pic+".png"}):r.a.createElement(J.a,null,r.a.createElement(te.a,null))),r.a.createElement(X.a,{primary:a.name,secondary:a.title?a.title:"Senior Consultant"}))},oe=function(e){var a=e.link,t=e.title,n=e.description,o=e.icon,i=void 0===o?r.a.createElement(ee.a,null):o,c=r.a.createElement(w.a,{to:a},r.a.createElement(A.a,{variant:"body1"},t));return r.a.createElement(K.a,null,r.a.createElement(J.a,null,i),r.a.createElement(X.a,{primary:c,secondary:n}))},ie=Object(s.withStyles)(function(e){return{root:{padding:20},profile:{flex:1},architecture:{flex:1,width:"100%"}}})(ne),ce=function(e){function a(){return Object(u.a)(this,a),Object(h.a)(this,Object(f.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement("iframe",{className:e.tableauReport,title:"Business Report",src:"https://public.tableau.com/views/RestaurantsAvailabilityScores-Snowflake/RestaurantsAvailabilityScore?:showVizHome=no&:embed=true"}))}}]),a}(n.Component),se=Object(s.withStyles)(function(e){return{root:{height:"calc(100% - 100px)",textAlign:"center"},tableauReport:{height:"100%",width:"100%"}}})(ce),le=function(e){function a(){return Object(u.a)(this,a),Object(h.a)(this,Object(f.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement(H,null,r.a.createElement(b.a,null,r.a.createElement(g.a,{path:"/",component:ie,exact:!0}),r.a.createElement(g.a,{path:"/business",component:se,exact:!0}),r.a.createElement(E.a,{from:"*",to:"/"})))}}]),a}(n.Component),me=Object(v.a)(le);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ue="hboylan.github.io"===window.location.hostname?"/yelp-reports-site":"/";i.a.render(r.a.createElement(function(){return r.a.createElement(s.MuiThemeProvider,{theme:Object(s.createMuiTheme)(m)},r.a.createElement(c.a,{basename:ue},r.a.createElement(me,null)))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},78:function(e,a,t){e.exports=t.p+"static/media/logo.0b88d056.png"},89:function(e,a,t){e.exports=t(203)},96:function(e,a,t){}},[[89,2,1]]]);
//# sourceMappingURL=main.7139fdc3.chunk.js.map