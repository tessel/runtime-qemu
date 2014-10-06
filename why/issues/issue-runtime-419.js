

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, foo = tap, foo;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((2));
--[[45]] foo = (5); 
--[[58]] tap:eq(foo:hasOwnProperty(("bar")), (false));
--[[101]] foo = (true);
--[[113]] tap:eq(foo:hasOwnProperty(("bar")), (false));

return _module.exports;
end 
