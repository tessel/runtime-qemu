

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, a, s, o, g, result, count = tap, a, s, o, g, result, count;
--[[0]] tap = require(_global, ("../tap")); 
--[[29]] tap:count((1));
--[[43]] a = _arr({[0]=(1)}, 1); 
--[[56]] s = _new(Array, (1)); 
--[[78]] o = _obj({
  
}); 
--[[90]] g = ((global)or(this)); 
--[[114]] result = (0); 
--[[166]] local _e, _noreturn = nil, {}
local _s, _r = _xpcall(function ()
--[[174]] a:every((null));
--[[191]] a:every(undefined);
--[[237]] local _r = result; result = _r + 1;
      if true then return _noreturn; end
    end, function (err)
        _e = err
    end);
if _s == false then
e = _e;
_r = (function ()

  if true then return _noreturn; end
end)();
end;

if _r ~= _noreturn then
  return _r
end;
--[[294]] local _e, _noreturn = nil, {}
local _s, _r = _xpcall(function ()
--[[302]] a.every:call((null));
--[[324]] a.every:call(undefined);
--[[375]] local _r = result; result = _r + 1;
      if true then return _noreturn; end
    end, function (err)
        _e = err
    end);
if _s == false then
e = _e;
_r = (function ()

  if true then return _noreturn; end
end)();
end;

if _r ~= _noreturn then
  return _r
end;
--[[429]] s:every((function (this)
--[[476]] local _r = result; result = _r + 1;
end));
--[[491]] a:every((function (this, value, index, object)
--[[534]] if ((value)==((1))) then
--[[557]] local _r = result; result = _r + 1;
end;
--[[574]] if ((index)==((0))) then
--[[597]] local _r = result; result = _r + 1;
end;
--[[614]] if ((object)==(a)) then
--[[638]] local _r = result; result = _r + 1;
end;
--[[655]] if ((this)==(g)) then
--[[677]] local _r = result; result = _r + 1;
end;
end));
--[[696]] a:every((function (this, value, index, object)
--[[739]] if ((this)==(o)) then
--[[761]] local _r = result; result = _r + 1;
end;
end), o);
--[[819]] if _arr({}, 0):every((function (this)

end)) then
--[[852]] local _r = result; result = _r + 1;
end;
--[[893]] if _arr({[0]=(1), (2), (3)}, 3):every((function (this)
--[[926]] if true then return (true); end
end)) then
--[[947]] local _r = result; result = _r + 1;
end;
--[[989]] if _arr({[0]=(1)}, 1):every((function (this)
--[[1016]] if true then return (false); end
end)) then
--[[1068]] local _r = result; result = _r + 1;
end;
--[[1115]] if _arr({[0]=(1)}, 1):every((function (this)
--[[1142]] if true then return (""); end
end)) then
--[[1191]] local _r = result; result = _r + 1;
end;
--[[1238]] if _arr({[0]=(1)}, 1):every((function (this)
--[[1265]] if true then return (0); end
end)) then
--[[1313]] local _r = result; result = _r + 1;
end;
--[[1360]] if _arr({[0]=(1)}, 1):every((function (this)
--[[1387]] if true then return (null); end
end)) then
--[[1438]] local _r = result; result = _r + 1;
end;
--[[1485]] if _arr({[0]=(1)}, 1):every((function (this)
--[[1512]] if true then return undefined; end
end)) then
--[[1568]] local _r = result; result = _r + 1;
end;
--[[1615]] if _arr({[0]=(1)}, 1):every((function (this)
--[[1642]] if true then return NaN; end
end)) then
--[[1692]] local _r = result; result = _r + 1;
end;
--[[1733]] count = (0); 
--[[1748]] _arr({[0]=(1), (2), (3)}, 3):every((function (this, value, index, object)
--[[1799]] local _r = count; count = _r + 1;
--[[1810]] if true then return (false); end
end));
--[[1828]] result = result+count;
--[[1846]] tap:eq(result, (8));

return _module.exports;
end 
