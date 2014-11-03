

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap = tap;
--[[0]] tap = require(_global, ("../tap")); 
--[[29]] tap:count((8));
--[[43]] tap:eq(("Blue Whale"):indexOf(("Blue")), (0));
--[[84]] tap:eq(("Blue Whale"):indexOf(("Whale")), (5));
--[[126]] tap:eq(("Blue Whale"):indexOf(("Blute")), (-((1))));
--[[169]] tap:eq(("Blue Whale"):indexOf(("Whale"), (0)), (5));
--[[214]] tap:eq(("Blue Whale"):indexOf(("Whale"), (5)), (5));
--[[259]] tap:eq(("Blue Whale"):indexOf((""), (9)), (9));
--[[299]] tap:eq(("Blue Whale"):indexOf((""), (10)), (10));
--[[341]] tap:eq(("Blue Whale"):indexOf((""), (11)), (10));

return _module.exports;
end 
