

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, obj = tap, obj;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((1));
--[[45]] obj = _obj({
  
}); 
--[[59]] console:log(("# obj.__proto__ ="), obj["__proto__"]);
--[[108]] console:log(("# Object.getPrototypeOf(obj) ="), Object:getPrototypeOf(obj));
--[[183]] tap:eq(obj["__proto__"], Object:getPrototypeOf(obj), ("same prototype"));

return _module.exports;
end 
