

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, dlow, d__high, a__b, c__d, actions, __n, __j = tap, dlow, d__high, a__b, c__d, actions, __n, __j;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((9));
--[[45]] __typeof = (function (this)
--[[69]] tap:ok((false), ("typeof overwritten"));
end);
--[[108]] if (_typeof((5))) then end;
--[[119]] dlow = (6); 
--[[133]] dlow = (5);
--[[143]] tap:ok(((dlow)~=((6))), ("simple variable scoping"));
--[[190]] d__high = nil; 
--[[202]] d____high = (6);
--[[215]] (function (this)
local d__high = d__high;
--[[231]] d__high = nil; 
--[[244]] d____high = (5);
end)(_global);
--[[263]] tap:ok(((d____high)==((5))), ("var decl underscores are escaped properly"));
--[[331]] a__b = ("hi"); 
--[[347]] tap:ok(((a__b)==(("hi"))), ("var underscores"));
--[[388]] a__b = a__b+(" there");
--[[405]] tap:ok(((a__b)==(("hi there"))), ("var underscores in lvalue of assignment"));
--[[476]] tap:ok(((a__b:toUpperCase())==(("HI THERE"))), ("underscore in lvalue of member expression"));
--[[563]] c__d = _obj({
  
}); 
--[[577]] c__d["cool_beans"] = (5);
--[[597]] tap:ok(((c__d[("cool_beans")])==((5))), ("dynamic property values"));
--[[656]] c__d["func_tastic"] = (function (this)
--[[690]] tap:ok((true), ("underscore in member and base"));
end);
--[[738]] c__d["func__tastic"] = (function (this)
--[[772]] tap:ok((false), (" underscore in member and base"));
end);
--[[822]] (function () local _b = c__d; local _f = _b["func_tastic"]; return _f(_b); end)();
--[[842]] actions = _arr({[0]=("a"), ("b"), ("c"), ("d"), ("e"), ("f"), ("g")}, 7); 
--[[893]] __n = (1); 
--[[905]] tap:ok(((actions[__n])~=(undefined)), ("underscores in member properties not undefined"));
--[[989]] __j = _obj({
  ["_k"]=(5)
}); 
--[[1006]] tap:ok(((actions[__j["_k"]])~=(undefined)), ("underscores in member properties in member properties not undefined"));

return _module.exports;
end 
