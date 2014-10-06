

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, json = tap, json;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((2));
--[[45]] json = JSON:parse(("{\"1\":true,\"one\":true}")); 
--[[94]] tap:ok(json[(1)]);
--[[111]] tap:ok(json[("one")]);
--[[132]] console:log(("#"), json);

return _module.exports;
end 
