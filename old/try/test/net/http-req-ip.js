

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, http = tap, http;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((1));
--[[45]] http = require(_global, ("http")); 
--[[146]] (function () local _b = http:request(_obj({
  ["hostname"]=("64.233.167.99"),
  ["port"]=(80),
  ["path"]=("/index.html"),
  ["method"]=("GET")
}), (function (this, res)
--[[263]] tap:eq((_typeof(res.statusCode)), ("number"));
--[[306]] console:log(("# statusCode"), res.statusCode);
--[[352]] res:on(("data"), (function (this, data)
--[[389]] console:log(("# received"), data.length, ("bytes"));
end));
end)):on(("error"), (function (this, e)
--[[475]] tap:ok((false), String(_global, e));
end)); local _f = _b["end"]; return _f(_b); end)();

return _module.exports;
end 
