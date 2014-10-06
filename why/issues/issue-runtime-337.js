

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, a, B, prop = tap, a, B, prop;
B = (function () local B = nil; B = function (this)

end; B:__defineGetter__("name", function () return "B"; end); return B; end)();
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((1));
--[[45]] a = _obj({
  ["test"]=(function (this)
--[[77]] console:log(("test"));
end)
}); 
--[[102]] 
--[[119]] B.test = a.test;
--[[137]] for prop in _pairs(B) do 
prop = ""+prop; 
--[[161]] if ((prop)==(("test"))) then
--[[186]] tap:ok((true), ("only function object prop should be \"test\""));
else
--[[259]] _error(_new(Error, ("Unexpected key.")) or {})
end;
end;

return _module.exports;
end 
