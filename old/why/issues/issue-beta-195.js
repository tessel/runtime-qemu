

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, table, table, table, table = tap, table, table, table, table;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((5));
--[[45]] table = _arr({}, 0); 
--[[61]] table[("0")] = (true);
--[[80]] tap:ok(((table[("0")])==((true))));
--[[107]] tap:ok(((table[(0)])==((true))));
--[[133]] table = _obj({
  
}); 
--[[149]] table[(0)] = (true);
--[[166]] tap:ok(((table[("0")])==((true))));
--[[193]] tap:ok(((table[(0)])==((true))));
--[[219]] table = _obj({
  
}); 
--[[235]] table[(5)] = (true);
--[[252]] tap:ok(((table[("5")])==((true))));
--[[280]] table = _obj({
  
}); 
--[[296]] table[((function () local hi = nil; hi = function (this)

end; hi:__defineGetter__("name", function () return "hi"; end); return hi; end)())] = (true);
--[[328]] table[(5)] = (true);
--[[345]] table[("hi")] = (true);
--[[365]] console:log(table);

return _module.exports;
end 
