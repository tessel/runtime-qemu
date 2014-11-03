

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, dict, a, b, c = tap, dict, a, b, c;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((1));
--[[45]] dict = _obj({
  
}); 
--[[60]] a = _obj({
  ["len"]=(1),
  ["arr"]=_arr({}, 0)
}); 
--[[87]] b = _obj({
  ["len"]=(1),
  ["arr"]=_arr({}, 0)
}); 
--[[114]] c = _obj({
  ["len"]=(1),
  ["arr"]=_arr({}, 0)
}); 
--[[141]] dict[("1")] = b;
--[[156]] dict[("2")] = c;
--[[171]] dict[("0")] = a;
--[[186]] console:log(("#"), dict);
--[[209]] console:log(("#"), Object:keys(dict));
--[[245]] tap:ok(((Object:keys(dict).length)>((1))));

return _module.exports;
end 
