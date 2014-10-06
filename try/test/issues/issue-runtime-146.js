

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, a = tap, a;
--[[0]] tap = require(_global, ("../tap")); 
--[[29]] tap:count((2));
--[[43]] a = _arr({}, 0); 
--[[55]] tap:eq(a.length, (0));
--[[76]] a:sort((function (this, a, b)
--[[99]] if true then return ((a.foo)-(b.foo)); end
end));
--[[123]] console:log(("#"), a);
--[[144]] tap:eq(a.length, (0));

return _module.exports;
end 
