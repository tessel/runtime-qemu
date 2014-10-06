

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, a, a = tap, a, a;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((2));
--[[45]] console:log(("#"), (((0))and((true))));
--[[73]] tap:ok((not ((((0))and((true))))), ("0 should short-circuit truthiness"));
--[[133]] a = (0); 
--[[144]] console:log(("#"), ((a)and((true))));
--[[172]] tap:ok((not (((a)and((true))))), ("0 var should short-circuit truthiness"));
--[[236]] console:log(("#"), (((0))or((42))));
--[[262]] tap:ok((((((0))or((42))))==((42))), ("0 should short-circuit falsiness"));
--[[324]] a = (0); 
--[[335]] console:log(("#"), ((a)or((42))));
--[[361]] tap:ok(((((a)or((42))))==((42))), ("0 var should short-circuit falsiness"));

return _module.exports;
end 
