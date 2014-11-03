

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, n = tap, n;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((6));
--[[44]] n = (42); 
--[[55]] tap:ok(n:toFixed((0)), ("42"), ("toFixed(0) works"));
--[[102]] tap:ok(n:toFixed((5)), ("42.00000"), ("toFixed(5) works"));
--[[155]] tap:ok(n:toFixed(), ("42"), ("toFixed() works"));
--[[200]] tap:ok(n:toFixed((null)), ("42"), ("toFixed(null) works"));
--[[253]] tap:ok(n:toFixed(("")), ("42"), ("toFixed(\"\") works"));
--[[302]] tap:ok(n:toFixed((false)), ("42"), ("toFixed(false) works"));

return _module.exports;
end 
