

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, expected, url, actual = tap, expected, url, actual;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((14));
--[[46]] expected = _obj({
  ["protocol"]=("ws:"),
  ["slashes"]=(true),
  ["auth"]=("user:pass"),
  ["host"]=("somedomain.com:1234"),
  ["port"]=("1234"),
  ["hostname"]=("somedomain.com"),
  ["hash"]=("#hash1"),
  ["search"]=("?q=123"),
  ["query"]=("q=123"),
  ["pathname"]=("/events"),
  ["path"]=("/events?q=123"),
  ["href"]=("ws://user:pass@somedomain.com:1234/events?q=123#hash1")
}); 
--[[378]] tap:ok(process.versions.colony, ("running in colony"));
--[[432]] url = require(_global, ("url")); 
--[[458]] tap:ok(url:parse(("http://tools.ietf.org/html/draft-ietf-6man-text-addr-representation-04#section-6")), ("url parses"));
--[[576]] actual = url:parse(("ws://user:pass@somedomain.com:1234/events?q=123#hash1")); 
--[[658]] Object:keys(expected):forEach((function (this, k)
--[[703]] tap:eq(actual[k], expected[k], ((k)+((" should matched expected "))));
end));
--[[772]] tap:ok(((url:parse(("http://api.openweathermap.org/data/2.5/weather?id=5327684&units=imperial")).hostname)==(("api.openweathermap.org"))), ("hostname match"));

return _module.exports;
end 
