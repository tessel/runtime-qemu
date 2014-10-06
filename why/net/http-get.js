

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, http = tap, http;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((1));
--[[45]] http = require(_global, ("http")); 
--[[74]] http:get(("http://www.google.com/index.html"), (function (this, res)
--[[138]] tap:ok((_typeof(res.statusCode)), ("number"));
--[[181]] res:on(("data"), (function (this, data)
--[[218]] console:log(("# received"), data.length, ("bytes"));
end));
end)):on(("error"), (function (this, e)
--[[304]] tap:ok((false), String(_global, e));
end));

return _module.exports;
end 
