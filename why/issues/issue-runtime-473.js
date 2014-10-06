

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, obj = tap, obj;
--[[0]] tap = require(_global, ("../tap")); 
--[[29]] tap:count((1));
--[[43]] obj = _obj({
  
}); 
--[[56]] Error:captureStackTrace(obj);
--[[85]] tap:eq((_typeof(obj.stack)), ("string"), ("non-Error object gets captured stack"));

return _module.exports;
end 
