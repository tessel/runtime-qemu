

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local Readable, Writable, Transform, input, A, B, C = Readable, Writable, Transform, input, A, B, C;
--[[0]] Readable = require(_global, ("stream")).Readable; 
--[[43]] Writable = require(_global, ("stream")).Writable; 
--[[86]] Transform = require(_global, ("stream")).Transform; 
--[[132]] input = _arr({[0]=("1"), ("2"), ("3")}, 3); 
--[[161]] A = _new(Readable); 
--[[185]] A["_read"] = (function (this)
--[[210]] if input.length then
--[[232]] this:push(input:shift());
end;
end);
--[[264]] B = _new(Transform); 
--[[289]] B["_transform"] = (function (this, chunk, encoding, callback)
--[[344]] this:push(chunk);
--[[363]] setImmediate(_global, callback);
end);
--[[390]] C = _new(Writable); 
--[[414]] C["_write"] = (function (this, chunk, encoding, callback)
--[[465]] console:log(chunk);
--[[486]] callback(_global);
end);
--[[501]] A:pipe(B):pipe(C);

return _module.exports;
end 
