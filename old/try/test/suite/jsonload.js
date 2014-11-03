

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap = tap;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((2));
--[[45]] tap:eq(require(_global, ("./jsonload-json")).hello, ("hi"), ("json imported"));
--[[110]] tap:eq(require(_global, ("./jsonload-json.json")).hello, ("hi"), ("json imported explicitly"));

return _module.exports;
end 
