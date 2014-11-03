

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local loopNum, outerLoop = loopNum, outerLoop;
--[[0]] loopNum = (0); 
--[[18]] console:log(("Starting outer loop."));
--[[55]] outerLoop = setInterval(_global, (function (this)
local myLoop = myLoop;
--[[97]] local _r = loopNum; loopNum = _r + 1;
--[[110]] console:log((".. Starting inner loop #"), loopNum);
--[[162]] myLoop = setInterval(_global, (function (this)
--[[203]] console:log((".. -- looped [10ms]"));
end), (10)); 
--[[251]] setTimeout(_global, (function (this)
--[[278]] console:log((((((".. Clearing inner loop #"))+(loopNum)))+((" after 50ms. (5 iterations)"))));
--[[365]] clearInterval(_global, myLoop);
end), (50));
end), (60)); 
--[[407]] setTimeout(_global, (function (this)
--[[434]] console:log(((((("Stopping outer loop after 1000ms ("))+((((((1000))/((60))))-((1))):toFixed((0)))))+((" iterations)"))));
--[[533]] clearInterval(_global, outerLoop);
end), (1000));

return _module.exports;
end 
