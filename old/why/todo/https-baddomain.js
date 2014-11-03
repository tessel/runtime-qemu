

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local https = https;
--[[0]] console:log(("1..2"));
--[[21]] https = require(_global, ("https")); 
--[[52]] https:get(("https://shiga-5072.herokussl.com/"), (function (this, res)
--[[118]] console:log(("ok"));
--[[138]] console:log(("# statusCode"), res.statusCode);
--[[184]] res:on(("data"), (function (this, data)

end));
--[[279]] res:on(("end"), (function (this)
--[[310]] console:log(("ok - done"));
end));
end)):on(("error"), (function (this, e)
--[[373]] console:log(("not ok -"), e.message, ("error event #SKIP"));
end));

return _module.exports;
end 
