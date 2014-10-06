

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap = tap;
local _regex0 = _regexp("abc", "g");
local _regex1 = _regexp("abc", "gim");
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((3));
--[[45]] tap:ok(RegExp.prototype:hasOwnProperty(("toString")), ("regex has own property toString"));
--[[133]] tap:eq(_regex0:toString(), ("/abc/g"), ("tostring method on regex"));
--[[198]] tap:eq(_regex1:toString(), ("/abc/gim"), ("tostring method on regex orders flags by spec"));

return _module.exports;
end 
