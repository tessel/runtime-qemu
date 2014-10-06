

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local https = https;
--[[0]] console:log(("1..2"));
--[[21]] https = require(_global, ("https")); 
--[[52]] https:get(("https://www.pcwebshop.co.uk/"), (function (this, res)
--[[113]] console:log(("ok"));
--[[133]] console:log(("# statusCode"), res.statusCode);
--[[179]] res:on(("data"), (function (this, data)

end));
--[[274]] res:on(("end"), (function (this)
--[[305]] console:log(("ok - done"));
end));
end)):on(("error"), (function (this, e)
--[[368]] console:log(("not ok -"), e.message, ("error event #SKIP"));
end));

return _module.exports;
end 
