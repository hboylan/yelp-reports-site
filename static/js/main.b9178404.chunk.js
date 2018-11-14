(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{203:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(28),s=t.n(i),o=t(206),c=t(78),l=(t(94),t(96),t(39)),m={palette:{primary:{50:"#fce9e3",100:"#f8c9ba",200:"#f3a58c",300:"#553766",400:"#ea653c",500:"#2b103b",600:"#e34316",700:"#070017",800:"#db320e",900:"#d52208",A100:"#fffefe",A200:"#ffd0cb",A400:"#ffa298",A700:"#ff8b7f",contrastDefaultColor:"light"},secondary:{50:"#fcf9fb",100:"#f9f1f5",200:"#f5e8ee",300:"#579fdc",400:"#edd8e1",500:"#1071aa",600:"#e7ccd8",700:"#00467a",800:"#e1c0ce",900:"#dbb5c5",A100:"#ffffff",A200:"#ffffff",A400:"#ffffff",A700:"#ffffff",contrastDefaultColor:"dark"}}},u=t(14),p=t(15),h=t(17),d=t(16),f=t(18),b=t(209),g=t(205),E=t(207),v=t(208),w=t(204),y=t(80),x=t.n(y),k=t(83),O=t.n(k),j=t(82),N=t.n(j),S=t(11),A=t.n(S),W=t(84),C=t.n(W),R=t(79),B=t.n(R),T=function(e){function a(){return Object(u.a)(this,a),Object(h.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(x.a,{className:e.appBar},r.a.createElement(N.a,null,r.a.createElement("img",{className:e.logo,alt:"Capgemeni Sogeti",src:B.a}),"\xa0",r.a.createElement(A.a,{variant:"h6",color:"inherit",className:e.flex,noWrap:!0},r.a.createElement(w.a,{className:e.link,to:"/"},"Team Unseenstars")),r.a.createElement(O.a,{color:"secondary",onClick:function(){return window.open("https://s3.us-east-2.amazonaws.com/unseenstars/maryland-unseenstars.pptx","_blank")}},r.a.createElement(C.a,null),"\xa0Presentation")))}}]),a}(n.Component),z=t(51),Y=t.n(z),D=Object(c.withStyles)(function(e){return{root:{padding:40,background:e.palette.primary[500]},text:{color:e.palette.background.paper}}})(function(e){var a=e.classes;return r.a.createElement(Y.a,{className:a.root,square:!0},r.a.createElement(A.a,{variant:"body1",align:"center",classes:{root:a.text}},"\xa9 2018 Sogeti USA"))}),M=function(e){function a(){return Object(u.a)(this,a),Object(h.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e=this.props,a=e.children,t=e.classes,n={classes:t};return r.a.createElement("div",{className:t.root},r.a.createElement("div",{className:t.appFrame},r.a.createElement(T,n),r.a.createElement("main",{className:t.content},a,r.a.createElement(D,null))))}}]),a}(n.Component),P=Object(c.withStyles)(function(e){var a;return a={root:{width:"100%",height:"100%",zIndex:1,overflow:"hidden",position:"absolute",backgroundColor:e.palette.background.default},logo:{height:40,width:40},appFrame:{position:"relative",display:"flex",width:"100%",height:"100%"},appBar:{position:"absolute",transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},content:{width:"100%",flexGrow:1,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),height:"calc(100% - 56px)",marginTop:56,overflowY:"auto",overflowX:"hidden",WebkitOverflowScrolling:"touch"}},Object(l.a)(a,e.breakpoints.up("sm"),{content:{height:"calc(100% - 64px)",marginTop:64}}),Object(l.a)(a,"flex",{flex:1}),Object(l.a)(a,"link",{color:"white",textDecoration:"none"}),a})(M),_=t(41),H=t.n(_),I=t(13),J=t.n(I),L=t(40),q=t.n(L),F=t(53),G=t.n(F),K=t(85),U=t.n(K),V=t(54),X=t.n(V),$=t(52),Q=t.n($),Z=t(87),ee=t.n(Z),ae=t(86),te=t.n(ae),ne=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(h.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={team:[{name:"Saurav Kumar",pic:"saurav.kumar",title:"Manager Consultant"},{name:"Hugh Boylan",pic:"hugh.boylan"},{name:"Sumanta Ghosh",pic:"sumanta.ghosh"},{name:"Lee Whieldon",pic:"lee.whieldon"},{name:"Morgan Robinson",pic:"morgan.robinson"},{name:"Aravind Krishna",pic:"aravind.krishna"}]},t}return Object(f.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e=this.props.classes,a=this.state.team;return r.a.createElement(J.a,{className:e.root,container:!0},r.a.createElement(J.a,{item:!0,xs:12},r.a.createElement(A.a,{variant:"h5",color:"inherit",className:e.flex,noWrap:!0},"Sogeti I&D Hackathon 2018")),r.a.createElement(J.a,{item:!0,xs:12,md:4,className:e.nested},r.a.createElement(A.a,{variant:"h5",color:"inherit",className:e.flex,noWrap:!0},"Members"),r.a.createElement(q.a,null,a.map(function(e,a){return r.a.createElement(re,{m:e,key:a})}))),r.a.createElement(J.a,{item:!0,xs:12,md:8},r.a.createElement(J.a,{item:!0,xs:12,className:e.nested},r.a.createElement(A.a,{variant:"h5",color:"inherit",className:e.flex,noWrap:!0},"Objective"),r.a.createElement(A.a,{variant:"body1",color:"inherit"},"To design a generic big data system to collect, process, and analyze data to provide valuable business insights. Our solution will utilize the Yelp academic dataset to help answer common questions about how to improve the success of a business.")),r.a.createElement(J.a,{item:!0,xs:12,className:e.nested},r.a.createElement(A.a,{variant:"h5",color:"inherit",className:e.flex,noWrap:!0},"Architecture"),r.a.createElement("img",{className:e.architecture,alt:"Architecture Diagram",src:"https://s3.us-east-2.amazonaws.com/unseenstars/architecture.png"})),r.a.createElement(J.a,{item:!0,xs:12,className:e.nested},r.a.createElement(A.a,{variant:"h5",color:"inherit",className:e.flex,noWrap:!0},"Tableau Reports"),r.a.createElement(q.a,null,r.a.createElement(ie,{link:"/business",title:"Yelp Business Details",description:"Browse businesses geographically to view detailed insights about each",icon:r.a.createElement(Q.a,null)}),r.a.createElement(ie,{link:"/reviews",title:"Yelp Review Words",description:"Browse review keywords to see how users describe businesses",icon:r.a.createElement(Q.a,null)}))),r.a.createElement(J.a,{item:!0,xs:12,className:e.nested},r.a.createElement(A.a,{variant:"h5",color:"inherit",className:e.flex,noWrap:!0},"Code Repositories"),r.a.createElement(q.a,null,r.a.createElement(ie,{link:"https://github.com/hboylan/s3-processing-lambda",title:"Processing Lambda",description:"Process data files from S3 using Lambda"}),r.a.createElement(ie,{link:"https://github.com/hboylan/s3-processing-spark",title:"Processing Spark",description:"Spark JAR to load yelp data into Redshift or Snowflake"})))))}}]),a}(n.Component),re=function(e){var a=e.m;return r.a.createElement(G.a,null,r.a.createElement(U.a,null,a.pic?r.a.createElement(H.a,{src:"https://s3.us-east-2.amazonaws.com/unseenstars/profile_pics/"+a.pic+".png"}):r.a.createElement(H.a,null,r.a.createElement(te.a,null))),r.a.createElement(X.a,{primary:a.name,secondary:a.title?a.title:"Senior Consultant"}))},ie=function(e){var a=e.link,t=e.title,n=e.description,i=e.icon,s=void 0===i?r.a.createElement(ee.a,null):i,o=r.a.createElement(w.a,{to:a},r.a.createElement(A.a,{variant:"body1"},t));return r.a.createElement(G.a,null,r.a.createElement(H.a,null,s),r.a.createElement(X.a,{primary:o,secondary:n}))},se=Object(c.withStyles)(function(e){return{root:{padding:20,marginBottom:40},nested:{marginTop:40},profile:{flex:1},architecture:{flex:1,width:"100%"}}})(ne),oe=Object(c.withStyles)(function(e){return{root:{height:"calc(100% - 100px)",textAlign:"center"},tableauReport:{height:"100%",width:"100%"}}})(function(e){var a=e.classes,t=e.title,n=e.view;return r.a.createElement("div",{className:a.root},r.a.createElement("iframe",{className:a.tableauReport,title:t,src:"https://public.tableau.com/views/".concat(n,"?:embed=y&:display_count=y&:showVizHome=n")}))}),ce=function(e){function a(){return Object(u.a)(this,a),Object(h.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement(P,null,r.a.createElement(b.a,null,r.a.createElement(g.a,{path:"/",component:se,exact:!0}),r.a.createElement(g.a,{path:"/business",render:function(){return r.a.createElement(oe,{title:"Yelp Businesses",view:"RestaurantsAvailabilityScores_Extract/RestaurantsAvailabilityScore"})},exact:!0}),r.a.createElement(g.a,{path:"/reviews",render:function(){return r.a.createElement(oe,{title:"Yelp Reviews",view:"YelpReviewWordsAnalysis/ReviewWordCountAnalysis"})},exact:!0}),r.a.createElement(E.a,{from:"*",to:"/"})))}}]),a}(n.Component),le=Object(v.a)(ce);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var me="hboylan.github.io"===window.location.hostname?"/yelp-reports-site":"/";s.a.render(r.a.createElement(function(){return r.a.createElement(c.MuiThemeProvider,{theme:Object(c.createMuiTheme)(m)},r.a.createElement(o.a,{basename:me},r.a.createElement(le,null)))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},79:function(e,a,t){e.exports=t.p+"static/media/logo.0b88d056.png"},89:function(e,a,t){e.exports=t(203)},96:function(e,a,t){}},[[89,2,1]]]);
//# sourceMappingURL=main.b9178404.chunk.js.map