

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, arr = tap, arr;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((3));
--[[45]] arr = _arr({}, 0); 
--[[59]] tap:eq(arr.length, (0), ("array [] len 0"));
--[[99]] arr.hello = ("hi");
--[[117]] tap:eq(arr.length, (0), ("array keys constant"));
--[[163]] arr:push((1), (2), (3), (4), (5));
--[[188]] tap:eq(arr[(0)], (1), ("array key set"));

return _module.exports;
end 
