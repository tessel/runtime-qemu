

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, a, b, c, cObj = tap, a, b, c, cObj;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((30));
--[[111]] tap:eq((_typeof(_new(Number, (500)))), ("object"), ("built-in Number constructor creates boxed primitives with truthy value."));
--[[228]] tap:eq((_typeof(_new(Number, (0)))), ("object"), ("built-in Number constructor creates boxed primitives with falsy value."));
--[[342]] tap:eq((_typeof(_new(String, ("foo")))), ("object"), ("built-in String constructor creates boxed primitives with truthy value."));
--[[461]] tap:eq((_typeof(_new(String, ("")))), ("object"), ("built-in String constructor creates boxed primitives with falsy value."));
--[[576]] tap:eq((_typeof(_new(Boolean, (true)))), ("object"), ("built-in Boolean constructor creates boxed primitives with truthy value."));
--[[696]] tap:eq((_typeof(_new(Boolean, (false)))), ("object"), ("built-in Boolean constructor creates boxed primitives with falsy value."));
--[[886]] tap:eq((_typeof(_new(Number, (500)):valueOf())), ("number"), ("The result of valueOf with truthy value on a boxed Number primitive is a Number."));
--[[1022]] tap:eq((_typeof(_new(Boolean, (0)))), ("object"), ("The result of valueOf with falsy value on a boxed Number primitive is a Number."));
--[[1146]] tap:eq((_typeof(_new(String, ("foo")):valueOf())), ("string"), ("The result of valueOf with truthy value on a boxed String primitive is a String."));
--[[1284]] tap:eq((_typeof(_new(String, ("")):valueOf())), ("string"), ("The result of valueOf with falsy value on a boxed String primitive is a String."));
--[[1418]] tap:eq((_typeof(_new(Boolean, (true)):valueOf())), ("boolean"), ("The result of valueOf with truthy value on a boxed Boolean primitive is a Boolean."));
--[[1559]] tap:eq((_typeof(_new(Boolean, (false)):valueOf())), ("boolean"), ("The result of valueOf with falsy value on a boxed Boolean primitive is a Boolean."));
--[[1764]] tap:eq((_typeof(Number(_global, (500)))), ("number"), ("Built-in Number constructor called as a function with truthy value returns a primitive Number."));
--[[1900]] tap:eq((_typeof(Number(_global, (0)))), ("number"), ("Built-in Number constructor called as a function with falsy value returns a primitive Number."));
--[[2033]] tap:eq((_typeof(String(_global, ("foo")))), ("string"), ("Built-in String constructor called as a function with truthy value returns a primitive String."));
--[[2171]] tap:eq((_typeof(String(_global, ("")))), ("string"), ("Built-in String constructor called as a function with falsy value returns a primitive String."));
--[[2305]] tap:eq((_typeof(Boolean(_global, (true)))), ("boolean"), ("Built-in Boolean constructor called as a function with truthy value returns a primitive Boolean."));
--[[2446]] tap:eq((_typeof(Boolean(_global, (false)))), ("boolean"), ("Built-in Boolean constructor called as a function with falsy value returns a primitive Boolean."));
--[[2654]] tap:eq((_typeof(Object(_global, (500)))), ("object"), ("calling the Object function with a truthy Number returns an object"));
--[[2764]] tap:eq((_typeof(Object(_global, (0)))), ("object"), ("calling the Object function with a falsy Number returns an object"));
--[[2871]] tap:eq((_typeof(Object(_global, ("foo")))), ("object"), ("calling the Object function with a truthy String returns an object"));
--[[2983]] tap:eq((_typeof(Object(_global, ("foo")))), ("object"), ("calling the Object function with a falsy String returns an object"));
--[[3094]] tap:eq((_typeof(Object(_global))), ("object"), ("calling the Object function with a truthy String returns an object"));
--[[3201]] tap:eq((_typeof(Object(_global))), ("object"), ("calling the Object function with a falsy String returns an object"));
--[[3307]] tap:eq(((Object(_global, (500)))==(Object(_global, (500)))), (false), ("returned value from Object function is unique"));
--[[3457]] a = _obj({
  ["foo"]=("bar")
}); 
--[[3480]] tap:eq(a, a:valueOf(), ("valueOf of an object is the object"));
--[[3599]] b = _new(Date); 
--[[3619]] tap:eq(b, Object(_global, b), ("Objectification of a Date is the Date itself"));
--[[3690]] c = ("foo"); 
--[[3705]] cObj = Object(_global, c); 
--[[3727]] tap:eq(Array:isArray(Object:keys(cObj)), (true), ("Objectification of a String converts it to an array of characters"));
--[[3844]] tap:eq(Object:keys(cObj).length, c.length, ("Objectification of a String converts it to an array of characters"));
--[[3957]] tap:eq(cObj.length, c.length, ("Returned array is the same length as the string"));

return _module.exports;
end 
