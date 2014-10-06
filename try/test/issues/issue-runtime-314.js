

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, result = tap, result;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((1));
--[[45]] result = (0); 
--[[62]] if NaN then
--[[108]] local _r = result; result = _r + 1;
end;
--[[121]] tap:ok((not (result)), ("NaN should be a falsy value in if () {} block."));

return _module.exports;
end 
