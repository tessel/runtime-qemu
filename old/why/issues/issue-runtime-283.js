

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, a, o, g, result, mapped, filtered = tap, a, o, g, result, mapped, filtered;
--[[0]] tap = require(_global, ("../tap")); 
--[[29]] tap:count((3));
--[[43]] a = _arr({[0]=(1)}, 1); 
--[[56]] o = _obj({
  
}); 
--[[68]] g = ((global)or(this)); 
--[[92]] result = (0); 
--[[303]] a:forEach((function (this, value, index, object)
--[[348]] if ((value)==((1))) then
--[[371]] local _r = result; result = _r + 1;
end;
--[[388]] if ((index)==((0))) then
--[[411]] local _r = result; result = _r + 1;
end;
--[[428]] if ((object)==(a)) then
--[[452]] local _r = result; result = _r + 1;
end;
--[[469]] if ((this)==(o)) then
--[[491]] local _r = result; result = _r + 1;
end;
end), o);
--[[513]] a:forEach((function (this, value, index, object)
--[[558]] if ((this)==(g)) then
--[[580]] local _r = result; result = _r + 1;
end;
end));
--[[599]] mapped = a:map((function (this, value, index, object)
--[[653]] if ((value)==((1))) then
--[[676]] local _r = result; result = _r + 1;
end;
--[[693]] if ((index)==((0))) then
--[[716]] local _r = result; result = _r + 1;
end;
--[[733]] if ((object)==(a)) then
--[[757]] local _r = result; result = _r + 1;
end;
--[[774]] if ((this)==(o)) then
--[[796]] local _r = result; result = _r + 1;
end;
--[[813]] if true then return value; end
end), o); 
--[[835]] a:map((function (this, value, index, object)
--[[876]] if ((this)==(g)) then
--[[898]] local _r = result; result = _r + 1;
end;
end));
--[[917]] a:some((function (this, value, index, object)
--[[959]] if ((value)==((1))) then
--[[982]] local _r = result; result = _r + 1;
end;
--[[999]] if ((index)==((0))) then
--[[1022]] local _r = result; result = _r + 1;
end;
--[[1039]] if ((object)==(a)) then
--[[1063]] local _r = result; result = _r + 1;
end;
--[[1080]] if ((this)==(o)) then
--[[1102]] local _r = result; result = _r + 1;
end;
end), o);
--[[1124]] a:some((function (this, value, index, object)
--[[1166]] if ((this)==(g)) then
--[[1188]] local _r = result; result = _r + 1;
end;
end));
--[[1208]] filtered = a:filter((function (this, value, index, object)
--[[1267]] if ((value)==((1))) then
--[[1290]] local _r = result; result = _r + 1;
end;
--[[1307]] if ((index)==((0))) then
--[[1330]] local _r = result; result = _r + 1;
end;
--[[1347]] if ((object)==(a)) then
--[[1371]] local _r = result; result = _r + 1;
end;
--[[1388]] if ((this)==(o)) then
--[[1410]] local _r = result; result = _r + 1;
end;
--[[1427]] if true then return (true); end
end), o); 
--[[1448]] a:filter((function (this, value, index, object)
--[[1492]] if ((this)==(g)) then
--[[1514]] local _r = result; result = _r + 1;
end;
end));
--[[1663]] tap:eq(result, (20));
--[[1683]] tap:eq(mapped[(0)], (1));
--[[1705]] tap:eq(filtered[(0)], (1));

return _module.exports;
end 
