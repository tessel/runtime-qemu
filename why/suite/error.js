

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, err, CAPTURER, obj, prepErr, prepArr, err, err = tap, err, CAPTURER, obj, prepErr, prepArr, err, err;
local _regex0 = _regexp("CAPTURER", "");
local _regex1 = _regexp("CAPTURER", "");
local _regex2 = _regexp("CAPTURER", "");
CAPTURER = (function () local CAPTURER = nil; CAPTURER = function (this, err, ctor)
--[[989]] Error:captureStackTrace(err, ctor);
end; CAPTURER:__defineGetter__("name", function () return "CAPTURER"; end); return CAPTURER; end)();
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((34));
--[[46]] local _e, _noreturn = nil, {}
local _s, _r = _xpcall(function ()
--[[53]] _error(_new(Error, ("ok")) or {})
      if true then return _noreturn; end
    end, function (err)
        _e = err
    end);
if _s == false then
e = _e;
_r = (function ()
--[[90]] tap:ok(((e.message)==(("ok"))));
  if true then return _noreturn; end
end)();
end;

if _r ~= _noreturn then
  return _r
end;
--[[121]] tap:ok(Error);
--[[135]] tap:ok(((Error(_global, ("ok")).name)==(("Error"))));
--[[171]] tap:ok(((_new(Error, ("ok")).name)==(("Error"))));
--[[211]] tap:ok(EvalError);
--[[229]] tap:ok(((EvalError(_global, ("ok")).name)==(("EvalError"))));
--[[273]] tap:ok(((_new(EvalError, ("ok")).name)==(("EvalError"))));
--[[321]] tap:ok(RangeError);
--[[340]] tap:ok(((RangeError(_global, ("ok")).name)==(("RangeError"))));
--[[386]] tap:ok(((_new(RangeError, ("ok")).name)==(("RangeError"))));
--[[436]] tap:ok(ReferenceError);
--[[459]] tap:ok(((ReferenceError(_global, ("ok")).name)==(("ReferenceError"))));
--[[513]] tap:ok(((_new(ReferenceError, ("ok")).name)==(("ReferenceError"))));
--[[571]] tap:ok(SyntaxError);
--[[591]] tap:ok(((SyntaxError(_global, ("ok")).name)==(("SyntaxError"))));
--[[639]] tap:ok(((_new(SyntaxError, ("ok")).name)==(("SyntaxError"))));
--[[691]] tap:ok(TypeError);
--[[709]] tap:ok(((TypeError(_global, ("ok")).name)==(("TypeError"))));
--[[753]] tap:ok(((_new(TypeError, ("ok")).name)==(("TypeError"))));
--[[801]] tap:ok(URIError);
--[[818]] tap:ok(((URIError(_global, ("ok")).name)==(("URIError"))));
--[[860]] tap:ok(((_new(URIError, ("ok")).name)==(("URIError"))));
--[[926]] err = _new(Error, ("thing")); 
--[[956]] 
--[[1027]] CAPTURER(_global, err);
--[[1042]] tap:ok(_regex0:test(err.stack), ("expected callsite in trace"));
--[[1108]] CAPTURER(_global, err, CAPTURER);
--[[1133]] tap:ok((not (_regex1:test(err.stack))), ("excludable via argument"));
--[[1223]] obj = _obj({
  
}); 
--[[1237]] CAPTURER(_global, obj);
--[[1252]] tap:ok(_regex2:test(obj.stack), ("expected callsite in object trace"));
--[[1346]] prepErr = nil;  prepArr = nil; 
--[[1368]] Error.prepareStackTrace = (function (this, err, arr)
--[[1418]] prepErr = err;
--[[1435]] prepArr = arr;
--[[1452]] if true then return ("my stack"); end
end);
--[[1473]] err = Error(_global); 
--[[1492]] CAPTURER(_global, err);
--[[1507]] tap:eq(err.stack, ("my stack"), ("got return value"));
--[[1558]] tap:eq(prepErr, err, ("saw correct object"));
--[[1602]] tap:ok(Array:isArray(prepArr), ("got array too"));
--[[1651]] tap:eq(prepArr[(0)].constructor.name, ("CallSite"), ("correct object type"));
--[[1723]] tap:eq(prepArr[(0)]:getFunction(), CAPTURER, ("correct function"));
--[[1787]] tap:ok(((prepArr.length)>((1))), ("multiple callsites"));
--[[1856]] Error.stackTraceLimit = (1);
--[[1883]] err = Error(_global); 
--[[1902]] CAPTURER(_global, err);
--[[1917]] tap:ok(err.stack);
--[[1936]] tap:eq(prepArr.length, (1), ("only one callsite"));
--[[1984]] tap:eq(prepArr[(0)]:getFunction(), CAPTURER, ("correct function"));

return _module.exports;
end 
