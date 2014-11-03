

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap = tap;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((1));
--[[45]] require(_global, ("tls"));
--[[60]] tap:ok((true));

return _module.exports;
end 
