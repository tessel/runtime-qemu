

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, msg = tap, msg;
local _regex0 = _regexp("find module .MISSING", "");
--[[0]] tap = require(_global, ("../tap")); 
--[[29]] tap:count((1));
--[[43]] local _e, _noreturn = nil, {}
local _s, _r = _xpcall(function ()
--[[51]] require(_global, ("MISSING"));
      if true then return _noreturn; end
    end, function (err)
        _e = err
    end);
if _s == false then
e = _e;
_r = (function ()
--[[89]] msg = e:toString(); 
--[[117]] tap:ok(msg:match(_regex0), ("no unexpected path in module resolution error"));
  if true then return _noreturn; end
end)();
end;

if _r ~= _noreturn then
  return _r
end;

return _module.exports;
end 
