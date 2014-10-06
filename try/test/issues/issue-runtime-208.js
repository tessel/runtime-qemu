

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, a = tap, a;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((2));
--[[45]] a = (function () local _r = _obj({
  ["a"]=(5),
  ["c"]=(5)
}); Object:defineProperty(_r, "apple", {get = (function (this)
--[[91]] if true then return this.a; end
end), set = (function (this, value)
--[[142]] this.a = ((value)+((1)));
end)});  return _r; end)(); 
--[[181]] tap:eq(a.apple, a.a, ("Getting works properly"));
--[[229]] a.apple = (3);
--[[242]] tap:eq(a.apple, (4), ("Setting works properly"));

return _module.exports;
end 
