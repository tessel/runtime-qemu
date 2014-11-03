

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local https = https;
--[[0]] console:log(("1..2"));
--[[21]] https = require(_global, ("https")); 
--[[81]] local _e, _noreturn = nil, {}
local _s, _r = _xpcall(function ()
--[[88]] https:get(("https://api.github.com/"), (function (this, res)
local buf = buf;
--[[145]] console:log(("ok"));
--[[166]] console:log(("# statusCode"), res.statusCode);
--[[214]] buf = (""); 
--[[231]] res:on(("data"), (function (this, data)
--[[268]] console:log(("# received"), data.length, ("bytes"));
--[[321]] buf = buf+String(_global, data);
end));
--[[351]] res:on(("close"), (function (this)
--[[385]] console:log(("# result:"), JSON:parse(buf));
--[[432]] console:log(("ok"));
end));
end)):on(("error"), (function (this, e)
--[[491]] console:log(("not ok -"), e.message, ("error event #SKIP"));
end));
      if true then return _noreturn; end
    end, function (err)
        _e = err
    end);
if _s == false then
e = _e;
_r = (function ()
--[[567]] console:log(("not ok -"), e.message, ("error thrown #SKIP"));
  if true then return _noreturn; end
end)();
end;

if _r ~= _noreturn then
  return _r
end;

return _module.exports;
end 
