"use strict";(self.webpackChunkreactportfolio=self.webpackChunkreactportfolio||[]).push([[904],{6904:(e,t,c)=>{c.r(t),c.d(t,{default:()=>h});var n=c(5043),s=c(9933),a=c(1072),r=c(8139),o=c.n(r),l=c(7852),i=c(579);const d=n.forwardRef(((e,t)=>{let{bsPrefix:c,className:n,striped:s,bordered:a,borderless:r,hover:d,size:h,variant:m,responsive:u,...x}=e;const j=(0,l.oU)(c,"table"),p=o()(n,j,m&&"".concat(j,"-").concat(m),h&&"".concat(j,"-").concat(h),s&&"".concat(j,"-").concat("string"===typeof s?"striped-".concat(s):"striped"),a&&"".concat(j,"-bordered"),r&&"".concat(j,"-borderless"),d&&"".concat(j,"-hover")),b=(0,i.jsx)("table",{...x,className:p,ref:t});if(u){let e="".concat(j,"-responsive");return"string"===typeof u&&(e="".concat(e,"-").concat(u)),(0,i.jsx)("div",{className:e,children:b})}return b})),h=()=>{const{cart:e,updateCartItemQuantity:t,removeFromCart:c}=(0,s.V)();let n=0;e.forEach((e=>{n+=e.price*e.quantity})),console.log(e);const r=e=>{c(e)};return null===e||0===e.length?(0,i.jsx)(a.A,{className:"row-content",children:(0,i.jsx)("h1",{children:"Your Cart is Empty!"})}):(0,i.jsxs)(a.A,{className:"row-content columned",children:[(0,i.jsxs)(d,{striped:!0,bordered:!0,hover:!0,className:"p-5 my-5",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Image"}),(0,i.jsx)("th",{children:"Product Name"}),(0,i.jsx)("th",{children:"Quantity"}),(0,i.jsx)("th",{children:"Price"})]})}),(0,i.jsx)("tbody",{children:e.map((c=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{className:"align-content-center",children:(0,i.jsx)("img",{src:c.image,alt:c.title,className:"img-fluid rounded-start"})}),(0,i.jsx)("td",{className:"align-content-center",children:c.title}),(0,i.jsx)("td",{className:"align-content-center",children:(0,i.jsxs)("div",{className:"d-flex justify-content-center gap-2",children:[(0,i.jsx)("button",{className:"btn btn-outline-secondary",onClick:()=>(c=>{const n=e.find((e=>e.id===c));n&&n.quantity>1?t(c,-1):r(c)})(c.id),children:"-"}),(0,i.jsx)("span",{className:"mx-2 d-flex align-items-center",children:c.quantity}),(0,i.jsx)("button",{className:"btn btn-outline-secondary",onClick:()=>{return e=c.id,void t(e,1);var e},children:"+"}),(0,i.jsx)("button",{className:"btn btn-danger",onClick:()=>r(c.id),children:"Remove"})]})}),(0,i.jsxs)("td",{className:"align-content-center",children:["$",c.price*c.quantity]})]},c.id)))})]}),(0,i.jsxs)("h1",{children:["Total Price: $",n]}),(0,i.jsxs)("form",{method:"POST",action:"http://127.0.0.1:8000/api/checkout",children:[(0,i.jsx)("input",{type:"hidden",name:"carts",value:JSON.stringify(e)}),(0,i.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Checkout"})]})]})}},1072:(e,t,c)=>{c.d(t,{A:()=>i});var n=c(8139),s=c.n(n),a=c(5043),r=c(7852),o=c(579);const l=a.forwardRef(((e,t)=>{let{bsPrefix:c,className:n,as:a="div",...l}=e;const i=(0,r.oU)(c,"row"),d=(0,r.gy)(),h=(0,r.Jm)(),m="".concat(i,"-cols"),u=[];return d.forEach((e=>{const t=l[e];let c;delete l[e],null!=t&&"object"===typeof t?({cols:c}=t):c=t;const n=e!==h?"-".concat(e):"";null!=c&&u.push("".concat(m).concat(n,"-").concat(c))})),(0,o.jsx)(a,{ref:t,...l,className:s()(n,i,...u)})}));l.displayName="Row";const i=l}}]);
//# sourceMappingURL=904.b7d63704.chunk.js.map