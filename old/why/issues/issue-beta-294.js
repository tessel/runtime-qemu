

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, b, c, d = tap, b, c, d;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((1));
--[[45]] b = _arr({}, 0);  c = (0);  d = (0); 
--[[71]] a = (function () local _r =  d; b[(function () local _r = c + 1; c = _r; return _r; end)()]  = _r; return _r; end)();
--[[87]] tap:ok((true));

return _module.exports;
end 
