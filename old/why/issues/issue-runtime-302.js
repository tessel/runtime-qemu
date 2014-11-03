

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, tests = tap, tests;
local _regex0 = _regexp("abc", "g");
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tests = _arr({[0]=_arr({[0]=((function () local fn = nil; fn = function (this)
--[[63]] if true then return ref; end
end; fn:__defineGetter__("name", function () return "fn"; end); return fn; end)()), ("Function"), ("function")}, 3), _arr({[0]=Buffer(_global, _arr({[0]=(1), (2), (3)}, 3)), ("Object"), ("object")}, 3), _arr({[0]=_new(Date), ("Date"), ("object")}, 3), _arr({[0]=_regex0, ("RegExp"), ("object")}, 3), _arr({[0]=_new(Error, ("baaaa")), ("Error"), ("object")}, 3), _arr({[0]=(_void((0))), ("Undefined"), ("undefined")}, 3), _arr({[0]=(true), ("Boolean"), ("boolean")}, 3), _arr({[0]=("a"), ("String"), ("string")}, 3), _arr({[0]=(42), ("Number"), ("number")}, 3), _arr({[0]=_arr({}, 0), ("Array"), ("object")}, 3), _arr({[0]=(function (this, ...)
local arguments = _arguments(...);
--[[456]] if true then return arguments; end
end)(_global), ("Arguments"), ("object")}, 3)}, 11); 
--[[507]] tap:count(((tests.length)*((2))));
--[[537]] tests:forEach((function (this, d)
--[[568]] console:log(("#"), d[(0)]);
--[[593]] tap:eq(Object.prototype.toString:call(d[(0)]), ((((("[object "))+(d[(1)])))+(("]"))), ("Object.prototype.toString"));
--[[695]] tap:eq((_typeof(d[(0)])), d[(2)], ("typeof"));
end));

return _module.exports;
end 
