

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, s = tap, s;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((13));
--[[46]] s = ("10"); 
--[[60]] tap:ok(((parseInt(_global, s, (10)))==((10))));
--[[90]] tap:ok(((parseFloat(_global, s, (10)))==((10))));
--[[122]] console:log(("# base 10:"), parseInt(_global, s, (10)));
--[[165]] tap:ok(((parseInt(_global, s, (16)))==((16))));
--[[195]] tap:ok(((parseFloat(_global, s, (16)))==((10))));
--[[227]] console:log(("# base 16:"), parseInt(_global, s, (16)));
--[[270]] tap:ok(((parseInt(_global, s, (2)))==((2))));
--[[298]] tap:ok(((parseFloat(_global, s, (2)))==((10))));
--[[329]] console:log(("# base  2:"), parseInt(_global, s, (2)));
--[[372]] tap:ok(((parseInt(_global, ("0399")))==((399))), ("octal int"));
--[[418]] tap:ok(((parseFloat(_global, ("0399")))==((399))), ("octal float"));
--[[500]] tap:ok(((parseInt(_global, s, (0)))==((10))), ("radix 0"));
--[[540]] tap:ok(isNaN(_global, parseInt(_global, s, (37))));
--[[571]] tap:ok(isNaN(_global, parseInt(_global, s, (1))));
--[[601]] tap:ok(isNaN(_global, parseInt(_global, s, ("1"))));
--[[633]] tap:ok((not (isNaN(_global, parseFloat(_global, s, (0))))));

return _module.exports;
end 
