

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, a, f, b, s = tap, a, f, b, s;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((9));
--[[45]] a = _obj({
  ["x"]=(5)
}); 
--[[60]] tap:eq(a:hasOwnProperty(("x")), (true), ("object hasOwnProperty positive"));
--[[130]] tap:eq(a:hasOwnProperty(("y")), (false), ("object hasOwnProperty negative"));
--[[201]] tap:eq(a:hasOwnProperty(("hasOwnProperty")), (false), ("object hasOwnProperty prototype"));
--[[287]] f = (function (this)

end); 
--[[309]] f.foo = (1);
--[[319]] tap:eq(f:hasOwnProperty(("foo")), (true), ("function hasOwnProperty positive"));
--[[393]] tap:eq(f:hasOwnProperty(("bar")), (false), ("function hasOwnProperty negative"));
--[[469]] b = _new(Buffer, (1)); 
--[[492]] b.foo = (1);
--[[503]] tap:eq(b:hasOwnProperty(("foo")), (true), ("buffer hasOwnProperty positive"));
--[[575]] tap:eq(b:hasOwnProperty(("bar")), (false), ("buffer hasOwnProperty negative"));
--[[649]] s = ("string"); 
--[[667]] tap:eq(s:hasOwnProperty(("length")), (true), ("string hasOwnProperty positive"));
--[[742]] tap:eq(s:hasOwnProperty(("bar")), (false), ("string hasOwnProperty negative"));

return _module.exports;
end 
