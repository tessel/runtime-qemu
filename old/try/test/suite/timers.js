

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, id, count, jk = tap, id, count, jk;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((5));
--[[45]] setTimeout(_global, (function (this)
--[[72]] tap:ok(((this)==(global)), ("\"this\" value in timer is global object"));
--[[140]] tap:ok((true), ("console.log of global works #TODO"));
end), (10));
--[[223]] id = setInterval(_global, (function (this)
--[[260]] tap:ok((false), ("error, interval was not cancelled"));
--[[314]] process:exit((1));
end), (100)); 
--[[339]] clearInterval(_global, id);
--[[359]] console:log(("# timeout id:"), id);
--[[393]] count = (0); 
--[[408]] jk = setInterval(_global, (function (this)
--[[444]] local _r = count; count = _r + 1;
--[[454]] clearInterval(_global, jk);
--[[474]] if ((count)>((1))) then
--[[493]] tap:ok((false), ("error, interval was not cancelled from inside interval"));
--[[567]] process:exit((1));
end;
end), (0)); 
--[[593]] setImmediate(_global, (function (this, arg1, arg2, arg3)
--[[637]] tap:ok(((arg1)~=((null))), ("args passed into callback"));
--[[689]] tap:ok(((arg2)==((null))), ("null args allowed in callback"));
--[[745]] tap:ok(((arg3)~=((null))), ("null args allowed in callback"));
end), (5), (null), (6));

return _module.exports;
end 
