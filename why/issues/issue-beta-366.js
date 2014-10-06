

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap = tap;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((3));
--[[45]] parseInt(_global, (null), (16));
--[[64]] console:log(("#"), parseInt(_global, (null), (16)));
--[[101]] tap:ok(isNaN(_global, parseInt(_global, (null), (10))));
--[[136]] tap:ok(isNaN(_global, parseInt(_global, (null), (16))));
--[[171]] tap:eq(parseInt(_global, (null), (32)), (785077));

return _module.exports;
end 
