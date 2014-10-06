

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, b, a, i, task = tap, b, a, i, task;
a = (function () local a = nil; a = function (this)
--[[73]] if true then return (function () local _r =  (5); b  = _r; return _r; end)(); end
end; a:__defineGetter__("name", function () return "a"; end); return a; end)();
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((1));
--[[45]] b = (0); 
--[[56]] 
--[[91]] console:log((function () local _r =  _obj({
  ["a"]=(5)
}); b  = _r; return _r; end)().a);
--[[185]] i = _obj({
  ["length"]=(1)
}); 
--[[209]] task = _arr({[0]=(function (this)
--[[235]] tap:eq(this, task);
end)}, 1); 
--[[258]] (function () local _b = task; local _f = _b[((i.length)-((1)))]; return _f(_b); end)();

return _module.exports;
end 
