

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap = tap;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((3));
--[[45]] tap:eq(Buffer(_global, _arr({[0]=(255)}, 1)):readUInt32BE((0), (true)):toString((16)), ("ff000000"));
--[[115]] tap:eq(Buffer(_global, (0)):readUInt32BE((9999), (true)), (0));
--[[162]] tap:eq(Buffer(_global, (0)):readUInt8((9999), (true)), undefined);

return _module.exports;
end 
