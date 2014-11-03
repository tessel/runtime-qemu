

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, b = tap, b;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((1));
--[[45]] b = Buffer(_global, _arr({[0]=(1), (2), (3), (4), (5), (6)}, 6)):slice((1), (-((2)))); 
--[[88]] console:log(("#"), b);
--[[109]] tap:eq(b.length, (3), ("buffer.slice accepts negative indices"));

return _module.exports;
end 
