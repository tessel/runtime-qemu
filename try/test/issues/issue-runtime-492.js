

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, http = tap, http;
--[[0]] tap = require(_global, ("../tap")); 
--[[29]] tap:count((1));
--[[43]] http = require(_global, ("http")); 
--[[72]] http:createServer((function (this, req, res)
--[[114]] (function () local _b = res; local _f = _b["end"]; return _f(_b); end)();
--[[127]] this:close();
end)):listen((0), (function (this)
--[[192]] http:get(_obj({
  ["port"]=this:address().port
}), (function (this, res)
--[[250]] res:on(("end"), (function (this)
--[[284]] tap:ok((true), ("response ended"));
--[[425]] process:exit();
end)):resume();
end));
end));

return _module.exports;
end 
