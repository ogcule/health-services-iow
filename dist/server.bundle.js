!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o=n(r(1)),s=n(r(2)),u=n(r(3)),i=n(r(4)),c=(0,o.default)(),l=Object({NODE_ENV:"production"}).PORT||3e3;c.use(s.default.json()),c.use(s.default.urlencoded({extended:!1})),c.use(o.default.static("dist")),c.use((0,i.default)()),c.use(function(e,t,r){t.header("Access-Control-Allow-Origin","*"),t.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept"),r()}),c.get(/^\/(?!api).*/,function(e,t){t.sendFile(u.default.resolve("dist","index.html"))}),c.use(function(e,t,r,n){r.status(e.status||500).json({status:"error",message:e.message}),n()}),routes(c),c.listen(l,function(){console.log("express server listening on port ",c.get("port"))})},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("body-parser")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("express-validator")}]);
//# sourceMappingURL=server.bundle.js.map