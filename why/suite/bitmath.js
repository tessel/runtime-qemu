

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap = tap;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((27));
--[[46]] tap:eq(_bit.bxor(_G.tointegervalue((0)),_G.tointegervalue((10))), (10), ("xor operator"));
--[[82]] tap:eq(_bit.bxor(_G.tointegervalue(("")),_G.tointegervalue((10))), (10), ("xor operator"));
--[[119]] tap:eq(_bit.bxor(_G.tointegervalue((null)),_G.tointegervalue((10))), (10), ("xor operator"));
--[[159]] tap:eq(_bit.band(_G.tointegervalue((4)),_G.tointegervalue((5))), (4), ("and operator"));
--[[193]] tap:eq(_bit.band(_G.tointegervalue((65535)),_G.tointegervalue((255))), (255), ("and operator"));
--[[237]] tap:eq(_bit.band(_G.tointegervalue((255)),_G.tointegervalue((0))), (0), ("and operator"));
--[[274]] tap:eq(_bit.band(_G.tointegervalue((null)),_G.tointegervalue((5))), (0), ("and operator"));
--[[311]] tap:eq(_bit.band(_G.tointegervalue((null)),_G.tointegervalue((""))), (0), ("and operator"));
--[[350]] tap:eq(_bit.bor(_G.tointegervalue((1)),_G.tointegervalue((254))), (255), ("or operator"));
--[[389]] tap:eq(_bit.bor(_G.tointegervalue((null)),_G.tointegervalue((1))), (1), ("or operator"));
--[[425]] tap:eq(_bit.bor(_G.tointegervalue(("")),_G.tointegervalue((1))), (1), ("or operator"));
--[[460]] tap:eq((_bit.bnot((127))), (-((128))), ("not operator #SKIP"));
--[[503]] tap:eq((_bit.bnot((255))), (-((256))), ("not operator #SKIP"));
--[[546]] tap:eq((_bit.bnot((0))), (-((1))), ("not operator #SKIP"));
--[[584]] tap:eq((_bit.bnot((-((128))))), (127), ("not operator #SKIP"));
--[[629]] tap:eq(_bit.band(_G.tointegervalue((_bit.bnot((255)))),_G.tointegervalue((128))), (0), ("not operator"));
--[[671]] tap:ok(((_bit.lshift(_G.tointegervalue((1)),_G.tointegervalue((0))))==((1))), ("1 << 0"));
--[[704]] tap:ok(((_bit.lshift(_G.tointegervalue((1)),_G.tointegervalue((8))))==((256))), ("1 << 8"));
--[[739]] tap:ok(((_bit.lshift(_G.tointegervalue((1)),_G.tointegervalue((40))))==((256))), ("1 << 256"));
--[[777]] tap:ok(((_bit.rshift(_G.tointegervalue((256)),_G.tointegervalue((8))))==((1))), ("256 >>> 8"));
--[[816]] tap:ok(((_bit.rshift(_G.tointegervalue((-((256)))),_G.tointegervalue((8))))==((16777215))), ("-256 >>> 8"));
--[[864]] tap:ok(((_bit.arshift(_G.tointegervalue((256)),_G.tointegervalue((8))))==((1))), ("256 >> 8"));
--[[901]] tap:ok(((_bit.arshift(_G.tointegervalue((-((256)))),_G.tointegervalue((8))))==((-((1))))), ("-256 >> 8"));
--[[941]] tap:ok(((_bit.lshift(_G.tointegervalue((2271560481)),_G.tointegervalue((12))))==((1412567040))), ("0x87654321 << 12"));
--[[1002]] tap:ok(((_bit.rshift(_G.tointegervalue((2271560481)),_G.tointegervalue((12))))==((554580))), ("0x87654321 >>> 12"));
--[[1065]] tap:ok(((_bit.rshift(_G.tointegervalue(_bit.arshift(_G.tointegervalue((2271560481)),_G.tointegervalue((12)))),_G.tointegervalue((0))))==((4294473300))), ("0x87654321 >> 12"));
--[[1134]] console:log(("#"), _bit.rshift(_G.tointegervalue(_bit.arshift(_G.tointegervalue((2271560481)),_G.tointegervalue((12)))),_G.tointegervalue((0))));
--[[1181]] tap:ok(((_bit.rshift(_G.tointegervalue((-((256)))),_G.tointegervalue((0))))==((4294967040))), ("-256 >>> 0"));
--[[1231]] console:log(("#"), _bit.rshift(_G.tointegervalue((-((256)))),_G.tointegervalue((0))), ("=="), (4294967040));

return _module.exports;
end 
