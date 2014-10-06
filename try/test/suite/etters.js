

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, a, b = tap, a, b;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((8));
--[[45]] a = _obj({
  
}); 
--[[56]] a.hello = ("A");
--[[70]] tap:ok(((a.hello)==(("A"))), ("normal property getter"));
--[[119]] Object:defineProperties(a, _obj({
  [("hello")]=_obj({
  ["get"]=(function (this)
--[[190]] if true then return ("B"); end
end)
})
}));
--[[216]] (function () local _b = a; local _f = _b["__defineSetter__"]; return _f(_b, ("hello"), (function (this, val)
--[[263]] tap:ok((true), ("called setter"));
end)); end)();
--[[298]] tap:ok(((a.hello)==(("B"))), ("getter defined"));
--[[340]] a.hello = ("C");
--[[354]] tap:ok(((a.hello)==(("B"))), ("setter worked"));
--[[396]] b = _obj({
  
}); 
--[[408]] b.hello = ("A");
--[[423]] tap:ok(((b.hello)==(("A"))), ("normal property getter"));
--[[473]] (function () local _b = b; local _f = _b["__defineSetter__"]; return _f(_b, ("hello"), (function (this, val)
--[[520]] tap:ok((true), ("setter without getter worked"));
end)); end)();
--[[569]] tap:ok(((b.hello)==((null))), ("setter removed value #TODO"));
--[[623]] b.hello = ("B");
--[[638]] tap:ok(((b.hello)~=(("B"))), ("setter didnt change value"));

return _module.exports;
end 
