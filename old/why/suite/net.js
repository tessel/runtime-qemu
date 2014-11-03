

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local test, net = test, net;
--[[83]] test = require(_global, ("tinytap"));  net = require(_global, ("net")); 
--[[141]] test(_global, ("addresses"), (function (this, t)
local validIPv4, validIPv6, totalBunk = validIPv4, validIPv6, totalBunk;
--[[192]] t:ok(net.isIP);
--[[210]] t:ok(net.isIPv4);
--[[516]] validIPv4 = _arr({[0]=("0.0.0.0"), ("127.0.0.1"), ("255.255.255.255"), ("1.2.3.4"), ("101.203.111.200")}, 5);  validIPv6 = _arr({[0]=("2001:db8:3333:4444:5555:6666:7777:8888"), ("2001:db8:3333:4444:CCCC:DDDD:EEEE:FFFF"), ("::"), ("2001:db8::"), ("::1234:5678"), ("2001:db8::1234:5678"), ("2001:0db8:0001:0000:0000:0ab9:C0A8:0102"), ("2001:db8:1::ab9:C0A8:102"), ("2001:db8:3333:4444:5555:6666:1.2.3.4"), ("::11.22.33.44"), ("2001:db8::123.123.123.123"), ("::1234:5678:91.123.4.56"), ("::1234:5678:1.2.3.4"), ("2001:db8::1234:5678:5.6.7.8")}, 14);  totalBunk = _arr({[0]=("255.255.255.256"), ("0xFF.0xFF.0xFF.0xFF"), ("0.0.A.0"), ("-1.0.0.0"), ("123.45.67.89zzz"), ("01.102.103.104"), ("::11.22.33.044"), ("::255.255.255.256"), ("::FG"), ("hello world"), (_void((0))), (42), ("")}, 13); 
--[[1317]] validIPv4:forEach((function (this, v)
--[[1354]] t:equal(net:isIP(v), (4), v);
end));
--[[1506]] totalBunk:forEach((function (this, v)
--[[1543]] t:equal(net:isIP(v), (0), v);
end));
--[[1594]] validIPv4:forEach((function (this, v)
--[[1631]] t:equal(net:isIPv4(v), (true), v);
end));
--[[1672]] validIPv6:forEach((function (this, v)
--[[1709]] t:equal(net:isIPv4(v), (false), v);
end));
--[[1751]] totalBunk:forEach((function (this, v)
--[[1788]] t:equal(net:isIPv4(v), (false), v);
end));
--[[2114]] (function () local _b = t; local _f = _b["end"]; return _f(_b); end)();
end));
--[[2128]] test(_global, ("client-basic"), (function (this, t)
local client = client;
--[[2182]] t:ok(net.createConnection, ("method available"));
--[[2232]] t:ok(net.connect, ("method available"));
--[[2376]] client = net:connect((80), ("ipcalf.com"), (function (this)
--[[2437]] t:pass(("callback called"));
end)); 
--[[2472]] t:ok(_instanceof((client),(net.Socket)), ("returned socket"));
--[[2529]] client:on(("connect"), (function (this)
--[[2568]] t:pass(("socket connected"));
--[[2600]] client:write(("GET / HTTP/1.1\010Host: ipcalf.com\010Accept: text/plain\010\010"));
end));
--[[2682]] client:on(("error"), (function (this)
--[[2719]] t:fail(("socket error"));
end));
--[[2770]] client:on(("data"), (function (this, d)
--[[2807]] t:equal(d:slice((0), (8)):toString(), ("HTTP/1.1"), ("got response"));
--[[2873]] (function () local _b = client; local _f = _b["end"]; return _f(_b); end)();
end));
--[[2895]] client:on(("end"), (function (this)
--[[2930]] t:ok((true), ("socket closed"));
--[[2963]] (function () local _b = t; local _f = _b["end"]; return _f(_b); end)();
end));
end));
--[[2983]] test(_global, ("server-basic"), (function (this, t)
local server, testConnection = server, testConnection;
testConnection = (function () local testConnection = nil; testConnection = function (this, port)
--[[3782]] net:connect(port):on(("data"), (function (this, d)
--[[3832]] t:equal(d:toString(), ("\194\171\194\167\194\187"));
--[[3868]] (function () local _b = t; local _f = _b["end"]; return _f(_b); end)();
end));
end; testConnection:__defineGetter__("name", function () return "testConnection"; end); return testConnection; end)();
--[[3037]] t:ok(net.createServer, ("method available"));
--[[3192]] server = net:createServer((function (this, c)
--[[3241]] t:pass(("connection callback called"));
end)); 
--[[3287]] server:listen((0), (function (this)
--[[3323]] t:pass(("listening callback called"));
end));
--[[3368]] server:on(("listening"), (function (this)
--[[3409]] t:pass(("got listening event"));
--[[3444]] t:ok(server:address().port, ("port assigned"));
--[[3494]] testConnection(_global, server:address().port);
end));
--[[3560]] server:on(("connection"), (function (this, c)
--[[3603]] t:ok(_instanceof((c),(net.Socket)), ("got connection"));
--[[3656]] c:on(("end"), (function (this)
--[[3688]] t:pass(("disconnected"));
end));
--[[3724]] (function () local _b = c; local _f = _b["end"]; return _f(_b, ("\194\171\194\167\194\187")); end)();
end));
--[[3746]] 
end));
--[[3894]] test(_global, ("server-binding"), (function (this, t)
local firstServer, otherServer, conflicting = firstServer, otherServer, conflicting;
--[[3934]] firstServer = net:createServer();  otherServer = net:createServer();  conflicting = net:createServer(); 
--[[4054]] firstServer:listen((0), (function (this)
local firstPort = firstPort;
--[[4094]] firstPort = firstServer:address().port; 
--[[4142]] t:ok(firstPort, ("assigned a port"));
--[[4182]] otherServer:listen((0), (function (this)
--[[4224]] t:notEqual(otherServer:address().port, firstPort, ("assigned a different port"));
end));
--[[4316]] conflicting:listen(firstPort, (function (this)
--[[4366]] t:fail(("this should not be called!"));
end));
--[[4416]] conflicting:on(("error"), (function (this, e)
--[[4461]] t:ok(e, ("got error as expected"));
--[[4501]] (function () local _b = t; local _f = _b["end"]; return _f(_b); end)();
end));
end));
end));
--[[4529]] test(_global, ("client-errors"), (function (this, t)
--[[4568]] net:connect((1), ("0.0.0.0")):on(("error"), (function (this, e)
--[[4625]] t:ok(e, ("got expected error"));
--[[4660]] (function () local _b = t; local _f = _b["end"]; return _f(_b); end)();
end));
end));
--[[4680]] test(_global, ("client-timeout"), (function (this, t)
local client = client;
--[[4720]] client = net:connect((80), ("ipcalf.com"), (function (this)
--[[4781]] client:setTimeout((100), (function (this)
--[[4824]] t:pass(("timeout callback called"));
end));
--[[4871]] client:on(("timeout"), (function (this)
--[[4912]] t:pass(("timeout event fired"));
--[[4949]] client:destroy();
--[[4973]] (function () local _b = t; local _f = _b["end"]; return _f(_b); end)();
end));
end)); 
end));
--[[5001]] test(_global, ("client-connect-args"), (function (this, t)
local client = client;
--[[5046]] client = net:connect(_obj({
  ["port"]=(80),
  ["host"]=("ipcalf.com")
}), (function (this)
--[[5119]] t:pass(("callback called"));
--[[5150]] (function () local _b = t; local _f = _b["end"]; return _f(_b); end)();
end)); 
end));

return _module.exports;
end 
