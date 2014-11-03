

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, arr = tap, arr;
--[[0]] tap = require(_global, ("../tap")); 
--[[29]] tap:count((2));
--[[43]] arr = _arr({[0]=(1), (2), (3), (4), (5)}, 5); 
--[[66]] arr.length = (3);
--[[83]] tap:eq(JSON:stringify(arr), ("[1,2,3]"), ("array is stringified to trimmed array"));
--[[164]] tap:eq(Object:keys(arr):join((",")), ("0,1,2"), ("array keys are trimmed"));

return _module.exports;
end 
