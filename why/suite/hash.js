

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local a, key, b = a, key, b;
--[[0]] a = _obj({
  ["hi"]=("hi"),
  ["heya"]=("there"),
  ["hellos"]=("amigos"),
  ["hitheres"]=("goodbye")
}); 
--[[76]] console:log(("... nullifying values"));
--[[114]] a.hellos = (null);
--[[130]] a.hi = (null);
--[[143]] console:log(("... setting new values"));
--[[182]] a.abcdefghij = ("pear");
--[[204]] a.abcdefghijkl = ("cob");
--[[228]] console:log(("... should output some undefined values:"));
--[[284]] for key in _pairs(a) do 
key = ""+key; 
--[[306]] console:log(key, ("=>"), a[key]);
end;
--[[340]] console:log();
--[[357]] console:log(("... array test"));
--[[388]] b = _arr({[0]=(1), (2), (3), (4), (5)}, 5); 
--[[412]] console:log(b.length, ("==5"));
--[[442]] b[(4)] = (null);
--[[454]] console:log(b.length, ("==5"));
--[[484]] b[(2)] = (null);
--[[496]] console:log(b.length, ("==5"));
--[[526]] b[(20)] = (5);
--[[536]] console:log(b.length, ("==21"));

return _module.exports;
end 
