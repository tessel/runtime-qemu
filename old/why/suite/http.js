

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local test, http, net = test, http, net;
--[[0]] test = require(_global, ("tinytap"));  http = require(_global, ("http"));  net = require(_global, ("net")); 
--[[86]] test(_global, ("client-basic"), (function (this, t)
local req = req;
--[[218]] req = http:request(_obj({
  ["hostname"]=("httpbin.org"),
  ["path"]=("/post"),
  ["method"]=("POST")
}), (function (this, res)
--[[335]] t:ok(res.statusCode, ("has status"));
--[[375]] t:ok(res.headers, ("has headers"));
--[[413]] t:equal(res.statusCode, (200), ("got expected status"));
--[[475]] res:setEncoding(("utf8"));
--[[504]] res:on(("data"), (function (this, chunk)
local data = data;
--[[588]] data = JSON:parse(chunk); 
--[[624]] t:equal(data.data, ("HELLO WORLD"));
--[[665]] res.socket:destroy();
--[[694]] (function () local _b = t; local _f = _b["end"]; return _f(_b); end)();
end));
end)); 
--[[722]] req:on(("response"), (function (this, res)
--[[762]] t:ok(res, ("got response event"));
end));
--[[803]] req:on(("error"), (function (this, e)
--[[837]] t:fail(("unexpected request error"));
end));
--[[884]] req:setHeader(("Content-Type"), ("text/plain"));
--[[931]] req:setHeader(("Content-Length"), (11));
--[[1008]] (function () local _b = req; local _f = _b["end"]; return _f(_b, ("HELLO WORLD")); end)();
end));
--[[1037]] test(_global, ("server-basic"), (function (this, t)
local server, test = server, test;
test = (function () local test = nil; test = function (this, port)
local req = req;
--[[1361]] req = http:get(_obj({
  ["port"]=port
}), (function (this, res)
--[[1415]] t:equal(res.statusCode, (200), ("got expected status"));
--[[1474]] t:equal(res.headers[("content-type")], ("text/plain"), ("got expected type"));
--[[1553]] res:on(("data"), (function (this, chunk)
--[[1635]] t:equal(chunk.length, (12));
--[[1670]] t:equal(chunk[(0)], ("Hello World\010"):charCodeAt((0)));
--[[1728]] t:equal(chunk[(11)], ("Hello World\010"):charCodeAt((11)));
end));
--[[1796]] res:on(("end"), (function (this)
--[[1832]] t:pass(("request ended"));
--[[1865]] server:close();
--[[1889]] (function () local _b = req; local _f = _b["end"]; return _f(_b); end)();
--[[1908]] (function () local _b = t; local _f = _b["end"]; return _f(_b); end)();
end));
end)); 
end; test:__defineGetter__("name", function () return "test"; end); return test; end)();
--[[1128]] server = http:createServer((function (this, req, res)
--[[1185]] res:writeHead((200), _obj({
  [("Content-Type")]=("text/plain")
}));
--[[1241]] (function () local _b = res; local _f = _b["end"]; return _f(_b, ("Hello World\010")); end)();
end)):listen((0), (function (this)
--[[1300]] test(_global, this:address().port);
end)); 
--[[1335]] 
end));
--[[1944]] test(_global, ("client-errors"), (function (this, t)
local expect, req, server = expect, req, server;
--[[1983]] expect = (2); 
--[[2001]] req = http:get(("http://example.invalid")):on(("error"), (function (this, e)
--[[2077]] t:ok(e, ("expected error"));
--[[2108]] if (not ((function () local _r = expect - 1; expect = _r; return _r; end)())) then
(function () local _b = t; local _f = _b["end"]; return _f(_b); end)();
end;
end)); 
--[[2143]] server = net:createServer((function (this, socket)
--[[2197]] (function () local _b = socket; local _f = _b["end"]; return _f(_b, _arr({[0]=("HTTP/1.1 200 OK"), ("Transfer-Encoding: chunked"), (""), ("garbage")}, 4):join(("\013\010"))); end)();
--[[2322]] this:close();
end)):listen((0), (function (this)
--[[2369]] http:get(_obj({
  ["port"]=this:address().port
})):on(("error"), (function (this, e)
--[[2439]] t:ok(e, ("expected error"));
--[[2472]] (function () local _b = req; local _f = _b["end"]; return _f(_b); end)();
--[[2489]] server:close();
--[[2511]] if (not ((function () local _r = expect - 1; expect = _r; return _r; end)())) then
(function () local _b = t; local _f = _b["end"]; return _f(_b); end)();
end;
end));
end)); 
end));
--[[2554]] test(_global, ("server-errors"), (function (this, t)
local expect, server, test = expect, server, test;
test = (function () local test = nil; test = function (this, port)
local client = client;
--[[2936]] client = net:connect(port, (function (this)
--[[2987]] (function () local _b = client; local _f = _b["end"]; return _f(_b, ("garbage\010\010\010")); end)();
end)); 
--[[3092]] (function () local _b = http:request(_obj({
  ["port"]=port,
  ["method"]=("post"),
  ["headers"]=_obj({
  [("Content-Length")]=(42)
})
})); local _f = _b["end"]; return _f(_b); end)();
end; test:__defineGetter__("name", function () return "test"; end); return test; end)();
--[[2593]] expect = (2); 
--[[2611]] server = http:createServer((function (this, req, res)
--[[2668]] (function () local _b = res; local _f = _b["end"]; return _f(_b); end)();
--[[2683]] (function () local _b = req.socket; local _f = _b["end"]; return _f(_b); end)();
end)):on(("clientError"), (function (this, e, s)
--[[2745]] t:ok(((e)and(s)), ("expected params"));
--[[2782]] if (not ((function () local _r = expect - 1; expect = _r; return _r; end)())) then
--[[2805]] server:close();
--[[2827]] (function () local _b = t; local _f = _b["end"]; return _f(_b); end)();
end;
end)):listen((0), (function (this)
--[[2875]] test(_global, this:address().port);
end)); 
--[[2910]] 
end));
--[[3181]] test(_global, ("server-limit"), (function (this, t)
local server = server;
--[[3219]] server = http:createServer((function (this, req, res)
--[[3276]] (function () local _b = res; local _f = _b["end"]; return _f(_b); end)();
--[[3291]] t:equal(Object:keys(req.headers).length, (1), ("headers limited"));
--[[3359]] server:close();
--[[3379]] (function () local _b = t; local _f = _b["end"]; return _f(_b); end)();
end)):listen((0), (function (this)
local req = req;
--[[3421]] this.maxHeadersCount = (1);
--[[3451]] req = (function () local _b = http:get(_obj({
  ["port"]=this:address().port,
  ["headers"]=_obj({
  [("x-a")]=(1),
  [("x-b")]=(2),
  [("x-c")]=(3)
})
})); local _f = _b["end"]; return _f(_b); end)(); 
end)); 
end));
--[[3552]] test(_global, ("client-auth"), (function (this, t)
local req = req;
--[[3589]] req = http:get(_obj({
  ["host"]=("httpbin.org"),
  ["path"]=("/basic-auth/user/passwd"),
  ["auth"]=("user:passwd")
}), (function (this, res)
--[[3764]] t:equal(res.statusCode, (200));
--[[3800]] (function () local _b = t; local _f = _b["end"]; return _f(_b); end)();
end)); 
--[[3819]] (function () local _b = req; local _f = _b["end"]; return _f(_b); end)();
end));
--[[3835]] test(_global, ("client-head"), (function (this, t)
--[[3872]] (function () local _b = http:request(_obj({
  ["method"]=("HEAD"),
  ["host"]=("ipcalf.com")
}), (function (this, res)
--[[3964]] t:ok(res.headers[("content-length")]);
--[[4007]] res:on(("data"), (function (this)
--[[4044]] t:fail(("should not get content"));
end));
--[[4094]] res:on(("end"), (function (this)
--[[4130]] (function () local _b = t; local _f = _b["end"]; return _f(_b); end)();
end));
end)); local _f = _b["end"]; return _f(_b); end)();
end));
--[[4168]] test(_global, ("continue"), (function (this, t)
local server = server;
--[[4202]] server = http:createServer():on(("checkContinue"), (function (this, req, res)
--[[4280]] t:ok(((req)and(res)), ("expected params"));
--[[4321]] res:writeContinue();
--[[4346]] res:setHeader(("X-Things"), _arr({[0]=(1), (2)}, 2));
--[[4384]] (function () local _b = res; local _f = _b["end"]; return _f(_b); end)();
end)):listen((0), (function (this)
local req = req;
--[[4428]] req = http:request(_obj({
  ["port"]=this:address().port,
  ["headers"]=_obj({
  ["expect"]=("100-continue")
})
}), (function (this, res)
--[[4536]] t:ok(res, ("got response"));
--[[4569]] t:equal(res.statusCode, (200), ("correct status"));
--[[4623]] t:equal(res.headers[("x-things")], ("1, 2"), ("proper headers"));
--[[4689]] server:close();
--[[4711]] (function () local _b = t; local _f = _b["end"]; return _f(_b); end)();
end)); 
--[[4731]] req:on(("continue"), (function (this)
--[[4770]] t:pass(("got continue"));
--[[4800]] (function () local _b = this; local _f = _b["end"]; return _f(_b); end)();
end));
--[[4824]] (function () local _b = req; local _f = _b["end"]; return _f(_b); end)();
end)); 
end));
--[[4846]] test(_global, ("connect"), (function (this, t)
local serverSocket, clientSocket, proxy = serverSocket, clientSocket, proxy;
--[[4965]] serverSocket = nil; 
--[[4985]] clientSocket = nil; 
--[[5005]] proxy = http:createServer((function (this, req, res)
--[[5061]] res:writeHead((200), _obj({
  [("Content-Type")]=("text/plain")
}));
--[[5117]] (function () local _b = res; local _f = _b["end"]; return _f(_b, ("okay")); end)();
end)); 
--[[5142]] proxy:on(("connect"), (function (this, req, cltSocket, head)
local srvUrl = srvUrl;
--[[5234]] srvUrl = require(_global, ("url")):parse(((("http://"))+(req.url))); 
--[[5294]] serverSocket = net:connect(srvUrl.port, srvUrl.hostname, (function (this)
--[[5370]] clientSocket = cltSocket;
--[[5402]] clientSocket:write(((((("HTTP/1.1 200 Connection Established\013\010"))+(("Proxy-agent: Node-Proxy\013\010"))))+(("\013\010"))));
--[[5556]] serverSocket:write(head);
--[[5588]] serverSocket:pipe(clientSocket);
--[[5627]] clientSocket:pipe(serverSocket);
end));
end));
--[[5708]] proxy:listen((0), (function (this)
local options, req = options, req;
--[[5785]] options = _obj({
  ["port"]=this:address().port,
  ["method"]=("CONNECT"),
  ["path"]=("ipcalf.com:80")
}); 
--[[5899]] req = http:request(options); 
--[[5936]] (function () local _b = req; local _f = _b["end"]; return _f(_b); end)();
--[[5952]] req:on(("connect"), (function (this, res, socket, head)
--[[6006]] t:pass(("got connected!"));
--[[6083]] socket:write(((((((((("GET / HTTP/1.1\013\010"))+(("Host: ipcalf.com:80\013\010"))))+(("Accept: text/plain\013\010"))))+(("Connection: close\013\010"))))+(("\013\010"))));
--[[6291]] socket:on(("data"), (function (this, chunk)
--[[6335]] t:ok(net:isIP(chunk:toString():split(("\010")):pop()));
--[[6395]] proxy:close();
--[[6418]] socket:destroy();
--[[6444]] serverSocket:destroy();
--[[6476]] clientSocket:destroy();
--[[6508]] (function () local _b = t; local _f = _b["end"]; return _f(_b); end)();
end));
--[[6533]] socket:on(("end"), (function (this)
--[[6571]] proxy:close();
end));
end));
end));
end));
--[[6615]] test(_global, ("upgrade"), (function (this, t)
local srv = srv;
--[[6734]] srv = http:createServer((function (this, req, res)
--[[6788]] console:log(("got a request!"));
--[[6823]] res:writeHead((200), _obj({
  [("Content-Type")]=("text/plain")
}));
--[[6879]] (function () local _b = res; local _f = _b["end"]; return _f(_b, ("okay")); end)();
end)); 
--[[6904]] srv:on(("upgrade"), (function (this, req, socket, head)
--[[6956]] console:log(("UPGRADED UP HERE"));
--[[6993]] t:ok(("got event"));
--[[7016]] socket:write(((((((("HTTP/1.1 101 Web Socket Protocol Handshake\013\010"))+(("Upgrade: WebSocket\013\010"))))+(("Connection: Upgrade\013\010"))))+(("\013\010"))));
end));
--[[7236]] srv:listen((1337), ("127.0.0.1"), (function (this)
local options, req = options, req;
--[[7306]] options = _obj({
  ["port"]=(1337),
  ["hostname"]=("127.0.0.1"),
  ["headers"]=_obj({
  [("Connection")]=("Upgrade"),
  [("Upgrade")]=("websocket")
})
}); 
--[[7474]] req = http:request(options); 
--[[7511]] (function () local _b = req; local _f = _b["end"]; return _f(_b); end)();
--[[7527]] req:on(("upgrade"), (function (this, res, socket, upgradeHead)
--[[7588]] console:log(("got upgraded!"));
--[[7623]] t:ok(("upgraded!"));
--[[7648]] (function () local _b = socket; local _f = _b["end"]; return _f(_b); end)();
--[[7668]] (function () local _b = t; local _f = _b["end"]; return _f(_b); end)();
end));
end));
end));
--[[7696]] test(_global, ("upgrade-head"), (function (this, t)
local server = server;
--[[7734]] server = http:createServer():on(("upgrade"), (function (this, req, socket, head)
--[[7816]] t:ok(((req)and(socket)), ("expected params"));
--[[7860]] t:equal(head:toString(), ("extra"));
--[[7899]] server:close();
--[[7919]] (function () local _b = t; local _f = _b["end"]; return _f(_b); end)();
end)):listen((0), (function (this)
--[[7961]] net:connect(this:address().port, (function (this)
--[[8014]] (function () local _b = this; local _f = _b["end"]; return _f(_b, ((((((((("GET / HTTP/1.1\013\010"))+(("Upgrade: test\013\010"))))+(("Connection: upgrade\013\010"))))+(("\013\010"))))+(("extra")))); end)();
end));
end)); 
end));
--[[8203]] test(_global, ("agent"), (function (this, t)
local server, test = server, test;
test = (function () local test = nil; test = function (this, port)
local agent, sockets = agent, sockets;
--[[8402]] agent = _new(http.Agent, _obj({
  ["keepAlive"]=(false),
  ["maxSockets"]=(2)
}));  sockets = _arr({}, 0); 
--[[8489]] http:get(_obj({
  ["port"]=port,
  ["agent"]=agent
})):on(("socket"), (function (this, s)
--[[8558]] sockets[(0)] = s;
--[[8580]] s:on(("close"), (function (this)
--[[8608]] sockets.CLOSED = (true);
end));
end));
--[[8647]] http:get(_obj({
  ["port"]=port,
  ["agent"]=agent
})):on(("socket"), (function (this, s)
--[[8716]] sockets[(1)] = s;
--[[8738]] s:on(("close"), (function (this)
--[[8766]] sockets.CLOSED = (true);
end));
end));
--[[8805]] http:get(_obj({
  ["port"]=port,
  ["agent"]=agent
})):on(("socket"), (function (this, s)
--[[8874]] if sockets.CLOSED then
t:pass(("needed new socket"));
else
t:ok((_bit.bnot(sockets:indexOf(s))), ("reused a socket"));
end;
end)):on(("response"), (function (this, res)
--[[9025]] res:resume();
--[[9045]] res:on(("end"), (function (this)
--[[9081]] setTimeout(_global, (function (this)
--[[9116]] http:get(_obj({
  ["port"]=port,
  ["agent"]=agent
})):on(("socket"), (function (this, s)
--[[9191]] t:ok((not ((_bit.bnot(sockets:indexOf(s))))), ("got new socket"));
--[[9249]] server:close();
--[[9278]] (function () local _b = t; local _f = _b["end"]; return _f(_b); end)();
end));
end), (1000));
end));
end));
end; test:__defineGetter__("name", function () return "test"; end); return test; end)();
--[[8234]] server = http:createServer((function (this, req, res)
--[[8291]] (function () local _b = res; local _f = _b["end"]; return _f(_b, ("okay")); end)();
end)):listen((0), (function (this)
--[[8341]] test(_global, this:address().port);
end)); 
--[[8376]] 
end));
--[[9345]] test(_global, ("keepalive"), (function (this, t)
local server, test = server, test;
test = (function () local test = nil; test = function (this, port)
local agent, socket = agent, socket;
--[[9548]] agent = _new(http.Agent, _obj({
  ["keepAlive"]=(true),
  ["maxSockets"]=(1),
  ["maxFreeSockets"]=(1)
}));  socket = (null); 
--[[9653]] http:get(_obj({
  ["port"]=port,
  ["agent"]=agent
})):on(("socket"), (function (this, s)
--[[9722]] socket = s;
end));
--[[9746]] http:get(_obj({
  ["port"]=port,
  ["agent"]=agent
})):on(("socket"), (function (this, s)
--[[9815]] t:strictEqual(s, socket, ("reused socket"));
end)):on(("response"), (function (this, res)
--[[9903]] res:resume();
--[[9923]] res:on(("end"), (function (this)
--[[9959]] setTimeout(_global, (function (this)
--[[9994]] http:get(_obj({
  ["port"]=port,
  ["agent"]=agent,
  ["headers"]=_obj({
  ["connection"]=("close")
})
})):on(("socket"), (function (this, s)
--[[10099]] t:strictEqual(s, socket, ("reused socket once more"));
--[[10164]] http:get(_obj({
  ["port"]=port,
  ["agent"]=agent
})):on(("socket"), (function (this, s)
--[[10241]] t:notStrictEqual(s, socket, ("got new socket"));
--[[10302]] server:close();
--[[10332]] (function () local _b = t; local _f = _b["end"]; return _f(_b); end)();
end));
end));
end), (1000));
end));
end));
end; test:__defineGetter__("name", function () return "test"; end); return test; end)();
--[[9380]] server = http:createServer((function (this, req, res)
--[[9437]] (function () local _b = res; local _f = _b["end"]; return _f(_b, ("okay")); end)();
end)):listen((0), (function (this)
--[[9487]] test(_global, this:address().port);
end)); 
--[[9522]] 
end));

return _module.exports;
end 
