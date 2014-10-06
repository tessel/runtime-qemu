

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, buf = tap, buf;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((2));
--[[45]] buf = _new(Buffer, ("test")); 
--[[76]] console:log(("#"), JSON:stringify(String.fromCharCode:apply((null), buf)));
--[[148]] tap:eq(String.fromCharCode:apply((null), buf), ("test"));
--[[201]] console:log(("#"), JSON:stringify(String.fromCharCode:apply((null), _arr({}, 0))));
--[[272]] tap:eq(String.fromCharCode:apply((null), _arr({}, 0)), (""));

return _module.exports;
end 
