

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, arr = tap, arr;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((1));
--[[45]] arr = _arr({[0]=_obj({
  ["a"]=(1)
}), _obj({
  ["a"]=(6)
}), _obj({
  ["a"]=(2)
}), _obj({
  ["a"]=(4)
})}, 4); 
--[[83]] arr:sort((function (this, a, b)
--[[110]] console:log(a, b);
--[[130]] if true then return ((a.a)-(b.a)); end
end));
--[[151]] arr:sort();
--[[164]] tap:ok((true));

return _module.exports;
end 
