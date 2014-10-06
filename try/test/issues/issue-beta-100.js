

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, arr, val = tap, arr, val;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((1));
--[[45]] arr = _arr({[0]=(0), (13), (2), (1), (21), (0), (0), (0), (0), (0), (6), (104), (105), (32), (106), (111), (110)}, 17); 
--[[124]] val = arr:slice((7)); 
--[[149]] tap:eq(val.length, (10));
--[[173]] console:log(("#"), val);

return _module.exports;
end 
