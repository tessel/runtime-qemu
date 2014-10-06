

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, start = tap, start;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((7));
--[[45]] tap:eq((_typeof(process.version)), ("string"), ("process version exists as a string"));
--[[126]] start = process:hrtime(); 
--[[156]] setTimeout(_global, (function (this)
local diff = diff;
--[[182]] diff = process:hrtime(start); 
--[[218]] tap:ok(Array:isArray(start), ("hrtime returns an array"));
--[[275]] tap:eq(start.length, (2), ("hrtime returns a type of numbers"));
--[[336]] tap:eq((_typeof(start[(0)])), ("number"), ("hrtime returns an array"));
--[[398]] tap:eq((_typeof(start[(1)])), ("number"), ("hrtime returns an array"));
--[[461]] tap:ok(Array:isArray(diff), ("hr can take an argument and return a diff"));
--[[536]] tap:ok(((((diff[(0)])==(start[(0)]))) and {((diff[(0)])<=(start))} or {((diff[(0)])<(start[(0)]))})[1], ("hrtime diff is lower than start"));
end), (100));

return _module.exports;
end 
