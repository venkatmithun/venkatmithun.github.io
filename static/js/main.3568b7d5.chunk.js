(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/zono.189cf65e.png"},function(e,t,a){e.exports=a.p+"static/media/udefyn.4e94e9e2.jpeg"},function(e,t,a){e.exports=a.p+"static/media/github.12048fae.png"},,,function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/myPic.e320a7c5.jpeg"},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(11),r=a.n(i),c=(a(18),a(19),a(2)),s=a(3),o=a(5),m=a(4),u=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={skills:!0,data:null},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=document.getElementById("myHeader"),a=t.offsetTop,n=document.getElementById("About-Content");window.addEventListener("scroll",(function(l){window.pageYOffset>=a?t.classList.add("sticky"):t.classList.remove("sticky"),window.pageYOffset+n.offsetHeight>n.offsetTop&&!e.state.skills&&e.setState({skills:!0})}))}},{key:"navClick",value:function(e){var t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"})}},{key:"render",value:function(){var e=this;this.state.skills;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"header",id:"myHeader"},l.a.createElement("p",{className:"nav-item",onClick:function(){return e.navClick("Home")}},"Home"),l.a.createElement("p",{className:"nav-item",onClick:function(){return e.navClick("About")}},"About"),l.a.createElement("p",{className:"nav-item",onClick:function(){e.state.skills?e.navClick("Projects"):e.setState({skills:!0},(function(){return e.navClick("Projects")}))}},"Portfolio"),l.a.createElement("p",{className:"nav-item",onClick:function(){return e.navClick("Blog")}},"Blog"),l.a.createElement("p",{className:"nav-item",onClick:function(){return e.navClick("Contact")}},"Contact")),l.a.createElement("div",{id:"About",className:"App-header"},l.a.createElement("div",{className:"content",style:{width:"100%"}},l.a.createElement("h1",null,"About"),l.a.createElement("div",{style:{flex:1}},l.a.createElement("div",null,l.a.createElement("p",null,"I am experienced Software Developer. Currently working as software engineer intern at Fidelity Investments. ",l.a.createElement("br",null)," Let's build something great together?"))),l.a.createElement("div",{id:"About-Content",style:{display:"flex",flexDirection:"row",justifyContent:"space-around",width:"100%",backgroundColor:"purple",flexWrap:"wrap"}},l.a.createElement("div",{style:{flex:1,minWidth:"200px",padding:10}},l.a.createElement("p",null,"Fast"),l.a.createElement("p",{style:{fontSize:16}},"Fast load times and lag free interaction, my highest priority")),l.a.createElement("div",{style:{flex:1,minWidth:"200px",padding:10}},l.a.createElement("p",null,"Responsive"),l.a.createElement("p",{style:{fontSize:16}},"My layouts will work on any device, big or small.")),l.a.createElement("div",{style:{flex:1,minWidth:"200px",padding:10}},l.a.createElement("p",null,"Intuitive"),l.a.createElement("p",{style:{fontSize:16}},"Strong preference for easy to use, intuitive UX/UI.")),l.a.createElement("div",{style:{flex:1,minWidth:"200px",padding:10}},l.a.createElement("p",null,"Dynamic"),l.a.createElement("p",{style:{fontSize:16}},"Websites don't have to be static, I love making pages come to life."))),l.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px 20px",flexWrap:"wrap"}},l.a.createElement("div",{style:{flex:1}},l.a.createElement("p",null,"Designer"),l.a.createElement("div",null,"I value simple content structure, clean design patterns, and thoughtful interactions."),l.a.createElement("div",null,"Things I enjoy designing:",l.a.createElement("p",null,"UX, UI, Web, Mobile, Apps, Logos")),l.a.createElement("div",null,"Design tools:"),l.a.createElement("div",null,l.a.createElement("p",null,"Balsamiq Mockups"),l.a.createElement("p",null,"Invision"),l.a.createElement("p",null,"Zeplin"),l.a.createElement("p",null,"Sketch"),l.a.createElement("p",null,"Pen & Paper"))),l.a.createElement("div",{style:{flex:1}},l.a.createElement("p",null,"Front-end Developer"),l.a.createElement("div",null,"I like to code things from scratch, and enjoy bringing ideas to life in the browser."),l.a.createElement("div",null,"Languages I speak:",l.a.createElement("p",null,"HTML, CSS, Sass, Less")),l.a.createElement("div",null,"Design tools:"),l.a.createElement("div",null,l.a.createElement("p",null,"Balsamiq Mockups"),l.a.createElement("p",null,"Invision"),l.a.createElement("p",null,"Zeplin"),l.a.createElement("p",null,"Sketch"),l.a.createElement("p",null,"Pen & Paper"))),l.a.createElement("div",{style:{flex:1}},l.a.createElement("p",null,"Back-end Developer"),l.a.createElement("div",null,"I like to code things from scratch, and enjoy bringing ideas to life in the browser."),l.a.createElement("div",null,"Languages I speak:",l.a.createElement("p",null,"Node, Java, PostgreSQL, MongoDB")),l.a.createElement("div",null,"Design tools:"),l.a.createElement("div",null,l.a.createElement("p",null,"Balsamiq Mockups"),l.a.createElement("p",null,"Invision"),l.a.createElement("p",null,"Zeplin"),l.a.createElement("p",null,"Sketch"),l.a.createElement("p",null,"Pen & Paper")))))))}}]),a}(n.Component),d=function(e){Object(o.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,l=new Array(a),i=0;i<a;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={},e}return Object(s.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{id:"Projects",className:"App-header"},l.a.createElement("h1",null,"Projects"),l.a.createElement("p",null,"Here are few projects I've worked on! want to see more?"," ",l.a.createElement("a",{href:""},"Email me!")),l.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px 20px",flexWrap:"wrap",width:"100%",flexDirection:"row"}},l.a.createElement("div",{style:{width:"33.33%"}},l.a.createElement("img",{className:"project-image",style:{width:"300px"},src:a(8)})),l.a.createElement("div",{style:{width:"33.33%"}},l.a.createElement("img",{className:"project-image",src:a(9)})),l.a.createElement("div",{style:{width:"33.33%"}},l.a.createElement("img",{className:"project-image",src:a(10)})),l.a.createElement("div",{style:{width:"33.33%"}},l.a.createElement("img",{className:"project-image",style:{width:"300px"},src:a(8)})),l.a.createElement("div",{style:{width:"33.33%"}},l.a.createElement("img",{className:"project-image",src:a(9)})),l.a.createElement("div",{style:{width:"33.33%"}},l.a.createElement("img",{className:"project-image",src:a(10)}))))}}]),n}(l.a.Component),p=a(6),h=a.n(p),E=a(12),g=a(1),v=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).callBackendAPI=function(){var e=Object(E.a)(h.a.mark((function e(t,a,n){var l,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/portfolio",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,email:a,msg:n})});case 2:return l=e.sent,e.next=5,l.json();case 5:if(i=e.sent,console.log(i),200===l.status){e.next=9;break}throw Error(i.message);case 9:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),n.state={name:"",message:"",email:""},n.handleEmailChange=n.handleEmailChange.bind(Object(g.a)(n)),n.handleNameChange=n.handleNameChange.bind(Object(g.a)(n)),n.handleMsgChange=n.handleMsgChange.bind(Object(g.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(g.a)(n)),n}return Object(s.a)(a,[{key:"handleNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"handleEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"handleMsgChange",value:function(e){this.setState({message:e.target.value})}},{key:"handleSubmit",value:function(e){alert("A name was submitted: "+this.state.name),e.preventDefault(),this.callBackendAPI(this.state.name,this.state.email,this.state.message).then((function(e){})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",{id:"Contact",className:"App-header"},l.a.createElement("h1",null,"Contact!"),l.a.createElement("div",{class:"LI-profile-badge","data-version":"v1","data-size":"medium","data-locale":"en_US","data-type":"horizontal","data-theme":"light","data-vanity":"venkatmithun"},l.a.createElement("a",{class:"LI-simple-link",href:"https://www.linkedin.com/in/venkatmithun?trk=profile-badge"},"Venkat Mithun K.")),l.a.createElement("p",null,"Have a question or want to work together?"),l.a.createElement("form",{onSubmit:this.handleSubmit,style:{display:"flex",flexDirection:"column"}},l.a.createElement("input",{type:"text",value:this.state.name,placeholder:"Name",onChange:this.handleNameChange}),l.a.createElement("input",{type:"text",value:this.state.email,placeholder:"Email",onChange:this.handleEmailChange}),l.a.createElement("textarea",{value:this.state.message,onChange:this.handleMsgChange,placeholder:"Your Message"}),l.a.createElement("input",{type:"submit",value:"Submit"})))}}]),a}(l.a.Component);var f=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{id:"Home",className:"App-header"},l.a.createElement("h2",null,"Hello, I'm Venkat Mithun Kadiyala"),l.a.createElement("h3",null,"Software Engineer & Grad student"),l.a.createElement("h3",null,"I love building intelligent applications"),l.a.createElement("img",{src:a(21),style:{height:"200px",borderRadius:50},alt:"mithun"}),l.a.createElement("p",{style:{border:1,borderWidth:1,borderColor:"white",borderStyle:"solid",borderRadius:5,padding:10,cursor:"pointer"},onClick:function(){return document.getElementById("About").scrollIntoView({behavior:"smooth"})}},"View my work!")),l.a.createElement(u,null),l.a.createElement(d,null),l.a.createElement(v,null))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.3568b7d5.chunk.js.map