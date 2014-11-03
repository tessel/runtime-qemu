

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local test = test;
local _regex0 = _regexp("abcdef", "g");
local _regex1 = _regexp("\\s", "g");
local _regex2 = _regexp("abc", "g");
local _regex3 = _regexp(".*Circular.*", "");
local _regex4 = _regexp("Circular", "g");
local _regex5 = _regexp("Circular", "g");
local _regex6 = _regexp("abc", "g");
--[[0]] test = require(_global, ("tinytap")); 
--[[32]] test(_global, ("string formatting"), (function (this, t)
local fmt, o = fmt, o;
--[[93]] fmt = require(_global, ("util")).format; 
--[[129]] t:ok(fmt, ("format function available"));
--[[170]] t:equal(fmt(_global, ("%s, %s!"), ("Hello"), ("world")), ("Hello, world!"));
--[[310]] t:equal(fmt(_global, ("%s:%s"), ("foo")), ("foo:%s"));
--[[352]] t:equal(fmt(_global, ("%s:%s"), ("foo"), ("bar"), ("baz")), ("foo:bar baz"));
--[[413]] t:equal(fmt(_global, ("%s:%s"), ("foo"), ("bar"), ("baz")), ("foo:bar baz"));
--[[474]] t:equal(fmt(_global, (1), (2), (3)), ("1 2 3"));
--[[552]] t:equal(fmt(_global, ("%s %x %s"), ("foo"), ("bar"), ("baz")), ("foo %x bar baz"));
--[[619]] t:equal(fmt(_global, ("%%")), ("%"));
--[[694]] t:equal(fmt(_global, ("%s"), ("a")), ("a"));
--[[726]] t:equal(fmt(_global, ("%s"), (true)), ("true"));
--[[800]] t:equal(fmt(_global, ("%s"), (_void((0)))), ("undefined"));
--[[843]] t:equal(fmt(_global, ("%s"), _regex0), ("/abcdef/g"));
--[[889]] o = _obj({
  ["inspect"]=(function (this)
--[[920]] if true then return (42); end
end)
}); 
--[[937]] t:equal(fmt(_global, ("%s"), o), ("[object Object]"));
--[[981]] t:equal(fmt(_global, (""), o), (" 42"));
--[[1032]] t:equal(fmt(_global, ("%d"), _new(Date, (66))), ("66"));
--[[1076]] t:equal(fmt(_global, ("%d"), ("0xFF")), ("255"));
--[[1113]] t:equal(fmt(_global, ("%d"), ("010")), ("10"));
--[[1148]] t:equal(fmt(_global, ("%d"), (false)), ("0"));
--[[1182]] t:equal(fmt(_global, ("%d"), ("x")), ("NaN"));
--[[1242]] t:equal(fmt(_global, ("%j%j %j%j"), (true), (false), (null), ("")), ("truefalse null\"\""));
--[[1411]] t:equal(fmt(_global, ("%j"), _obj({
  ["foo"]=(42),
  ["bar"]=(_void((0)))
})), ("{\"foo\":42}"));
--[[1470]] t:equal(fmt(_global, ("%j"), _new(Date, (66))), ("\"1970-01-01T00:00:00.066Z\""));
--[[1543]] (function () local _b = t; local _f = _b["end"]; return _f(_b); end)();
end));
--[[1557]] test(_global, ("object inspection"), (function (this, t)
local fmt, ref = fmt, ref;
--[[1618]] fmt = require(_global, ("util")).inspect; 
--[[1655]] t:ok(fmt, ("inspect function available"));
--[[1697]] t:equal(fmt(_global, _obj({
  
})):replace(_regex1), ("{}"));
--[[1862]] ref = _obj({
  
}); 
--[[1878]] ref.ref = ref;
--[[1895]] fmt(_global, _obj({
  ["a"]=_obj({
  ["b"]=_obj({
  ["c"]=(3),
  ["d"]=_arr({[0]=(1), (2), (3)}, 3),
  ["fn"]=fmt
}),
  [(2)]=(1)
}),
  ["z"]=_arr({[0]=_obj({
  ["inspect"]=(function (this)
--[[1999]] if true then return ("VALUE"); end
end)
}), ((function () local fn = nil; fn = function (this)
--[[2041]] if true then return ref; end
end; fn:__defineGetter__("name", function () return "fn"; end); return fn; end)()), Buffer(_global, _arr({[0]=(1), (2), (3)}, 3)), _new(Date), _regex2, (true), (null), ref}, 8)
}));
--[[2162]] (function () local _b = t; local _f = _b["end"]; return _f(_b); end)();
end));
--[[2176]] test(_global, ("circular inspection"), (function (this, t)
local fmt, o = fmt, o;
--[[2221]] fmt = require(_global, ("util")).inspect; 
--[[2261]] o = _obj({
  ["n"]=(42)
}); 
--[[2279]] t:equal(fmt(_global, _obj({
  ["foo"]=o,
  ["bar"]=o
})):match(_regex3), (null));
--[[2342]] o.o = o;
--[[2353]] t:equal(fmt(_global, o):match(_regex4).length, (1));
--[[2401]] t:equal(fmt(_global, _obj({
  ["foo"]=o,
  ["bar"]=o
})):match(_regex5).length, (2));
end));
--[[2465]] test(_global, ("arguments inspection"), (function (this, t)
local fmt, fn = fmt, fn;
fn = (function () local fn = nil; fn = function (this, ...)
local arguments = _arguments(...);
--[[2568]] t:equal(fmt(_global, arguments):match(_regex6).length, (1));
end; fn:__defineGetter__("name", function () return "fn"; end); return fn; end)();
--[[2511]] fmt = require(_global, ("util")).inspect; 
--[[2548]] 
--[[2623]] fn(_global, ("abc"));
end));

return _module.exports;
end 
