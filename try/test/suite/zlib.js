

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local zlib, Stream, crypto, inputs, zlibUnzipTest = zlib, Stream, crypto, inputs, zlibUnzipTest;
zlibUnzipTest = (function () local zlibUnzipTest = nil; zlibUnzipTest = function (this, data, type, input)
local stream, unzip = stream, unzip;
--[[300]] stream = _new(Stream); 
--[[329]] unzip = zlib:createUnzip(); 
--[[364]] unzip:on(("data"), (function (this, buf)
--[[400]] console:log(("#"), input:toString());
--[[440]] console:log(("#"), ("zlib test"), type, ("got"), buf:toString());
--[[504]] console:log(((((buf:toString())==(input:toString()))) and {("ok")} or {("not ok")})[1]);
end));
--[[580]] unzip:on(("error"), (function (this, err)
--[[617]] stream:emit(("error"), err);
end));
--[[674]] stream:pipe(unzip);
--[[696]] stream:emit(("data"), data);
--[[724]] stream:emit(("end"));
end; zlibUnzipTest:__defineGetter__("name", function () return "zlibUnzipTest"; end); return zlibUnzipTest; end)();
--[[0]] console:log(("1..1"));
--[[22]] zlib = require(_global, ("zlib")); 
--[[50]] Stream = require(_global, ("stream")); 
--[[82]] crypto = require(_global, ("crypto")); 
--[[115]] inputs = _arr({[0]=("HELLO WORLD\010"), ("{!@#$%^&*()}_+-=\010\013\009"), ("012345678"), ("{\"created\": true}"), ("0"), crypto:randomBytes((4096))}, 6); 
--[[255]] 
--[[747]] inputs:forEach((function (this, input)
--[[781]] zlib:gzip(input, (function (this, err, zip)
--[[824]] zlib:gunzip(zip, (function (this, err, str)
--[[869]] console:log(("#"), JSON:stringify(str:toString()));
--[[925]] console:log(("#"), JSON:stringify(input));
--[[972]] console:log(((((str:toString())==(input:toString()))) and {("ok")} or {("not ok")})[1]);
end));
end));
--[[1054]] zlib:deflate(input, (function (this, err, zip)
--[[1100]] zlib:inflate(zip, (function (this, err, str)
--[[1146]] console:log(("#"), JSON:stringify(str:toString()));
--[[1202]] console:log(("#"), JSON:stringify(input));
--[[1249]] console:log(((((str:toString())==(input:toString()))) and {("ok")} or {("not ok")})[1]);
end));
end));
--[[1331]] zlib:deflateRaw(input, (function (this, err, zip)
--[[1380]] zlib:inflateRaw(zip, (function (this, err, str)
--[[1429]] console:log(("#"), JSON:stringify(str:toString()));
--[[1485]] console:log(("#"), JSON:stringify(input));
--[[1532]] console:log(((((str:toString())==(input:toString()))) and {("ok")} or {("not ok")})[1]);
end));
end));
--[[1640]] zlib:gzip(input, (function (this, err, zip)
--[[1681]] zlibUnzipTest(_global, zip, ("gzip"), input);
end));
--[[1754]] zlib:deflate(input, (function (this, err, zip)
--[[1798]] zlibUnzipTest(_global, zip, ("deflate"), input);
end));
end));

return _module.exports;
end 
