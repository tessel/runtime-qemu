

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, s, n = tap, s, n;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((2));
--[[45]] s = ("42");  n = (_G.tonumbervalue(s)); 
--[[71]] tap:ok(n, (42));
--[[86]] tap:eq((_typeof(n)), ("number"));
--[[114]] console:log(("#"), n, (_typeof(n)));

return _module.exports;
end 
