

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, tap, http, crypto = tap, tap, http, crypto;
--[[14]] if (not (require(_global, ("crypto"))["_tls"])) then
--[[47]] tap = require(_global, ("../tap")); 
--[[78]] tap:count((1));
--[[94]] tap:ok((false), ("crypto not enabled #SKIP"));
--[[139]] process:exit((0));
end;
--[[159]] tap = require(_global, ("../tap")); 
--[[189]] tap:count((2));
--[[204]] http = require(_global, ("http")); 
--[[232]] crypto = require(_global, ("crypto")); 
--[[265]] http:get(("http://httpstat.us/200"), (function (this, res)
local hash = hash;
--[[319]] tap:eq((_typeof(res.statusCode)), ("number"));
--[[362]] console:log(("# statusCode"), res.statusCode);
--[[409]] hash = crypto:createHash(("md5")); 
--[[448]] res:pipe(hash);
--[[467]] hash:on(("readable"), (function (this)
local md5 = md5;
--[[504]] md5 = hash:read():toString(("hex")); 
--[[546]] console:log(("#"), md5);
--[[572]] tap:eq(md5, ("3c3f2943d4337318cf737f45d5b564cd"));
end));
end)):on(("error"), (function (this, e)
--[[658]] tap:ok((false), String(_global, e));
end));

return _module.exports;
end 
