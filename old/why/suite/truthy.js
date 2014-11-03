

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, a = tap, a;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((16));
--[[46]] tap:ok((((not ((0))))==((true))), ("0 is falsy"));
--[[82]] tap:ok((((not ((false))))==((true))), ("false is falsy"));
--[[126]] tap:ok((((not (undefined)))==((true))), ("undefined is falsy"));
--[[177]] tap:ok((((not (_K_nil)))==((true))), ("nil is falsy"));
--[[216]] tap:ok((((not ((""))))==((true))), ("\"\" is falsy"));
--[[254]] tap:ok((((not ((not (_arr({}, 0))))))==((true))), ("[] is truthy"));
--[[294]] tap:ok((((not ((not (("0"))))))==((true))), ("\"0\" is truthy"));
--[[338]] tap:ok((((not ((not (_obj({
  
}))))))==((true))), ("{} is truthy"));
--[[379]] a = nil; 
--[[386]] a = (0);
--[[393]] tap:ok((((not (a)))==((true))), ("0 is falsy"));
--[[429]] a = (false);
--[[440]] tap:ok((((not (a)))==((true))), ("false is falsy"));
--[[480]] a = undefined;
--[[495]] tap:ok((((not (a)))==((true))), ("undefined is falsy"));
--[[538]] a = _K_nil;
--[[547]] tap:ok((((not (a)))==((true))), ("nil is falsy"));
--[[584]] a = ("");
--[[592]] tap:ok((((not (a)))==((true))), ("\"\" is falsy"));
--[[629]] a = _arr({}, 0);
--[[637]] tap:ok((((not ((not (a)))))==((true))), ("[] is truthy"));
--[[676]] a = ("0");
--[[685]] tap:ok((((not ((not (a)))))==((true))), ("\"0\" is truthy"));
--[[727]] a = _obj({
  
});
--[[735]] tap:ok((((not ((not (a)))))==((true))), ("{} is truthy"));

return _module.exports;
end 
