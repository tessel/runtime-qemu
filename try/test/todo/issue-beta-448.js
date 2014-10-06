

return function (_ENV, _module)
local exports, module = _module.exports, _module;


--[[0]] local _e, _noreturn = nil, {}
local _s, _r = _xpcall(function ()
--[[7]] setImmediate(_global, (function (this)
--[[36]] _error(_new(Error, ("THIS IS AN ERROR")) or {})
end));
      if true then return _noreturn; end
    end, function (err)
        _e = err
    end);
if _s == false then
e = _e;
_r = (function ()
--[[92]] console:log(("error"), e);
  if true then return _noreturn; end
end)();
end;

if _r ~= _noreturn then
  return _r
end;

return _module.exports;
end 
