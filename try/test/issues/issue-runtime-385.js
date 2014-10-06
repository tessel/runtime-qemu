

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, a, b = tap, a, b;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((2));
--[[45]] a = Date:now(); 
--[[65]] b = _new(Date, a); 
--[[87]] tap:eq(a, b:getTime());
--[[111]] tap:eq(a, b:valueOf());

return _module.exports;
end 
