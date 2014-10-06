

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, parent, child = tap, parent, child;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((4));
--[[45]] parent = _obj({
  
}); 
--[[62]] child = _obj({
  ["testFunc"]=(function (this)
--[[99]] console:log(("test"));
end)
}); 
--[[122]] tap:eq((_typeof(child)), ("object"), ("child before property added"));
--[[185]] tap:eq((_typeof(child.testFunc)), ("function"), ("testFunc before property added"));
--[[262]] parent[child] = ("foo");
--[[285]] tap:eq((_typeof(child)), ("object"), ("child after property added"));
--[[347]] tap:eq((_typeof(child.testFunc)), ("function"), ("testFunc after property added"));

return _module.exports;
end 
