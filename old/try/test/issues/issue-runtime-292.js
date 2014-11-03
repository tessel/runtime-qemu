

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, str = tap, str;
local _regex0 = _regexp("x", "");
--[[0]] tap = require(_global, ("../tap")); 
--[[29]] tap:count((1));
--[[43]] str = ("x"):replace(_regex0, (function (this)
--[[86]] if true then return (true); end
end)); 
--[[103]] tap:eq(str, ("true"));

return _module.exports;
end 
