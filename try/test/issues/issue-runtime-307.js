

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, test, a, test, a = tap, test, a, test, a;
local _regex0 = _regexp("^(?::(\\d*))?", "");
local _regex1 = _regexp("^(?::(\\d*))?", "");
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((4));
--[[45]] test = _regex0; 
--[[71]] a = ("WRONG"):match(test); 
--[[102]] tap:eq(a[(0)], (""));
--[[120]] tap:eq(a[(1)], undefined);
--[[146]] test = _regex1; 
--[[172]] a = (":5"):match(test); 
--[[200]] tap:eq(a[(0)], (":5"));
--[[219]] tap:eq(a[(1)], ("5"));

return _module.exports;
end 
