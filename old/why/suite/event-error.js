

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, EventEmitter, a = tap, EventEmitter, a;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((4));
--[[45]] EventEmitter = require(_global, ("events")).EventEmitter; 
--[[97]] a = _new(EventEmitter); 
--[[123]] local _e, _noreturn = nil, {}
local _s, _r = _xpcall(function ()
--[[130]] a:emit(("error"), ("some error"));
      if true then return _noreturn; end
    end, function (err)
        _e = err
    end);
if _s == false then
e = _e;
_r = (function ()
--[[175]] tap:ok(_instanceof((e),(TypeError)));
  if true then return _noreturn; end
end)();
end;

if _r ~= _noreturn then
  return _r
end;
--[[210]] local _e, _noreturn = nil, {}
local _s, _r = _xpcall(function ()
--[[217]] a:emit(("error"), _new(RangeError, ("some error")));
      if true then return _noreturn; end
    end, function (err)
        _e = err
    end);
if _s == false then
e = _e;
_r = (function ()
--[[278]] tap:ok(_instanceof((e),(RangeError)));
  if true then return _noreturn; end
end)();
end;

if _r ~= _noreturn then
  return _r
end;
--[[314]] a:once(("error"), (function (this, err)
--[[348]] tap:ok((((_typeof(err)))==(("string"))));
end));
--[[385]] a:emit(("error"), ("some error"));
--[[416]] a:once(("error"), (function (this, err)
--[[450]] tap:ok(_instanceof((err),(SyntaxError)));
end));
--[[491]] a:emit(("error"), _new(SyntaxError, ("some error")));

return _module.exports;
end 
