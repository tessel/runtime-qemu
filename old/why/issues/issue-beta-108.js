

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, arr, i = tap, arr, i;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((1));
--[[45]] arr = _arr({}, 0); 
--[[60]] for i in _pairs(arr) do 
i = ""+i; 
--[[83]] console:log(("#"), i);
--[[106]] tap:ok((false), ("Array should not have found index"));
--[[160]] process:exit((1));
end;
--[[179]] tap:ok((true));

return _module.exports;
end 
