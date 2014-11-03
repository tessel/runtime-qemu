

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, paramRegExp, string = tap, paramRegExp, string;
local _regex0 = _regexp("; *([!#$%&'\\*\\+\\-\\.0-9A-Z\\^_`a-z\\|~]+) *= *(\"(?:[ !\\u0023-\\u005b\\u005d-\\u007e\\u0080-\\u00ff]|\\\\[\\u0020-\\u007e])*\"|[!#$%&'\\*\\+\\-\\.0-9A-Z\\^_`a-z\\|~]+) *", "g");
--[[0]] tap = require(_global, ("../tap")); 
--[[29]] tap:count((2));
--[[44]] paramRegExp = _regex0; 
--[[216]] string = ("string text/html; charset=utf-8"); 
--[[265]] tap:eq(paramRegExp:exec(string):join(("|")), ("; charset=utf-8|charset|utf-8"), ("exec works"));
--[[356]] tap:eq(paramRegExp:exec(string), (null), ("exec preserves lastindex"));

return _module.exports;
end 
