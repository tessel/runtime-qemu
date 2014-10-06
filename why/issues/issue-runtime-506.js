

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, A = tap, A;
A = (function () local A = nil; A = function (this, a)

end; A:__defineGetter__("name", function () return "A"; end); return A; end)();
--[[0]] tap = require(_global, ("../tap")); 
--[[29]] tap:count((1));
--[[43]] 
--[[63]] Object:defineProperty(A, ("test"), _obj({
  ["get"]=(function (this)
--[[123]] if true then return ("foo"); end
end)
}));
--[[146]] tap:eq(A.test, ("foo"), ("defineProperty works on functions"));

return _module.exports;
end 
