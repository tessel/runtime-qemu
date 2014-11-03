

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, a, b = tap, a, b;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((2));
--[[45]] a = _arr({[0]=("c"), ("d"), ("a"), ("e"), ("b")}, 5); 
--[[79]] console:log(("#"), a);
--[[101]] b = a:slice(); 
--[[119]] console:log(("#"), b:sort());
--[[147]] tap:eq(JSON:stringify(b), JSON:stringify(_arr({[0]=("a"), ("b"), ("c"), ("d"), ("e")}, 5)));
--[[217]] b:sort():push(("hi"));
--[[238]] tap:eq(b:pop(), ("hi"));

return _module.exports;
end 
