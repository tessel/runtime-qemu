

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tls, tap, options, socket = tls, tap, options, socket;
--[[0]] tls = require(_global, ("tls"));  tap = require(_global, ("../tap")); 
--[[56]] tap:count((3));
--[[71]] options = _obj({
  ["host"]=("www.google.com"),
  ["port"]=(443)
}); 
--[[132]] socket = tls:connect(options, ((function () local connected = nil; connected = function (this)
--[[191]] tap:eq((true), (true), ("connect callback is called"));
end; connected:__defineGetter__("name", function () return "connected"; end); return connected; end)())); 
--[[246]] socket:once(("secureConnect"), (function (this)
--[[290]] tap:eq((true), (true), ("secureConnect event is called"));
--[[345]] socket:write(("GET / HTTP/1.1\010Accept: */*\010Host: www.google.com\010User-Agent: HTTPie/0.7.2\010\010"));
end));
--[[447]] socket:once(("data"), (function (this, data)
--[[486]] tap:eq(((data.length)>((0))), (true), ("we got data back from google over a secure TCP socket"));
--[[576]] socket:destroy();
end));

return _module.exports;
end 
