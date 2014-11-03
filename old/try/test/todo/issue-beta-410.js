

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local NotImplementedError = NotImplementedError;
NotImplementedError = (function () local NotImplementedError = nil; NotImplementedError = function (this, message)
--[[44]] this.name = ("NotImplementedError");
--[[83]] this.message = ((message)or(("")));
end; NotImplementedError:__defineGetter__("name", function () return "NotImplementedError"; end); return NotImplementedError; end)();
--[[0]] 
--[[117]] NotImplementedError.prototype = Error.prototype;
--[[167]] _error(_new(NotImplementedError, ("Bad Jon Bad")) or {})

return _module.exports;
end 
