(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{28:function(t,e,n){},51:function(t,e,n){"use strict";n.r(e);var o=n(8),a=n.n(o),c=n(16),i=n.n(c),r=(n(28),n(0)),l=n(3),s=(n(29),n(30),n(17)),u=n(18),d=n.n(u),m=(n(36),n(37),n(19)),g=n.n(m),v=(n(39),n(20)),b=n.n(v),h=(n(41),n(21)),p=n.n(h),y=n(22),f=n.n(y),k=(n(42),n(43),n(44),n(45),n(46),n(47),n(48),n(23)),w=n.n(k),L=[["heading","bold","italic","strike"],["hr","quote"],["ul","ol","task","indent","outdent"],["table","image","link"],["code","codeblock"]];function j(t){var e=document.createElement("button");return e.className="toastui-editor-toolbar-icons ".concat("full-screen"),e.style.backgroundImage="none",e.style.margin="0",e.innerHTML="<img src=".concat("https://res.cloudinary.com/dsabyte/image/upload/v1625072659/toast/fullscreen-svgrepo-com_y4avfz.svg"," alt='full screen  button'></img>"),e.addEventListener("click",(function(e){if(t&&t.current){var n=t.current.getRootElement();"100vh"!=n.style.height?n.style="height:100vh; width:100vw; position:fixed;z-index:100000;top:0px;left:0px;background-color:white;":n.style="height:400px;"}})),e}function x(t){var e=document.createElement("button");return e.className="toastui-editor-toolbar-icons ".concat("preview-style-button"),e.style.backgroundImage="none",e.style.margin="0",e.innerHTML="<img src=".concat("https://res.cloudinary.com/dsabyte/image/upload/v1625105428/toast/preview-style_vevyy6.svg"," alt='preview-style-button'></img>"),e.addEventListener("click",t),e}function E(t){var e=document.createElement("button");return e.className="toastui-editor-toolbar-icons ".concat("dark-mode-button"),e.style.backgroundImage="none",e.style.margin="0",e.innerHTML="<img src=".concat("https://res.cloudinary.com/dsabyte/image/upload/v1625109031/toast/moon-svgrepo-com_xmuyw5.svg"," alt='dark-mode-button'></img>"),e.addEventListener("click",t),e}var S=/\[(@\S+)\]\((\S+)\)/,O=[{rule:S,toDOM:function(t){var e=S,n=t.match(e),o=document.createElement("span");return o.innerHTML='<a class="widget-anchor" href="'.concat(n[2],'">').concat(n[1],"</a>"),o}}],T=n(11),I={rendererURL:"https://www.plantuml.com/plantuml/svg/"};function M(){var t=Object(o.useRef)(null),e=Object(o.useState)("vertical"),n=Object(l.a)(e,2),a=n[0],c=n[1],i=Object(o.useState)("light"),u=Object(l.a)(i,2),m=u[0],v=(u[1],!1);return Object(T.jsx)(s.Editor,{ref:t,initialValue:"# hello react editor world!",previewStyle:a,height:"400px",initialEditType:"markdown",useCommandShortcut:!0,theme:m,widgetRules:O,toolbarItems:[].concat(Object(r.a)(L),[[{el:j(t),tooltip:"Toggle Full Screen"},{el:x((function(){c(v?"vertical":"tab"),v=!v})),tooltip:"Preview Style"},{el:E((function(){var t=document.getElementsByClassName("toastui-editor-defaultUI")[0];t.classList.contains("toastui-editor-dark")?t.classList.remove("toastui-editor-dark"):t.classList.add("toastui-editor-dark")})),tooltip:"Preview Style"}],["scrollSync"]]),customHTMLRenderer:{latex:function(t){console.log(t)},btex:function(t){console.log(t)}},plugins:[[d.a,I],g.a,b.a,p.a,[w.a,{highlighter:f.a}]]})}var C=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(e){var n=e.getCLS,o=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),o(t),a(t),c(t),i(t)}))};i.a.render(Object(T.jsx)(a.a.StrictMode,{children:Object(T.jsx)(M,{})}),document.getElementById("root")),C()}},[[51,1,2]]]);
//# sourceMappingURL=main.902c297e.chunk.js.map