

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, buf, foo1, foo2, foo3, foo4, foo5, foo6, foo7, foo8, foo9, fooA, fooB, censor__arr, censor, object__equivalence, objs, objs2, objs3, i, obj, res, i, res, i, res, obj, obj2, d, a, a, arr = tap, buf, foo1, foo2, foo3, foo4, foo5, foo6, foo7, foo8, foo9, fooA, fooB, censor__arr, censor, object__equivalence, objs, objs2, objs3, i, obj, res, i, res, i, res, obj, obj2, d, a, a, arr;
censor = (function () local censor = nil; censor = function (this, key, value)
--[[1855]] tap:ok(((this[key])==(value)), ("\"this\" value correct in replacer"));
--[[1921]] if (((_typeof(value)))==(("string"))) then
--[[1958]] if true then return undefined; end
end;
--[[1982]] if true then return value; end
end; censor:__defineGetter__("name", function () return "censor"; end); return censor; end)();

object__equivalence = (function () local object__equivalence = nil; object__equivalence = function (this, a, b)
--[[2038]] if true then return ((Object:keys(a):sort():join((",")))==(Object:keys(b):sort():join((",")))); end
end; object__equivalence:__defineGetter__("name", function () return "object__equivalence"; end); return object__equivalence; end)();
--[[0]] tap = require(_global, ("../tap")); 
--[[29]] buf = require(_global, ("buffer")); 
--[[59]] tap:count((75));
--[[91]] foo1 = _obj({
  ["foundation"]=("Mozilla"),
  ["model"]=("box"),
  ["week"]=(45),
  ["transport"]=("car"),
  ["month"]=(7)
}); 
--[[179]] foo2 = _obj({
  [("a")]=(2),
  [("b")]=_arr({[0]=(false), (true), ("a")}, 3)
}); 
--[[227]] foo3 = _obj({
  [("a")]=(3),
  [("b")]=_obj({
  [("1")]=(false),
  [("x")]=(54)
})
}); 
--[[280]] foo4 = _obj({
  [("a")]=_obj({
  [("b")]=_obj({
  [("c")]=_obj({
  [("d")]=(1)
})
})
})
}); 
--[[330]] foo5 = ("{\010 \"a\": {\010  \"b\": {\010   \"c\": {\010    \"d\": 1\010   }\010  }\010 }\010}"); 
--[[405]] foo6 = _obj({
  [("location")]=_obj({
  [("city")]=_obj({
  [("name")]=("Chattanooga"),
  [("population")]=(167674)
}),
  [("state")]=_obj({
  [("abbreviation")]=("TN"),
  [("name")]=("Tennessee"),
  [("population")]=(6403000)
})
}),
  [("name")]=("Jim Cowart"),
  [("company")]=("appendTo")
}); 
--[[617]] foo7 = ("{\"location\":{\"city\":{\"name\":\"Chattanooga\",\"population\":167674},\"state\":{\"abbreviation\":\"TN\",\"name\":\"Tennessee\",\"population\":6403000}},\"name\":\"Jim Cowart\",\"company\":\"appendTo\"}"); 
--[[807]] foo8 = _obj({
  [("a")]=_arr({[0]=_obj({
  [("b")]=_arr({[0]=_obj({
  [("c")]=_arr({[0]=_arr({[0]=(1), (2), (3)}, 3), _arr({}, 0), _arr({[0]=(4), (5), (6)}, 3)}, 3)
}), _obj({
  [("d")]=_obj({
  [("e")]=_obj({
  [("f")]=_arr({[0]=(7), (8), (9)}, 3),
  [("g")]=_arr({[0]=_arr({[0]=(9), (8), (7)}, 3), _arr({}, 0)}, 2)
})
})
})}, 2)
}), ("g"), _arr({[0]=_arr({[0]=_arr({[0]=_obj({
  [("h")]=_arr({[0]=_arr({[0]=_arr({[0]=_arr({[0]=_arr({[0]=(6), (5), (4)}, 3)}, 1)}, 1)}, 1)}, 1)
})}, 1)}, 1)}, 1), _obj({
  [("i")]=_arr({[0]=_obj({
  [("j")]=_arr({[0]=_obj({
  [("k")]=_arr({[0]=_arr({[0]=(3), (2), (1)}, 3)}, 1)
})}, 1)
})}, 1)
})}, 4)
}); 
--[[1036]] foo9 = ("{\"a\":[{\"b\":[{\"c\":[[1,2,3],[],[4,5,6]]},{\"d\":{\"e\":{\"g\":[[9,8,7],[]],\"f\":[7,8,9]}}}]},\"g\",[[[{\"h\":[[[[[6,5,4]]]]]}]]],{\"i\":[{\"j\":[{\"k\":[[3,2,1]]}]}]}]}"); 
--[[1200]] fooA = _obj({
  [("1800")]=_obj({
  [("name")]=("Generic Access"),
  [("type")]=("org.bluetooth.service.generic_access")
}),
  [("1801")]=_obj({
  [("name")]=("Generic Attribute"),
  [("type")]=("org.bluetooth.service.generic_attribute")
}),
  [("1802")]=_obj({
  [("name")]=("Immediate Alert"),
  [("type")]=("org.bluetooth.service.immediate_alert")
})
}); 
--[[1481]] fooB = ("{\"1800\":{\"name\":\"Generic Access\",\"type\":\"org.bluetooth.service.generic_access\"},\"1801\":{\"name\":\"Generic Attribute\",\"type\":\"org.bluetooth.service.generic_attribute\"},\"1802\":{\"name\":\"Immediate Alert\",\"type\":\"org.bluetooth.service.immediate_alert\"}}"); 
--[[1783]] censor__arr = _arr({[0]=("transport"), ("month")}, 2); 
--[[1823]] 
--[[1999]] 
--[[2261]] objs = _arr({[0]=_obj({
  [(1)]=(null),
  [(2)]=("null"),
  [(3)]=("non object null"),
  [(4)]=(null),
  [(5)]=(null)
}), _obj({
  [(1)]=(true),
  [(2)]=("true"),
  [(3)]=("non object bool"),
  [(4)]=(null),
  [(5)]=(null)
}), _obj({
  [(1)]=(3),
  [(2)]=("3"),
  [(3)]=("non object number"),
  [(4)]=(null),
  [(5)]=(null)
}), _obj({
  [(1)]=(7.42),
  [(2)]=("7.42"),
  [(3)]=("non object double"),
  [(4)]=(null),
  [(5)]=(null)
}), _obj({
  [(1)]=_arr({}, 0),
  [(2)]=("[]"),
  [(3)]=("empty array"),
  [(4)]=(null),
  [(5)]=(null)
}), _obj({
  [(1)]=_arr({[0]=(0), (1), (2)}, 3),
  [(2)]=("[0,1,2]"),
  [(3)]=("array"),
  [(4)]=(null),
  [(5)]=(null)
}), _obj({
  [(1)]=_arr({[0]=(3), ("a")}, 2),
  [(2)]=("[3,\"a\"]"),
  [(3)]=("mixed array"),
  [(4)]=(null),
  [(5)]=(null)
}), _obj({
  [(1)]=_arr({[0]=(3), (false), (3.454), ("a"), ("a")}, 5),
  [(2)]=("[3,false,3.454,\"a\",\"a\"]"),
  [(3)]=("repeat value array"),
  [(4)]=(null),
  [(5)]=(null)
}), _obj({
  [(1)]=_arr({[0]=_arr({[0]=_arr({}, 0), _arr({}, 0), _arr({}, 0)}, 3), _arr({[0]=_arr({}, 0), _arr({[0]=_arr({[0]=(1), (2)}, 2)}, 1)}, 2)}, 2),
  [(2)]=("[[[],[],[]],[[],[[1,2]]]]"),
  [(3)]=("super nested arrays"),
  [(4)]=(null),
  [(5)]=(null)
}), _obj({
  [(1)]=foo2,
  [(2)]=("{\"a\":2,\"b\":[false,true,\"a\"]}"),
  [(3)]=("sringify lvl 1 array"),
  [(4)]=(null),
  [(5)]=(null)
}), _obj({
  [(1)]=_obj({
  
}),
  [(2)]=("{}"),
  [(3)]=("empty object"),
  [(4)]=(null),
  [(5)]=(null)
}), _obj({
  [(1)]=Object(_global),
  [(2)]=("{}"),
  [(3)]=("empty object constructor"),
  [(4)]=(null),
  [(5)]=(null)
}), _obj({
  [(1)]=_obj({
  [("hi")]=(5)
}),
  [(2)]=("{\"hi\":5}"),
  [(3)]=("object explicit key"),
  [(4)]=(null),
  [(5)]=(null)
}), _obj({
  [(1)]=_obj({
  ["hi"]=(5)
}),
  [(2)]=("{\"hi\":5}"),
  [(3)]=("object implicit key"),
  [(4)]=(null),
  [(5)]=(null)
}), _obj({
  [(1)]=_obj({
  [("a")]=_obj({
  
})
}),
  [(2)]=("{\"a\":{}}"),
  [(3)]=("lvl 1 empty object"),
  [(4)]=(null),
  [(5)]=(null)
}), _obj({
  [(1)]=foo3,
  [(2)]=("{\"a\":3,\"b\":{\"1\":false,\"x\":54}}"),
  [(3)]=("lvl 1 object"),
  [(4)]=(null),
  [(5)]=(null)
}), _obj({
  [(1)]=foo4,
  [(2)]=("{\"a\":{\"b\":{\"c\":{\"d\":1}}}}"),
  [(3)]=("super nested objects"),
  [(4)]=(null),
  [(5)]=(null)
}), _obj({
  [(1)]=foo6,
  [(2)]=foo7,
  [(3)]=("realistic object"),
  [(4)]=(null),
  [(5)]=(null)
}), _obj({
  [(1)]=_obj({
  [("hi")]=(5)
}),
  [(2)]=("{\010  \"hi\": 5\010}"),
  [(3)]=("spacer string"),
  [(4)]=(null),
  [(5)]=("  ")
}), _obj({
  [(1)]=_obj({
  [("hi")]=(5)
}),
  [(2)]=("{\010   \"hi\": 5\010}"),
  [(3)]=("spacer number"),
  [(4)]=(null),
  [(5)]=(3)
}), _obj({
  [(1)]=foo4,
  [(2)]=foo5,
  [(3)]=("super nested spacer"),
  [(4)]=(null),
  [(5)]=(" ")
}), _obj({
  [(1)]=_obj({
  ["a"]=(function (this)

end),
  ["b"]=(5)
}),
  [(2)]=("{\"b\":5}"),
  [(3)]=("function"),
  [(4)]=(null),
  [(5)]=(null)
}), _obj({
  [(1)]=_arr({[0]=(1), (function (this)

end), (2)}, 3),
  [(2)]=("[1,null,2]"),
  [(3)]=("function in array"),
  [(4)]=(null),
  [(5)]=(null)
}), _obj({
  [(1)]=_new(buf.Buffer, _arr({[0]=(11), (22), (33), (44)}, 4)),
  [(2)]=("[11,22,33,44]"),
  [(3)]=("buffer"),
  [(4)]=(null),
  [(5)]=(null)
}), _obj({
  [(1)]=NaN,
  [(2)]=("null"),
  [(3)]=("NaN"),
  [(4)]=(null),
  [(5)]=(null)
}), _obj({
  [(1)]=Infinity,
  [(2)]=("null"),
  [(3)]=("Infinity"),
  [(4)]=(null),
  [(5)]=(null)
}), _obj({
  [(1)]=(-(Infinity)),
  [(2)]=("null"),
  [(3)]=("-Infinity"),
  [(4)]=(null),
  [(5)]=(null)
}), _obj({
  [(1)]=_arr({[0]=_arr({}, 0), ("11")}, 2),
  [(2)]=("[[],\"11\"]"),
  [(3)]=("arr in arr then value"),
  [(4)]=(null),
  [(5)]=(null)
}), _obj({
  [(1)]=("hello\010"),
  [(2)]=("\"hello\\n\""),
  [(3)]=("non object string"),
  [(4)]=(null),
  [(5)]=(null)
})}, 29); 
--[[6507]] objs2 = _arr({[0]=_obj({
  [(1)]=_obj({
  [("hi")]=(5)
}),
  [(2)]=("{\010123456789A\"hi\": 5\010}"),
  [(3)]=("spacer string long"),
  [(4)]=(null),
  [(5)]=("123456789AB")
})}, 1); 
--[[6680]] objs3 = _arr({[0]=_obj({
  [(1)]=foo1,
  [(2)]=("{\"month\":45,\"week\":7}"),
  [(3)]=("replacer function"),
  [(4)]=censor,
  [(5)]=(null)
}), _obj({
  [(1)]=_arr({[0]=_arr({}, 0), _obj({
  
}), _arr({[0]=(null)}, 1), _arr({[0]=(0)}, 1), _arr({[0]=_arr({[0]=_obj({
  
})}, 1)}, 1), ("14121269654077727")}, 6),
  [(2)]=("[[],{},[null],[0],[[{}]],\"14121269654077727\"]"),
  [(3)]=("complex object"),
  [(4)]=(null),
  [(5)]=(null)
}), _obj({
  [(1)]=foo1,
  [(2)]=("{\"month\":7,\"transport\":\"car\"}"),
  [(3)]=("replacer array"),
  [(4)]=censor__arr,
  [(5)]=(null)
}), _obj({
  [(1)]=foo8,
  [(2)]=foo9,
  [(3)]=("array object mess"),
  [(4)]=(null),
  [(5)]=(null)
}), _obj({
  [(1)]=fooA,
  [(2)]=fooB,
  [(3)]=("input file test"),
  [(4)]=(null),
  [(5)]=(null)
})}, 5); 
--[[7453]] console:log(("# parsing tesing"));
--[[7486]] tap:ok(JSON:parse(("{\"hi\": 5}")).hasOwnProperty, ("json object is real object"));
--[[7566]] tap:ok(JSON:parse(("[0, 1, 2]")).slice, ("json array is real array"));
--[[7691]] for i in _pairs(objs) do 
i = ""+i; 
--[[7715]] obj = JSON:parse(objs[i][(2)]); 
--[[7750]] res = JSON:stringify(obj, objs[i][(4)], objs[i][(5)]); 
--[[7807]] tap:eq(res, objs[i][(2)], objs[i][(3)]);
--[[7847]] tap:eq(JSON:stringify(objs[i][(1)], objs[i][(4)], objs[i][(5)]), objs[i][(2)], objs[i][(3)]);
end;
--[[7990]] for i in _pairs(objs2) do 
i = ""+i; 
--[[8015]] res = JSON:stringify(objs2[i][(1)], objs2[i][(4)], objs2[i][(5)]); 
--[[8082]] tap:eq(res, objs2[i][(2)], objs2[i][(3)]);
end;
--[[8192]] for i in _pairs(objs3) do 
i = ""+i; 
--[[8217]] res = JSON:stringify(objs3[i][(1)], objs3[i][(4)], objs3[i][(5)]); 
--[[8284]] obj = JSON:parse(res); 
--[[8313]] obj2 = JSON:parse(objs3[i][(2)]); 
--[[8351]] tap:ok(object__equivalence(_global, obj, obj2), objs3[i][(3)]);
end;
--[[8406]] d = _new(Date, (42)); 
--[[8428]] tap:eq(JSON:stringify(_obj({
  ["toJSON"]=(function (this)
--[[8476]] if true then return ("foo"); end
end)
})), ("\"foo\""), ("toJSON called on dates"));
--[[8535]] a = _obj({
  ["toJSON"]=(function (this)
--[[8567]] if true then return ("hello"); end
end)
}); 
--[[8586]] tap:eq(JSON:stringify(a), ("\"hello\""), ("toJSON called on objects"));
--[[8652]] a = _obj({
  ["toJSON"]=(function (this)
--[[8684]] if true then return _obj({
  ["toJSON"]=(function (this)
--[[8715]] if true then return (5); end
end)
}); end
end)
}); 
--[[8732]] tap:eq(JSON:stringify(a), ("{}"), ("toJSON isnt recursive"));
--[[8790]] arr = JSON:parse(("[[], {}, [null], [0], [[{}]], \"14121269654077727\"]")); 

return _module.exports;
end 
