

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, b, a = tap, b, a;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((1));
--[[45]] b = _new(Date); 
--[[64]] a = (_G.tonumbervalue(b)); 
--[[75]] tap:eq(a, b:valueOf());
--[[99]] console:log(("#"), a);
--[[119]] console:log(("#"), b:valueOf());

return _module.exports;
end 
