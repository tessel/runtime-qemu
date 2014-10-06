

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap = tap;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((2));
--[[45]] tap:eq(Date:parse(("1970-01-01T00:00:00.042Z")), (42), ("Date.parse"));
--[[111]] tap:eq(_new(Date, ("1970-01-01T00:00:00.042Z")):valueOf(), (42), ("new Date().valueOf"));

return _module.exports;
end 
