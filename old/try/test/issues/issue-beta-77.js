

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, TestObj, globalDict, t = tap, TestObj, globalDict, t;
TestObj = (function () local TestObj = nil; TestObj = function (this)

end; TestObj:__defineGetter__("name", function () return "TestObj"; end); return TestObj; end)();
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((1));
--[[45]] 
--[[68]] globalDict = _obj({
  
}); 
--[[90]] t = _new(TestObj); 
--[[114]] globalDict[t] = ("hi");
--[[137]] tap:eq(JSON:stringify(globalDict), ("{\"[object Object]\":\"hi\"}"));

return _module.exports;
end 
