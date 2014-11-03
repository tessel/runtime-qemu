

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, b = tap, b;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((1));
--[[45]] b = Buffer(_global, _arr({[0]=(1), (2), (3)}, 3)):slice((3), (50)); 
--[[82]] console:log(("#"), b);
--[[103]] tap:eq(b.length, (0), ("buffer.slice does not read past end."));

return _module.exports;
end 
