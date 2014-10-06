

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local https, dns = https, dns;
--[[0]] console:log(("1..2"));
--[[21]] https = require(_global, ("https")); 
--[[51]] dns = require(_global, ("dns")); 
--[[107]] dns:resolve(("sni.velox.ch"), (function (this, err, addresses)
--[[164]] https:get(((((("https://"))+(addresses[(0)])))+(("/"))), (function (this, res)
local buf = buf;
--[[227]] console:log(("ok"));
--[[248]] console:log(("# statusCode"), res.statusCode);
--[[296]] buf = (""); 
--[[313]] res:on(("data"), (function (this, data)
--[[350]] console:log(("# received"), data.length, ("bytes"));
--[[403]] buf = buf+String(_global, data);
end));
--[[433]] res:on(("close"), (function (this)
--[[467]] console:log(("# result:"), buf);
--[[502]] console:log(("ok"));
end));
end)):on(("error"), (function (this, e)
--[[561]] console:log(("not ok -"), e.message, ("error event #SKIP"));
end));
end));

return _module.exports;
end 
