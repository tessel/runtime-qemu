

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, simple, parsed, a = tap, simple, parsed, a;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((1));
--[[44]] simple = ("{\"price\":null}"); 
--[[75]] parsed = JSON:parse(simple); 
--[[108]] a = parsed.price; 
--[[129]] tap:eq((_typeof(a)), ("undefined"), ("JSON parsed null should be equal to undefined"));

return _module.exports;
end 
