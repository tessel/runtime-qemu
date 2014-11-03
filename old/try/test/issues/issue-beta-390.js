

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, test = tap, test;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((3));
--[[45]] test = _obj({
  
}); 
--[[61]] test[("A")] = (0);
--[[76]] Object:defineProperty(test, ("a"), _obj({
  ["get"]=(function (this)
--[[134]] if true then return (0); end
end)
}));
--[[151]] test[("B")] = (1);
--[[166]] console:log(("# test"), test);
--[[195]] tap:ok(((Object:keys(test):indexOf(("B")))>((-((1))))));
--[[240]] tap:ok(_in((("B")),(test)));
--[[261]] tap:eq(test.a, (0));

return _module.exports;
end 
