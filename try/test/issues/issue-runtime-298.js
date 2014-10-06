

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap = tap;
--[[0]] tap = require(_global, ("../tap")); 
--[[29]] tap:count((4));
--[[43]] console:log(("#"), parseFloat(_global, ("x")));
--[[78]] tap:ok(isNaN(_global, parseFloat(_global, ("x"))));
--[[110]] console:log(("#"), parseInt(_global, ("x")));
--[[143]] tap:ok(isNaN(_global, parseInt(_global, ("x"))));
--[[173]] console:log(("#"), Number(_global, ("x")));
--[[204]] tap:ok(isNaN(_global, Number(_global, ("x"))));
--[[232]] console:log(("#"), (_G.tonumbervalue(("x"))));
--[[256]] tap:ok(isNaN(_global, (_G.tonumbervalue(("x")))));

return _module.exports;
end 
