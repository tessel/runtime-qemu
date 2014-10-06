

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, a = tap, a;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((1));
--[[45]] a = _arr({}, 0); 
--[[57]] a:push(("foo"));
--[[72]] tap:eq(a:pop(), ("foo"));

return _module.exports;
end 
