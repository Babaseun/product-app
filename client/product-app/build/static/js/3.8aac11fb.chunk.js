(this["webpackJsonpproduct-app"]=this["webpackJsonpproduct-app"]||[]).push([[3],{90:function(t,e,c){},91:function(t,e,c){},93:function(t,e,c){"use strict";c.r(e);var n=c(5),r=c(0),i=c(17),a=c(24);var o=c(31);function s(t){return function(t){if(Array.isArray(t))return Object(a.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}c(90);var d=c(13),u=c(1),j=function(t){var e=t.name,c=t.description,i=t.id,a=t.varieties,o=Object(r.useContext)(d.a),j=Object(n.a)(o,2),b=(j[0],j[1]),l=Object(r.useState)(1),p=Object(n.a)(l,2),O=p[0],m=p[1],h=Object(r.useState)(!1),f=Object(n.a)(h,2),x=f[0],v=f[1],N=Object(r.useState)(""),y=Object(n.a)(N,2),g=y[0],S=y[1];Object(r.useEffect)((function(){a.forEach((function(t,e){var c=Math.floor(Math.random()*t.images.length);S(t.images[c])}))}),[a]);return Object(u.jsxs)("div",{className:"product-container",children:[Object(u.jsxs)("div",{className:"product-details",children:[Object(u.jsxs)("p",{className:"product-name",children:[Object(u.jsx)("b",{children:"Product Name: "}),e]}),Object(u.jsxs)("p",{className:"product-description",children:[Object(u.jsx)("b",{children:"Description: "}),c]}),a.map((function(t,e){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Color: "}),t.color]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Price: $"}),t.price]})]},e.toString())}))]}),Object(u.jsx)("div",{children:Object(u.jsx)("img",{src:g,alt:""})}),Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"product-control-container",children:[Object(u.jsx)("h3",{className:"qt-text",children:"Select quantity"}),Object(u.jsxs)("div",{className:"product-control",children:[Object(u.jsx)("button",{className:"qt-minus btn btn-secondary",onClick:function(){O>1&&m((function(t){return t-1}))},children:"-"}),Object(u.jsx)("p",{className:"qt",children:O}),Object(u.jsx)("button",{className:"qt-plus btn btn-secondary",onClick:function(){m((function(t){return t+1}))},children:"+"})]}),Object(u.jsx)("div",{className:"add-to-cart-button",children:Object(u.jsx)("button",{disabled:x,onClick:function(){return function(t){var c={id:0,price:0,color:"",image:"",productName:"",quantity:O};c.productName=e,c.id=t,a.forEach((function(t){c.price=Number(t.price),c.color=t.color,c.image=t.images[0]})),b((function(t){return[].concat(s(t),[c])})),v(!0)}(i)},className:"btn btn-secondary mt-4 ",children:"Add to Cart"})})]})})]})},b=c(40);c(91);e.default=function(){var t,e=Object(r.useContext)(i.a),c=Object(n.a)(e,2),a=c[0];return c[1],Object(u.jsx)("div",{className:"product-list-container",children:a.loading?Object(u.jsx)(b.a,{}):null===(t=a.rows)||void 0===t?void 0:t.map((function(t){return Object(u.jsx)("div",{children:Object(u.jsx)(j,{name:t.product_name,description:t.product_description,id:t.id,varieties:JSON.parse(t.product_varieties)},t.id)},t.id)}))})}}}]);
//# sourceMappingURL=3.8aac11fb.chunk.js.map