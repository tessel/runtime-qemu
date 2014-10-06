

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, o, descriptor, fields, result, i = tap, o, descriptor, fields, result, i;
--[[0]] tap = require(_global, ("../tap")); 
--[[29]] tap:count((1));
--[[43]] o = _obj({
  ["foo"]=(1)
}); 
--[[63]] descriptor = Object:getOwnPropertyDescriptor(o, ("foo")); 
--[[123]] fields = _arr({[0]=("writable"), ("enumerable"), ("configurable")}, 3); 
--[[182]] result = (true); 
--[[202]] i = (0); 
while ((i)<(fields.length)) do 

--[[246]] if (not ((function () local _r =  _in((fields[i]),(descriptor)); result  = _r; return _r; end)())) then
--[[293]] if true then break; end;
end;

local _r = i; i = _r + 1;
end;
--[[306]] tap:ok(result);

return _module.exports;
end 
