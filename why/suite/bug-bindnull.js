

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, Test, printit, test = tap, Test, printit, test;
Test = (function () local Test = nil; Test = function (this, testMessage)
--[[78]] this.test = testMessage;
end; Test:__defineGetter__("name", function () return "Test"; end); return Test; end)();

printit = (function () local printit = nil; printit = function (this, err, obj)
--[[139]] tap:ok(((err)==((null))), ("No error"));
--[[176]] tap:ok(((obj.test)==(("Success"))), ("String passed"));
end; printit:__defineGetter__("name", function () return "printit"; end); return printit; end)();
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((2));
--[[45]] 
--[[106]] 
--[[227]] test = _new(Test, ("Success")); 
--[[260]] printit:bind((null), (null), test)(_global);

return _module.exports;
end 
