

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local http = http;
--[[0]] http = require(_global, ("http")); 
--[[28]] http:createServer((function (this, req, res)
--[[70]] res:writeHead((200), _obj({
  [("Content-Type")]=("text/plain")
}));
--[[124]] (function () local _b = res; local _f = _b["end"]; return _f(_b, ("Hello World\010")); end)();
end)):listen((1337), ("127.0.0.1"));
--[[180]] console:log(("Server running at http://127.0.0.1:1337/"));

return _module.exports;
end 
