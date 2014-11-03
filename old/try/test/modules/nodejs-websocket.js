

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local test, ws, port = test, ws, port;
--[[0]] test = require(_global, ("tinytap"));  ws = require(_global, ("nodejs-websocket")); 
--[[70]] port = (8000); 
--[[88]] test(_global, ("basics"), (function (this, t)
--[[120]] ws:createServer((function (this, conn)
--[[158]] conn:on(("text"), (function (this, s)
--[[195]] conn:sendText(((s:toUpperCase())+(("!!!"))));
end));
end)):listen(port, (function (this)
local self = self;
--[[276]] self = this.socket; 
--[[313]] ws:connect(((("ws://localhost:"))+(self:address().port)), (function (this)
--[[384]] this:sendText(("Testing 123"));
end)):on(("text"), (function (this, s)
--[[452]] t:equal(s, ("TESTING 123!!!"));
--[[488]] (function () local _b = t; local _f = _b["end"]; return _f(_b); end)();
end));
end));
end));

return _module.exports;
end 
