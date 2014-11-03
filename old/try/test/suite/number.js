

return function (_ENV, _module)
local exports, module = _module.exports, _module;


--[[0]] console:log(("1..17"));
--[[98]] console:log(((((Number:isNaN(("NaN")))==((false)))) and {("ok")} or {("not ok - isNaN string")})[1]);
--[[174]] console:log(((((Number:isNaN(NaN))==((true)))) and {("ok")} or {("not ok - isNaN NaN")})[1]);
--[[244]] console:log(((((Number:isNaN((3)))==((false)))) and {("ok")} or {("not ok - isNaN integer")})[1]);
--[[318]] console:log(((((Number:isSafeInteger(("3")))==((false)))) and {("ok")} or {("not ok - isSafeInteger string")})[1]);
--[[408]] console:log(((((Number:isSafeInteger((((0))/((0)))))==((false)))) and {("ok")} or {("not ok - isSafeInteger NaN")})[1]);
--[[495]] console:log(((((Number:isSafeInteger(Infinity))==((false)))) and {("ok")} or {("not ok - isSafeInteger Infinity")})[1]);
--[[592]] console:log(((((Number:isSafeInteger((-(Infinity))))==((false)))) and {("ok")} or {("not ok - isSafeInteger -Infinity")})[1]);
--[[691]] console:log(((((Number:isSafeInteger((3.3)))==((false)))) and {("ok")} or {("not ok - isSafeInteger float")})[1]);
--[[780]] console:log(((((Number:isSafeInteger((2e+53)))==((false)))) and {("ok")} or {("not ok - isSafeInteger 2e53")})[1]);
--[[869]] console:log(((((Number:isSafeInteger((9007199254740991)))==((true)))) and {("ok")} or {("not ok - isSafeInteger 2e53 -1")})[1]);
--[[974]] console:log(((((Number:isSafeInteger((3)))==((true)))) and {("ok")} or {("not ok - isSafeInteger 3")})[1]);
--[[1057]] console:log(((((Number:parseInt(("4")))==((4)))) and {("ok")} or {("not ok - parseInt int string")})[1]);
--[[1137]] console:log(((((Number:parseInt(("0")))==((0)))) and {("ok")} or {("not ok - parseInt int string")})[1]);
--[[1217]] console:log(((isNaN(_global, Number:parseInt(("string")))) and {("ok")} or {("not ok - parseInt string")})[1]);
--[[1301]] console:log(((((Number:parseFloat(("4.3")))==((4.3)))) and {("ok")} or {("not ok - parseFloat float string")})[1]);
--[[1391]] console:log(((((Number:parseFloat(("0")))==((0)))) and {("ok")} or {("not ok - parseFloat float string")})[1]);
--[[1477]] console:log(((isNaN(_global, Number:parseFloat(("string")))) and {("ok")} or {("not ok - parseFloat string")})[1]);

return _module.exports;
end 
