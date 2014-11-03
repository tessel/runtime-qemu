

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local WebSocket, ws, message = WebSocket, ws, message;
--[[0]] WebSocket = require(_global, ("faye-websocket"));  ws = _new(WebSocket.Client, ("wss://echo.websocket.org"));  message = ("Hello world!\010"); 
--[[134]] ws:on(("open"), (function (this, event)
--[[168]] ws:send(message);
end));
--[[191]] ws:on(("error"), (function (this, data)
--[[223]] console:log(("error"), data);
end));
--[[255]] ws:on(("message"), (function (this, event)
--[[292]] console:log(("message"), event.data);
end));
--[[333]] ws:on(("close"), (function (this, event)
--[[368]] console:log(("close"));
--[[392]] ws = (null);
end));

return _module.exports;
end 
