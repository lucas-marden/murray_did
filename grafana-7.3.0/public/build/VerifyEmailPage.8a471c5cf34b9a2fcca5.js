(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"5zIn":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("NoLC"),l=n("kDLi"),o=n("ZFWI"),u=n("t8hP"),c=n("Xmxp"),m=n("Obii");function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var l,o=e[Symbol.iterator]();!(r=(l=o.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var p=function(){var e=s(Object(r.useState)(!1),2),t=e[0],n=e[1];return t?a.a.createElement("div",null,a.a.createElement("p",null,"An email with a verification link has been sent to the email address. You should receive it shortly."),a.a.createElement(l.Container,{margin:"md"}),a.a.createElement(l.LinkButton,{variant:"primary",href:Object(o.c)().appSubUrl+"/signup"},"Complete Signup")):a.a.createElement(l.Form,{onSubmit:function(e){Object(u.getBackendSrv)().post("/api/user/signup",e).then((function(){n(!0)})).catch((function(e){var t,n=(null===(t=e.data)||void 0===t?void 0:t.message)||e;c.b.emit(m.AppEvents.alertWarning,[n])}))}},(function(e){var t,n=e.register,r=e.errors;return a.a.createElement(a.a.Fragment,null,a.a.createElement(l.Legend,null,"Verify Email"),a.a.createElement(l.Field,{label:"Email",description:"Enter your email address to get a verification link sent to you",invalid:!!r.email,error:null===(t=r.email)||void 0===t?void 0:t.message},a.a.createElement(l.Input,{placeholder:"Email",name:"email",ref:n({required:!0})})),a.a.createElement(l.HorizontalGroup,null,a.a.createElement(l.Button,null,"Send verification email"),a.a.createElement(l.LinkButton,{variant:"link",href:Object(o.c)().appSubUrl+"/login"},"Back to login")))}))};n.d(t,"VerifyEmailPage",(function(){return d}));var d=function(){return Object(o.c)().verifyEmailEnabled?a.a.createElement(i.b,null,a.a.createElement(i.a,null,a.a.createElement(p,null))):(window.location.href=Object(o.c)().appSubUrl+"/signup",a.a.createElement(a.a.Fragment,null))};t.default=d}}]);
//# sourceMappingURL=VerifyEmailPage.8a471c5cf34b9a2fcca5.js.map