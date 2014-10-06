

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap = tap;
local _regex0 = _regexp(",", "");
local _regex1 = _regexp("[\\r\\n]+", "");
--[[0]] tap = require(_global, ("../tap")); 
--[[29]] tap:count((2));
--[[43]] tap:eq(JSON:stringify(("a,b,c,d"):split(_regex0)), JSON:stringify(_arr({[0]=("a"), ("b"), ("c"), ("d")}, 4)), ("split(/,/)"));
--[[141]] tap:eq(JSON:stringify(("a\013\010b\013\010c\013\010d"):split(_regex1)), JSON:stringify(_arr({[0]=("a"), ("b"), ("c"), ("d")}, 4)), ("split(/[\\r\\n]+/)"));

return _module.exports;
end 
