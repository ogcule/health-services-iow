!function(e){function t(r){if(n[r])return n[r].exports;var s=n[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.db=void 0;var r={promiseLib:function(e){return e&&e.__esModule?e:{default:e}}(n(9)).default},s=n(10)(r)("postgres://localhost:5432/services");t.db=s},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var s=r(n(2)),i=r(n(3)),a=r(n(4)),o=r(n(5)),c=r(n(6)),u=(0,s.default)(),d=Object({NODE_ENV:"production"}).PORT||3e3;u.use(i.default.json()),u.use(i.default.urlencoded({extended:!1})),u.use(s.default.static("dist")),u.use((0,o.default)()),u.use(function(e,t,n){t.header("Access-Control-Allow-Origin","*"),t.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept"),n()}),u.get(/^\/(?!api).*/,function(e,t){t.sendFile(a.default.resolve("dist","index.html"))}),u.use(function(e,t,n,r){n.status(e.status||500).json({status:"error",message:e.message}),r()}),(0,c.default)(u),u.listen(d,function(){console.log("express server listening on port ",d)})},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("body-parser")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("express-validator")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(7),s=n(8),i=n(11);t.default=function(e){e.get("/api/service",s.getAllServices),e.get("/api/service/:id",s.getSingleService),e.post("/api/service",[(0,r.check)("name","Please enter a name for the service").isLength({min:1}),(0,r.check)("description","Please enter a description").isLength({min:1}),(0,r.check)("address","Please enter an address").isLength({min:1}),(0,r.check)("email").isEmail().withMessage("Must be a valid email address").trim().normalizeEmail(),(0,r.check)("telephone").matches(/^\+?(?:\d\s?){10,12}$/).withMessage("Please provide a valid telephone number"),(0,r.check)("postcode").matches(/^[a-zA-Z]{1,2}([0-9]{1,2}|[0-9][a-zA-Z])\s*[0-9][a-zA-Z]{2}$/).withMessage("Please provide a postcode"),(0,r.check)("weblink","Use correct URL").isURL(),(0,r.check)("image","Use correct URL").isURL()],function(e,t,n){var s=(0,r.validationResult)(e);if(!s.isEmpty())return t.status(422).json({error:s.mapped()});n()},s.createService),e.put("/api/service/:id",s.updateService),e.delete("/api/service/:name",s.removeService),e.get("/api/faq",i.getAllFaq),e.get("/api/faq/:id",i.getFaq),e.post("/api/faq",[(0,r.check)("question","Please enter a question").isLength({min:1}),(0,r.check)("answer","Please enter an answer").isLength({min:1})],function(e,t,n){var s=(0,r.validationResult)(e);if(!s.isEmpty())return t.status(422).json({error:s.mapped()});n()},i.createFaq),e.put("/api/faq/:id",i.updateFaq),e.delete("/api/faq/:id",i.removeFaq)}},function(e,t){e.exports=require("express-validator/check")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.removeService=t.updateService=t.createService=t.getSingleService=t.getAllServices=void 0;var r=n(0);t.getAllServices=function(e,t,n){r.db.any("select * from service").then(function(e){t.status(200).json(e)}).catch(function(e){return n(e)})},t.getSingleService=function(e,t,n){var s=parseInt(e.params.id);r.db.one("SELECT * FROM service WHERE id = $1",s).then(function(e){t.status(200).json(e)}).catch(function(e){return n(e)})},t.createService=function(e,t,n){var s=e.body;r.db.one("INSERT INTO service(name, category, description, image, link, email, telephone, address, rcgp, postcode) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id",[s.name,s.category,s.description,s.image,s.weblink,s.email,s.telephone,s.address,s.rcgpCategory,s.postcode]).then(function(e){t.status(200).json(e.id)}).catch(function(e){return n(e)})},t.updateService=function(e,t,n){var s=e.body;r.db.none("update service set name=$1, category=$2, description=$3 where id=$4",[s.name,s.category,s.description,parseInt(e.params.id)]).then(function(){t.status(200).json({status:"success",message:"Updated service"})}).catch(function(e){return n(e)})},t.removeService=function(e,t,n){var s=e.params.name;r.db.result("delete from service where name = $1",s).then(function(){t.status(200).json({status:"success",message:"Removed "+s+" service"})}).catch(function(e){return n(e)})}},function(e,t){e.exports=require("bluebird")},function(e,t){e.exports=require("pg-promise")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.removeFaq=t.updateFaq=t.createFaq=t.getFaq=t.getAllFaq=void 0;var r=n(0);t.getAllFaq=function(e,t,n){r.db.any("select * from faq").then(function(e){t.status(200).json(e)}).catch(function(e){return n(e)})},t.getFaq=function(e,t,n){var s=parseInt(e.params.id);r.db.one("SELECT * FROM faq WHERE id = $1",s).then(function(e){t.status(200).json(e)}).catch(function(e){return n(e)})},t.createFaq=function(e,t,n){var s=e.body;r.db.one("INSERT INTO faq(question, answer) values($1, $2) RETURNING id",[s.question,s.answer]).then(function(e){t.status(200).json(e)}).catch(function(e){return n(e)})},t.updateFaq=function(e,t,n){var s=e.body;r.db.one("update faq set question=$1, answer=$2 where id=$3 RETURNING id",[s.question,s.answer,parseInt(e.params.id)]).then(function(e){t.status(200).json(e.id)}).catch(function(e){return n(e)})},t.removeFaq=function(e,t,n){var s=e.params.id;r.db.result("delete from faq where id = $1",s,function(e){return e.fields}).then(function(e){t.status(200).json(e)}).catch(function(e){return n(e)})}}]);
//# sourceMappingURL=server.bundle.js.map