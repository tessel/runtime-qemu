

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, testString, buffer, fakeEncoding = tap, testString, buffer, fakeEncoding;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((8));
--[[45]] testString = ("This is a Test String"); 
--[[87]] buffer = _new(Buffer, testString); 
--[[124]] tap:eq(buffer:toString(), testString, ("default encoding doesn't return utf-8 encoded string."));
--[[220]] tap:eq(buffer:toString(("utf8")), testString, ("utf-8 encoding doesn't return the correct string."));
--[[318]] tap:eq(buffer:toString(("utf8"), (5), (7)), testString:slice((5), (7)), ("Offset arguments not returning correct string"));
--[[430]] tap:eq(buffer:toString(("utf8"), (-((5))), (-((5)))), (""), ("Negative offset arguments return empty string"));
--[[524]] tap:eq(buffer:toString(("utf8"), (-((5))), (5)), testString:slice((0), (5)), ("Negative start offset defaults to start offset of 0"));
--[[643]] tap:eq(buffer:toString(("utf8"), (0), (1000)), testString, ("End offset larger then buffer defaults to end of buffer"));
--[[756]] tap:eq(buffer:toString(("utf8"), (5), (1000)), testString:slice((5)), ("End offset larger then buffer defaults to end of buffer while origin offset still slices"));
--[[912]] fakeEncoding = ("fake"); 
--[[939]] local _e, _noreturn = nil, {}
local _s, _r = _xpcall(function ()
--[[947]] buffer:toString(("fake"));
      if true then return _noreturn; end
    end, function (err)
        _e = err
    end);
if _s == false then
e = _e;
_r = (function ()
--[[987]] tap:eq(e.name, ("TypeError"), ("Error thrown on invalid encoding."));
  if true then return _noreturn; end
end)();
end;

if _r ~= _noreturn then
  return _r
end;

return _module.exports;
end 
