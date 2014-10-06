

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, Readable, rs = tap, Readable, rs;
--[[0]] tap = require(_global, ("../tap")); 
--[[29]] tap:count((1));
--[[43]] Readable = require(_global, ("stream")).Readable; 
--[[86]] rs = _new(Readable); 
--[[109]] rs["_read"] = (function (this)

end);
--[[136]] rs:pipe(process.stdout);
--[[162]] tap:ok((true));

return _module.exports;
end 
