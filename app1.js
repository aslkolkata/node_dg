var server = require("./http_module");
var router = require("./router");
var handler = require("./handler");

var handle = {};
handle["/"] = handler.home;
handle["/home"] = handler.home;
handle["/review"] = handler.review;
server.startserver(router.route, handle);
