

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap = tap;
local _regex0 = _regexp("x", "");
local _regex1 = _regexp("x", "");
local _regex2 = _regexp("h", "i");
local _regex3 = _regexp("x", "");
local _regex4 = _regexp("x", "");
--[[0]] tap = require(_global, ("../tap")); 
--[[29]] tap:count((2));
--[[43]] tap:eq(("x"):replace(_regex0, (function (this)
--[[81]] if true then return _obj({
  
}); end
end)), ("[object Object]"), ("basic"));
--[[125]] tap:eq(("x"):replace(_regex1, (function (this)
--[[163]] if true then return _regex2; end
end)), ("/h/i"), ("regex"));
--[[198]] tap:eq(("x"):replace(_regex3, (function (this)
--[[236]] if true then return (true); end
end)), ("true"), ("boolean"));
--[[273]] tap:eq(("x"):replace(_regex4, (function (this)
--[[311]] if true then return (_void((0))); end
end)), ("undefined"), ("undefined"));

return _module.exports;
end 
