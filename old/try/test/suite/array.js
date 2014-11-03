

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, arreq, arr, arr, arr, a, a, a, arr, arr, first__name, arr, a, b, c, a, i, arr, i, arr, i, arr, i, arr, arr, test, a, a, a, arr = tap, arreq, arr, arr, arr, a, a, a, arr, arr, first__name, arr, a, b, c, a, i, arr, i, arr, i, arr, i, arr, arr, test, a, a, a, arr;
arreq = (function () local arreq = nil; arreq = function (this, a, b)
local i = i;
--[[71]] if ((a.length)~=(b.length)) then
--[[101]] if true then return (false); end
end;
--[[119]] i = (0); 
while ((i)<(a.length)) do 

--[[158]] if ((a[i])~=(b[i])) then
--[[181]] if true then return (false); end
end;

local _r = i; i = _r + 1;
end;
--[[203]] if true then return (true); end
end; arreq:__defineGetter__("name", function () return "arreq"; end); return arreq; end)();
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((50));
--[[46]] 
--[[219]] arr = _arr({}, 0); 
--[[233]] tap:ok(((arr.length)==((0))), ("array::push - length"));
--[[281]] arr:push((1), (2), (3), (4), (5));
--[[306]] tap:ok(((arr.length)==((5))), ("array::push - values added, accepts multiple args"));
--[[385]] arr = _arr({[0]=(1), (2), (3), (4), (5)}, 5); 
--[[412]] tap:ok(((arr.length)==((5))), ("array::pop - length"));
--[[459]] tap:ok(((arr:pop())==((5))), ("array::pop - values popped"));
--[[513]] tap:ok(((arr.length)==((4))), ("array::pop - length modified"));
--[[570]] arr = _arr({}, 0); 
--[[584]] tap:ok(((arr:pop())==((null))), ("array::pop - null values popped"));
--[[646]] tap:ok(((arr.length)==((0))), ("array::pop - length unmodified when 0"));
--[[713]] a = _arr({[0]=(1)}, 1); 
--[[726]] a:splice((0), (1));
--[[742]] tap:ok(arreq(_global, a, _arr({}, 0)), ("splice(0, 1)"));
--[[781]] a = _arr({[0]=(1), (2), (3)}, 3); 
--[[800]] a:splice((1), (1));
--[[816]] tap:ok(arreq(_global, a, _arr({[0]=(1), (3)}, 2)), ("splice(1, 1)"));
--[[859]] a = _arr({[0]=(2), (3)}, 2); 
--[[875]] a:unshift((1));
--[[889]] tap:ok(arreq(_global, a, _arr({[0]=(1), (2), (3)}, 3)), ("unshift(1)"));
--[[932]] arr = _arr({[0]=(2)}, 1); 
--[[947]] tap:ok(((arr.length)==((1))), ("array::unshift - length"));
--[[998]] arr:unshift((1));
--[[1014]] tap:ok(arreq(_global, arr, _arr({[0]=(1), (2)}, 2)), ("array::unshift - correct"));
--[[1069]] tap:ok(((arr.length)==((2))), ("array::unshift - unshift redefines length"));
--[[1139]] arr = _arr({[0]=("adrian"), ("zankich")}, 2); 
--[[1172]] tap:ok(((arr.length)==((2))), ("array::shift - length"));
--[[1221]] first__name = arr:shift(); 
--[[1251]] tap:ok(((arr.length)==((1))), ("array::shift - shift redefines length"));
--[[1317]] tap:ok(((first__name)==(("adrian"))), ("array::shift - shifted value"));
--[[1380]] arr = _arr({}, 0); 
--[[1394]] tap:ok(((arr:shift())==((null))), ("array::shift - null values shifted"));
--[[1461]] tap:ok(((arr.length)==((0))), ("array::shift - length unmodified when 0"));
--[[1530]] tap:ok(((_arr({[0]=(0), (0), (0), (0), (0), (0)}, 6).length)==((6))));
--[[1570]] tap:ok(arreq(_global, _arr({[0]=(0), (1), (2), (3), (4), (5)}, 6):slice((0), (5)), _arr({[0]=(0), (1), (2), (3), (4)}, 5)));
--[[1633]] tap:ok(arreq(_global, _arr({[0]=(0), (0), (0), (0), (0), (0)}, 6):slice((0), (5)), _arr({[0]=(0), (0), (0), (0), (0)}, 5)));
--[[1697]] tap:ok(arreq(_global, _arr({[0]=(0), (1), (2), (3), (4), (5)}, 6):slice((1)), _arr({[0]=(1), (2), (3), (4), (5)}, 5)), ("slice(1) returns full array"));
--[[1790]] a = _new(Array, (50)); 
--[[1813]] a[(20)] = ("b");
--[[1826]] tap:ok(((a.length)==((50))), ("new Array(50) length is 50"));
--[[1880]] b = _arr({}, 0); 
--[[1892]] b[(20)] = ("b");
--[[1905]] tap:ok(((b.length)==((21))), ("setting sparse high array index extends array"));
--[[1979]] c = _arr({[0]=(1), (2), (3)}, 3); 
--[[1998]] c[(3)] = (4);
--[[2008]] tap:ok(((c.length)==((4))), ("setting non-sparse high array index extends array"));
--[[2085]] a = _arr({[0]=(1), (2), (3)}, 3); 
--[[2102]] console:log(("# array full:"), a, a.length);
--[[2145]] tap:ok(((a.length)==((3))));
--[[2168]] a[(0)] = undefined;
--[[2186]] a[(1)] = undefined;
--[[2204]] console:log(("# array two undefined:"), a, a.length);
--[[2256]] tap:ok(((a.length)==((3))));
--[[2279]] a[(2)] = undefined;
--[[2297]] console:log(("# array three undefined:"), a, a.length);
--[[2351]] tap:ok(((a.length)==((3))));
--[[2375]] tap:ok(((_arr({[0]=(0), (1), (2), (3)}, 4):reduce((function (this, a, b)
--[[2423]] if true then return ((a)+(b)); end
end)))==((6))), ("array reduce"));
--[[2464]] tap:ok(arreq(_global, _arr({[0]=_arr({[0]=(0), (1)}, 2), _arr({[0]=(2), (3)}, 2), _arr({[0]=(4), (5)}, 2)}, 3):reduce((function (this, a, b)
--[[2530]] if true then return a:concat(b); end
end)), _arr({[0]=(0), (1), (2), (3), (4), (5)}, 6)), ("array reduce with init"));
--[[2603]] i = (1); 
--[[2614]] arr = _arr({}, 0):concat(i); 
--[[2638]] tap:ok(arreq(_global, arr, _arr({[0]=i}, 1)), ("array concats values"));
--[[2687]] console:log(("#"), arr);
--[[2710]] i = (1); 
--[[2721]] arr = _arr({}, 0):concat(_arr({[0]=(5)}, 1), i); 
--[[2750]] tap:ok(arreq(_global, arr, _arr({[0]=(5), i}, 2)), ("array concats values and arrays"));
--[[2813]] console:log(("#"), arr);
--[[2836]] i = (1); 
--[[2847]] arr = _arr({}, 0):concat(_arr({[0]=(5)}, 1), _arr({[0]=(6), (7)}, 2)); 
--[[2881]] tap:ok(arreq(_global, arr, _arr({[0]=(5), (6), (7)}, 3)), ("array concats arrays"));
--[[2936]] console:log(("#"), arr);
--[[2959]] i = (1); 
--[[2970]] arr = _arr({[0]=(5)}, 1):concat(_arr({[0]=(6), (7)}, 2), _arr({[0]=(8)}, 1)); 
--[[3005]] tap:ok(arreq(_global, arr, _arr({[0]=(5), (6), (7), (8)}, 4)), ("array concats arrays"));
--[[3063]] console:log(("#"), arr);
--[[3104]] arr = _arr({[0]=(1), (2), (3)}, 3); 
--[[3125]] arr:reverse();
--[[3140]] tap:ok(arreq(_global, arr, _arr({[0]=(3), (2), (1)}, 3)), ("array reverses in place"));
--[[3198]] tap:ok(arreq(_global, arr:reverse(), _arr({[0]=(1), (2), (3)}, 3)), ("array reverses"));
--[[3257]] tap:ok(arreq(_global, _arr({[0]=(255), (0), (0), (128), (63), (255)}, 6):reverse(), _arr({[0]=(255), (63), (128), (0), (0), (255)}, 6)), ("array reverses"));
--[[3393]] test = Buffer(_global, _arr({[0]=(5), (4), (3)}, 3)); 
--[[3421]] tap:ok(((Array.prototype.slice:call(test):join(("")))==(("543"))), ("Array::join called on buffer works"));
--[[3518]] sum = Array.prototype.reduce:call(test, (function (this, sum, n)
--[[3578]] if true then return ((sum)+(n)); end
end), (0));
--[[3599]] tap:ok(((sum)==((12))), ("Array::reduce called on non-array object succeeds"));
--[[3690]] a = Array(_global, (1), (2), (3)); 
--[[3711]] tap:ok(arreq(_global, a, _arr({[0]=(1), (2), (3)}, 3)), ("Array(1,2,3) == [1,2,3]"));
--[[3779]] tap:ok(((_arr({[0]=(1), (2), (3)}, 3):join((",")))==(("1,2,3"))));
--[[3817]] tap:ok(((_arr({[0]=(1)}, 1):join((",")))==(("1"))));
--[[3847]] tap:ok(((_arr({[0]=(null), (null), (null)}, 3):join((",")))==((",,"))));
--[[3939]] a = _arr({}, 0); 
--[[3951]] Array.prototype.forEach:call(("foobar"), (function (this, ch)
--[[4007]] a:push(ch);
end));
--[[4023]] tap:eq(a:join(("")), ("foobar"));
--[[4098]] a = _arr({}, 0); 
--[[4110]] Array.prototype.forEach:call(("foobar"):split(("")), (function (this, ch)
--[[4176]] a:push(ch);
end));
--[[4192]] tap:eq(a:join(("")), ("foobar"));
--[[4484]] tap:ok((true));
--[[4499]] arr = _arr({[0]=(3), (2), (5), (1), (4)}, 5); 
--[[4526]] arr:sort();
--[[4538]] tap:eq(arr:join((",")), ("1,2,3,4,5"));
--[[4575]] arr = _arr({[0]=(1), (2), (3), (4), (5)}, 5);
--[[4598]] arr:sort((function (this, a, b)
--[[4626]] if true then return ((b)-(a)); end
end));
--[[4643]] tap:eq(arr:join((",")), ("5,4,3,2,1"));
--[[4680]] arr = _arr({[0]=("C"), (-((6))), (11), (2), (-((30))), ("b"), (100000)}, 7);
--[[4722]] arr:sort();
--[[4734]] tap:eq(arr:join((",")), ("-30,-6,100000,11,2,C,b"));
--[[4784]] arr = _arr({[0]=(10), (-((6))), (-((11))), (2)}, 4);
--[[4808]] arr:sort((function (this, a, b)
--[[4839]] if true then return ((a)>(b)); end
end));
--[[4857]] tap:eq(arr:join((",")), ("-11,-6,2,10"));

return _module.exports;
end 
