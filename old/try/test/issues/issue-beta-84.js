

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, MyObject, o, i = tap, MyObject, o, i;
MyObject = (function () local MyObject = nil; MyObject = function (this, name)
--[[74]] this.name = name;
end; MyObject:__defineGetter__("name", function () return "MyObject"; end); return MyObject; end)();
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((7));
--[[45]] 
--[[94]] MyObject.prototype.yo = (function (this)
--[[134]] tap:ok((true), ((("Greetings from "))+(this.name)));
end);
--[[181]] o = _new(MyObject, ("adrian")); 
--[[213]] tap:ok(o, ("original"));
--[[236]] o:yo();
--[[245]] i = Object(_global, o); 
--[[264]] tap:ok(i, ("Object()"));
--[[287]] i.name = ("zankich");
--[[307]] i:yo();
--[[315]] o:yo();
--[[324]] tap:ok(i, ("Object()"));
--[[347]] tap:ok(o, ("original"));

return _module.exports;
end 
