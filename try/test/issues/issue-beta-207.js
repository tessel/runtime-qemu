

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local test = test;
test = (function () local test = nil; test = function (this, cb)
--[[24]] cb(_global, (0), (1), (2));
--[[41]] cb(_global, (null), (1), (2));
--[[61]] cb(_global, (1), (null), (2));
end; test:__defineGetter__("name", function () return "test"; end); return test; end)();
--[[0]] 
--[[80]] test(_global, (function (this, ...)
local e, d, m = ...;
local arguments = _arguments(...);
--[[108]] console:log(("arguments:"), arguments[(0)], arguments[(1)], arguments[(2)]);
--[[181]] console:log(("    e/d/m:"), e, d, m);
end));

return _module.exports;
end 
