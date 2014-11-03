

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap = tap;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((4));
--[[45]] tap:eq(_arr({[0]=(1), (2), (3)}, 3):join(), ("1,2,3"));
--[[78]] tap:eq(_arr({[0]=(1), (2), (3)}, 3):join(("###")), ("1###2###3"));
--[[120]] tap:eq(_arr({[0]=(1), (2), (3)}, 3):join((1)), ("11213"));
--[[154]] tap:eq(_arr({[0]=(1), (2), (3)}, 3):join((null)), ("1null2null3"));

return _module.exports;
end 
