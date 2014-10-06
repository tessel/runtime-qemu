

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, util, events, Test, i = tap, util, events, Test, i;
Test = (function () local Test = nil; Test = function (this)

end; Test:__defineGetter__("name", function () return "Test"; end); return Test; end)();
--[[0]] tap = require(_global, ("../tap")); 
--[[29]] util = require(_global, ("util")); 
--[[57]] events = require(_global, ("events")); 
--[[90]] 
--[[110]] util:inherits(Test, events.EventEmitter);
--[[153]] i = _new(Test); 
--[[174]] tap:count((3));
--[[189]] tap:ok(process.versions.colony, ("running in colony"));
--[[244]] local _e, _noreturn = nil, {}
local _s, _r = _xpcall(function ()
--[[253]] i:once(("event"), undefined);
--[[284]] tap:ok((false), ("once"));
      if true then return _noreturn; end
    end, function (err)
        _e = err
    end);
if _s == false then
e = _e;
_r = (function ()
--[[323]] tap:ok((true), ("once"));
  if true then return _noreturn; end
end)();
end;

if _r ~= _noreturn then
  return _r
end;
--[[348]] local _e, _noreturn = nil, {}
local _s, _r = _xpcall(function ()
--[[357]] i:on(("event"), undefined);
--[[386]] tap:ok((false), ("on"));
      if true then return _noreturn; end
    end, function (err)
        _e = err
    end);
if _s == false then
e = _e;
_r = (function ()
--[[423]] tap:ok((true), ("on"));
  if true then return _noreturn; end
end)();
end;

if _r ~= _noreturn then
  return _r
end;

return _module.exports;
end 
