

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local fs, Writable, Readable, output, inputTest, writeTest = fs, Writable, Readable, output, inputTest, writeTest;
inputTest = (function () local inputTest = nil; inputTest = function (this, next)
local ins = ins;
--[[214]] ins = _new(Readable); 
--[[240]] ins.chunks = _arr({[0]=("HELLO"), ("WORLD")}, 2);
--[[275]] ins["_read"] = (function (this, value)
--[[310]] this:push(ins.chunks:shift());
end);
--[[348]] ins:pipe(fs:createWriteStream(output)):on(("end"), (function (this)
local txt = txt;
--[[422]] txt = fs:readFileSync(output, ("utf-8")); 
--[[472]] console:log(("# writestream"), txt);
--[[513]] console:log(((((txt)==(("HELLOWORLD")))) and {("ok")} or {("not ok")})[1]);
--[[572]] next(_global);
end));
end; inputTest:__defineGetter__("name", function () return "inputTest"; end); return inputTest; end)();

writeTest = (function () local writeTest = nil; writeTest = function (this, next)
local outs = outs;
--[[620]] outs = _new(Writable); 
--[[649]] outs.buffers = _arr({}, 0);
--[[670]] outs["_write"] = (function (this, chunk, encoding, callback)
--[[727]] this.buffers:push(chunk);
--[[757]] callback(_global);
end);
--[[775]] outs:on(("pipe"), (function (this, pipe)
local self = self;
--[[813]] self = this; 
--[[834]] pipe:on(("end"), (function (this)
--[[869]] self:emit(("buffer"), Buffer:concat(self.buffers));
end));
end));
--[[935]] fs:createReadStream(output):pipe(outs):on(("buffer"), (function (this, buf)
--[[1015]] console:log(("# readstream"), buf:toString());
--[[1065]] console:log(((((buf:toString())==(("HELLOWORLD")))) and {("ok")} or {("not ok")})[1]);
--[[1135]] next(_global);
end));
end; writeTest:__defineGetter__("name", function () return "writeTest"; end); return writeTest; end)();
--[[0]] fs = require(_global, ("fs")); 
--[[25]] Writable = require(_global, ("stream")).Writable; 
--[[68]] Readable = require(_global, ("stream")).Readable; 
--[[112]] output = ((____dirname)+(("/files_fs/output.txt"))); 
--[[162]] console:log(("1..2"));
--[[184]] 
--[[590]] 
--[[1154]] inputTest(_global, writeTest:bind(this, (function (this)
--[[1201]] local _e, _noreturn = nil, {}
local _s, _r = _xpcall(function ()
--[[1211]] fs:unlinkSync(output);
      if true then return _noreturn; end
    end, function (err)
        _e = err
    end);
if _s == false then
e = _e;
_r = (function ()

  if true then return _noreturn; end
end)();
end;

if _r ~= _noreturn then
  return _r
end;
--[[1253]] console:log(("# done"));
end)));

return _module.exports;
end 
