(self.webpackChunkcomplete_intro_to_linux_and_the_cli=self.webpackChunkcomplete_intro_to_linux_and_the_cli||[]).push([[841],{3453:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var r=n(7294),a=n(8759),l=n(9829).j;function o(e){var t=e.data,n=t.markdownRemark,o=t.allMarkdownRemark.edges.map((function(e){return e.node.frontmatter})).sort(l),s=n.frontmatter,c=n.html,u=o.findIndex((function(e){return e.path===s.path})),i=u>0?r.createElement(a.default,{className:"prev",to:o[u-1].path},"← "+o[u-1].title):null,d=u<o.length-1?r.createElement(a.default,{className:"next",to:o[u+1].path},o[u+1].title+" →"):null;return r.createElement("div",{className:"lesson-container"},r.createElement("div",{className:"lesson"},r.createElement("h1",null,s.title),r.createElement("h2",null,s.date),r.createElement("div",{className:"lesson-content",dangerouslySetInnerHTML:{__html:c}}),r.createElement("div",{className:"lesson-links"},i,d)))}},9829:function(e){function t(e){if(!/^\d+[A-Z]+$/.test(e))throw new Error(e+" does not match the section format. It must be <numbers><capital letters>, like 16A or 5F (case sensitive)");return[/^\d+/.exec(e)[0],/[A-Z]+$/.exec(e)[0]]}var n=function(e){return e.split("").map((function(e,t){return e.charCodeAt(0)*Math.pow(10,t)})).reduce((function(e,t){return e+t}))};e.exports.j=function(e,r){var a,l;e.attributes&&e.attributes.order?(a=e.attributes.order,l=r.attributes.order):(a=e.order,l=r.order);var o=t(a),s=o[0],c=o[1],u=t(l),i=u[0],d=u[1];return s!==i?s-i:n(c)-n(d)}}}]);
//# sourceMappingURL=component---src-templates-lesson-template-js-786ec5fa922e0f0c4947.js.map