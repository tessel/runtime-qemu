

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, a = tap, a;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((2));
--[[45]] a = (function (this, ...)
local arguments = _arguments(...);
local fake, args = fake, args;
--[[68]] fake = Array.prototype:slice(arguments); 
--[[114]] tap:eq(((fake)and(fake.length)), (0), (".slice with improper arguments does nothing."));
--[[199]] args = Array.prototype.slice:apply(arguments); 
--[[254]] tap:eq(((args)and(args.length)), (3), (".slice with arguments as call object returns proper array."));
end); 
--[[351]] a(_global, (1), (2), (3));

return _module.exports;
end 
