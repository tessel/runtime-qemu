

return function (_ENV, _module)
local exports, module = _module.exports, _module;


--[[0]] a = _obj({
  ["b"]=(5),
  ["c"]=(6)
});
--[[18]] if (function () local _r = a.b; a.b = nil; return _r ~= nil; end)() then end;
--[[30]] console:log((function () local _r = a.c; a.c = nil; return _r ~= nil; end)());
--[[55]] console:log(a.b);

return _module.exports;
end 
