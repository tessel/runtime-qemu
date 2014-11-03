

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, test = tap, test;
test = (function () local test = nil; test = function (this, source, isobject)
--[[132]] console:log((""));
--[[151]] local _e, _noreturn = nil, {}
local _s, _r = _xpcall(function ()
--[[161]] Object:keys(source);
--[[186]] if isobject then
--[[208]] tap:ok((true), ("no error on object"));
else
--[[262]] tap:ok((false), ("error not generated for non-object"));
end;
      if true then return _noreturn; end
    end, function (err)
        _e = err
    end);
if _s == false then
e = _e;
_r = (function ()
--[[341]] if isobject then
--[[363]] tap:ok((false), ("error generated on object"));
--[[413]] tap:ok((false), ("error generated on object"));
else
--[[476]] tap:ok(_instanceof((e),(Error)));
--[[510]] tap:ok(_instanceof((e),(TypeError)));
--[[548]] console:log(("#"), e.message);
end;
  if true then return _noreturn; end
end)();
end;

if _r ~= _noreturn then
  return _r
end;
end; test:__defineGetter__("name", function () return "test"; end); return test; end)();
--[[52]] tap = require(_global, ("../tap")); 
--[[81]] tap:count((9));
--[[95]] 
--[[589]] test(_global, (5), (false));
--[[605]] test(_global, (""), (false));
--[[622]] test(_global, _obj({
  
}), (true));
--[[638]] test(_global, (null), (false));
--[[657]] test(_global, (true), (false));

return _module.exports;
end 
