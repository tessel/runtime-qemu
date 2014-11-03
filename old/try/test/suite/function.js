

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, a, b = tap, a, b;
a = (function () local a = nil; a = function (this, a, b, c, d, e)

end; a:__defineGetter__("name", function () return "a"; end); return a; end)();
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((3));
--[[45]] 
--[[76]] tap:eq(a.length, (5), ("function arity == 5"));
--[[119]] tap:ok(_new(Function), ("empty Function() constructor"));
--[[175]] local _e, _noreturn = nil, {}
local _s, _r = _xpcall(function ()
--[[183]] b = _new(Function, ("a"), ("b"), ("console.log('')")); 
--[[235]] tap:ok((false), ("new Function() does not throw error"));
      if true then return _noreturn; end
    end, function (err)
        _e = err
    end);
if _s == false then
err = _e;
_r = (function ()
--[[305]] tap:ok((true), ("new Function(arg) throws error"));
  if true then return _noreturn; end
end)();
end;

if _r ~= _noreturn then
  return _r
end;

return _module.exports;
end 
