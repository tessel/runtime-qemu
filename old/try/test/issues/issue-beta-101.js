

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, arr, val = tap, arr, val;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((2));
--[[45]] arr = _arr({[0]=(0), (13), (2), (1), (21), (0), (0), (0), (0), (0), (6), (104), (105), (32), (106), (111), (110)}, 17); 
--[[124]] val = _new(Buffer, arr):slice((7)); 
--[[161]] tap:eq(val.length, (10));
--[[185]] console:log(("#"), val);
--[[208]] tap:eq(_new(Buffer, ("hello")):toString(), ("hello"));
--[[257]] console:log(("#"), _new(Buffer, ("hello")):toString());

return _module.exports;
end 
