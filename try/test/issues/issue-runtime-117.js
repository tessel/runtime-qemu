

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap = tap;
local _regex0 = _regexp("^\\s*", "g");
--[[0]] tap = require(_global, ("../tap")); 
--[[29]] tap:count((1));
--[[43]] tap:eq(("   text / x-lua  lua  !"):replace(_regex0, ("")), ("text / x-lua  lua  !"), ("/^s*/ replaces only at BOL"));

return _module.exports;
end 
