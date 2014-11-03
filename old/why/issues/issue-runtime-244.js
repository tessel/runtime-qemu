

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap = tap;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((3));
--[[45]] tap:eq(("abc"):slice((0), (1)), ("a"), ("\"abc\".slice(0,1)"));
--[[95]] tap:eq(("abc"):slice((0), (0)), (""), ("\"abc\".slice(0,0)"));
--[[144]] tap:eq(("abc"):substring((0), (0)), (""), ("\"abc\".substring(0,0)"));

return _module.exports;
end 
