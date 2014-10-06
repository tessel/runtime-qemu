

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, a, a, a, a, a, a, a, a, a, a, a, a, a, subj1, subj2, subj3, a, b, c, d = tap, a, a, a, a, a, a, a, a, a, a, a, a, a, subj1, subj2, subj3, a, b, c, d;
local _regex0 = _regexp("^[\\s\\S]+$", "");
local _regex1 = _regexp("^[\\S]+$", "");
local _regex2 = _regexp("^[\\S]+$", "");
local _regex3 = _regexp("([^:]+)", "");
local _regex4 = _regexp("([^:]+):([0-9]+)?", "");
local _regex5 = _regexp("([^:]+):([0-9]+)?(\\+)?:", "");
local _regex6 = _regexp("([^:]+):([0-9]+)?(\\+)?:([^:]+)?:?", "");
local _regex7 = _regexp("([^:]+):([0-9]+)?(\\+)?:([^:]+)?:?([\\d]*)", "");
local _regex8 = _regexp("([^:]+):([0-9]+)?(\\+)?:([^:]+)?:?([\\s\\S]*)?", "");
local _regex9 = _regexp("^(\\/?|)((?:\\.{1,2}|[^\\/]+?|)(\\.[^.\\/]*|))(?:[\\/]*)$", "");
local _regex10 = _regexp("^(\\/?|)([\\s\\S]*?)((?:\\.{1,2}|[^\\/]+?|)(\\.[^.\\/]*|))(?:[\\/]*)$", "");
local _regex11 = _regexp("^[a-z]", "i");
local _regex12 = _regexp("^[a-z]$", "i");
local _regex13 = _regexp("^[a-z][a-z0-9]*$", "i");
local _regex14 = _regexp("^[a-z][a-z0-9\\-+]*$", "i");
local _regex15 = _regexp("^[a-z][a-z0-9\\-+]*$", "i");
local _regex16 = _regexp("(\\d+)(\\s+)", "");
local _regex17 = _regexp("cav[ea]+t", "i");
local _regex18 = _regexp("re", "gi");
local _regex19 = _regexp("\\#+", "");
local _regex20 = _regexp("\\#+", "g");
local _regex21 = _regexp("\\#+", "");
local _regex22 = _regexp("\\#+", "g");
local _regex23 = _regexp("\\#(\\#*)", "g");
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((23));
--[[46]] tap:ok(("garbage 09 _ - !@#$%"):match(_regex0), ("regex match"));
--[[113]] tap:ok(("a"):match(_regex1), ("\\S in class matches non-whitespace"));
--[[182]] tap:ok((not ((" "):match(_regex2))), ("\\S in class does not match whitespace"));
--[[269]] a = _regex3; 
--[[288]] a = _regex4; 
--[[317]] a = _regex5; 
--[[352]] a = _regex6; 
--[[397]] a = _regex7; 
--[[449]] a = _regex8; 
--[[504]] tap:ok((true), ("regex compilation from connect socket.js"));
--[[574]] a = _regex9; 
--[[637]] a = _regex10; 
--[[710]] tap:ok((true), ("regex compilation from path.js"));
--[[770]] a = _regex11; 
--[[789]] a = _regex12; 
--[[809]] a = _regex13; 
--[[838]] a = _regex14; 
--[[870]] a = _regex15; 
--[[902]] tap:ok((true), ("regex compilation from url.js"));
--[[966]] subj1 = ("there are 99 red balloons"); 
--[[1007]] subj2 = ("here is a caveaaAEEAAEeaeaEAEaeeaEEAEEAet about regexes."); 
--[[1078]] subj3 = (" ###    ##     ####  "); 
--[[1116]] a = _new(RegExp, ("\\d+")); 
--[[1144]] tap:ok(subj1:match(a), ("\\d matches numbers"));
--[[1192]] b = _regex16; 
--[[1214]] tap:ok(subj1:match(b), ("matches numbers and whitespace"));
--[[1273]] c = _regex17; 
--[[1295]] tap:ok(((subj2:match(c)[(0)])==(("caveaaAEEAAEeaeaEAEaeeaEEAEEAet"))), ("matches char classes"));
--[[1384]] tap:ok(subj1:match(("99")), ("matches non-regex values"));
--[[1439]] tap:ok(((a:exec(subj1).index)==((10))), ("exec with index attribute"));
--[[1503]] tap:ok(((a:exec(subj1).input)==(subj1)), ("exec with input attribute"));
--[[1570]] tap:ok(((b:exec(subj1).index)==((10))), ("exec with index attribute and submatch"));
--[[1648]] tap:ok(c:test(subj2), ("test() works"));
--[[1688]] d = _regex18; 
--[[1705]] tap:ok(((d.lastIndex)==((0))), ("check for .lastIndex"));
--[[1755]] d:exec(subj1);
--[[1770]] tap:ok(((d.lastIndex)==((5))), ("check for .lastIndex after .exec()"));
--[[1834]] d:exec(subj1);
--[[1849]] tap:ok(((d.lastIndex)==((9))), ("check for .lastIndex after second .exec()"));
--[[1920]] d:exec(subj1);
--[[1935]] tap:ok(((d.lastIndex)==((15))), ("check for .lastIndex after third .exec()"));
--[[2006]] d:exec(subj1);
--[[2021]] tap:ok(((d.lastIndex)==((0))), ("check for .lastIndex after fourth .exec()"));
--[[2092]] d:exec(subj1);
--[[2107]] tap:ok(((d.lastIndex)==((5))), ("check for .lastIndex after null match in .exec()"));
--[[2186]] console:log(("#"), subj3:replace(_regex19, ("___")));
--[[2233]] console:log(("#"), subj3:replace(_regex20, ("___")));
--[[2281]] tap:ok(((subj3:replace(_regex21, ("___")))==((" ___    ##     ####  "))), ("non-global replace"));
--[[2367]] tap:ok(((subj3:replace(_regex22, ("___")))==((" ___    ___     ___  "))), ("global replace"));
--[[2451]] tap:ok(((subj3:replace(_regex23, (function (this, whole, p1, offset, str)
--[[2571]] if true then return whole.length; end
end)))==((" 3    2     4  "))), ("regex replace with fn"));

return _module.exports;
end 
