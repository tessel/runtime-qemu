

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, animal, rabbit = tap, animal, rabbit;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((1));
--[[45]] animal = _obj({
  ["eats"]=(true)
}); 
--[[73]] rabbit = _obj({
  ["jumps"]=(true)
}); 
--[[103]] rabbit["__proto__"] = animal;
--[[142]] tap:eq(rabbit.eats, (true));

return _module.exports;
end 
