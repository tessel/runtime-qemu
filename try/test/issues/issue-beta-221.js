

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap = tap;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((2));
--[[45]] local _e, _noreturn = nil, {}
local _s, _r = _xpcall(function ()
--[[52]] _error(Error(_global, ("Test")) or {})
--[[74]] tap:ok((false));
      if true then return _noreturn; end
    end, function (err)
        _e = err
    end);
if _s == false then
e = _e;
_r = (function ()
--[[103]] tap:ok((true));
  if true then return _noreturn; end
end)();
end;

if _r ~= _noreturn then
  return _r
end;
--[[119]] tap:ok(Error(_global, ("Test")).message);

return _module.exports;
end 
