

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, builtin, i = tap, builtin, i;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] builtin = _arr({[0]=("assert"), ("buffer"), ("child_process"), ("crypto"), ("dgram"), ("events"), ("fs"), ("http"), ("net"), ("os"), ("path"), ("punycode"), ("querystring"), ("stream"), ("string_decoder"), ("tty"), ("url"), ("util"), ("zlib")}, 19); 
--[[232]] tap:count(builtin.length);
--[[260]] i = (0); 
while ((i)<(builtin.length)) do 

--[[304]] tap:ok(require(_global, builtin[i]), builtin[i]);

local _r = i; i = _r + 1;
end;

return _module.exports;
end 
