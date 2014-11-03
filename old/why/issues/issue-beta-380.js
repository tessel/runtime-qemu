

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, b, s = tap, b, s;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((2));
--[[45]] b = Buffer(_global, (20));  s = ((b:fill((255)))or(b:slice((5), (15)))); 
--[[104]] b:fill((0));
--[[115]] tap:eq(s:toString(("hex")), ("00000000000000000000"));
--[[166]] s:fill((42));
--[[178]] tap:eq(b:toString(("hex")), ("00000000002a2a2a2a2a2a2a2a2a2a0000000000"));

return _module.exports;
end 
