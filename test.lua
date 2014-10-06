

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local PI, SOLAR__MASS, DAYS__PER__YEAR, Body, Jupiter, Saturn, Uranus, Neptune, Sun, NBodySystem, n, bodies, i = PI, SOLAR__MASS, DAYS__PER__YEAR, Body, Jupiter, Saturn, Uranus, Neptune, Sun, NBodySystem, n, bodies, i;
Body = (function () local Body = nil; Body = function (this, x, y, z, vx, vy, vz, mass)
--[[244]] this.x = x;
--[[259]] this.y = y;
--[[274]] this.z = z;
--[[289]] this.vx = vx;
--[[306]] this.vy = vy;
--[[323]] this.vz = vz;
--[[340]] this.mass = mass;
end; Body:__defineGetter__("name", function () return "Body"; end); return Body; end)();

Jupiter = (function () local Jupiter = nil; Jupiter = function (this)
--[[549]] if true then return _new(Body, (4.841431442464721), (-((1.1603200440274284))), (-((0.10362204447112311))), (((0.001660076642744037))*(DAYS__PER__YEAR)), (((0.007699011184197404))*(DAYS__PER__YEAR)), (((-((0.0000690460016972063))))*(DAYS__PER__YEAR)), (((0.0009547919384243266))*(SOLAR__MASS))); end
end; Jupiter:__defineGetter__("name", function () return "Jupiter"; end); return Jupiter; end)();

Saturn = (function () local Saturn = nil; Saturn = function (this)
--[[877]] if true then return _new(Body, (8.34336671824458), (4.124798564124305), (-((0.4035234171143214))), (((-((0.002767425107268624))))*(DAYS__PER__YEAR)), (((0.004998528012349172))*(DAYS__PER__YEAR)), (((0.000023041729757376393))*(DAYS__PER__YEAR)), (((0.0002858859806661308))*(SOLAR__MASS))); end
end; Saturn:__defineGetter__("name", function () return "Saturn"; end); return Saturn; end)();

Uranus = (function () local Uranus = nil; Uranus = function (this)
--[[1204]] if true then return _new(Body, (12.894369562139131), (-((15.111151401698631))), (-((0.22330757889265573))), (((0.002964601375647616))*(DAYS__PER__YEAR)), (((0.0023784717395948095))*(DAYS__PER__YEAR)), (((-((0.000029658956854023756))))*(DAYS__PER__YEAR)), (((0.00004366244043351563))*(SOLAR__MASS))); end
end; Uranus:__defineGetter__("name", function () return "Uranus"; end); return Uranus; end)();

Neptune = (function () local Neptune = nil; Neptune = function (this)
--[[1533]] if true then return _new(Body, (15.379697114850917), (-((25.919314609987964))), (0.17925877295037118), (((0.0026806777249038932))*(DAYS__PER__YEAR)), (((0.001628241700382423))*(DAYS__PER__YEAR)), (((-((0.00009515922545197159))))*(DAYS__PER__YEAR)), (((0.000051513890204661145))*(SOLAR__MASS))); end
end; Neptune:__defineGetter__("name", function () return "Neptune"; end); return Neptune; end)();

Sun = (function () local Sun = nil; Sun = function (this)
--[[1857]] if true then return _new(Body, (0), (0), (0), (0), (0), (0), SOLAR__MASS); end
end; Sun:__defineGetter__("name", function () return "Sun"; end); return Sun; end)();

NBodySystem = (function () local NBodySystem = nil; NBodySystem = function (this, bodies)
local px, py, pz, size, i, b, m = px, py, pz, size, i, b, m;
--[[1953]] this.bodies = bodies;
--[[1978]] px = (0); 
--[[1995]] py = (0); 
--[[2012]] pz = (0); 
--[[2029]] size = this.bodies.length; 
--[[2063]] i = (0); 
while ((i)<(size)) do 

--[[2097]] b = this.bodies[i]; 
--[[2127]] m = b.mass; 
--[[2149]] px = px+((b.vx)*(m));
--[[2171]] py = py+((b.vy)*(m));
--[[2193]] pz = pz+((b.vz)*(m));

local _r = i; i = _r + 1;
end;
--[[2217]] this.bodies[(0)]:offsetMomentum(px, py, pz);
end; NBodySystem:__defineGetter__("name", function () return "NBodySystem"; end); return NBodySystem; end)();
--[[118]] PI = (3.141592653589793); 
--[[146]] SOLAR__MASS = (((((4))*(PI)))*(PI)); 
--[[176]] DAYS__PER__YEAR = (365.24); 
--[[205]] 
--[[361]] Body.prototype.offsetMomentum = (function (this, px, py, pz)
--[[417]] this.vx = (((-(px)))/(SOLAR__MASS));
--[[448]] this.vy = (((-(py)))/(SOLAR__MASS));
--[[479]] this.vz = (((-(pz)))/(SOLAR__MASS));
--[[510]] if true then return this; end
end);
--[[526]] 
--[[855]] 
--[[1182]] 
--[[1510]] 
--[[1838]] 
--[[1920]] 
--[[2261]] NBodySystem.prototype.advance = (function (this, dt)
local dx, dy, dz, distance, mag, size, i, bodyi, j, bodyj, i, body = dx, dy, dz, distance, mag, size, i, bodyi, j, bodyj, i, body;
--[[2310]] dx = nil;  dy = nil;  dz = nil;  distance = nil;  mag = nil; 
--[[2344]] size = this.bodies.length; 
--[[2379]] i = (0); 
while ((i)<(size)) do 

--[[2414]] bodyi = this.bodies[i]; 
--[[2448]] j = ((i)+((1))); 
while ((j)<(size)) do 

--[[2488]] bodyj = this.bodies[j]; 
--[[2525]] dx = ((bodyi.x)-(bodyj.x));
--[[2558]] dy = ((bodyi.y)-(bodyj.y));
--[[2591]] dz = ((bodyi.z)-(bodyj.z));
--[[2625]] distance = Math:sqrt(((((((dx)*(dx)))+(((dy)*(dy)))))+(((dz)*(dz)))));
--[[2679]] mag = ((dt)/(((((distance)*(distance)))*(distance))));
--[[2734]] bodyi.vx = bodyi.vx-((((dx)*(bodyj.mass)))*(mag));
--[[2778]] bodyi.vy = bodyi.vy-((((dy)*(bodyj.mass)))*(mag));
--[[2822]] bodyi.vz = bodyi.vz-((((dz)*(bodyj.mass)))*(mag));
--[[2867]] bodyj.vx = bodyj.vx+((((dx)*(bodyi.mass)))*(mag));
--[[2911]] bodyj.vy = bodyj.vy+((((dy)*(bodyi.mass)))*(mag));
--[[2955]] bodyj.vz = bodyj.vz+((((dz)*(bodyi.mass)))*(mag));

local _r = j; j = _r + 1;
end;

local _r = i; i = _r + 1;
end;
--[[3007]] i = (0); 
while ((i)<(size)) do 

--[[3042]] body = this.bodies[i]; 
--[[3075]] body.x = body.x+((dt)*(body.vx));
--[[3105]] body.y = body.y+((dt)*(body.vy));
--[[3135]] body.z = body.z+((dt)*(body.vz));

local _r = i; i = _r + 1;
end;
end);
--[[3167]] NBodySystem.prototype.energy = (function (this)
local dx, dy, dz, distance, e, size, i, bodyi, j, bodyj = dx, dy, dz, distance, e, size, i, bodyi, j, bodyj;
--[[3213]] dx = nil;  dy = nil;  dz = nil;  distance = nil; 
--[[3242]] e = (0); 
--[[3258]] size = this.bodies.length; 
--[[3293]] i = (0); 
while ((i)<(size)) do 

--[[3328]] bodyi = this.bodies[i]; 
--[[3363]] e = e+(((((0.5))*(bodyi.mass)))*(((((((bodyi.vx)*(bodyi.vx)))+(((bodyi.vy)*(bodyi.vy)))))+(((bodyi.vz)*(bodyi.vz))))));
--[[3490]] j = ((i)+((1))); 
while ((j)<(size)) do 

--[[3530]] bodyj = this.bodies[j]; 
--[[3567]] dx = ((bodyi.x)-(bodyj.x));
--[[3600]] dy = ((bodyi.y)-(bodyj.y));
--[[3633]] dz = ((bodyi.z)-(bodyj.z));
--[[3667]] distance = Math:sqrt(((((((dx)*(dx)))+(((dy)*(dy)))))+(((dz)*(dz)))));
--[[3721]] e = e-((((bodyi.mass)*(bodyj.mass)))/(distance));

local _r = j; j = _r + 1;
end;

local _r = i; i = _r + 1;
end;
--[[3780]] if true then return e; end
end);
--[[3794]] n = (500); 
--[[3807]] bodies = _new(NBodySystem, Array(this, Sun(this), Jupiter(this), Saturn(this), Uranus(this), Neptune(this))); 
--[[3898]] console:log(bodies:energy():toFixed((9)));
--[[3939]] i = (0); 
while ((i)<(n)) do 

--[[3964]] bodies:advance((0.01));

local _r = i; i = _r + 1;
end;
--[[3988]] console:log(bodies:energy():toFixed((9)));

return _module.exports;
end 
