

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local reduceBuffer = reduceBuffer;
reduceBuffer = (function () local reduceBuffer = nil; reduceBuffer = function (this, buf, start, _K_end, fn, res)
local i, len = i, len;
--[[131]] i = start;  len = _K_end; 
while ((i)<(len)) do 

--[[186]] res = fn(_global, res, buf[i]);

local _r = i + 1; i = _r;
end;
--[[219]] if true then return res; end
end; reduceBuffer:__defineGetter__("name", function () return "reduceBuffer"; end); return reduceBuffer; end)();
--[[0]] 

return _module.exports;
end 
