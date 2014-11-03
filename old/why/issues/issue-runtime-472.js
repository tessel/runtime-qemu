

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, arr, compare, arr2 = tap, arr, compare, arr2;
--[[0]] tap = require(_global, ("../tap")); 
--[[29]] tap:count((5));
--[[43]] arr = _arr({[0]=(1), (2), (3), (4), (5)}, 5); 
--[[71]] compare = _arr({[0]=_arr({[0]=(0), (3), (4), (5)}, 4), _arr({[0]=(1), (0), (4), (5)}, 4), _arr({[0]=(1), (2), (0), (5)}, 4), _arr({[0]=(1), (2), (3), (0)}, 4)}, 4); 
--[[138]] arr:forEach((function (this, val, index)
local newArr = newArr;
--[[174]] if ((((index)+((1))))<(arr.length)) then
--[[206]] newArr = JSON:parse(JSON:stringify(arr)); 
--[[257]] newArr[((index)+((1)))] = (0);
--[[282]] newArr:splice(index, (1));
--[[311]] tap:eq(newArr:join((",")), compare[index]:join((",")), ((("array splice iteration "))+(index)));
end;
end));
--[[407]] arr2 = _arr({[0]=(1), (0), (2), (3)}, 4); 
--[[431]] arr2:shift();
--[[445]] tap:eq(arr2:join((",")), ("0,2,3"), ("array shift works with leading 0 index"));

return _module.exports;
end 
