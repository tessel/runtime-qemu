

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, a, a = tap, a, a;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((2));
--[[90]] a = _arr({}, 0); 
--[[102]] Array.prototype.forEach:call(("foobar"), (function (this, ch)
--[[158]] a:push(ch);
end));
--[[174]] tap:eq(a:join(("")), ("foobar"));
--[[249]] a = _arr({}, 0); 
--[[261]] Array.prototype.forEach:call(("foobar"):split(("")), (function (this, ch)
--[[327]] a:push(ch);
end));
--[[343]] tap:eq(a:join(("")), ("foobar"));

return _module.exports;
end 
