

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, e, err = tap, e, err;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((5));
--[[45]] e = (null); 
--[[59]] local _e, _noreturn = nil, {}
local _s, _r = _xpcall(function ()
--[[66]] _error(("BOO") or {})
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
--[[95]] tap:ok(((e)==((null))), ("error should not escape scope of try #TODO"));
--[[160]] local _e, _noreturn = nil, {}
local _s, _r = _xpcall(function ()
--[[167]] local _e, _noreturn = nil, {}
local _s, _r = _xpcall(function ()
--[[178]] _error(("hi") or {})
      if true then return _noreturn; end
    end, function (err)
        _e = err
    end);
--[[208]] tap:ok((true));
if _s == false then
_error(_e)
end
if _r == _break then
return _break;
elseif _r == _cont then
return _cont;
elseif _r ~= _noreturn then
  return _r
end;
      if true then return _noreturn; end
    end, function (err)
        _e = err
    end);
if _s == false then
e = _e;
_r = (function ()
--[[240]] tap:ok((true));
  if true then return _noreturn; end
end)();
end;
--[[267]] tap:ok((true));
if _r ~= _noreturn then
  return _r
end;
--[[284]] err = nil; 
--[[293]] local _e, _noreturn = nil, {}
local _s, _r = _xpcall(function ()
--[[303]] _error(Error(_global, ("ERRR")) or {})
      if true then return _noreturn; end
    end, function (err)
        _e = err
    end);
if _s == false then
e = _e;
_r = (function ()
--[[338]] err = e;
  if true then return _noreturn; end
end)();
end;

if _r ~= _noreturn then
  return _r
end;
--[[349]] tap:ok(err, ("error exists"));

return _module.exports;
end 
