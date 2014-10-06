

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local test, https = test, https;
--[[0]] test = require(_global, ("tinytap"));  https = require(_global, ("https")); 
--[[62]] test(_global, ("https"), (function (this, t)
local https = https;
--[[92]] https = require(_global, ("https")); 
--[[122]] console:log(("imported"));
--[[148]] https:get(("https://google.com"), (function (this, res)
--[[200]] t:equal(res.headers.location, ("https://www.google.com/"));
--[[261]] res:resume();
--[[278]] (function () local _b = t; local _f = _b["end"]; return _f(_b); end)();
end));
end));

return _module.exports;
end 
