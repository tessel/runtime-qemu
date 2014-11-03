

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local EXAMPLE = EXAMPLE;
EXAMPLE = (function () local EXAMPLE = nil; EXAMPLE = function (this)
--[[23]] _error(_new(Error, ("backtrace example")) or {})
end; EXAMPLE:__defineGetter__("name", function () return "EXAMPLE"; end); return EXAMPLE; end)();
--[[0]] 
--[[64]] EXAMPLE(_global);

return _module.exports;
end 
