

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, MyObject, o, a = tap, MyObject, o, a;
MyObject = (function () local MyObject = nil; MyObject = function (this, name)
--[[72]] this.name = name;
end; MyObject:__defineGetter__("name", function () return "MyObject"; end); return MyObject; end)();
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((1));
--[[45]] 
--[[92]] o = _new(MyObject, ("adrian")); 
--[[124]] a = _arr({}, 0):concat(o); 
--[[146]] tap:eq(String(_global, a), ("[object Object]"));

return _module.exports;
end 
