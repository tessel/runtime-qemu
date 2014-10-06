

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local test, StringDecoder = test, StringDecoder;
--[[0]] test = require(_global, ("tinytap")); 
--[[31]] StringDecoder = require(_global, ("string_decoder")).StringDecoder; 
--[[93]] test:count((2));
--[[109]] test(_global, ("can decode utf8"), (function (this, t)
local decoder, cent = decoder, cent;
--[[150]] decoder = _new(StringDecoder, ("utf8")); 
--[[194]] cent = _new(Buffer, _arr({[0]=(194), (162)}, 2)); 
--[[233]] t:equal((_typeof(("String"))), (_typeof(decoder:write(cent))), ("Decoder does not return a string."));
--[[326]] t:equal(("\194\162"), decoder:write(cent));
--[[363]] (function () local _b = t; local _f = _b["end"]; return _f(_b); end)();
end));

return _module.exports;
end 
