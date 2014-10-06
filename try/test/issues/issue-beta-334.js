

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, buf, value, value = tap, buf, value, value;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((11));
--[[46]] buf = _new(Buffer, (4)); 
--[[72]] buf:writeUInt32BE((3735928559), (0));
--[[106]] tap:ok(((buf[(0)])==((222))), ("UInt32"));
--[[140]] tap:ok(((buf[(1)])==((173))), ("UInt32"));
--[[174]] tap:ok(((buf[(2)])==((190))), ("UInt32"));
--[[208]] tap:ok(((buf[(3)])==((239))), ("UInt32"));
--[[242]] buf:fill((0));
--[[256]] local _e, _noreturn = nil, {}
local _s, _r = _xpcall(function ()
--[[263]] buf:writeUInt32LE((3735928559), (2));
--[[298]] tap:ok((false), ("error not thrown by out of bounds write"));
      if true then return _noreturn; end
    end, function (err)
        _e = err
    end);
if _s == false then
e = _e;
_r = (function ()
--[[370]] tap:ok((true), ("error thrown by out of bounds write"));
  if true then return _noreturn; end
end)();
end;

if _r ~= _noreturn then
  return _r
end;
--[[425]] local _e, _noreturn = nil, {}
local _s, _r = _xpcall(function ()
--[[432]] buf:writeUInt32LE((3735928559), (2), (true));
--[[473]] tap:ok((true), ("error not thrown by out of bounds write"));
      if true then return _noreturn; end
    end, function (err)
        _e = err
    end);
if _s == false then
e = _e;
_r = (function ()
--[[544]] tap:ok((false), ("error thrown by out of bounds write"));
  if true then return _noreturn; end
end)();
end;

if _r ~= _noreturn then
  return _r
end;
--[[599]] tap:ok(((buf[(2)])==((239))), ("out of bounds write still writes"));
--[[659]] tap:ok(((buf[(3)])==((190))), ("out of bounds write still writes"));
--[[720]] local _e, _noreturn = nil, {}
local _s, _r = _xpcall(function ()
--[[727]] buf:readUInt32LE((2));
--[[749]] tap:ok((false), ("error not thrown by out of bounds read"));
      if true then return _noreturn; end
    end, function (err)
        _e = err
    end);
if _s == false then
e = _e;
_r = (function ()
--[[820]] tap:ok((true), ("error thrown by out of bounds write"));
  if true then return _noreturn; end
end)();
end;

if _r ~= _noreturn then
  return _r
end;
--[[875]] buf[(0)] = (0);
--[[887]] buf[(1)] = (0);
--[[899]] buf[(2)] = (255);
--[[914]] buf[(3)] = (255);
--[[929]] value = buf:readUInt32LE((0), (true)); 
--[[968]] tap:ok(((value)==((4294901760))), ("in bounds write succeeds"));
--[[1024]] local _e, _noreturn = nil, {}
local _s, _r = _xpcall(function ()
--[[1031]] value = buf:readUInt32LE((2), (true)); 
--[[1071]] tap:ok(((value)==((65535))), ("out of bounds write succeeds"));
      if true then return _noreturn; end
    end, function (err)
        _e = err
    end);
if _s == false then
e = _e;
_r = (function ()
--[[1141]] tap:ok((false));
  if true then return _noreturn; end
end)();
end;

if _r ~= _noreturn then
  return _r
end;

return _module.exports;
end 
