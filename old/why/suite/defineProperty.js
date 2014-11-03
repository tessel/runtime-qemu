

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap = tap;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((2));
--[[45]] o = _obj({
  
});
--[[54]] Object:defineProperty(o, ("foo"), _obj({
  ["value"]=(0)
}));
--[[105]] tap:ok(((((o.foo)+((1))))==((1))), ("falsy value"));
--[[146]] Object:defineProperty(o, ("bar"), _obj({
  ["get"]=(function (this)
--[[200]] if true then return (5); end
end)
}));
--[[217]] tap:ok(((o.bar)==((5))), ("getter"));

return _module.exports;
end 
