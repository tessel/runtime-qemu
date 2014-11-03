

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, d, d0 = tap, d, d0;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((16));
--[[46]] tap:eq((_typeof(Date:now())), ("number"));
--[[83]] console:log(("# typeof Date.now"), (_typeof(Date:now())));
--[[135]] tap:eq((_typeof(Date(_global))), ("string"));
--[[167]] console:log((((_typeof(_new(Date))))==(("object"))));
--[[212]] if (not (((Date:now())>((0))))) then
--[[238]] _error(_new(Error, ("Invalid Date.now()")) or {})
end;
--[[280]] d = _new(Date); 
--[[300]] tap:eq(d:toString(), Date(_global));
--[[330]] console:log(("# toString"), d:toString());
--[[370]] tap:ok(((((d:getDate())>=((1))))and(((d:getDate())<=((31))))));
--[[417]] console:log(("# getDate"), d:getDate());
--[[455]] tap:ok(((((d:getDay())>=((0))))and(((d:getDay())<=((6))))));
--[[499]] console:log(("# getDay"), d:getDay());
--[[535]] tap:ok(((d:getFullYear())>=((1))));
--[[565]] console:log(("# getFullYear"), d:getFullYear());
--[[611]] tap:ok(((((d:getHours())>=((0))))and(((d:getHours())<=((23))))));
--[[660]] console:log(("# getHours"), d:getHours());
--[[700]] tap:ok(((((d:getMilliseconds())>=((0))))and(((d:getMilliseconds())<=((999))))));
--[[764]] console:log(("# getMilliseconds"), d:getMilliseconds());
--[[818]] tap:ok(((((d:getMinutes())>=((0))))and(((d:getMinutes())<=((59))))));
--[[871]] console:log(("# getMinutes"), d:getMinutes());
--[[915]] tap:ok(((((d:getMonth())>=((0))))and(((d:getMonth())<=((11))))));
--[[964]] console:log(("# getMonth"), d:getMonth());
--[[1004]] tap:ok(((((d:getSeconds())>=((0))))and(((d:getSeconds())<=((59))))));
--[[1057]] console:log(("# getSeconds"), d:getSeconds());
--[[1101]] tap:ok(((d:getTime())>=((0))));
--[[1127]] console:log(("# getTime"), d:getTime());
--[[1165]] tap:ok(((((d:getYear())>=((0))))and(((d:getYear())<=((200))))));
--[[1213]] console:log(("# getYear"), d:getYear());
--[[1252]] d0 = _new(Date, (0)); 
--[[1274]] tap:eq(d0:toISOString(), ("1970-01-01T00:00:00.000Z"));
--[[1328]] console:log(("# toISOString"), d0:toISOString());
--[[1376]] tap:eq(d0:toJSON(), ("1970-01-01T00:00:00.000Z"));
--[[1425]] console:log(("# toJSON"), d0:toJSON());
--[[1464]] tap:eq(_new(Date, ("10/Mar/2012:05:00:07 +0000")):valueOf(), (1331355607000));

return _module.exports;
end 
