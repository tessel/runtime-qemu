

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, test, ret = tap, test, ret;
test = (function () local test = nil; test = function (this, dothrow)
local a, fn, ret = a, fn, ret;
fn = (function () local fn = nil; fn = function (this)
--[[170]] local _e, _noreturn = nil, {}
local _s, _r = _xpcall(function ()
--[[182]] a:push(("try"));
--[[203]] if dothrow then
--[[226]] _error(up or {})
else
--[[259]] if true then return ("try"); end
end;
      if true then return _noreturn; end
    end, function (err)
        _e = err
    end);
if _s == false then
e = _e;
_r = (function ()
--[[305]] a:push(("catch"));
--[[328]] if true then return ("catch"); end
  if true then return _noreturn; end
end)();
end;
--[[366]] a:push(("finally"));
if _r ~= _noreturn then
  return _r
end;
--[[395]] a:push(("function"));
--[[419]] if true then return ("function"); end
end; fn:__defineGetter__("name", function () return "fn"; end); return fn; end)();
--[[134]] a = _arr({}, 0); 
--[[149]] 
--[[445]] ret = fn(_global); 
--[[463]] a:push(("->"), ret);
--[[484]] if true then return a:join((" ")); end
end; test:__defineGetter__("name", function () return "test"; end); return test; end)();
--[[61]] tap = require(_global, ("../tap")); 
--[[91]] tap:count((3));
--[[106]] 
--[[507]] tap:eq(test(_global, (false)), ("try finally -> try"));
--[[550]] tap:eq(test(_global, (true)), ("try catch finally -> catch"));
--[[800]] ret = (function (this)
--[[827]] local _e, _noreturn = nil, {}
local _s, _r = _xpcall(function ()
--[[837]] if true then return (null); end
      if true then return _noreturn; end
    end, function (err)
        _e = err
    end);
if _s == false then
e = _e;
_r = (function ()

  if true then return _noreturn; end
end)();
end;

if _r ~= _noreturn then
  return _r
end;
--[[869]] tap:ok((false));
--[[886]] if true then return (true); end
end)(_global); 
--[[905]] if ((ret)==((null))) then
--[[926]] tap:ok((true));
end;

return _module.exports;
end 
