

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, d, __d = tap, d, __d;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((2));
--[[45]] d = _arr({[0]=(3), (2), (1)}, 3); 
--[[62]] tap:ok(d);
--[[74]] __d = _arr({[0]=(1), (2), (3)}, 3); 
--[[92]] tap:ok(__d);

return _module.exports;
end 
