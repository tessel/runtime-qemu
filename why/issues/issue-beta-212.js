

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, n = tap, n;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((8));
--[[45]] n = (42); 
--[[57]] tap:ok(((n:toString((10)))==(("42"))));
--[[88]] console:log(("# base 10:"), JSON:stringify(n:toString((10))));
--[[147]] tap:ok(((n:toString((16)))==(("2a"))));
--[[178]] console:log(("# base 16:"), JSON:stringify(n:toString((16))));
--[[237]] tap:ok(((n:toString((2)))==(("101010"))));
--[[271]] console:log(("# base  2:"), JSON:stringify(n:toString((2))));
--[[329]] tap:ok(((n:toString((24)))==(("1i"))));
--[[360]] console:log(("# base 24:"), JSON:stringify(n:toString((24))));
--[[420]] console:log();
--[[466]] local _e, _noreturn = nil, {}
local _s, _r = _xpcall(function ()
--[[472]] n:toString((1));
--[[487]] tap:ok((false));
      if true then return _noreturn; end
    end, function (err)
        _e = err
    end);
if _s == false then
e = _e;
_r = (function ()
--[[516]] tap:ok(e);
  if true then return _noreturn; end
end)();
end;

if _r ~= _noreturn then
  return _r
end;
--[[529]] local _e, _noreturn = nil, {}
local _s, _r = _xpcall(function ()
--[[535]] n:toString((0));
--[[550]] tap:ok((false));
      if true then return _noreturn; end
    end, function (err)
        _e = err
    end);
if _s == false then
e = _e;
_r = (function ()
--[[579]] tap:ok(e);
  if true then return _noreturn; end
end)();
end;

if _r ~= _noreturn then
  return _r
end;
--[[592]] local _e, _noreturn = nil, {}
local _s, _r = _xpcall(function ()
--[[598]] n:toString((37));
--[[614]] tap:ok((false));
      if true then return _noreturn; end
    end, function (err)
        _e = err
    end);
if _s == false then
e = _e;
_r = (function ()
--[[643]] tap:ok(e);
  if true then return _noreturn; end
end)();
end;

if _r ~= _noreturn then
  return _r
end;
--[[656]] local _e, _noreturn = nil, {}
local _s, _r = _xpcall(function ()
--[[662]] n:toString(("1"));
--[[679]] tap:ok((false));
      if true then return _noreturn; end
    end, function (err)
        _e = err
    end);
if _s == false then
e = _e;
_r = (function ()
--[[708]] tap:ok(e);
  if true then return _noreturn; end
end)();
end;

if _r ~= _noreturn then
  return _r
end;

return _module.exports;
end 
