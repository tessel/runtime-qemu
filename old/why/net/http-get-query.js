

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, http = tap, http;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((1));
--[[45]] http = require(_global, ("http")); 
--[[74]] http:get(("http://api.openweathermap.org/data/2.5/weather?id=5327684&units=imperial"), (function (this, res)
--[[177]] console:log(("#"), res.statusCode);
--[[212]] tap:eq(res.statusCode, (200), ("status code"));
--[[258]] res:on(("data"), (function (this, chunk)
--[[296]] console:log(((("#BODY: "))+(chunk)));
end));
end)):on(("error"), (function (this, e)
--[[366]] tap:ok((false), String(_global, e));
end));

return _module.exports;
end 
