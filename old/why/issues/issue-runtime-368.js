

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, obj, test = tap, obj, test;
test = (function () local test = nil; test = function (this, k)
local b = b;
--[[80]] tap:eq((_typeof(k)), ("string"), (_typeof(k)));
--[[118]] b = obj[k]; 
--[[134]] tap:eq((_typeof(k)), ("string"), (_typeof(k)));
end; test:__defineGetter__("name", function () return "test"; end); return test; end)();
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((2));
--[[44]] obj = _arr({}, 0); 
--[[59]] 
--[[173]] test(_global, ("5"));

return _module.exports;
end 
