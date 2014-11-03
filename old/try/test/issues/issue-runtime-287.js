

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, arr = tap, arr;
--[[0]] tap = require(_global, ("../tap")); 
--[[29]] tap:count((15));
--[[44]] arr = _arr({[0]=(1), (2), (3), (1), (2), (3)}, 6); 
--[[75]] console:log(("#"), arr:indexOf((2)));
--[[109]] tap:eq(arr:indexOf((2)), (1));
--[[137]] console:log(("#"), arr:indexOf((2), (0)));
--[[174]] tap:eq(arr:indexOf((2), (0)), (1));
--[[205]] console:log(("#"), arr:indexOf((2), (1)));
--[[242]] tap:eq(arr:indexOf((2), (1)), (1));
--[[273]] console:log(("#"), arr:indexOf((2), (2)));
--[[310]] tap:eq(arr:indexOf((2), (2)), (4));
--[[341]] console:log(("#"), arr:indexOf((2), (4)));
--[[378]] tap:eq(arr:indexOf((2), (4)), (4));
--[[409]] console:log(("#"), arr:indexOf((2), (5)));
--[[446]] tap:eq(arr:indexOf((2), (5)), (-((1))));
--[[478]] console:log(("#"), arr:indexOf((3), (5)));
--[[515]] tap:eq(arr:indexOf((3), (5)), (5));
--[[546]] console:log(("#"), arr:indexOf((3), (6)));
--[[583]] tap:eq(arr:indexOf((3), (6)), (-((1))));
--[[615]] console:log(("#"), arr:indexOf((2), (10)));
--[[653]] tap:eq(arr:indexOf((2), (10)), (-((1))));
--[[686]] console:log(("#"), arr:indexOf((2), (-((1)))));
--[[724]] tap:eq(arr:indexOf((2), (-((1)))), (-((1))));
--[[757]] console:log(("#"), arr:indexOf((2), (-((2)))));
--[[795]] tap:eq(arr:indexOf((2), (-((2)))), (4));
--[[827]] console:log(("#"), arr:indexOf((2), (-((2)))));
--[[865]] tap:eq(arr:indexOf((2), (-((2)))), (4));
--[[897]] console:log(("#"), arr:indexOf((2), (-((4)))));
--[[935]] tap:eq(arr:indexOf((2), (-((4)))), (4));
--[[967]] console:log(("#"), arr:indexOf((2), (-((5)))));
--[[1005]] tap:eq(arr:indexOf((2), (-((5)))), (1));
--[[1037]] console:log(("#"), arr:indexOf((2), (-((10)))));
--[[1076]] tap:eq(arr:indexOf((2), (-((10)))), (1));

return _module.exports;
end 
