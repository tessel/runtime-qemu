

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap = tap;
local _regex0 = _regexp(",", "");
local _regex1 = _regexp(",", "");
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((8));
--[[45]] tap:ok(((("1234567890"):substring((3), (6)))==(("456"))), ("substring 1"));
--[[106]] tap:ok(((("abc"):substring((0), (0)))==((""))), ("substring 2"));
--[[157]] tap:ok(((("ababababab"):indexOf(("a")))==((0))), ("indexOf"));
--[[207]] tap:ok(((("ababababab"):lastIndexOf(("a")))==((8))), ("lastIndexOf"));
--[[265]] tap:ok(((("a,b,c,d,e"):split((",")).length)==((5))), ("split (string)"));
--[[326]] console:log(("#"), ("a,b,c,d,e"):split(_regex0));
--[[368]] tap:ok(((("a,b,c,d,e"):split(_regex1).length)==((5))), ("split (regexp)"));
--[[429]] tap:ok(((("abc"):slice((0), (0)))==((""))), ("slice 1"));
--[[471]] tap:ok(((("abc"):slice((0), (1)))==(("a"))), ("slice 2"));

return _module.exports;
end 
