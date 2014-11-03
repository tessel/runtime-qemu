

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, str, arr, a = tap, str, arr, a;
local _regex0 = _regexp(", ", "g");
local _regex1 = _regexp("a(b)|c", "g");
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((2));
--[[45]] str = ("DNS:*.github.com, DNS:github.com"); 
--[[92]] arr = str:split(_regex0); 
--[[120]] console:log(((((arr.length)==((2)))) and {("ok")} or {("not ok")})[1]);
--[[169]] a = _regex1; 
--[[189]] ("abc"):replace(a, (function (this, all, sub)
--[[229]] console:log(("#"), all, sub);
--[[258]] if ((all)==(("c"))) then
--[[278]] tap:eq(sub, (null));
end;
end));

return _module.exports;
end 
