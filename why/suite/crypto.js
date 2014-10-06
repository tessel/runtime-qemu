

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local crypto, hash__key, hash__str, hash__output, hash, hash__input, hash__output, hash = crypto, hash__key, hash__str, hash__output, hash, hash__input, hash__output, hash;
--[[0]] crypto = require(_global, ("crypto")); 
--[[47]] if (not (crypto["_tls"])) then
--[[69]] console:log(("1..1"));
--[[92]] console:log(("not ok - crypto not enabled #SKIP"));
--[[144]] process:exit((0));
end;
--[[164]] console:log(("1..8"));
--[[214]] console:log(((((crypto:randomBytes((16)).length)==((16)))) and {("ok")} or {("not ok")})[1]);
--[[282]] console:log(((((crypto:randomBytes((256)).length)==((256)))) and {("ok")} or {("not ok")})[1]);
--[[361]] hash__key = ("there is no dana"); 
--[[395]] hash__str = ("only xuul"); 
--[[422]] hash__output = ("f1ac6e2f923135cf1659e63f1dfb8157a5ef80b4"); 
--[[484]] hash = crypto:createHmac(("sha1"), hash__key):update(hash__str):digest(("hex")); 
--[[570]] console:log(("#"), hash);
--[[594]] console:log(((((hash)==(hash__output))) and {("ok")} or {("not ok")})[1], ("hmac"));
--[[655]] hash__input = ("f1ac6e2f923135cf1659e63f1dfb8157a5ef80b4f1ac6e2f923135cf1659e63f1dfb8157a5ef80b4f1ac6e2f923135cf1659e63f1dfb8157a5ef80b4f1ac6e2f923135cf1659e63f1dfb8157a5ef80b4f1ac6e2f923135cf1659e63f1dfb8157a5ef80b4"); 
--[[875]] hash__output = ("11c8b4be10465e0b13eaf6bd88a52cee964f2fc0"); 
--[[937]] hash = crypto:createHmac(("sha1"), hash__input):update(hash__input):digest(("hex")); 
--[[1027]] console:log(("#"), hash);
--[[1051]] console:log(((((hash)==(hash__output))) and {("ok")} or {("not ok")})[1], ("hmac key > 64 bytes"));
--[[1143]] (function (this)
local hash__output, hash, hash = hash__output, hash, hash;
--[[1160]] hash__output = ("902fbdd2b1df0c4f70b4a5d23525e932"); 
--[[1216]] hash = crypto:createHash(("md5")):update(String(_global, ("A"))):update(String(_global, ("B"))):update(String(_global, ("C"))):digest(("hex")); 
--[[1350]] console:log(("#"), hash);
--[[1376]] console:log(((((hash)==(hash__output))) and {("ok")} or {("not ok")})[1], ("md5"));
--[[1438]] hash = crypto:createHash(("md5")); 
--[[1477]] hash:on(("readable"), (function (this)
local md5 = md5;
--[[1514]] md5 = hash:read():toString(("hex")); 
--[[1556]] console:log(("#"), md5);
--[[1582]] console:log(((((md5)==(hash__output))) and {("ok")} or {("not ok")})[1], ("md5 stream"));
end));
--[[1654]] hash:write(String(_global, ("A")));
--[[1681]] hash:write(String(_global, ("B")));
--[[1707]] hash:write(String(_global, ("C")));
--[[1733]] (function () local _b = hash; local _f = _b["end"]; return _f(_b); end)();
end)(_global);
--[[1769]] (function (this)
local hash__output, hash, hash = hash__output, hash, hash;
--[[1786]] hash__output = ("3c01bdbb26f358bab27f267924aa2c9a03fcfdb8"); 
--[[1850]] hash = crypto:createHash(("sha1")):update(String(_global, ("A"))):update(String(_global, ("B"))):update(String(_global, ("C"))):digest(("hex")); 
--[[1985]] console:log(("#"), hash);
--[[2011]] console:log(((((hash)==(hash__output))) and {("ok")} or {("not ok")})[1], ("sha1"));
--[[2074]] hash = crypto:createHash(("SHA1")); 
--[[2114]] hash:on(("readable"), (function (this)
local sha1 = sha1;
--[[2152]] sha1 = hash:read():toString(("hex")); 
--[[2196]] console:log(("#"), sha1);
--[[2224]] console:log(((((sha1)==(hash__output))) and {("ok")} or {("not ok")})[1], ("sha1 stream"));
end));
--[[2298]] hash:write(String(_global, ("A")));
--[[2325]] hash:write(String(_global, ("B")));
--[[2351]] hash:write(String(_global, ("C")));
--[[2377]] (function () local _b = hash; local _f = _b["end"]; return _f(_b); end)();
end)(_global);
--[[2435]] (function (this)
--[[2452]] sha1 = crypto:createHash(("sha1"));
--[[2487]] (function () local _b = sha1; local _f = _b["end"]; return _f(_b, ((this.key)+(("258EAFA5-E914-47DA-95CA-C5AB0DC85B11")))); end)();
end)(_global);
--[[2553]] console:log(("ok"));

return _module.exports;
end 
