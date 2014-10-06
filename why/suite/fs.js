

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, fs, util, output, output2, peeped, havent, centuries, dir, dirchild, twisted, stat, stat = tap, fs, util, output, output2, peeped, havent, centuries, dir, dirchild, twisted, stat, stat;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((29));
--[[46]] fs = require(_global, ("fs")); 
--[[70]] util = require(_global, ("util")); 
--[[99]] tap:ok(Buffer:isBuffer(fs:readFileSync(((____dirname)+(("/files_fs/hello.txt"))))), ("fs.readFileSync is buffer"));
--[[204]] tap:ok((((_typeof(fs:readFileSync(((____dirname)+(("/files_fs/hello.txt"))), ("utf-8")))))==(("string"))), ("fs.readFileSync accepts encoding"));
--[[327]] tap:ok(util:isArray(fs:readdirSync(((____dirname)+(("/files_fs/"))))), ("fs.readdirSync is array"));
--[[522]] output = ((____dirname)+(("/files_fs/output.txt"))); 
--[[571]] output2 = ((____dirname)+(("/files_fs/output2.txt"))); 
--[[623]] peeped = ("YOU MIGHT THINK YOUVE PEEPED THE SCENE\010");  havent = ("YOU HAVENT\010"); 
--[[705]] fs:writeFileSync(output, peeped);
--[[739]] tap:ok(((fs:readFileSync(output, ("utf-8")))==(peeped)), ("writeFileSync == readFileSync of same file"));
--[[837]] fs:appendFileSync(output, havent);
--[[872]] tap:ok(((fs:readFileSync(output, ("utf-8")))==(((peeped)+(havent)))), ("appendFileSync works"));
--[[958]] tap:ok(((fs:readdirSync(((____dirname)+(("/files_fs")))):indexOf(("output.txt")))>((-((1))))), ("written file exists in readdirSync"));
--[[1072]] tap:ok(((fs:existsSync(output))==((true))), ("written file exists"));
--[[1134]] fs:unlinkSync(output);
--[[1156]] tap:ok(((fs:readdirSync(((____dirname)+(("/files_fs")))):indexOf(("output.txt")))==((-((1))))), ("unlinked file no longer in readdirSync"));
--[[1275]] tap:ok(((fs:existsSync(output))==((false))), ("deleted file no longer exists"));
--[[1349]] fs:writeFileSync(output, ("THE WATERED DOWN ONE, THE ONE YOU KNOW\010"));
--[[1419]] tap:ok(((fs:readdirSync(((____dirname)+(("/files_fs")))):indexOf(("output.txt")))>((-((1))))), ("written file exists in readdirSync..."));
--[[1536]] fs:renameSync(output, output2);
--[[1568]] tap:ok(((fs:existsSync(output))==((false))), ("renamed file doesnt still exist"));
--[[1643]] tap:ok(((fs:existsSync(output2))==((true))), ("but under its new name does"));
--[[1714]] tap:ok(((fs:readdirSync(((____dirname)+(("/files_fs")))):indexOf(("output2.txt")))>((-((1))))), ("and is in new position"));
--[[1817]] fs:unlinkSync(output2);
--[[1842]] centuries = ("WAS MADE UP CENTURIES AGO\010"); 
--[[1889]] fs:writeFileSync(output, centuries);
--[[1926]] tap:ok(((fs:readFileSync(output).length)==(centuries.length)), ("file length matches writeFileSync"));
--[[2023]] fs:truncateSync(output);
--[[2048]] tap:ok(((fs:readFileSync(output).length)==((0))), ("truncated file length is 0"));
--[[2123]] fs:unlinkSync(output);
--[[2178]] dir = ((____dirname)+(("/files_fs/theymadeitsound"))); 
--[[2229]] dirchild = ((____dirname)+(("/files_fs/theymadeitsound/allwackandcorny"))); 
--[[2301]] console:log(("# mkdir"));
--[[2325]] tap:ok(((fs:readdirSync(((____dirname)+(("/files_fs")))):indexOf(("theymadeitsound")))==((-((1))))), ("mkdir before is missing"));
--[[2434]] fs:mkdirSync(dir);
--[[2453]] tap:ok(((fs:readdirSync(((____dirname)+(("/files_fs")))):indexOf(("theymadeitsound")))>((-((1))))), ("mkdir after is there"));
--[[2558]] local _e, _noreturn = nil, {}
local _s, _r = _xpcall(function ()
--[[2565]] fs:unlinkSync(dir);
--[[2586]] tap:ok((false), ("you should not be able to unlink dir"));
      if true then return _noreturn; end
    end, function (err)
        _e = err
    end);
if _s == false then
e = _e;
_r = (function ()
--[[2655]] tap:ok((true), ("cannot unlink dir"));
  if true then return _noreturn; end
end)();
end;

if _r ~= _noreturn then
  return _r
end;
--[[2691]] fs:writeFileSync(dirchild, ("YES ITS AWFUL BLASTED BORING\010"));
--[[2753]] tap:ok(((fs:readdirSync(dir):indexOf(("allwackandcorny")))>((-((1))))), ("mkdir inside mkdir works"));
--[[2842]] local _e, _noreturn = nil, {}
local _s, _r = _xpcall(function ()
--[[2849]] fs:rmdirSync(dir);
--[[2869]] tap:ok((false), ("you should not be able to remove non-empty dir"));
      if true then return _noreturn; end
    end, function (err)
        _e = err
    end);
if _s == false then
e = _e;
_r = (function ()
--[[2948]] tap:ok((true), ("cannot rmdir non-empty dir"));
  if true then return _noreturn; end
end)();
end;

if _r ~= _noreturn then
  return _r
end;
--[[2993]] fs:unlinkSync(dirchild);
--[[3018]] tap:ok(((fs:readdirSync(dir):indexOf(("allwackandcorny")))==((-((1))))), ("child dir file can be unlinked"));
--[[3114]] fs:rmdirSync(dir);
--[[3133]] tap:ok(((fs:readdirSync(((____dirname)+(("/files_fs")))):indexOf(("theymadeitsound")))==((-((1))))), ("delete dir after empty"));
--[[3241]] console:log((""));
--[[3268]] console:log(("# stats"));
--[[3292]] twisted = ("TWISTED FICTION\010"); 
--[[3327]] fs:writeFileSync(output, twisted);
--[[3362]] stat = fs:statSync(output); 
--[[3394]] tap:ok(((stat.size)==(twisted.length)), ("filesize of written file is correct"));
--[[3470]] console:log(("#"), stat.size, twisted.length);
--[[3514]] tap:ok(((stat:isFile())==((true))), ("file isFile"));
--[[3560]] tap:ok(((stat:isDirectory())==((false))), ("file isDirectory"));
--[[3617]] stat = fs:statSync(((____dirname)+(("/files_fs/")))); 
--[[3667]] tap:ok(((stat:isFile())==((false))), ("dir isFile"));
--[[3712]] tap:ok(((stat:isDirectory())==((true))), ("dir isDirectory"));
--[[3767]] fs:unlinkSync(output);
--[[3790]] console:log((""));
--[[3809]] setImmediate(_global, (function (this)
local sick = sick;
--[[3837]] sick = ("SICK ADDICTION"); 
--[[3867]] fs:writeFileSync(output, sick);
--[[3900]] fs:readFile(output, ("utf-8"), (function (this, err, str)
--[[3953]] tap:ok(((str)==(sick)), ("readFile is async and works"));
--[[4007]] fs:unlinkSync(output);
--[[4032]] fs:readFile(output, ("utf-8"), (function (this, err, str)
--[[4086]] tap:ok(err, ("readFile can return (not throw) err"));
end));
end));
end));

return _module.exports;
end 
