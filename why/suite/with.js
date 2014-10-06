function _with_fn1(_with)
--[[238]] tap:eq(internal(_global), ("internal"));
--[[270]] tap:eq(external(_global), ("external"));
--[[303]] obj.external = (function (this)
--[[334]] if true then return ("internal"); end
end);
--[[357]] tap:eq(external(_global), ("internal"));
--[[390]] a = (6);
return _with;
end
function _with_fn2(_with)
--[[463]] a = ((((PI)*(r)))*(r));
--[[481]] x = ((r)*(cos(_global, PI)));
--[[500]] y = ((r)*(sin(_global, ((PI)/((2))))));
return _with;
end


return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, internal, external, obj, a, a, x, y, r = tap, internal, external, obj, a, a, x, y, r;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((7));
--[[45]] internal = (function (this)
--[[75]] if true then return ("external"); end
end); 
--[[97]] external = (function (this)
--[[127]] if true then return ("external"); end
end); 
--[[149]] obj = _obj({
  ["internal"]=(function (this)
--[[188]] if true then return ("internal"); end
end)
}); 
--[[213]] a = (5); 
--[[224]] local _ret = _with(obj, _G._with_fn1);if _ret ~= _with then return _ret end; 
--[[399]] tap:eq(a, (6));
--[[414]] t = (5);
--[[421]] a = nil;  x = nil;  y = nil; 
--[[434]] r = (10); 
--[[447]] local _ret = _with(Math, _G._with_fn2);if _ret ~= _with then return _ret end; 
--[[524]] tap:eq(a, ((Math.PI)*((100))));
--[[549]] tap:eq(x, (-((10))));
--[[564]] tap:eq(y, (10));

return _module.exports;
end 
