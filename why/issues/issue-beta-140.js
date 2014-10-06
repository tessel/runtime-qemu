

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, arreq, header, data = tap, arreq, header, data;
arreq = (function () local arreq = nil; arreq = function (this, a, b)
local i = i;
--[[70]] if ((a.length)~=(b.length)) then
--[[100]] if true then return (false); end
end;
--[[118]] i = (0); 
while ((i)<(a.length)) do 

--[[157]] if ((a[i])~=(b[i])) then
--[[180]] if true then return (false); end
end;

local _r = i; i = _r + 1;
end;
--[[202]] if true then return (true); end
end; arreq:__defineGetter__("name", function () return "arreq"; end); return arreq; end)();
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((3));
--[[45]] 
--[[218]] header = _arr({[0]=(2), (2), (0)}, 3); 
--[[251]] data = _new(Array, (2)); 
--[[279]] tap:ok(((header:concat(data).length)==((5))), ("array concat length"));
--[[342]] console:log(("# -->"), header:concat(data).length);
--[[391]] tap:ok(arreq(_global, header:concat(data), _arr({[0]=(2), (2), (0), undefined, undefined}, 5)), ("array concat"));
--[[475]] console:log(("#"), header:concat(data));
--[[513]] tap:ok(((_arr({[0]=(2), (2), (0), undefined, undefined}, 5).length)==((5))), ("array length"));
--[[582]] console:log(("#"), _arr({[0]=(2), (2), (0), undefined, undefined}, 5).length);

return _module.exports;
end 
