

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local https = https;
--[[0]] console:log(("1..1"));
--[[21]] https = require(_global, ("https")); 
--[[81]] local _e, _noreturn = nil, {}
local _s, _r = _xpcall(function ()
--[[88]] https:request(_obj({
  ["hostname"]=("74.125.224.72"),
  ["port"]=(443),
  ["path"]=("/"),
  ["method"]=("GET"),
  ["headers"]=_obj({
  [("Host")]=("www.google.com")
})
}), (function (this, res)
--[[245]] console:log(("ok"));
--[[266]] console:log(("# statusCode"), res.statusCode);
--[[313]] res:on(("data"), (function (this, data)
--[[350]] console:log(("# received"), data.length, ("bytes"));
--[[403]] console:log(data);
end));
end)):on(("error"), (function (this, e)
--[[462]] console:log(("not ok -"), e.message, ("#SKIP"));
end));
      if true then return _noreturn; end
    end, function (err)
        _e = err
    end);
if _s == false then
e = _e;
_r = (function ()
--[[526]] console:log(("not ok -"), e.message, ("#SKIP"));
  if true then return _noreturn; end
end)();
end;

if _r ~= _noreturn then
  return _r
end;

return _module.exports;
end 
