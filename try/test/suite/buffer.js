

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, arreq, a, success, i, i, sum, i, sum, e, i, arr, f, f, f, f, a, f, a, b, c, abc, b, b, b, b, buf, len = tap, arreq, a, success, i, i, sum, i, sum, e, i, arr, f, f, f, f, a, f, a, b, c, abc, b, b, b, b, buf, len;
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
--[[30]] tap:count((65));
--[[46]] 
--[[219]] a = _new(Buffer, _arr({[0]=(5), (6), (7), (8)}, 4)); 
--[[253]] tap:ok(((a.length)==((4))), ("buffer.length"));
--[[293]] tap:ok(((a[(3)])==((8))), ("buffer indexing"));
--[[331]] tap:ok(((a[(4)])==((null))), ("buffer high indexing"));
--[[378]] a = _new(Buffer, ("hello"));
--[[403]] tap:ok(((a.length)==((5))), ("buffer char length"));
--[[448]] tap:ok(((a[(0)])==((104))), ("buffer char index"));
--[[491]] a = _new(Buffer, (100));
--[[512]] tap:ok(((a.length)==((100))), ("buffer fixed size len"));
--[[562]] a = _new(Buffer, (100));
--[[583]] a:fill((254));
--[[597]] success = (true); 
--[[617]] i = (0); 
while ((i)<(a.length)) do 

--[[655]] if ((a[i])~=((254))) then
--[[677]] success = (false);
end;

local _r = i; i = _r + 1;
end;
--[[698]] tap:ok(success, ("buffer.fill worked"));
--[[737]] tap:ok(Buffer:isBuffer(_new(Buffer, ("hello"))), ("Buffer.isBuffer succeeds on buffer"));
--[[820]] tap:ok((not (Buffer:isBuffer(_arr({}, 0)))), ("Buffer.isBuffer fails on non-buffer (array)"));
--[[896]] tap:ok((not (Buffer:isBuffer(("")))), ("Buffer.isBuffer fails on non-buffer (string)"));
--[[973]] tap:ok((not (Buffer:isBuffer((null)))), ("Buffer.isBuffer fails on non-buffer (null)"));
--[[1051]] a = _new(Buffer, (5));
--[[1070]] a:fill((255));
--[[1083]] b = _new(Buffer, (10));
--[[1103]] b:fill((0));
--[[1116]] a:copy(b, (3), (0), (3));
--[[1135]] i = (0);  sum = (0); 
while ((i)<(b.length)) do 

--[[1182]] sum = sum+b[i];

local _r = i; i = _r + 1;
end;
--[[1196]] tap:ok(((sum)==((765))), ("buffer.copy works"));
--[[1237]] a = _new(Buffer, _arr({[0]=(0), (1), (2), (3), (4), (5), (6), (7), (8), (9)}, 10));
--[[1284]] b = a:slice((3), (6));
--[[1302]] i = (0);  sum = (0); 
while ((i)<(b.length)) do 

--[[1349]] sum = sum+b[i];

local _r = i; i = _r + 1;
end;
--[[1363]] tap:ok(((b.length)==((3))), ("buffer.slice length"));
--[[1408]] tap:ok(((sum)==((12))), ("buffer.slice works"));
--[[1449]] e = (null); 
--[[1463]] local _e, _noreturn = nil, {}
local _s, _r = _xpcall(function ()
--[[1470]] b:copy(_arr({[0]=(1), (2), (3), (4)}, 4), (3), (0), (3));
      if true then return _noreturn; end
    end, function (err)
        _e = err
    end);
if _s == false then
__e = _e;
_r = (function ()
--[[1515]] e = __e;
  if true then return _noreturn; end
end)();
end;

if _r ~= _noreturn then
  return _r
end;
--[[1524]] tap:ok((not ((not (e)))), ("error on buffer copy to non-buffer target"));
--[[1582]] a = _new(Buffer, _arr({[0]=(3), (171), (35), (66)}, 4));
--[[1623]] i = (0);  arr = _arr({}, 0); 
while ((i)<(((a.length)+((1))))) do 

--[[1675]] arr:push(a:readUInt8(i, (true)));

local _r = i; i = _r + 1;
end;
--[[1708]] console:log(("#"), arr);
--[[1731]] tap:ok(arreq(_global, arr, _arr({[0]=(3), (171), (35), (66), undefined}, 5)), ("readUInt8 and assert work"));
--[[1817]] tap:ok(((a:readUInt8((0)))==((3))), ("readUInt8"));
--[[1860]] tap:ok(((a:readUInt16LE((0)))==((43779))), ("readUInt16LE"));
--[[1911]] tap:ok(((a:readUInt16BE((0)))==((939))), ("readUInt16BE"));
--[[1960]] tap:ok(((a:readUInt32LE((0)))==((1109633795))), ("readUInt32LE"));
--[[2016]] tap:ok(((a:readUInt32BE((0)))==((61547330))), ("readUInt32BE"));
--[[2070]] tap:ok(((a:readInt8((0)))==((3))), ("readInt8"));
--[[2109]] tap:ok(((a:readInt16LE((0)))==((-((21757))))), ("readInt16LE"));
--[[2159]] tap:ok(((a:readInt16BE((0)))==((939))), ("readInt16BE"));
--[[2206]] tap:ok(((a:readInt32LE((0)))==((1109633795))), ("readInt32LE"));
--[[2260]] tap:ok(((a:readInt32BE((0)))==((61547330))), ("readInt32BE"));
--[[2313]] f = _new(Buffer, _arr({[0]=(255), (0), (0), (128), (63), (255)}, 6)); 
--[[2371]] tap:ok(((f:readFloatLE((1)))==((1))), ("readFloatLE"));
--[[2417]] console:log(("#"), f:readFloatLE((1)));
--[[2453]] f = _new(Buffer, _arr({[0]=(255), (0), (0), (128), (63), (255)}, 6):reverse()); 
--[[2521]] tap:ok(((f:readFloatBE((1)))==((1))), ("readFloatBE"));
--[[2567]] console:log(("#"), f:readFloatBE((1)));
--[[2603]] f = _new(Buffer, _arr({[0]=(255), (85), (85), (85), (85), (85), (85), (213), (63), (255)}, 10)); 
--[[2685]] tap:ok(((f:readDoubleLE((1)))==((((1))/((3))))), ("readDoubleLE"));
--[[2735]] f = _new(Buffer, _arr({[0]=(255), (85), (85), (85), (85), (85), (85), (213), (63), (255)}, 10):reverse()); 
--[[2827]] tap:ok(((f:readDoubleBE((1)))==((((1))/((3))))), ("readDoubleBE"));
--[[2878]] tap:ok(((a:readUInt16BE((1)))==((43811))), ("buffer read offsets"));
--[[2937]] a = _new(Buffer, _arr({[0]=(0), (0), (0), (0)}, 4)); 
--[[2971]] a:writeUInt8((222), (0));
--[[2994]] tap:ok(((a[(0)])==((222))), ("writeUInt8"));
--[[3030]] a:writeUInt16LE((43779), (0));
--[[3057]] tap:ok(((a:readUInt16LE((0)))==((43779))), ("writeUInt16LE"));
--[[3110]] a:writeUInt16BE((939), (0));
--[[3135]] tap:ok(((a:readUInt16BE((0)))==((939))), ("writeUInt16BE"));
--[[3186]] a:writeUInt32LE((1109633795), (0));
--[[3218]] tap:ok(((a:readUInt32LE((0)))==((1109633795))), ("writeUInt32LE"));
--[[3276]] a:writeUInt32BE((61547330), (0));
--[[3306]] tap:ok(((a:readUInt32BE((0)))==((61547330))), ("writeUInt32BE"));
--[[3362]] a:writeInt8((-((25))), (0));
--[[3383]] tap:ok(((a:readInt8((0)))==((-((25))))), ("writeInt8"));
--[[3426]] a:writeInt16LE((-((21757))), (0));
--[[3453]] tap:ok(((a:readInt16LE((0)))==((-((21757))))), ("writeInt16LE"));
--[[3505]] a:writeInt16BE((939), (0));
--[[3529]] tap:ok(((a:readInt16BE((0)))==((939))), ("writeInt16BE"));
--[[3578]] a:writeInt32LE((1109633795), (0));
--[[3609]] tap:ok(((a:readInt32LE((0)))==((1109633795))), ("writeInt32LE"));
--[[3665]] a:writeInt32BE((61547330), (0));
--[[3694]] tap:ok(((a:readInt32BE((0)))==((61547330))), ("writeInt32BE"));
--[[3749]] f = _new(Buffer, (10)); 
--[[3773]] f:fill((0));
--[[3784]] f:writeFloatLE((1), (1));
--[[3806]] tap:ok(((f:readFloatLE((1)))==((1))), ("writeFloatLE"));
--[[3853]] console:log(("#"), f, f:readFloatLE((1)));
--[[3892]] f:writeFloatBE((1), (1));
--[[3914]] tap:ok(((f:readFloatBE((1)))==((1))), ("writeFloatBE"));
--[[3961]] console:log(("#"), f, f:readFloatBE((1)));
--[[4000]] f:writeDoubleLE((((1))/((3))), (1));
--[[4025]] tap:ok(((f:readDoubleLE((1)))==((((1))/((3))))), ("writeDoubleLE"));
--[[4076]] f:writeDoubleBE((((1))/((3))), (1));
--[[4101]] tap:ok(((f:readDoubleBE((1)))==((((1))/((3))))), ("writeDoubleBE"));
--[[4153]] a:fill((0));
--[[4163]] a:writeInt16LE((-((21757))), (1));
--[[4190]] tap:ok(((a:readUInt8((2)))==((171))), ("buffer write offsets"));
--[[4245]] a = _new(Buffer, _arr({[0]=(1), (2), (3)}, 3));  b = _new(Buffer, _arr({[0]=(4), (5), (6)}, 3));  c = _new(Buffer, _arr({[0]=(7), (8), (9), (10), (11)}, 5)); 
--[[4338]] abc = Buffer:concat(_arr({[0]=a, b, c}, 3)); 
--[[4374]] tap:ok(((abc.length)==(((((a.length)+(b.length)))+(c.length)))), ("buffer concat length"));
--[[4452]] tap:ok(arreq(_global, abc, _arr({[0]=(1), (2), (3), (4), (5), (6), (7), (8), (9), (10), (11)}, 11)), ("buffer concat works"));
--[[4532]] tap:ok(arreq(_global, abc:toJSON(), _arr({[0]=(1), (2), (3), (4), (5), (6), (7), (8), (9), (10), (11)}, 11)), ("buffer toJSON works"));
--[[4622]] b = Buffer(_global, _arr({[0]=(255), (255), (255), (255)}, 4)); 
--[[4657]] tap:ok(((b:readUInt8((0)))==((255))), ("readUInt8(0xff)"));
--[[4708]] tap:ok(((b:readInt8((0)))==((-((1))))), ("readInt8(0xff)"));
--[[4755]] tap:ok(((b:readUInt16LE((0)))==((65535))), ("readUInt32LE(0xffff)"));
--[[4816]] tap:ok(((b:readUInt16BE((0)))==((65535))), ("readUInt32BE(0xffff)"));
--[[4877]] tap:ok(((b:readUInt32LE((0)))==((4294967295))), ("readUInt32LE(0xffffffff)"));
--[[4946]] tap:ok(((b:readUInt32BE((0)))==((4294967295))), ("readUInt32BE(0xffffffff)"));
--[[5030]] console:log(("\010# hex"));
--[[5053]] b = _new(Buffer, ("deadbeefcafebabe"), ("hex")); 
--[[5100]] tap:ok(((b:readUInt32BE((0)))==((3735928559))), ("hex encoding"));
--[[5157]] tap:ok(((b:readUInt32BE((4)))==((3405691582))), ("hex encoding"));
--[[5214]] console:log(("#"), ((("0x"))+(b:readUInt32BE((0)):toString((16)))), ((("0x"))+(b:readUInt32BE((4)):toString((16)))));
--[[5309]] local _e, _noreturn = nil, {}
local _s, _r = _xpcall(function ()
--[[5315]] if _new(Buffer, ("gggg"), ("hex")) then end;
--[[5342]] tap:ok((false));
      if true then return _noreturn; end
    end, function (err)
        _e = err
    end);
if _s == false then
e = _e;
_r = (function ()
--[[5371]] tap:ok((true), ("invalid hex digits"));
  if true then return _noreturn; end
end)();
end;

if _r ~= _noreturn then
  return _r
end;
--[[5409]] local _e, _noreturn = nil, {}
local _s, _r = _xpcall(function ()
--[[5415]] if _new(Buffer, ("0"), ("hex")) then end;
--[[5439]] tap:ok((false));
      if true then return _noreturn; end
    end, function (err)
        _e = err
    end);
if _s == false then
e = _e;
_r = (function ()
--[[5468]] tap:ok((true), ("invalid hex length"));
  if true then return _noreturn; end
end)();
end;

if _r ~= _noreturn then
  return _r
end;
--[[5507]] console:log(("\010# base64"));
--[[5533]] b = _new(Buffer, ("aGVsbG8gd29ybGQ="), ("base64")); 
--[[5583]] tap:ok(((b:toString())==(("hello world"))), ("base64 encoding (padded)"));
--[[5650]] b = _new(Buffer, ("aGVsbG8gd29ybGQ"), ("base64")); 
--[[5699]] tap:ok(((b:toString())==(("hello world"))), ("base64 encoding (not padded)"));
--[[5770]] console:log(("#"), JSON:stringify(b:toString()));
--[[5819]] console:log(("\010# encoding"));
--[[5847]] tap:ok(((_new(Buffer, _new(Buffer, ("hello world")):toString(("base64")), ("base64")):toString())==(("hello world"))), ("str -> base64 -> str"));
--[[5974]] console:log(("#"), _new(Buffer, ("hello world")):toString(("base64")));
--[[6037]] console:log(("#"), _new(Buffer, _new(Buffer, ("hello world")):toString(("base64")), ("base64")));
--[[6122]] tap:ok(((_new(Buffer, _new(Buffer, ("hello world")):toString(("hex")), ("hex")):toString())==(("hello world"))), ("str -> hex -> str"));
--[[6240]] console:log(("#"), _new(Buffer, ("hello world")):toString(("hex")));
--[[6300]] console:log(("#"), _new(Buffer, _new(Buffer, ("hello world")):toString(("hex")), ("hex")));
--[[6389]] buf = _new(Buffer, (256)); 
--[[6416]] len = buf:write(("\194\189 + \194\188 = \194\190"), (4)); 
--[[6468]] console:log(("#"), ((((len)+((" bytes: "))))+(buf:toString(("utf8"), (4), (((4))+(len))))));
--[[6539]] tap:ok(((len)==((12))), ("written length is 12 byes"));
--[[6586]] tap:ok(((buf:slice((4), (((4))+((12)))):toString())==(("\194\189 + \194\188 = \194\190"))), ("result was written"));
--[[6693]] tap:ok(((require(_global, ("buffer"))["INSPECT_MAX_BYTES"])==((50))), ("default INSPECT_MAX_BYTES is 50"));
--[[6779]] require(_global, ("buffer"))["INSPECT_MAX_BYTES"] = (2);
--[[6820]] tap:ok(((Buffer(_global, _arr({[0]=(1), (2), (3)}, 3)):inspect())==(("<Buffer 01 02 ...>"))), ("inspect follows custom limit"));

return _module.exports;
end 
