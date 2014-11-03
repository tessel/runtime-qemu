

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, fruits, fruits, fruits, fruits, fruits, fruits = tap, fruits, fruits, fruits, fruits, fruits, fruits;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((6));
--[[45]] fruits = _arr({[0]=("Banana"), ("Orange"), ("Apple"), ("Mango"), ("Cherry")}, 5); 
--[[108]] fruits:splice((0), (4));
--[[129]] tap:eq(fruits:toString(), ("Cherry"), ("splice is correct w/ deleting at 0"));
--[[205]] fruits = _arr({[0]=("Banana"), ("Orange"), ("Apple"), ("Mango"), ("Cherry")}, 5); 
--[[268]] fruits:splice((0), (4), ("Pear"));
--[[297]] tap:eq(fruits:toString(), ("Pear,Cherry"), ("splice is correct w/ deleting and inserting at 0"));
--[[392]] fruits = _arr({[0]=("Banana"), ("Orange"), ("Apple"), ("Mango"), ("Cherry")}, 5); 
--[[455]] fruits:splice((0), (0), ("Pear"));
--[[484]] tap:eq(fruits:toString(), ("Pear,Banana,Orange,Apple,Mango,Cherry"), ("splice is correct w/ inserting at 0"));
--[[592]] fruits = _arr({[0]=("Banana"), ("Orange"), ("Apple"), ("Mango"), ("Cherry")}, 5); 
--[[655]] fruits:splice((1), (4));
--[[676]] tap:eq(fruits:toString(), ("Banana"), ("splice is correct w/ deleting at 1"));
--[[752]] fruits = _arr({[0]=("Banana"), ("Orange"), ("Apple"), ("Mango"), ("Cherry")}, 5); 
--[[815]] fruits:splice((1), (4), ("Pear"));
--[[844]] tap:eq(fruits:toString(), ("Banana,Pear"), ("splice is correct w/ deleting and inserting at 1"));
--[[939]] fruits = _arr({[0]=("Banana"), ("Orange"), ("Apple"), ("Mango"), ("Cherry")}, 5); 
--[[1002]] fruits:splice((1), (0), ("Pear"));
--[[1031]] tap:eq(fruits:toString(), ("Banana,Pear,Orange,Apple,Mango,Cherry"), ("splice is correct w/ inserting at 1"));

return _module.exports;
end 
