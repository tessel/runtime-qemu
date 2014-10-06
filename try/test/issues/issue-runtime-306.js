

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, a, b, b = tap, a, b, b;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((11));
--[[46]] tap:ok(((_new(Buffer, _arr({[0]=(-((1)))}, 1))[(0)])==((255))), ("wrap: -1 == 0xff"));
--[[105]] tap:ok(((_new(Buffer, _arr({[0]=(((1365))%((255)))}, 1))[(0)])==((90))), ("wrap: 0x555 % 0xFF == 0x5a"));
--[[185]] tap:ok(((_new(Buffer, _arr({[0]=(256)}, 1))[(0)])==((0))), ("wrap: 256 == 0"));
--[[243]] tap:ok(((_new(Buffer, _arr({[0]=(-((256)))}, 1))[(0)])==((0))), ("wrap: -256 == 0"));
--[[303]] tap:ok(((_new(Buffer, _arr({[0]=(1365)}, 1))[(0)])==((85))), ("wrap: 0x555 == 0x55"));
--[[368]] tap:ok(((_new(Buffer, _arr({[0]=(300)}, 1))[(0)])==((44))), ("wrap: 300 == 0x2c"));
--[[429]] tap:ok(((_new(Buffer, _arr({[0]=(-((300)))}, 1))[(0)])==((212))), ("wrap: -300 == 0xd4"));
--[[492]] tap:ok(((_new(Buffer, _arr({[0]=(-((1365)))}, 1))[(0)])==((171))), ("wrap: -0x555 == 0xab"));
--[[560]] a = (1365);  b = (255); 
--[[584]] tap:ok((((((-(a)))%(b)))==((-((90))))), ("modulus check: -0x555 % 0xFF == -90"));
--[[648]] tap:ok(((_new(Buffer, _arr({[0]=(((-((1365))))%((255)))}, 1))[(0)])==((166))), ("wrap: -0x555 % 0xff == 0xa6"));
--[[732]] b = _new(Buffer, (1)); 
--[[755]] b:writeInt8((-((1))), (0));
--[[775]] tap:ok(((b[(0)])==((255))), ("writing -1 yields 0"));

return _module.exports;
end 
