

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, b, a, initial = tap, b, a, initial;
local _regex0 = _regexp("a", "");
local _regex1 = _regexp("b", "");
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((43));
--[[46]] tap:ok((((null))<((400))), ("null < positive"));
--[[85]] tap:ok((not ((((5))<((null))))), ("positive < null"));
--[[125]] tap:ok((((null))>((-((400))))), ("null > negative"));
--[[165]] tap:ok((not ((((null))>((0))))), ("null not > 0"));
--[[202]] tap:ok((not ((((null))<((0))))), ("null not < 0"));
--[[239]] tap:ok((((null))~=((0))), ("null != 0"));
--[[271]] tap:ok((not ((((null))<((null))))), ("null < null"));
--[[309]] tap:ok((not ((((null))>((null))))), ("null > null"));
--[[347]] tap:ok((((null))==((null))), ("null == null"));
--[[424]] tap:ok(((undefined)<((400))), ("undefined < positive #TODO"));
--[[479]] tap:ok(((undefined)>((-((400))))), ("undefined > positive #TODO"));
--[[536]] tap:ok(((_in((("hasOwnProperty")),(_obj({
  
}))))==((true))), ("in works and is boolean"));
--[[606]] b = _arr({[0]=(1), (2), (3)}, 3); 
--[[625]] a = _obj({
  ["b"]=b
}); 
--[[642]] tap:ok(_instanceof((a),(Object)));
--[[671]] tap:ok((not (_instanceof((a),(Array)))));
--[[702]] tap:ok((not (_instanceof((a),(Function)))));
--[[735]] tap:ok(_instanceof((b),(Object)));
--[[763]] tap:ok(_instanceof((b),(Array)));
--[[791]] tap:ok((not (_instanceof((b),(Function)))));
--[[824]] tap:ok(_instanceof((parseFloat),(Object)));
--[[861]] tap:ok((not (_instanceof((parseFloat),(Array)))));
--[[900]] tap:ok(_instanceof((parseFloat),(Function)));
--[[953]] tap:ok(((_bit.lshift(_G.tointegervalue(("null")),_G.tointegervalue(("null"))))==((0))));
--[[997]] initial = (true); 
--[[1017]] tap:ok(((((((initial)or(((initial)~=(("low")))))) and {("a")} or {("a")})[1])==(("a"))), ("ternary works with boolean operators"));
--[[1124]] tap:ok((((_void((0))))==(undefined)), ("void"));
--[[1172]] tap:ok(isNaN(_global, (((0))/((0)))), ("isNaN"));
--[[1213]] Boolean.prototype.cool = (function (this)
--[[1252]] if true then return (true); end
end);
--[[1267]] tap:ok((true):cool(), ("Boolean prototype exposed"));
--[[1319]] tap:ok((((false).constructor)==(Boolean)), ("Boolean constructor exposed"));
--[[1401]] Number.prototype.cool = (function (this)
--[[1439]] if true then return (true); end
end);
--[[1454]] tap:ok((1):cool(), ("Number prototype exposed"));
--[[1502]] tap:ok((((1).constructor)==(Number)), ("Number constructor exposed"));
--[[1567]] tap:ok(((Number(_global, (true)))==((1))), ("Number(true) == 1"));
--[[1625]] String.prototype.cool = (function (this)
--[[1663]] if true then return (true); end
end);
--[[1678]] tap:ok((""):cool(), ("String prototype exposed"));
--[[1727]] tap:ok(((("").constructor)==(String)), ("String constructor exposed"));
--[[1793]] tap:ok(((String(_global, (1)))==(("1"))), ("String(1) == \"1\""));
--[[1851]] Function.prototype.cool = (function (this)
--[[1891]] if true then return (true); end
end);
--[[1906]] tap:ok((function (this)

end):cool(), ("Function prototype exposed"));
--[[1970]] tap:ok((((function (this)

end).constructor)==(Function)), ("Function constructor exposed"));
--[[2063]] Array.prototype.cool = (function (this)
--[[2100]] if true then return (true); end
end);
--[[2115]] tap:ok(_arr({}, 0):cool(), ("Array prototype exposed"));
--[[2163]] tap:ok(((_arr({}, 0).constructor)==(Array)), ("Array constructor exposed"));
--[[2237]] RegExp.prototype.cool = (function (this)
--[[2275]] if true then return (true); end
end);
--[[2290]] tap:ok(_regex0:cool(), ("RegExp prototype exposed"));
--[[2340]] tap:ok(((_regex1.constructor)==(RegExp)), ("RegExp constructor exposed"));
--[[2468]] Object.prototype.cool = (function (this)
--[[2506]] if true then return ("true"); end
end);
--[[2523]] tap:ok(_obj({
  
}):cool(), ("Object prototype exposed"));
--[[2572]] tap:ok(((_obj({
  
}).constructor)==(Object)), ("Object constructor exposed"));
--[[2638]] tap:ok(((JSON:stringify(Object(_global)))==(("{}"))), ("Object() constructor"));
--[[2703]] console:log(("#"), Object(_global, _obj({
  ["a"]=(5)
})));
--[[2736]] tap:ok(((Object(_global, _obj({
  ["a"]=(5)
})).a)==((5))), ("Object(obj) constructor"));

return _module.exports;
end 
