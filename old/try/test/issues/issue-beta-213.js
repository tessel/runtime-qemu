

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, n, n = tap, n, n;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((7));
--[[45]] n = (1034834473185); 
--[[67]] tap:ok(((String(_global, n))==(("1034834473185"))));
--[[105]] tap:ok(((n:toString((10)))==(("1034834473185"))));
--[[148]] console:log(("# base 10:"), n:toString((10)), ("=="), ("1034834473185"));
--[[214]] tap:ok(((n:toString((16)))==(("f0f0f0f0e1"))));
--[[254]] console:log(("# base 16:"), n:toString((16)), ("=="), ("f0f0f0f0e1"));
--[[318]] n = (1034834473185); 
--[[341]] tap:ok(((String(_global, n))==(("1034834473185"))));
--[[379]] tap:ok(((n:toString((10)))==(("1034834473185"))));
--[[422]] console:log(("# base 10:"), n:toString((10)), ("=="), ("1034834473185"));
--[[488]] tap:ok(((n:toString((16)))==(("f0f0f0f0e1"))));
--[[528]] console:log(("# base 16:"), n:toString((16)), ("=="), ("f0f0f0f0e1"));
--[[592]] tap:ok((((((4294967295))*((2))))>((4294967295))), ("supports > 0xFFFFFFFF"));

return _module.exports;
end 
