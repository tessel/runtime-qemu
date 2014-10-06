

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local express, app = express, app;
--[[0]] express = require(_global, ("express")); 
--[[35]] app = express(_global); 
--[[57]] app:get(("/"), (function (this, req, res)
--[[92]] res:send(("Hello World"));
end));
--[[121]] app:get(("foo"), (function (this, req, res)
--[[158]] res:send(("Hello World"));
end));
--[[188]] app:get(("*"), (function (this, req, res)
--[[224]] res:send(("got sometin!"));
end));
--[[253]] app:listen((3000));
--[[271]] console:log(("Listening on http://localhost:3000"));

return _module.exports;
end 
