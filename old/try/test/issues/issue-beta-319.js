

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, simpleQueue, b = tap, simpleQueue, b;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((3));
--[[45]] simpleQueue = _new(Array); 
--[[77]] simpleQueue.pushItem = (function (this, item)
--[[119]] this:push(item);
--[[138]] tap:ok(((this.length)==((2))), ((("Length should be 2: "))+(this.length)));
end);
--[[206]] console:log(("well"), simpleQueue.length);
--[[246]] simpleQueue:push((1));
--[[267]] tap:ok(((simpleQueue.length)==((1))));
--[[301]] simpleQueue:pushItem(("foo"));
--[[331]] b = _new(Array); 
--[[352]] b[(0)] = (5);
--[[362]] b[(1)] = (5);
--[[372]] b:push((1));
--[[383]] tap:ok(((b.length)==((3))));

return _module.exports;
end 
