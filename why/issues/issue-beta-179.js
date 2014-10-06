

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, util, events, Test, t, c, bootSequence = tap, util, events, Test, t, c, bootSequence;
Test = (function () local Test = nil; Test = function (this, name)
--[[130]] this.name = name;
end; Test:__defineGetter__("name", function () return "Test"; end); return Test; end)();

bootSequence = (function () local bootSequence = nil; bootSequence = function (this, data)
--[[356]] setImmediate(_global, (function (this)
--[[386]] tap:ok(data, this.name);
end):bind(this));
end; bootSequence:__defineGetter__("name", function () return "bootSequence"; end); return bootSequence; end)();
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((2));
--[[45]] util = require(_global, ("util")); 
--[[73]] events = require(_global, ("events")); 
--[[106]] 
--[[151]] util:inherits(Test, events.EventEmitter);
--[[194]] t = _new(Test, ("t")); 
--[[218]] t:once(("booted"), bootSequence:bind(t));
--[[259]] c = _new(Test, ("c")); 
--[[283]] c:once(("booted"), bootSequence:bind(c));
--[[324]] 
--[[431]] t:emit(("booted"), (true));
--[[456]] c:emit(("booted"), (true));
--[[481]] console:log(("# no more not oks"));
--[[516]] t:emit(("booted"), (false));
--[[542]] c:emit(("booted"), (false));
--[[568]] t:emit(("booted"), (false));

return _module.exports;
end 
