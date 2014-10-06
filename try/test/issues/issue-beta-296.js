

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, b, c, inheritAsync = tap, b, c, inheritAsync;
inheritAsync = (function () local inheritAsync = nil; inheritAsync = function (this)
local i = i;
--[[190]] for i in _pairs(this) do 
i = ""+i; 
--[[220]] i = (function (this, next)
--[[254]] local _e, _noreturn = nil, {}
local _s, _r = _xpcall(function ()

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
end);
end;
end; inheritAsync:__defineGetter__("name", function () return "inheritAsync"; end); return inheritAsync; end)();
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((3));
--[[46]] b = _obj({
  ["$super"]=_obj({
  
})
}); 
--[[70]] c = b["$super"].init; 
--[[93]] tap:ok((true));
--[[111]] 
--[[143]] tap:ok((true));
--[[159]] 
--[[318]] 
--[[321]] tap:ok((true));

return _module.exports;
end 
