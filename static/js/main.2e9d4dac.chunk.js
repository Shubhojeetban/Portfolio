(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{47:function(n,e,t){"use strict";t.r(e);var r,i,a=t(1),o=t(27),c=t.n(o),s=t(13),l=t(8),d=t(4),m=t(5),j=t(0),h=m.b.div(r||(r=Object(d.a)(["\n  .heading {\n    font-size: 2.4rem;\n    margin-bottom: 2rem;\n  }\n  li {\n    margin-bottom: 1rem;\n  }\n  a {\n    font-size: 1.8rem;\n  }\n"])));function b(n){var e=n.heading,t=void 0===e?"Col Heading":e,r=n.links,i=void 0===r?[{type:"Link",title:"Home",path:"/home"},{type:"Link",title:"About",path:"/about"}]:r;return Object(j.jsxs)(h,{children:[Object(j.jsx)("h2",{className:"heading",children:t}),Object(j.jsx)("ul",{children:i.map((function(n,e){return Object(j.jsx)("li",{children:"Link"===n.type?Object(j.jsx)(s.b,{to:n.path,children:n.title}):Object(j.jsx)("a",{href:n.path,target:"_blank",rel:"noreferrer",children:n.title})},e)}))})]})}var p,g=m.b.div(i||(i=Object(d.a)(["\n  max-width: 500px;\n  margin: 0 auto;\n  font-size: 1.8rem;\n  line-height: 1.3em;\n  @media only screen and (max-width: 768px) {\n    font-size: 1.4rem;\n  }\n"])));function x(n){var e=n.children;return Object(j.jsx)(g,{className:"para",children:Object(j.jsx)("p",{children:e})})}var u=m.b.div(p||(p=Object(d.a)(["\n  background-color: var(--deep-dark);\n  padding-top: 10rem;\n  .container {\n    display: flex;\n    gap: 3rem;\n  }\n  .footer__col1 {\n    flex: 2;\n  }\n  .footer__col2,\n  .footer__col3,\n  .footer__col4 {\n    flex: 1;\n  }\n  .footer__col1__title {\n    font-size: 3.5rem;\n    margin-bottom: 1rem;\n  }\n  .copyright {\n    background-color: var(--dark-bg);\n    text-align: left;\n    padding: 1rem 0;\n    margin-top: 5rem;\n    .para {\n      margin-left: 0;\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    .container {\n      flex-direction: column;\n      gap: 0rem;\n      & > div {\n        margin-top: 5rem;\n      }\n    }\n    .footer__col1 .para {\n      max-width: 100%;\n    }\n    .copyright {\n      .container {\n        div {\n          margin-top: 0;\n        }\n      }\n    }\n  }\n"])));function f(){return Object(j.jsxs)(u,{children:[Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"footer__col1",children:[Object(j.jsx)("h1",{className:"footer__col1__title",children:"Shubhojeet Banerjee"}),Object(j.jsx)(x,{children:"A Software developer and Coder from Jharkhand, India. Passionate about developing new Software for a better tomorrow."})]}),Object(j.jsx)("div",{className:"footer__col2",children:Object(j.jsx)(b,{heading:"Important Links",links:[{title:"Home",path:"/",type:"Link"},{type:"Link",title:"Projects",path:"/projects"},{type:"Link",title:"Contact",path:"/contact"}]})}),Object(j.jsx)("div",{className:"footer__col3",children:Object(j.jsx)(b,{heading:"Profiles",links:[{title:"Hackerrank",path:"https://www.hackerrank.com/shubhojeetbaner2"},{title:"Leetcode",path:"https://leetcode.com/heisenberg12/"},{title:"Codechef",path:"https://www.codechef.com/users/ba4n"}]})}),Object(j.jsx)("div",{className:"footer__col4",children:Object(j.jsx)(b,{heading:"Social Links",links:[{title:"LinkedIn",path:"https://www.linkedin.com/in/shubhojeet-banerjee-2009b2192/"},{title:"Github",path:"https://github.com/Shubhojeetban/"},{title:"Twitter",path:"https://twitter.com/itsbanerjeee"}]})})]}),Object(j.jsx)("div",{className:"copyright",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(x,{children:"\xa9 2021 - Shubhojeet Banerjee"})})})]})}var O,v,w=t(15),_=t(14),k=m.b.nav(O||(O=Object(d.a)(["\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 1rem 0;\n  background: var(--dark-bg);\n  ul {\n    max-width: 1200px;\n    margin: 0 auto;\n    width: 90%;\n    text-align: center;\n    li {\n      display: inline-block;\n      border-radius: 8px;\n      transition: 0.3s ease background-color;\n      &:hover {\n        background-color: var(--deep-dark);\n      }\n    }\n    a {\n      display: inline-block;\n      font-family: 'RobotoMono Regular';\n      padding: 1rem 2rem;\n      font-size: 2rem;\n      color: var(--gray-1);\n      outline: none;\n    }\n    .active {\n      color: var(--white);\n    }\n  }\n  .mobile-menu-icon {\n    position: absolute;\n    right: 1rem;\n    top: 1rem;\n    width: 4rem;\n    cursor: pointer;\n    display: none;\n    outline: none;\n    * {\n      pointer-events: none;\n    }\n  }\n  .navItems .closeNavIcon {\n    display: none;\n  }\n  @media only screen and (max-width: 768px) {\n    padding: 0;\n    .hide-item {\n      transform: translateY(calc(-100% - var(--top)));\n    }\n    .mobile-menu-icon {\n      display: block;\n    }\n    .navItems {\n      --top: 1rem;\n      transition: 0.3s ease transform;\n      background-color: var(--deep-dark);\n      padding: 2rem;\n      width: 90%;\n      max-width: 300px;\n      border-radius: 12px;\n      position: absolute;\n      right: 1rem;\n      top: var(--top);\n      .closeNavIcon {\n        display: block;\n        width: 3rem;\n        margin: 0 0 0 auto;\n        cursor: pointer;\n        * {\n          pointer-events: none;\n        }\n      }\n      li {\n        display: block;\n        margin-bottom: 1rem;\n      }\n    }\n  }\n"])));function y(){var n=Object(a.useState)(!1),e=Object(w.a)(n,2),t=e[0],r=e[1];return Object(j.jsxs)(k,{children:[Object(j.jsx)("div",{className:"mobile-menu-icon",onClick:function(){return r(!t)},role:"button",onKeyDown:function(){return r(!t)},tabIndex:0,children:Object(j.jsx)(_.d,{})}),Object(j.jsxs)("ul",{className:t?"navItems":"navItems hide-item",children:[Object(j.jsx)("div",{className:"closeNavIcon",onClick:function(){return r(!t)},role:"button",onKeyDown:function(){return r(!t)},tabIndex:0,children:Object(j.jsx)(_.a,{})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.c,{to:"/",exact:!0,onClick:function(){return r(!t)},role:"button",onKeyDown:function(){return r(!t)},tabIndex:0,children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.c,{to:"/projects",onClick:function(){return r(!t)},role:"button",onKeyDown:function(){return r(!t)},tabIndex:0,children:"Projects"})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.c,{to:"/contact",onClick:function(){return r(!t)},role:"button",onKeyDown:function(){return r(!t)},tabIndex:0,children:"Contact"})})]})]})}function A(){var n=Object(l.f)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[n]),null}var S,N=m.b.div(v||(v=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  position: relative;\n  /* gap: 5rem; */\n  margin-top: 3rem;\n  .title {\n    font-size: 2.4rem;\n  }\n  .items {\n    display: flex;\n    gap: 1.5rem;\n    position: absolute;\n    left: 35rem;\n  }\n  .item {\n    background-color: var(--deep-dark);\n    padding: 1rem;\n    border-radius: 8px;\n  }\n  @media only screen and (max-width: 768px) {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n    .items {\n      position: initial;\n      gap: 1rem;\n    }\n    .title {\n      font-size: 2rem;\n    }\n  }\n"])));function I(n){var e=n.title,t=void 0===e?"Title":e,r=n.items,i=void 0===r?["HTML","CSS"]:r;return Object(j.jsxs)(N,{children:[Object(j.jsx)("h1",{className:"title",children:t}),Object(j.jsx)("div",{className:"items",children:i.map((function(n,e){return Object(j.jsx)("div",{className:"item",children:Object(j.jsx)(x,{children:n})},e)}))})]})}var B,z=m.b.div(S||(S=Object(d.a)(["\n  padding: 20rem 0 10rem 0;\n\n  .top-section {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 2rem;\n  }\n  .left {\n    flex: 3;\n  }\n  .right {\n    flex: 2;\n  }\n  .about__subheading {\n    font-size: 2.2rem;\n    margin-bottom: 2rem;\n    span {\n      background-color: var(--deep-dark);\n      padding: 0.5rem;\n      border-radius: 8px;\n    }\n  }\n  .about__heading {\n    font-size: 3.6rem;\n    margin-bottom: 3rem;\n  }\n  .about__info {\n    margin-bottom: 4rem;\n    .para {\n      max-width: 100%;\n    }\n  }\n  .right {\n    img {\n      border: 2px solid var(--gray-1);\n    }\n  }\n  .about__info__items {\n    margin-top: 15rem;\n  }\n  .about__info__item {\n    margin-bottom: 10rem;\n  }\n  .about__info__heading {\n    font-size: 3.6rem;\n    text-transform: uppercase;\n  }\n  @media only screen and (max-width: 768px) {\n    padding: 10rem 0;\n    .top-section {\n      flex-direction: column;\n      gap: 5rem;\n    }\n    .about__subheading {\n      font-size: 1.8rem;\n    }\n    .about__heading {\n      font-size: 2.8rem;\n    }\n    .about__info__heading {\n      font-size: 3rem;\n    }\n  }\n"])));function J(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(z,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"about__info__item",children:[Object(j.jsx)("h1",{className:"about__info__heading",children:"Education"}),Object(j.jsx)(I,{title:"School",items:["DAV Public School CCL Kathara, Bokaro"]}),Object(j.jsx)(I,{title:"College",items:["Bengal College of Engineering and Technology"]})]}),Object(j.jsxs)("div",{className:"about__info__item",children:[Object(j.jsx)("h1",{className:"about__info__heading",children:"My Skills"}),Object(j.jsx)(I,{title:"Programming Languages",items:["Java","C#","JavaScript"]}),Object(j.jsx)(I,{title:"Frameworks",items:["Sprng Boot","ASP .Net","Android"]}),Object(j.jsx)(I,{title:"Database",items:["MySQL","SQL Server"]})]}),Object(j.jsxs)("div",{className:"about__info__item",children:[Object(j.jsx)("h1",{className:"about__info__heading",children:"Experiences"}),Object(j.jsx)(I,{title:"Jan 2021 - June 2021",items:["Software Engineer Intern at Cognizant"]}),Object(j.jsx)(I,{title:"Sept 2021-",items:["Program Analyst Trainee at Cognizant"]})]})]})})})}var T,D=m.b.form(B||(B=Object(d.a)(["\n  width: 100%;\n  .form-group {\n    width: 100%;\n    margin-bottom: 2rem;\n  }\n  label {\n    font-size: 1.8rem;\n  }\n  input,\n  textarea {\n    width: 100%;\n    font-size: 2rem;\n    padding: 1.2rem;\n    color: var(--gray-1);\n    background-color: var(--deep-dark);\n    outline: none;\n    border: none;\n    border-radius: 8px;\n    margin-top: 1rem;\n  }\n  textarea {\n    min-height: 250px;\n    resize: vertical;\n  }\n  button[type='submit'] {\n    background-color: var(--gray-1);\n    color: var(--black);\n    font-size: 2rem;\n    display: inline-block;\n    outline: none;\n    border: none;\n    padding: 1rem 4rem;\n    border-radius: 8px;\n    cursor: pointer;\n  }\n"])));function L(){var n=Object(a.useState)(""),e=Object(w.a)(n,2),t=e[0],r=e[1],i=Object(a.useState)(""),o=Object(w.a)(i,2),c=o[0],s=o[1],l=Object(a.useState)(""),d=Object(w.a)(l,2),m=d[0],h=d[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(D,{children:[Object(j.jsx)("div",{className:"form-group",children:Object(j.jsxs)("label",{htmlFor:"name",children:["Your Name",Object(j.jsx)("input",{type:"text",id:"name",name:"name",value:t,required:!0,onChange:function(n){return r(n.target.value)}})]})}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsxs)("label",{htmlFor:"email",children:["Your Email",Object(j.jsx)("input",{type:"email",id:"email",name:"email",value:c,required:!0,onChange:function(n){return s(n.target.value)}})]})}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsxs)("label",{htmlFor:"message",children:["Your message",Object(j.jsx)("textarea",{type:"text",id:"message",name:"message",value:m,required:!0,onChange:function(n){return h(n.target.value)}})]})}),Object(j.jsx)("button",{type:"submit",children:"Send"})]})})}var C,M=m.b.div(T||(T=Object(d.a)(["\n  padding: 2rem;\n  background-color: var(--deep-dark);\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  border-radius: 8px;\n  margin-bottom: 2rem;\n  .icon {\n    color: var(--white);\n    background-color: var(--gray-2);\n    padding: 1.3rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n  }\n  svg {\n    width: 3.5rem;\n  }\n"])));function Q(n){var e=n.icon,t=void 0===e?Object(j.jsx)(_.e,{}):e,r=n.text,i=void 0===r?"I need text ":r;return Object(j.jsxs)(M,{children:[Object(j.jsx)("div",{className:"icon",children:t}),Object(j.jsx)("div",{className:"info",children:Object(j.jsx)(x,{children:i})})]})}var R,G=m.b.div(C||(C=Object(d.a)(["\n  text-align: center;\n  p {\n    font-family: 'RobotoMono Regular';\n    font-size: 2rem;\n  }\n  h2 {\n    font-family: 'Montserrat Bold';\n    font-size: 6rem;\n    margin-top: 0.5rem;\n    text-transform: uppercase;\n  }\n  @media only screen and (max-width: 768px) {\n    text-align: center;\n    p {\n      font-size: 1.2rem;\n    }\n    h2 {\n      font-size: 3.6rem;\n    }\n  }\n"])));function U(n){var e=n.subheading,t=void 0===e?"Need Subheading":e,r=n.heading,i=void 0===r?"need heading":r;return Object(j.jsxs)(G,{className:"section-title",children:[Object(j.jsx)("p",{children:t}),Object(j.jsx)("h2",{children:i})]})}var F,P=m.b.div(R||(R=Object(d.a)(["\n  padding: 10rem 0;\n  .contactSection__wrapper {\n    display: flex;\n    gap: 5rem;\n    margin-top: 7rem;\n    justify-content: space-between;\n    position: relative;\n  }\n  .contactSection__wrapper::after {\n    position: absolute;\n    content: '';\n    width: 2px;\n    height: 50%;\n    background-color: var(--gray-1);\n    left: 50%;\n    top: 30%;\n    transform: translate(-50%, -50%);\n  }\n  .left {\n    width: 100%;\n    max-width: 500px;\n  }\n  .right {\n    max-width: 500px;\n    width: 100%;\n    border-radius: 12px;\n    /* padding-left: 3rem; */\n  }\n  @media only screen and (max-width: 768px) {\n    .contactSection__wrapper {\n      flex-direction: column;\n    }\n    .contactSection__wrapper::after {\n      display: none;\n    }\n    .left,\n    .right {\n      max-width: 100%;\n    }\n    .right {\n      padding: 4rem 2rem 2rem 2rem;\n    }\n  }\n"])));function Y(){return Object(j.jsx)(P,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(U,{heading:"contact",subheading:"get in touch"}),Object(j.jsxs)("div",{className:"contactSection__wrapper",children:[Object(j.jsxs)("div",{className:"left",children:[Object(j.jsx)(Q,{icon:Object(j.jsx)(_.c,{}),text:"+91 7061826364"}),Object(j.jsx)(Q,{icon:Object(j.jsx)(_.b,{}),text:"shubhojeetbanerjee72@gmail.com"}),Object(j.jsx)(Q,{text:"Jharkhand, India"})]}),Object(j.jsx)("div",{className:"right",children:Object(j.jsx)(L,{})})]})]})})}function E(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(Y,{})})}var q=m.b.div(F||(F=Object(d.a)(["\n  margin-top: 2rem;\n  .button {\n    font-size: 2.2rem;\n    background-color: ",";\n    padding: 0.7em 2em;\n    border: 2px solid var(--gray-1);\n    border-radius: 8px;\n    display: inline-block;\n    color: ",";\n  }\n  @media only screen and (max-width: 768px) {\n    .button {\n      font-size: 1.8rem;\n    }\n  }\n"])),(function(n){return n.outline?"transperant":"var(--gray-1)"}),(function(n){return n.outline?"var(--gary-1)":"black"}));function Z(n){var e=n.btnText,t=void 0===e?"test":e,r=n.btnLink,i=void 0===r?"test":r,a=n.outline,o=void 0!==a&&a;return Object(j.jsx)(q,{outline:o,className:"button-wrapper",children:Object(j.jsx)(s.b,{className:"button",to:i,children:t})})}var H,K=t.p+"static/media/Main.8ca0b281.jpg",V=m.b.div(H||(H=Object(d.a)(["\n  padding: 10rem 0;\n  .container {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    text-align: left;\n  }\n  .aboutSection__left,\n  .aboutSection__right {\n    flex: 1;\n  }\n  .section-title {\n    text-align: left;\n  }\n  .para {\n    margin-top: 2rem;\n    margin-left: 0;\n  }\n  .aboutSection__buttons {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 2rem;\n    margin-top: 2rem;\n  }\n  @media only screen and (max-width: 950px) {\n    .aboutSection__left {\n      flex: 4;\n    }\n    .aboutSection__right {\n      flex: 3;\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    .container {\n      flex-direction: column;\n      text-align: center;\n    }\n    .aboutSection__left,\n    .aboutSection__right {\n      width: 100%;\n    }\n    .aboutSection__right {\n      margin-top: 3rem;\n    }\n    .section-title {\n      text-align: center;\n    }\n    .para {\n      margin: 0 auto;\n      margin-top: 2rem;\n    }\n    .aboutSection__buttons {\n      flex-direction: column;\n      gap: 0rem;\n      .button-wrapper,\n      a {\n        width: 100%;\n        text-align: center;\n      }\n    }\n  }\n"])));function X(){return Object(j.jsx)(V,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"aboutSection__left",children:[Object(j.jsx)(U,{subheading:"Let me introduce myself",heading:"About Me"}),Object(j.jsx)(x,{children:"I am a Software Developer from Jharkhand, India. I love to learn new technologies. It's fascinating to me to develop new Software Applications. I have got a strong sense of design and intergration with intuitive problem-solving skills."}),Object(j.jsxs)("div",{className:"aboutSection__buttons",children:[Object(j.jsx)(Z,{btnText:"Works",btnLink:"/projects"}),Object(j.jsx)(Z,{btnText:"Download Resume",btnLink:"#",outline:!0})]})]}),Object(j.jsx)("div",{className:"aboutSection__right",children:Object(j.jsx)("img",{className:"aboutImg",src:K,alt:"Img"})})]})})}var W,$=t(53),nn=t(51),en=t(52),tn=t(50),rn=t.p+"static/media/Medicia.a1bf60c5.jpg",an=m.b.div(W||(W=Object(d.a)(["\n  .projectItem__img {\n    width: 100%;\n    height: 400px;\n    border-radius: 12px;\n    overflow: hidden;\n    display: inline-block;\n    border: 3px solid var(--gray-2);\n    img {\n      height: 100%;\n    }\n  }\n  .projectItem__info {\n    margin-top: 1rem;\n    background-color: var(--deep-dark);\n    padding: 1rem;\n    border-radius: 12px;\n  }\n  .projectItem__title {\n    font-size: 2.2rem;\n  }\n  .projectItem__desc {\n    font-size: 1.6rem;\n    font-family: 'RobotoMono Regular';\n    margin-top: 1rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .projectItem__img {\n      height: 350px;\n    }\n  }\n"])));function on(n){var e=n.img,t=void 0===e?rn:e,r=n.title,i=void 0===r?"Project Name":r,a=n.desc,o=void 0===a?"Lorem Ipsum is simply dummy text of the printing and typesetting industry.":a,c=n.link,s=void 0===c?"dummy link":c;return Object(j.jsx)(an,{children:Object(j.jsxs)("a",{href:s,rel:"noreferrer",target:"_blank",children:[Object(j.jsx)("div",{className:"projectItem__img",children:Object(j.jsx)("img",{src:t,alt:"project img"})}),Object(j.jsxs)("div",{className:"projectItem__info",children:[Object(j.jsx)("h3",{className:"projectItem__title",children:i}),Object(j.jsx)("p",{className:"projectItem__desc",children:o})]})]})})}t(46);var cn,sn=t(54),ln=t.p+"static/media/music.47f2c663.jpeg",dn=t.p+"static/media/url.04515fce.jpg",mn=t.p+"static/media/cointracker.8da9e0cd.jpg",jn=[{id:Object(sn.a)(),name:"Medicia",desc:"A REST API for the medical history tracking application. Developed for the convience of patients and doctors.",img:rn,link:"https://github.com/Shubhojeetban/MediciaApi.git"},{id:Object(sn.a)(),name:"Ban Music Player",desc:"An android music player for making the music experince more exciting and gripping.",img:ln,link:"https://github.com/Shubhojeetban/MusicPlayer.git"},{id:Object(sn.a)(),name:"URL Shortner",desc:"Using this application you can shorten a long url and use it in alternative for the original URL.",img:dn,link:"https://github.com/Shubhojeetban/url-shortner.git"},{id:Object(sn.a)(),name:"QR Code Scanner and Generator",desc:"An application to generate QR codes and can be used commercially. Also it can scan any QR code.",img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOgAAADZCAMAAAAdUYxCAAABjFBMVEUpquP////+v4oAAAAmN0EhMz0hlvMoKjb09PQAo+H6/f4gqOJrveqJyex6enq01/sAiugAj/OSw/UOkvMoKDEoHx/D3vchm/smPlwjhtf3tICQkJD/zaiDg4MmGR07o9YZIjNwVkrX7fghGBf5r3mNa1PW7P+ZmZmjo6MbGxtwcHAAVJZcXFw5X3c1NTVERESvr6/r6+u5ubkjYJche8UmJibd3d2myvHGxsarq6s3a4gWFhZ0dHTe3t4pGBNWVlZYoecTDRcVGSX9wI18sur/wIJDl+QUKjaqhGb9xZj84s3+8eYAmtMoVG9NrdvytYM5l8MAGCcAABc7Tl8+fZ8ueLsuV4FmsPSZyPUZFBwAAB5ENSneqn48oPc0KiHAj2YAccOpqbrvzK9zt9jmvZmDtMj50bDTu6TAt6zu39N3p7x0gomtglcAfN/etJsASW5YosF3l7xNcJh8nMEQSnuupZtRSkEASJNff6mXr7WjiXTgzsKBYkjppHEAFy/MlGm9099OWmGayeE9irFzcLq3AAAQVUlEQVR4nO2di1fbRhaHkY1ByK2cggMNsnCWEiS0KpYmtZCxvU5iFGpweDQ0JC1sHyGPJttsHptu2d20TfuP78xIskayDBZw0Ij6d4KiF+f44965c++MRh4aGmiggQYaaKCBBhpooIEGGmiggQYaaKCBBhrowih7Noob41hlPzgj0Y46xpyNZsfiJjlGY9wAdACaXFA+HRTDCJ19CYFI6TTHyOk0izYB6YkGFTv7MgIVLghoVSDUQKCmc5BOKxUZHzIdUPJmNVmgC2R7ExCoK8fAWC4oeTNIMKhIoHBhoCxxs5Y4ULehdkBZ1Dw5FIxYtIF7AsMy/obKXhhQxtlINjJzEUE5URAqMg5GmBEfXkRQpqsz9droAJRa9QuaJhOGCw8qXQhQIKJERxQ8ULkCj9PphpMtcYwpio5ZTXyzICYRtCthILoX3Dw5ImtIcsLgyU0BO10o41QvLih5c8JSwKAwLcu5m4tSptXCQcmNhDaJB9XEoDCepgloz+TFClDgIdqw6NAvnk0MaJhwzyI7B5712B63JxdUJEC5iwLKp6vVNGB0+F+1iowJgzCr655FdVbogCa7e4HSIKgvM+I8UByMnKtej5pYUJYXSwgF8CIG5UVJgzIgDYpDMEcS+YomoY0niU9QMHJAGf8oihuRpE4wwnsCGZvSaTFZbRQKMPZeF6h8JCifONBqtYxDkBOM4GYhLbGw3VYX0k4wqsJT9sY2JrybrSSujUIEr2fpGNMdBZTS3RLQzQnLdasijEPQjoYGUDDiARBgAsSbMCLxIs9jUF5sILySkxCl0yqAEpMFuoDsuNBpo9COFX9C4Oa6TjHDkA01OaCK3XsukF1oAFTogAoJBmV1I71Q7YAK6bLOijDouErjKFWFt8CwJDmZkY7FokQJarbYn+IFxaMJXlLkbjx5JuS6U8D8rS+gZvrU3a2hoTied8CgJoCdRAPFHIgH41AN7mk1t0ot8TUYpQDAB7BMUxSOqQOA/0IwGF0djaT8zHIMmGThDZyexcmRvFbozo86FsVyzZpOR+SEmtmJDZQPBWW9fIhM6l1QjJzOR+aEpHG0VA90obzogOI9HG5QJ6kLCwseaBmqimu1Mt49AedoPg6TBjIj0W8435iRJ46pOHsP4Oe+HE350fynMYLy/GK6CkwVffpGrcbYkUZAe0BRMGiNL9mxSQFAckJVA4J+eSWKPvs4HyfoAtmfeG3UV3h7mRHOGqo4UN26PDI1EkVTUx/HDOqNeYJO1NX8oBUS1I7ID+5NTezfgAATGGNiYgLvTRxB+uVMvKAoPbK1UIYFm1Atw1ZbdlQVdH2hjI0Iz6FNta5DA+fz16f2dxHW0v7+/o2J8ZWl/fHd/f3d/d6kn12ODbRmRx+dTIV8E2nkMIMrPL+0AEFtqFzu/mRu9/79yf3747nJydxHvUHjs6is4OjDKq5qDmipZh97oM71EgE6gUgnbuzv394f2d8dGYFbqCMsGh9omDCoW8J4oM6JCgE6MkFQHdE4KQUVO0mRD5QlUkBIexOBRlSMoGJ5MSDYYOtQLMOhS+W6LpTRBtuxXHZGsdm6Lj1IFGjYtCFDJryB2TRvuF67mTRQhdAi+YicqsDAY5qCogKTR3hAVbnkgvZ+6NFJc8PaaOJBxRBQISTqQoEEggplNw5hUAkeljUYjMqSjsOSDeoEq6+u2qCLMOp+FE2xgwaeM3IGsNmw8c3013vNvcdr8NyD/PXdyWjapw8Uxh8YjOCGMZFUO0eCutZMIVmPme38X+d7dMS9lPuWOlAv9HrNE+383eZEqJ/fSjyoLyLhC5y7900HtBkJdK1pFdapA9XrxmIJabGC8MS6AWPtIuxTeb3DmUr1BOUmV4IX1i34C6213LefUAXK+GdFvaFAgekHdOnK7pXAlRb2gULhu8U7sYLKqi0HtG6asExTVTyeoqqCaTIoKVLViv2Jjwe95L+CDQpVKBTexrAMs2fCIDplmjNwJBGPaKz147rz8/P+wmjd/Z1WofD9w7HzRu2ZAjqPL7AeqHu5LvQB2i3Xosh/m9bBeaO6SX2JUNkBNQydYQxDQOeEuoEjE7zddPvRaKBsilAzZR08OlcHPmptmvMJg0m90Xj/IhyUPWrpIvc45ZfVOjxHVAwqNdSAYFfSaDifUINXGxrDoJsaDsqaFQYqiRUTAM2oAGDKugmMim7azyShxJi1UkHU5qNzIz3p+lG7xQUShnodmCYwDR0YJtAB3IWghgGBcQUQNClCfXJepCdeKMu2rCPaaB26KgTW6wznzRqz3aAp6+k5PRNwihXByH1DQAVJ5HVertVNydTQ4kyzc+mHLueFpA/Px6anWrX/2PqmG9RgoR0N1mAAq+s6jNy6/28TVOt8TJr98KR6iH7EB1GqFy6M1DqngHTid2m0t9rt9s5MpDKNDfPeA8qf3BnLbjw7fB7Jokjr3Z3Mw7hRjlJ2A7Qsy/p1O3LhPXmA8TY90qcUv34k+8g2TPOX6CMMP/6jmdrcJG0aN01vZTdcB7wWHfRS+pqf03oUN09PjT3pfMjrHdDJS7Z+nPXZzz55ZdYD/aQRaKXnlTScQF5EedEBvXEjt4RFPkE3a5/KXRn3QP92JxCQmtSCfmB5A4GPO6ArRzjsbRL0nwfBuEtpOMo+JExirUcHfeIHTQFaQTuxqAB/WpFB7xwGQM8pDYyutuO5hQIknV4nQHlRqUiSWWuoNR7IQK0Ziih3WfRZoJFaG5SatG37XquASdcIULkq8DKQqrKmirImaQLgVa3LosUgKK2+W3xpuZyFVqpAgEI0U5QESZUNxYTGFE0JrUcIgLabflBq891i+6nlcEJQp5HeRqCqWJdKjFxX1IWGYgJJNYWSAc9fWfGBBsIutb5bLLafWDZnoZn63ibgOAwqiqam1kzZkCQByFIJ4DbKcT7QpwHQ1CGdoIj0wLFoyvqBiK5ArQgyqChSWVZUnm8AURUBQwqBZoNhl17fhWo6sahFZkJSjRcXJSCYDdFQZA1GJtk0u0GDYTdlxbKioA9BkxYPrFYL5m91EoMXBJ6XFEGRFc0QBEXT1HKIRV92gZ7fwGc0ZaFJ28+e7O0J/urF+ImXGzwwarIgqwYw0mZJDgHd6iq/n1Dqu0PZdvvZocbf9Mq0+aVcLvfq9euf3/zr1b1Xb35+/fPre6+W7t178ya3lFsiq5e/PGwHOVPTtFp044llpaxvvvBAV3BFNoL+jbh7I5fc2m2JBJ172wz0pM05OgdU3LS+GRxKUcS3fEVWgPGTVAMaL9UBALrvDgw6121RjUaTZrOuIT7/tx/UrAiSqAh6qaKVTV4AiqCWglE3FJTODiZ72AkmP/tBYaIrm7JmVlQYe9WSJJqiwPYFOhc3VJjGvMzmIGBRviZKoqRKkg5UUxLlBszr+wOlsfr2xoxSVsGHAZSKwguSwAqCLPKGZiiLktwfKI2NtAPaIkYYcpPIdQUJVGTYe0pA5lVTLDUEFbXRpcnjQKdfUPgm7THN/nCodnGrNLtMg+1TY0uaoZbkEizAhSpfkxAoWab1AJ2jjzNr16O4UIOkJKggikZJFEqiCPM/VWRNRa0YfYGm5igs1Yq4oLTLl6ZvKEXihYbEi7JSgaASD4twIPYLSmGplm1v4YfAMKhFgpoaqJtMvY4yfUNjjDpj6GyfoDTOwRTbL93CO5XSCdBe6gN0msaUAZYujyxngKHFnREohdEIkm61D60W4ky59ejpQTfipgoTKkfRgynNzkDKyiV7KewlcpJp0jkZqF7CQeksviFp++Xzr73qhVta6jnJtJRj+gClMOzCwDv28vDpk/+c4FHz3qA0ht3sxgHKGfa+OkPQ6Rf0hV1nmqmZWjxL0E36LDrmDrXv/fvMQKHvxo3VJW/e0PruLEGpGzciZoIt/4gQF6a+QanrXzqgLW8eGGk+fJVWbrZPUPr6F2ekvQWrtE7hDYWra84/RtQ53wcoff2LPcHZIqdHXaDx2zdWZmehw87OT7LzDF4r0Scohf0Lmh916rTUtB/09u7uj5Mr93fvT46PT+ZWdncjgO5RZ9FisenVo6wPdHxl5YY9H8rasSkCKH3zEqgededHUx5ojgkV1y8offVLFtYubj1a4AiicDGJBUW1i1OP+ia8+9CRoNR1pHY9mrKsVPO/EZcfINB3CQLFc96P3v7vREn9u3c9QOnLGIbwcwzt5Zsnq17ebYaD0vlAKwTduXxS0BDSaRpTI6xiMeIqCaQlHIw2Q0inaUyNHC3PXJ8aj6aREQTaDCGFoDQO7WIh0IloskFTKUjaTBBofjjqu1Km7t1y+tGgUekGzd8bmYqkLy+PdhIGPyrNoDv50Xz+4ygavTx6tXdST20w2plBLx2NInj/1Ws9QTcpBc1uneS1s7/82hOUxslgrOLyTGTOqz/N9QbVPogbKVzF4t1opPnRq6Pv5uame4GuMZNUei/Md5cvew3w6vH6BZYu4QZNTc/hR3+p9F5UwmztLLtSrh2nzxFmOGdq2l5uQecr7wOvod+c60fhmI8Zp7L9kEaT+knbmHT6CMGL4eZMecPDHJWgQaMGF3p0KbjkxTUnITrjESn7SfvjULvVWmd82hjaihvlGKH5/uBSwmNlPQ4OO/12p5wE0ko0m7bWA5ycsJ0ZHo6b5Djh1RM9I06I1oJDEGB1dXh4OBPPV05EUHGr2N46CM99ur22EJx6q7/fHsai3nlxFG5XUCcT3Zzcc+S1tu7GDXK8EOnLvWNRpwsBTEbDXusoT73zkkY9CjbQpzCG47Wr29urGey8lGYOhDDp1gs3SQprnY8DmKzrtasaywIcjxLgvA7qsz0vH/RzBlMEpuJ67SpeJmMg48byfSmRhUnbh9NE6uuZ8/sur/Uap33mPTLvYnxfVhVFdppf6UZtrbO+XoUlYm3mvX3ueSYxzjtkh18/Ku5T0PePEZzyNhFrh7ftPMkmzyTCeYecygaibnqoBdaWi2kOk5iwjT5HZwXnZEKcd8htqu1nB3N2ObrG+kB1xfNal/S9XOk02cQ475BrVZQAT8+55nRJ/V7rwq3CbjSzncFxOBmR15GN+nJu+gfOBxr0WhL2fZ1h5e1EOS8SXhJusqSw1wbd1gO1wxT8Q2TieJH0adQuMj5QCeZ5PUFX7Zfjs8ik5SQ5L1L7d8KcZgZh9iRdtZdicqvJiryO2rqLCYvOTOYoUCdtwIkgcl76s3tCxfZDx3mF7dVM5mjSbfQtSeywfTX/R9yfPZq22r8hc4IMgdnbed9Lz1c715LlvDBFYlHRmcn0ATqcIYrwpEXeYvt3n9ceCepTwpy3uDPchdknKfWjn37dDcHsjzRhzrtVPinocJ760U9SxU9PbNJEOW+xuJU/MSj9Q/eEiu3lsGjUHyn9Q/eeYA0zfHLfHU5QJlgs7vw5nBeaNLyL6cuiyXLeP05h0gQNIA31MukFdN5TdDEJc97lU5g0Qc4LTXqKLiYxQ/dDuIs5edaQpAGk02UNyXLeU3QxSXLe4tZpsoZkOe8pCtMkOW+22KMw7c+kSXLe4tbin8V5wwvTPk2aHOc9ZWGaoEnTUxWmwwkauj9dYdrDef8P/TmTg1p7HqsAAAAASUVORK5CYII=",link:"https://github.com/Shubhojeetban/javaQRScannerGenerator.git"},{id:Object(sn.a)(),name:"Quiz App",desc:"A Quiz app to check your general knowledge while having fun.",img:mn,link:"https://github.com/Shubhojeetban/QuizzApp---React.git"}];en.a.use([tn.a]);var hn,bn=m.b.div(cn||(cn=Object(d.a)(["\n  padding: 10rem 0;\n  .projects__allItems {\n    display: flex;\n    gap: 3rem;\n    margin-top: 5rem;\n  }\n  .swiper-container {\n    padding-top: 8rem;\n    max-width: 100%;\n  }\n  .swiper-button-prev,\n  .swiper-button-next {\n    position: absolute;\n    height: 50px;\n    width: 50px;\n    background: var(--deep-dark);\n    z-index: 10;\n    right: 60px;\n    left: auto;\n    top: 0;\n    transform: translateY(50%);\n    color: var(--gray-1);\n    border-radius: 8px;\n  }\n  .swiper-button-next {\n    right: 0;\n  }\n  .swiper-button-prev::after,\n  .swiper-button-next::after {\n    font-size: 2rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .projects__allItems {\n      flex-direction: column;\n      max-width: 400px;\n      margin: 0 auto;\n      margin-top: 7rem;\n      gap: 5rem;\n      .projectItem__img {\n        width: 100%;\n      }\n    }\n  }\n"])));function pn(){return Object(j.jsx)(bn,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(U,{subheading:"some of my recent works",heading:"Projects"}),Object(j.jsx)("div",{className:"projects__allItems",children:Object(j.jsx)($.a,{spaceBetween:30,slidesPerView:1,navigation:!0,breakpoints:{640:{slidesPerView:1},768:{slidesPerView:2},1200:{slidesPerView:3}},children:jn.map((function(n,e){if(!(e>=5))return Object(j.jsx)(nn.a,{children:Object(j.jsx)(on,{title:n.name,img:n.img,desc:n.desc,link:n.link})},n.id)}))})})]})})}var gn=m.b.div(hn||(hn=Object(d.a)(["\n  padding: 5rem 0;\n  .contactBanner__wrapper {\n    background-color: var(--deep-dark);\n    border-radius: 12px;\n    padding: 5rem 0rem;\n    text-align: center;\n  }\n  .contactBanner__heading {\n    font-size: 4rem;\n    margin-bottom: 2rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .contactBanner__heading {\n      font-size: 2.8rem;\n    }\n  }\n"])));function xn(){return Object(j.jsx)(gn,{children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"contactBanner__wrapper",children:[Object(j.jsx)(x,{children:"Want to see me live coding"}),Object(j.jsx)("h3",{className:"contactBanner__heading",children:"Hire Me"}),Object(j.jsx)(Z,{btnText:"Contact Now",btnLink:"/contact"})]})})})}var un,fn,On=t.p+"static/media/shubhojeet.272251d1.jpg",vn=t.p+"static/media/social-media-arrow.f5e093ce.svg",wn=t.p+"static/media/scroll-down-arrow.b013ca45.svg",_n=m.b.div(un||(un=Object(d.a)(["\n  .hero {\n    height: 100vh;\n    min-height: 1000px;\n    width: 100%;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n  }\n  .hero__heading {\n    font-size: 2rem;\n    margin-bottom: -4rem;\n    position: relative;\n    span {\n      display: inline-block;\n      width: 100%;\n    }\n    .hero__name {\n      font-family: 'Montserrat SemiBold';\n      font-size: 7rem;\n      color: var(--white);\n    }\n  }\n  .hero__img {\n    max-width: 900px;\n    width: 100%;\n    height: 600px;\n    margin: 0 auto;\n    border: 2px solid var(--gray-1);\n  }\n  .hero__info {\n    margin-top: 3rem;\n  }\n  .hero__social,\n  .hero__scrollDown {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    position: absolute;\n\n    bottom: 20px;\n    width: 50px;\n  }\n  .hero__social {\n    left: 50px;\n  }\n  .hero__scrollDown {\n    right: 50px;\n  }\n\n  .hero__social__indicator,\n  .hero__scrollDown {\n    width: 50px;\n    p {\n      font-size: 1.6rem;\n      transform: translateY(-70px) rotate(90deg);\n      letter-spacing: 0.7rem;\n      text-transform: uppercase;\n    }\n    img {\n      max-height: 45px;\n      width: 16px;\n      margin: 0 auto;\n      object-fit: contain;\n    }\n  }\n  .hero__scrollDown {\n    img {\n      max-height: 70px;\n    }\n  }\n\n  .hero__social__text {\n    ul {\n      li {\n        margin-bottom: 1rem;\n        a {\n          display: inline-block;\n          font-size: 1.6rem;\n          transform: rotate(-90deg);\n          letter-spacing: 5px;\n          margin-bottom: 2rem;\n        }\n      }\n    }\n  }\n\n  @media only screen and (max-width: 768px) {\n    .hero {\n      min-height: 750px;\n    }\n    .hero__heading {\n      font-size: 1.4rem;\n      margin-bottom: -3rem;\n      .hero__name {\n        font-size: 4.5rem;\n      }\n    }\n    .hero__img {\n      height: 300px;\n    }\n    .hero__info {\n      margin-top: 3rem;\n    }\n    .hero__social {\n      left: 0px;\n      bottom: -15%;\n      width: 20px;\n      .hero__social__indicator {\n        width: 20px;\n        p {\n          font-size: 1.2rem;\n        }\n        img {\n          max-height: 22px;\n        }\n      }\n      .hero__social__text {\n        ul {\n          li {\n            a {\n              font-size: 1.2rem;\n              margin-bottom: 1rem;\n            }\n          }\n        }\n      }\n    }\n    .hero__scrollDown {\n      right: 0;\n      width: 20px;\n      gap: 1rem;\n      p {\n        font-size: 1.3rem;\n      }\n    }\n  }\n"])));function kn(){return Object(j.jsx)(_n,{children:Object(j.jsx)("div",{className:"hero",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("h1",{className:"hero__heading",children:[Object(j.jsx)("span",{children:"Hello, This is"}),Object(j.jsx)("span",{className:"hero__name",children:"Shubhojeet Banerjee"})]}),Object(j.jsx)("div",{className:"hero__img",children:Object(j.jsx)("img",{src:On,alt:""})}),Object(j.jsxs)("div",{className:"hero__info",children:[Object(j.jsx)(x,{children:"I am working as a Software Developer and am passionate about implementing, and launching new projects."}),Object(j.jsx)(Z,{btnText:"see my works",btnLink:"/projects"})]}),Object(j.jsxs)("div",{className:"hero__social",children:[Object(j.jsxs)("div",{className:"hero__social__indicator",children:[Object(j.jsx)("p",{children:"Follow"}),Object(j.jsx)("img",{src:vn,alt:"icon"})]}),Object(j.jsx)("div",{className:"hero__social__text",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"http://facebook.com/webcifar",target:"_blank",rel:"noreferrer",children:"LI"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"http://twitter.com/webcifar",target:"_blank",rel:"noreferrer",children:"TW"})})]})})]}),Object(j.jsxs)("div",{className:"hero__scrollDown",children:[Object(j.jsx)("p",{children:"Scroll"}),Object(j.jsx)("img",{src:wn,alt:"ScrollDown Arrow"})]})]})})})}function yn(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(kn,{}),Object(j.jsx)(X,{}),Object(j.jsx)(J,{}),Object(j.jsx)(pn,{}),Object(j.jsx)(xn,{})]})}var An,Sn=m.b.div(fn||(fn=Object(d.a)(["\n  padding: 10rem 0;\n  .projects__allItems {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    gap: 5rem;\n    margin-top: 5rem;\n  }\n  .projects__searchBar {\n    position: relative;\n    width: 300px;\n    margin-top: 5rem;\n  }\n  .projects__searchBar input {\n    width: 100%;\n    font-size: 2rem;\n    padding: 0.8rem;\n    color: var(--black);\n    border-radius: 6px;\n    outline: none;\n    border: none;\n  }\n  .projects__searchBar .searchIcon {\n    position: absolute;\n    width: 2rem;\n\n    right: 1rem;\n  }\n  .projects__searchBar .searchIcon path {\n    color: var(--deep-dark);\n  }\n  @media only screen and (max-width: 768px) {\n    .projects__searchBar,\n    .projects__searchBar form,\n    .projects__searchBar input {\n      width: 100%;\n    }\n  }\n"])));function Nn(){var n=Object(a.useState)(""),e=Object(w.a)(n,2),t=e[0],r=e[1],i=Object(a.useState)(jn),o=Object(w.a)(i,2),c=o[0],s=o[1];Object(a.useEffect)((function(){""!==t&&s((function(){return jn.filter((function(n){return n.name.toLowerCase().match(t.toLowerCase())}))}))}),[t]);return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(Sn,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(U,{heading:"Projects",subheading:"some of my recent works"}),Object(j.jsx)("div",{className:"projects__searchBar",children:Object(j.jsxs)("form",{children:[Object(j.jsx)("input",{type:"text",value:t,onChange:function(n){n.preventDefault(),r(n.target.value),!n.target.value.length>0&&s(jn)},placeholder:"Project Name"}),Object(j.jsx)(_.f,{className:"searchIcon"})]})}),Object(j.jsx)("div",{className:"projects__allItems",children:c.map((function(n){return Object(j.jsx)(on,{title:n.name,desc:n.desc,img:n.img,link:n.link},n.id)}))})]})})})}function In(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(s.a,{children:[Object(j.jsx)(y,{}),Object(j.jsx)(A,{}),Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/about",children:Object(j.jsx)(J,{})}),Object(j.jsx)(l.a,{path:"/contact",children:Object(j.jsx)(E,{})}),Object(j.jsx)(l.a,{path:"/projects",children:Object(j.jsx)(Nn,{})}),Object(j.jsx)(l.a,{path:"/",children:Object(j.jsx)(yn,{})})]}),Object(j.jsx)(f,{})]})})}var Bn,zn=Object(m.a)(An||(An=Object(d.a)(["\n*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n  }\n  :root{\n    --dark-bg: #262626;\n    --gray-1: #BCB4B4;\n    --deep-dark: #1E1E1E;\n    --gray-2: #363636;\n    --white : white;\n    --black: black;\n  }\n  html{\n    font-size: 10px;\n    font-family: 'Roboto Mono';\n    background-color: var(--dark-bg);\n  }\n  ul,li{\n    list-style: none;\n  }\n  a{\n    text-decoration: none;\n  }\n  img, svg{\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  button{\n    outline: none\n  }\n  .container {\n    max-width: 1200px;\n    width: 90%;\n    margin: 0 auto;\n  }\n/* Smooth Scroll  */\n  [data-scrollbar] {\n    height: 100vh;\n    overflow: hidden;\n    background-color: var(--gray-1);\n    .scroll-content {\n      background-color: var(--dark-bg);\n    }\n    .scrollbar-track.scrollbar-track-y {\n      background: var(--deep-dark);\n      .scrollbar-thumb-y {\n        background: var(--gray-1);\n      }\n    }\n  }\n"]))),Jn=t.p+"static/media/RobotoMono-Regular.418a8f9f.ttf",Tn=t.p+"static/media/Montserrat-SemiBold.fa8441f3.ttf",Dn=t.p+"static/media/Montserrat-Bold.079ca05d.ttf",Ln=Object(m.a)(Bn||(Bn=Object(d.a)(["\n  @font-face {\n    font-family: 'RobotoMono Regular';\n    src: url(",");\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'Montserrat SemiBold';\n    src: url(",");\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'Montserrat Bold';\n    src: url(",");\n    font-style: normal;\n  }\n  html{\n    font-family: 'RobotoMono Regular';\n    color: var(--gray-1);\n  }\n  *{\n    font-family: 'RobotoMono Regular';\n    color: var(--gray-1);\n  }\n  h1,h2,h3,h4,h5,h6{\n    font-family: 'Montserrat SemiBold'\n  }\n\n"])),Jn,Tn,Dn);c.a.render(Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(zn,{}),Object(j.jsx)(Ln,{}),Object(j.jsx)(In,{})]}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.2e9d4dac.chunk.js.map