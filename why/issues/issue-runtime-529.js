

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, res = tap, res;
--[[0]] tap = require(_global, ("../tap")); 
--[[28]] tap:count((1));
--[[43]] res = JSON:stringify(_obj({
  ["foundation"]=("Mozilla"),
  ["model"]=("box"),
  ["other"]=(5)
}), (function (this, key, value)
--[[152]] if true then return (((((_typeof(value)))==(("string")))) and {(null)} or {value})[1]; end
end)); 
--[[206]] tap:ok(res, ("{\"other\":5}"));

return _module.exports;
end 
