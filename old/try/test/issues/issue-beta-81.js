

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, actions, __n, __j = tap, actions, __n, __j;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((2));
--[[45]] actions = _arr({[0]=("a"), ("b"), ("c"), ("d"), ("e"), ("f"), ("g")}, 7); 
--[[96]] __n = (1); 
--[[108]] tap:ok(((actions[__n])==(("b"))), ("underscores in member properties not undefined"));
--[[186]] __j = _obj({
  ["_k"]=(5)
}); 
--[[203]] tap:ok(((actions[__j["_k"]])==(("f"))), ("underscores in member properties in member properties not undefined"));

return _module.exports;
end 
