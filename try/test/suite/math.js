

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap = tap;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((69));
--[[65]] tap:ok((((420))==((420))), ("octal encoding"));
--[[118]] tap:ok(((Math.E)==((2.718281828459045))), ("Math.E"));
--[[164]] tap:ok(((Math.LN2)==((0.6931471805599453))), ("Math.LN2"));
--[[215]] tap:ok(((Math.LN10)==((2.302585092994046))), ("Math.LN10"));
--[[267]] tap:ok(((Math.LOG2E)==((1.4426950408889634))), ("Math.LOG2E"));
--[[322]] tap:ok(((Math.LOG10E)==((0.4342944819032518))), ("Math.LOG10E"));
--[[379]] tap:ok(((Math.PI)==((3.141592653589793))), ("Math.PI"));
--[[427]] tap:ok(((Math["SQRT1_2"])==((0.7071067811865476))), ("Math.SQRT1_2"));
--[[486]] tap:ok(((Math.SQRT2)==((1.4142135623730951))), ("Math.SQRT2"));
--[[551]] tap:ok(((Math:clz32(_K_nil))==((32))), ("Math.clz32(nil)"));
--[[600]] tap:ok(((Math:clz32((1)))==((31))), ("Math.clz32(1)"));
--[[645]] tap:ok(((Math:clz32((1000)))==((22))), ("Math.clz32(22)"));
--[[694]] tap:ok(((Math:clz32((true)))==((31))), ("Math.clz32(true)"));
--[[745]] tap:ok(((Math:clz32((3.5)))==((30))), ("Math.clz32(3.5)"));
--[[794]] tap:ok(((Math:clz32((-((3.5)))))==((0))), ("Math.clz32(-3.5)"));
--[[844]] tap:ok(((_arr({[0]=NaN, Infinity, (-(Infinity)), (0), (-((0))), (null), undefined, ("foo"), _obj({
  
}), _arr({}, 0)}, 10):filter((function (this, n)
--[[941]] if true then return ((Math:clz32(n))~=((32))); end
end)).length)==((0))), ("Math.clz32([NaN, Infinity, -Infinity, 0, -0, null, undefined, \"foo\", {}, []])"));
--[[1075]] tap:ok(((Math:sign((3)))==((1))), ("Math.sign(3)"));
--[[1117]] tap:ok(((Math:sign((-((3)))))==((-((1))))), ("Math.sign(-3)"));
--[[1162]] tap:ok(((Math:sign(("-3")))==((-((1))))), ("Math.sign(\"-3\")"));
--[[1211]] tap:ok(((Math:sign((0)))==((0))), ("Math.sign(0)"));
--[[1253]] tap:ok(((Math:sign((-((0)))))==((-((0))))), ("Math.sign(-0)"));
--[[1298]] tap:ok(isNaN(_global, Math:sign(NaN)), ("Math.sign(NaN)"));
--[[1346]] tap:ok(isNaN(_global, Math:sign(("foo"))), ("Math.sign(\"foo\")"));
--[[1398]] tap:ok(isNaN(_global, Math:sign()), ("Math.sign()"));
--[[1449]] tap:ok(((Math:tanh((0)))==((0))), ("Math.tanh(0)"));
--[[1491]] tap:ok(((Math:tanh(Infinity))==((1))), ("Math.tanh(Infinity)"));
--[[1547]] tap:ok(((Math:tanh((1)))==((0.7615941559557649))), ("Math.tanh(1)"));
--[[1616]] tap:ok(((Math:trunc((13.37)))==((13))), ("Math.trunc(13.37)"));
--[[1669]] tap:ok(((Math:trunc((42.84)))==((42))), ("Math.trunc(42.84)"));
--[[1722]] tap:ok(((Math:trunc((0.123)))==((0))), ("Math.trunc(0.123)"));
--[[1775]] tap:ok(((Math:trunc((-((0.123)))))==((-((0))))), ("Math.trunc(-0.123)"));
--[[1830]] tap:ok(((Math:trunc(("-1.123")))==((-((1))))), ("Math.trunc(\"-1.123\")"));
--[[1889]] tap:ok(isNaN(_global, Math:trunc(NaN)), ("Math.trunc(NaN)"));
--[[1939]] tap:ok(isNaN(_global, Math:trunc(("foo"))), ("Math.trunc(\"foo\")"));
--[[1993]] tap:ok(isNaN(_global, Math:trunc()), ("Math.trunc()"));
--[[2046]] tap:ok(((Math:log2((3)))==((1.5849625007211563))), ("Math.log2(3)"));
--[[2142]] tap:ok(((Math:log2((2)))==((1))), ("Math.log2(2)"));
--[[2184]] tap:ok(((Math:log2((1)))==((0))), ("Math.log2(1)"));
--[[2226]] tap:ok(((Math:log2((0)))==((-(Infinity)))), ("Math.log2(0)"));
--[[2276]] tap:ok(isNaN(_global, Math:log2((-((2))))), ("Math.log2(-2)"));
--[[2322]] tap:ok(((Math:log2((1024)))==((10))), ("Math.log2(1024)"));
--[[2382]] tap:ok(((Math:fround((0)))==((0))), ("Math.fround(0)"));
--[[2428]] tap:ok(((Math:fround((1)))==((1))), ("Math.fround(1)"));
--[[2474]] tap:ok(((Math:fround((1.337)))==((1.3370000123977661))), ("Math.fround(1.337)"));
--[[2545]] tap:ok(((Math:fround((1.5)))==((1.5))), ("Math.fround(1.5)"));
--[[2597]] tap:ok(isNaN(_global, Math:fround(NaN)), ("Math.fround(NaN)"));
--[[2659]] tap:ok(((Math:log1p((1)))==((0.6931471805599453))), ("Math.log1p(1)"));
--[[2720]] tap:ok(((Math:log1p((0)))==((0))), ("Math.log1p(0)"));
--[[2764]] tap:ok(((Math:log1p((-((1)))))==((-(Infinity)))), ("Math.log1p(-1)"));
--[[2818]] tap:ok(isNaN(_global, Math:log1p((-((2))))), ("Math.log1p(-2)"));
--[[2876]] tap:ok(((Math:hypot((3), (4)))==((5))), ("Math.hypot(3, 4)"));
--[[2926]] tap:ok(((Math:hypot((3), (4), (5)))==((7.0710678118654755))), ("Math.hypot(3, 4, 5)"));
--[[2999]] tap:ok(((Math:hypot())==((0))), ("Math.hypot()"));
--[[3041]] tap:ok(isNaN(_global, Math:hypot(NaN)), ("Math.hypot(NaN)"));
--[[3091]] tap:ok(isNaN(_global, Math:hypot((3), (4), ("foo"))), ("Math.hypot(3, 4, \"foo\")"));
--[[3157]] tap:ok(((Math:hypot((3), (4), ("5")))==((7.0710678118654755))), ("Math.hypot(3, 4, \"5\")"));
--[[3234]] tap:ok(((Math:hypot((-((3)))))==((3))), ("Math.hypot(-3)"));
--[[3289]] tap:ok(((Math:imul((2), (4)))==((8))), ("Math.imul(2, 4)"));
--[[3337]] tap:ok(((Math:imul((-((1))), (8)))==((-((8))))), ("Math.imul(-1, 8)"));
--[[3388]] tap:ok(((Math:imul((-((2))), (-((2)))))==((4))), ("Math.imul(-2, -2)"));
--[[3440]] tap:ok(((Math:imul((4294967295), (5)))==((-((5))))), ("Math.imul(0xffffffff, 5)"));
--[[3507]] tap:ok(((Math:imul((4294967294), (5)))==((-((10))))), ("Math.imul(0xfffffffe, 5)"));
--[[3585]] tap:ok(((Math:round((20.49)))==((20))), ("Math.round(20.49)"));
--[[3638]] tap:ok(((Math:round((20.5)))==((21))), ("Math.round(20.5)"));
--[[3689]] tap:ok(((Math:round((-((20.5)))))==((-((20))))), ("Math.round(-20.5)"));
--[[3743]] tap:ok(((Math:round((-((20.51)))))==((-((21))))), ("Math.round(-20.51)"));
--[[3875]] tap:ok(((((Math:round((((1.005))*((100)))))/((100))))==((1))), ("Math.round(1.005*100)/100"));
--[[3954]] tap:ok(((Math:pow((2), (2)))==((4))), ("Math.pow"));
--[[4002]] console:log(("#"), String(_global, (((0))/((0)))));
--[[4032]] tap:ok(((String(_global, (((0))/((0)))))==(("NaN"))), ("NaN is NaN and not nan"));

return _module.exports;
end 
