

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local https = https;
--[[0]] console:log(("1..2"));
--[[21]] https = require(_global, ("https")); 
--[[81]] https:get(("https://sni.velox.ch/"), (function (this, res)
local buf = buf;
--[[135]] console:log(("ok"));
--[[155]] console:log(("# statusCode"), res.statusCode);
--[[202]] buf = (""); 
--[[218]] res:on(("data"), (function (this, data)
--[[254]] console:log(("# received"), data.length, ("bytes"));
--[[306]] buf = buf+String(_global, data);
end));
--[[334]] res:on(("close"), (function (this)
--[[367]] console:log(("# result:"), buf);
--[[401]] console:log(("ok"));
end));
end)):on(("error"), (function (this, e)
--[[457]] console:log(("not ok -"), e.message, ("error event #SKIP"));
end));

return _module.exports;
end 
