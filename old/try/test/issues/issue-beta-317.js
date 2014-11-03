

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, dict = tap, dict;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((3));
--[[45]] dict = _obj({
  
}); 
--[[60]] dict[("1")] = (1);
--[[75]] dict[("01")] = (2);
--[[91]] dict[("0x10")] = (3);
--[[109]] dict[("a")] = (4);
--[[203]] tap:ok(((dict[("1")])==((1))));
--[[226]] tap:ok(((Object:keys(dict):map(String):indexOf(("01")))>((0))));
--[[282]] tap:ok(((Object:keys(dict):map(String):indexOf(("0x10")))>((0))));

return _module.exports;
end 
