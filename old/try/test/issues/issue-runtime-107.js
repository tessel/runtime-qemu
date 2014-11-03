

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap = tap;
local _regex0 = _regexp("\\s|l*", "g");
local _regex1 = _regexp("l*", "g");
--[[0]] tap = require(_global, ("../tap")); 
--[[29]] tap:count((1));
--[[43]] tap:eq(("Hello World"):replace(_regex0, ("")), ("HeoWord"), ("/s|l*/ replace"));
--[[118]] tap:eq(("Hello World"):replace(_regex1, ("_")), ("_H_e__o_ _W_o_r__d_"), ("/l*/ replace"));

return _module.exports;
end 
