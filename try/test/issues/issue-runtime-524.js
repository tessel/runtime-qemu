

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, PATH__REGEXP, escapeGroup, attachKeys, pathtoRegexp = tap, PATH__REGEXP, escapeGroup, attachKeys, pathtoRegexp;
local _regex0 = _regexp("([=!:$\\/()])", "g");
local _regex1 = _regexp("\\((?!\\?)", "g");
escapeGroup = (function () local escapeGroup = nil; escapeGroup = function (this, group)
--[[978]] if true then return group:replace(_regex0, ("\\$1")); end
end; escapeGroup:__defineGetter__("name", function () return "escapeGroup"; end); return escapeGroup; end)();

pathtoRegexp = (function () local pathtoRegexp = nil; pathtoRegexp = function (this, path, keys, options)
local strict, _K_end, flags, index, groups, endsWithSlash = strict, _K_end, flags, index, groups, endsWithSlash;
--[[1643]] if ((keys)and((not (Array:isArray(keys))))) then
--[[1683]] options = keys;
--[[1703]] keys = (null);
end;
--[[1723]] keys = ((keys)or(_arr({}, 0)));
--[[1744]] options = ((options)or(_obj({
  
})));
--[[1772]] strict = options.strict; 
--[[1803]] _K_end = ((options["end"])~=((false))); 
--[[1838]] flags = ((options.sensitive) and {("")} or {("i")})[1]; 
--[[1882]] index = (0); 
--[[1900]] if _instanceof((path),(RegExp)) then
--[[1981]] groups = ((path.source:match(_regex1))or(_arr({}, 0))); 
--[[2110]] keys.push:apply(keys, groups:map((function (this, match, index)
--[[2175]] if true then return _obj({
  ["name"]=index,
  ["delimiter"]=(null),
  ["optional"]=(false),
  ["repeat"]=(false)
}); end
end)));
--[[2352]] if true then return attachKeys(_global, path, keys); end
end;
--[[2390]] if Array:isArray(path) then
--[[2637]] path = path:map((function (this, value)
--[[2678]] if true then return pathtoRegexp(_global, value, keys, options).source; end
end));
--[[2814]] if true then return attachKeys(_global, _new(RegExp, ((((("(?:"))+(path:join(("|")))))+((")"))), flags), keys); end
end;
--[[2944]] path = path:replace(PATH__REGEXP, (function (this, match, escaped, prefix, key, capture, group, suffix, escape)
local _K_repeat, optional = _K_repeat, optional;
--[[3134]] if escaped then
--[[3155]] if true then return escaped; end
end;
--[[3223]] if escape then
--[[3243]] if true then return ("\\/"); end
end;
--[[3267]] _K_repeat = ((((suffix)==(("+"))))or(((suffix)==(("*"))))); 
--[[3320]] optional = ((((suffix)==(("?"))))or(((suffix)==(("*"))))); 
--[[3374]] keys:push(_obj({
  ["name"]=((key)or((function () local _r = index; index = _r + 1; return _r; end)())),
  ["delimiter"]=((prefix)or(("/"))),
  ["optional"]=optional,
  ["repeat"]=_K_repeat
}));
--[[3551]] prefix = ((prefix) and {((("\\"))+(prefix))} or {("")})[1];
--[[3770]] capture = escapeGroup(_global, ((((capture)or(group)))or(((((("[^"))+(((prefix)or(("\\/"))))))+(("]+?"))))));
--[[3852]] if true then return ("\\/([^\\\\/]+?)"); end
end));
--[[3966]] endsWithSlash = ((path[((path.length)-((1)))])==(("/"))); 
--[[4371]] if (not (strict)) then
--[[4390]] path = ((((endsWithSlash) and {path:slice((0), (-((2))))} or {path})[1])+(("(?:\\/(?=$))?")));
end;
--[[4625]] if (not (_K_end)) then
--[[4641]] path = path+((((strict)and(endsWithSlash))) and {("")} or {("(?=\\/|$)")})[1];
end;
--[[4700]] if true then return attachKeys(_global, _new(RegExp, ((((("^"))+(path)))+(((_K_end) and {("$")} or {("")})[1])), flags), keys); end
end; pathtoRegexp:__defineGetter__("name", function () return "pathtoRegexp"; end); return pathtoRegexp; end)();
--[[0]] tap = require(_global, ("../tap")); 
--[[29]] tap:count((1));
--[[114]] PATH__REGEXP = _new(RegExp, _arr({[0]=("(\\\\.)"), ("([\\/.])?(?:\\:(\\w+)(?:\\(((?:\\\\.|[^)])*)\\))?|\\(((?:\\\\.|[^)])*)\\))([+*?])?"), ("([.+*?=^!:${}()[\\]|\\/])")}, 3):join(("|")), ("g")); 
--[[945]] 
--[[1155]] attachKeys = (function (this, re, keys)
--[[1196]] re.keys = keys;
--[[1215]] if true then return re; end
end); 
--[[1595]] 
--[[4776]] 
--[[4780]] tap:eq(pathtoRegexp(_global, ("/a/:param")).source, ("^\\/a\\/([^\\\\/]+?)(?:\\/(?=$))?$"), ("nested regexps work"));

return _module.exports;
end 
