

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap = tap;
--[[0]] tap = require(_global, ("../tap")); 
--[[29]] tap:count((7));
--[[43]] tap:eq(Number:isFinite(("5")), (false));
--[[80]] tap:eq(Number:isFinite(NaN), (false));
--[[117]] tap:eq(Number:isFinite(Infinity), (false));
--[[159]] tap:eq(Number:isFinite((-(Infinity))), (false));
--[[202]] tap:eq(Number:isFinite((null)), (false));
--[[261]] tap:eq(Number:isFinite((((null))-((1)))), (true));
--[[323]] tap:eq(Number:isFinite((5)), (true));

return _module.exports;
end 
