

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, MyObject, o = tap, MyObject, o;
MyObject = (function () local MyObject = nil; MyObject = function (this, name)
--[[74]] this.name = name;
--[[96]] MyObject.booyakasha = (function (this)
--[[137]] if true then return ("Hear me now!"); end
end);
end; MyObject:__defineGetter__("name", function () return "MyObject"; end); return MyObject; end)();
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((2));
--[[45]] 
--[[168]] MyObject.prototype.yo = (function (this)
--[[208]] console:log(((("# Greetings from "))+(this.name)));
end);
--[[257]] o = _new(MyObject, ("adrian")); 
--[[289]] o:yo();
--[[298]] tap:ok(o.constructor, ("o.constructor"));
--[[338]] tap:eq(o.constructor:booyakasha(), ("Hear me now!"), ("o.constructor.booyakasha()"));

return _module.exports;
end 
