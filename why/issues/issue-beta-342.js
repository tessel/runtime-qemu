

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, arg, ret, a, b, rando = tap, arg, ret, a, b, rando;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((6));
--[[45]] arg = ("Hello Friends"); 
--[[72]] ret = Buffer:concat(_arr({[0]=arg}, 1)); 
--[[108]] tap:eq(arg, ret);
--[[127]] local _e, _noreturn = nil, {}
local _s, _r = _xpcall(function ()
--[[135]] Buffer:concat(_arr({[0]=arg, arg}, 2));
--[[167]] tap:ok((false));
      if true then return _noreturn; end
    end, function (err)
        _e = err
    end);
if _s == false then
e = _e;
_r = (function ()
--[[197]] tap:ok(e);
  if true then return _noreturn; end
end)();
end;

if _r ~= _noreturn then
  return _r
end;
--[[211]] a = _new(Buffer, (16)); 
--[[235]] b = _new(Buffer, (16)); 
--[[259]] a:copy(b, (256), (0), (0));
--[[281]] tap:ok((true));
--[[296]] rando = _new(Buffer, (16)); 
--[[324]] Buffer:concat(_arr({[0]=rando, rando}, 2), (32));
--[[359]] Buffer:concat(_arr({[0]=rando, rando}, 2), (31));
--[[394]] Buffer:concat(_arr({[0]=rando, rando}, 2), (128));
--[[430]] tap:ok((true));
--[[444]] local _e, _noreturn = nil, {}
local _s, _r = _xpcall(function ()
--[[451]] Buffer:concat(_arr({[0]=rando, rando}, 2), (8));
--[[485]] tap:ok((false));
      if true then return _noreturn; end
    end, function (err)
        _e = err
    end);
if _s == false then
e = _e;
_r = (function ()
--[[515]] tap:ok(e);
  if true then return _noreturn; end
end)();
end;

if _r ~= _noreturn then
  return _r
end;
--[[529]] local _e, _noreturn = nil, {}
local _s, _r = _xpcall(function ()
--[[536]] Buffer:concat();
      if true then return _noreturn; end
    end, function (err)
        _e = err
    end);
if _s == false then
e = _e;
_r = (function ()
--[[567]] tap:ok(e);
  if true then return _noreturn; end
end)();
end;

if _r ~= _noreturn then
  return _r
end;

return _module.exports;
end 
