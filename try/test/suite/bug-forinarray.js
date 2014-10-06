

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, arr, had0, i = tap, arr, had0, i;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((13));
--[[46]] arr = _arr({}, 0); 
--[[60]] arr.hello = ("hi");
--[[78]] arr:push((1), (2), (3), (4), (5));
--[[104]] tap:ok(((arr[(0)])==((1))), ("first index was null"));
--[[150]] had0 = (false); 
--[[168]] for i in _pairs(arr) do 
i = ""+i; 
--[[190]] if ((((i)==((1))))and((not (had0)))) then
--[[215]] _error(_new(Error, ("1 came before 0")) or {})
end;
--[[255]] if ((i)==((0))) then
--[[271]] had0 = (true);
end;
--[[290]] tap:ok((((_typeof(i)))==(("string"))), ("for..in index is string"));
--[[348]] tap:ok(((arr[i])~=((null))), ("array string index is not null"));
end;

return _module.exports;
end 
