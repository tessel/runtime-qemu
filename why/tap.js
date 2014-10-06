

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap = tap;
--[[170]] tap = exports; 
--[[189]] tap.count = (function (this, max)
--[[218]] tap.t = (1);
--[[229]] console:log(((((String(_global, tap.t))+((".."))))+(String(_global, max))));
end);
--[[281]] tap.ok = (function (this, a, d)
local _K_not = _K_not;
--[[308]] _K_not = (""); 
--[[322]] if (not (a)) then
--[[332]] _K_not = ("not ");
end;
--[[348]] console:log(((_K_not)+(("ok"))), tap.t, ("-"), d);
--[[388]] tap.t = ((tap.t)+((1)));
end);
--[[409]] tap.eq = (function (this, a, b, c)
--[[439]] tap:ok(((a)==(b)), ((((((((String(_global, c))+((": "))))+(JSON:stringify(String(_global, a)))))+((" == "))))+(JSON:stringify(String(_global, b)))));
end);

return _module.exports;
end 
