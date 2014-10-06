

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, a, key = tap, a, key;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((3));
--[[44]] a = _arr({[0]=(1), (2), (3)}, 3); 
--[[62]] Object:keys(a):forEach((function (this, key)
--[[103]] tap:eq((_typeof(key)), ("string"), ("Object.keys returns non-string"));
end));
--[[171]] for key in _pairs(a) do 
key = ""+key; 
--[[193]] tap:eq((_typeof(key)), ("string"), ("Object.keys returns non-string"));
end;

return _module.exports;
end 
