

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap = tap;
local _regex0 = _regexp("\\d", "g");
local _regex1 = _regexp("\\d", "g");
--[[0]] tap = require(_global, ("../tap")); 
--[[29]] tap:count((3));
--[[43]] tap:eq(String(_global, _arr({[0]=(1)}, 1)), ("1"), ("stringed-array doesn't leave trailing comma"));
--[[118]] tap:eq(("12345678"):match(_regex0).length, _arr({[0]=(1), (2), (3), (4), (5), (6), (7), (8)}, 8).length, ("match split length"));
--[[206]] tap:eq(String(_global, ("12345678"):match(_regex1)), ("1,2,3,4,5,6,7,8"), ("match split entries"));

return _module.exports;
end 
