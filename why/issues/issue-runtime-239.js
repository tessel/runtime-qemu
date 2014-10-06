

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap = tap;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((4));
--[[45]] local _e, _noreturn = nil, {}
local _s, _r = _xpcall(function ()
--[[88]] Buffer:concat(_new(Buffer, _arr({[0]=(1), (2), (3)}, 3)), ("hey"), _new(Buffer, _arr({[0]=(4), (5), (6)}, 3)));
      if true then return _noreturn; end
    end, function (err)
        _e = err
    end);
if _s == false then
e = _e;
_r = (function ()
--[[173]] tap:ok(_instanceof((e),(TypeError)));
--[[209]] tap:ok(((e.message)and(((e.message:indexOf(("Usage")))>((-((1))))))));
  if true then return _noreturn; end
end)();
end;

if _r ~= _noreturn then
  return _r
end;
--[[266]] local _e, _noreturn = nil, {}
local _s, _r = _xpcall(function ()
--[[312]] Buffer:concat(_arr({[0]=_new(Buffer, _arr({[0]=(1), (2), (3)}, 3)), ("hey"), _new(Buffer, _arr({[0]=(4), (5), (6)}, 3))}, 3));
      if true then return _noreturn; end
    end, function (err)
        _e = err
    end);
if _s == false then
e = _e;
_r = (function ()
--[[399]] tap:ok(((String(_global, e):indexOf(("copy")))>((-((1))))));
  if true then return _noreturn; end
end)();
end;

if _r ~= _noreturn then
  return _r
end;
--[[442]] local _e, _noreturn = nil, {}
local _s, _r = _xpcall(function ()
--[[452]] Buffer:concat(_arr({[0]=_new(Buffer, _arr({[0]=(1), (2), (3)}, 3)), _new(Buffer, ("hey")), _new(Buffer, _arr({[0]=(4), (5), (6)}, 3))}, 3));
--[[537]] tap:ok((true), ("correct Buffer.concat usage"));
      if true then return _noreturn; end
    end, function (err)
        _e = err
    end);
if _s == false then
e = _e;
_r = (function ()
--[[599]] tap:ok((false), ("correct Buffer.concat usage"));
  if true then return _noreturn; end
end)();
end;

if _r ~= _noreturn then
  return _r
end;

return _module.exports;
end 
