

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, util, EventEmitter, UART, globalUART, Test, i, test = tap, util, EventEmitter, UART, globalUART, Test, i, test;
UART = (function () local UART = nil; UART = function (this)

end; UART:__defineGetter__("name", function () return "UART"; end); return UART; end)();

Test = (function () local Test = nil; Test = function (this)
--[[230]] this.uart = globalUART;
--[[258]] this.uart:on(("data"), this.parseIncoming:bind(this));
end; Test:__defineGetter__("name", function () return "Test"; end); return Test; end)();
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((4));
--[[45]] util = require(_global, ("util")); 
--[[73]] EventEmitter = require(_global, ("events")).EventEmitter; 
--[[125]] 
--[[143]] util:inherits(UART, EventEmitter);
--[[179]] globalUART = _new(UART); 
--[[208]] 
--[[314]] i = (1); 
--[[325]] Test.prototype.parseIncoming = (function (this, ...)
local data, __, __, __, __, c = ...;
local arguments = _arguments(...);
--[[392]] tap:ok(((data)==(i)), ((((("test "))+(i)))+((" bound arguments correctly"))));
--[[459]] console:log(("#"), arguments);
--[[491]] local _r = i; i = _r + 1;
--[[499]] if ((i)==((4))) then
--[[518]] tap:ok(((c)~=((null))), ("last numerical value included"));
end;
end);
--[[579]] test = _new(Test); 
--[[602]] setTimeout(_global, (function (this)
--[[630]] globalUART:emit(("data"), (1));
--[[661]] globalUART:emit(("data"), (2), ("extra args"));
--[[707]] globalUART:emit(("data"), (3), ("extra args"), ("more extra args"), (1), (2), (3));
end), (0));

return _module.exports;
end 
