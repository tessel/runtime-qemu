

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local https = https;
--[[0]] console:log(("1..2"));
--[[21]] https = require(_global, ("https")); 
--[[52]] https:get(("https://api.github.com"), (function (this, res)
--[[107]] console:log(("ok"));
--[[127]] console:log(("# statusCode"), res.statusCode);
--[[173]] res:on(("data"), (function (this, data)

end));
--[[268]] res:on(("end"), (function (this)
--[[299]] console:log(("ok - done"));
end));
end)):on(("error"), (function (this, e)
--[[362]] console:log(("not ok -"), e.message, ("error event #SKIP"));
end));

return _module.exports;
end 
