

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, a = tap, a;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((5));
--[[45]] a = _obj({
  
}); 
--[[58]] Object:defineProperty(a, ("hello"), _obj({
  ["value"]=("hi")
}));
--[[111]] tap:eq(a.hello, ("hi"));
--[[135]] local _e, _noreturn = nil, {}
local _s, _r = _xpcall(function ()
--[[142]] Object:defineProperty((null), ("hello"), _obj({
  ["value"]=("hi")
}));
--[[200]] tap:ok((false));
      if true then return _noreturn; end
    end, function (err)
        _e = err
    end);
if _s == false then
e = _e;
_r = (function ()
--[[230]] tap:ok((true));
  if true then return _noreturn; end
end)();
end;

if _r ~= _noreturn then
  return _r
end;
--[[247]] local _e, _noreturn = nil, {}
local _s, _r = _xpcall(function ()
--[[254]] Object:defineProperty((""), ("hello"), _obj({
  ["value"]=("hi")
}));
--[[310]] tap:ok((false));
      if true then return _noreturn; end
    end, function (err)
        _e = err
    end);
if _s == false then
e = _e;
_r = (function ()
--[[340]] tap:ok(e);
  if true then return _noreturn; end
end)();
end;

if _r ~= _noreturn then
  return _r
end;
--[[354]] local _e, _noreturn = nil, {}
local _s, _r = _xpcall(function ()
--[[361]] Object:defineProperty((0), ("hello"), _obj({
  ["value"]=("hi")
}));
--[[416]] tap:ok((false));
      if true then return _noreturn; end
    end, function (err)
        _e = err
    end);
if _s == false then
e = _e;
_r = (function ()
--[[446]] tap:ok(e);
  if true then return _noreturn; end
end)();
end;

if _r ~= _noreturn then
  return _r
end;
--[[460]] local _e, _noreturn = nil, {}
local _s, _r = _xpcall(function ()
--[[467]] Object:defineProperty((true), ("hello"), _obj({
  ["value"]=("hi")
}));
--[[525]] tap:ok((false));
      if true then return _noreturn; end
    end, function (err)
        _e = err
    end);
if _s == false then
e = _e;
_r = (function ()
--[[555]] tap:ok(e);
  if true then return _noreturn; end
end)();
end;

if _r ~= _noreturn then
  return _r
end;

return _module.exports;
end 
