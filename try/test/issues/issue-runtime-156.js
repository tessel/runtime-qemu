

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, querystring, util = tap, querystring, util;
--[[0]] tap = require(_global, ("../tap")); 
--[[29]] tap:count((4));
--[[43]] querystring = require(_global, ("querystring")); 
--[[85]] util = require(_global, ("util")); 
--[[114]] console:log(("#"), isFinite(_global, (5)));
--[[144]] tap:eq(isFinite(_global, (5)), (true));
--[[171]] console:log(("#"), querystring:stringify(_obj({
  ["room_id"]=(5)
})));
--[[225]] tap:eq(querystring:stringify(_obj({
  ["room_id"]=(5)
})), ("room_id=5"));
--[[283]] tap:eq(isFinite(_global, ("0")), (true));
--[[312]] tap:eq(isFinite(_global, ("hi")), (false));

return _module.exports;
end 
