

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap = tap;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((1));
--[[45]] process:nextTick((function (this)
--[[77]] tap:ok((true));
end));

return _module.exports;
end 
