

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, dns = tap, dns;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((2));
--[[45]] dns = require(_global, ("dns")); 
--[[72]] dns:resolve(("graph.facebook.com"), (function (this, err, ip)
--[[128]] tap:ok((not (err)));
--[[143]] tap:ok(((((ip)==((null))))or(Array:isArray(ip))));
--[[185]] console:log(("#"), ip);
end));

return _module.exports;
end 
