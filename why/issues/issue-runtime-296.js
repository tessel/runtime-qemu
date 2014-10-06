

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, d = tap, d;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((3));
--[[44]] d = _new(Date, (42)); 
--[[66]] tap:eq(d:valueOf(), (42), ("valueOf"));
--[[102]] tap:eq(d:toISOString(), ("1970-01-01T00:00:00.042Z"), ("toISOString"));
--[[171]] tap:eq(_new(Date, ("1970-01-01T00:00:00.042Z")):valueOf(), (42), ("valueOf new date"));

return _module.exports;
end 
