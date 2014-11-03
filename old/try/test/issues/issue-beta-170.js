

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, a = tap, a;
a = (function () local a = nil; a = function (this)

end; a:__defineGetter__("name", function () return "a"; end); return a; end)();
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((1));
--[[45]] tap:ok(a, ("function is hoisted"));
--[[79]] 

return _module.exports;
end 
