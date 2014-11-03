

return function (_ENV, _module)
local exports, module = _module.exports, _module;


--[[0]] if (function (this)
local Peripheral, Descriptor, Characteristic, Service, Messenger, UUID, Address, attributes, events, util, async, use, BluetoothController, BluetoothI2C, BluetoothPin = Peripheral, Descriptor, Characteristic, Service, Messenger, UUID, Address, attributes, events, util, async, use, BluetoothController, BluetoothI2C, BluetoothPin;
use = (function () local use = nil; use = function (this, hardware, callback)
local controller = controller;
--[[917]] controller = _new(BluetoothController, hardware, callback); 
--[[984]] if true then return controller; end
end; use:__defineGetter__("name", function () return "use"; end); return use; end)();

BluetoothController = (function () local BluetoothController = nil; BluetoothController = function (this, hardware, callback)
--[[1442]] this.hardware = hardware;
--[[1472]] this.isAdvertising = (false);
--[[1504]] this.messenger = _new(Messenger, hardware);
--[[1550]] this["_connectedPeripherals"] = _obj({
  
});
--[[1587]] this["_discoveredPeripherals"] = _obj({
  
});
--[[1626]] this["_firmwareVersionHandle"] = (17);
--[[1664]] this["_maxNumValues"] = _obj({
  [("1.0.1")]=(12)
});
--[[1705]] this["_localHandles"] = _arr({[0]=(21), (25), (29), (33), (37), (41), (45), (49), (53), (57), (61), (65)}, 12);
--[[1781]] this["_MITMEnabled"] = (false);
--[[1812]] this["_minKeySize"] = (7);
--[[1839]] this.messenger:on(("scanStart"), this.onScanStart:bind(this));
--[[1904]] this.messenger:on(("scanStop"), this.onScanStop:bind(this));
--[[1967]] this.messenger:on(("discover"), this.onDiscover:bind(this));
--[[2030]] this.messenger:on(("connectionStatus"), this.onConnectionStatus:bind(this));
--[[2109]] this.messenger:on(("disconnect"), this.onDisconnect:bind(this));
--[[2176]] this.messenger:on(("groupFound"), this.onGroupFound:bind(this));
--[[2243]] this.messenger:on(("completedProcedure"), this.onCompletedProcedure:bind(this));
--[[2326]] this.messenger:on(("findInformationFound"), this.onFindInformationFound:bind(this));
--[[2413]] this.messenger:on(("attributeValue"), this.onAttributeValue:bind(this));
--[[2488]] this.messenger:on(("remoteWrite"), this.onRemoteWrite:bind(this));
--[[2557]] this.messenger:on(("remoteStatus"), this.onRemoteStatus:bind(this));
--[[2628]] this.messenger:on(("portStatus"), this.onPortStatus:bind(this));
--[[2695]] this.messenger:on(("ADCRead"), this.onADCRead:bind(this));
--[[2756]] this.messenger:on(("bondStatus"), this.onBondStatus:bind(this));
--[[2897]] this.messenger:once(("ready"), this.bootSequence:bind(this, callback));
--[[3014]] this.messenger:once(("error"), this.bootSequence:bind(this, callback));
end; BluetoothController:__defineGetter__("name", function () return "BluetoothController"; end); return BluetoothController; end)();

BluetoothI2C = (function () local BluetoothI2C = nil; BluetoothI2C = function (this, messenger, address)
--[[53604]] this.messenger = messenger;
--[[53636]] this.address = _bit.lshift(_G.tointegervalue(address),_G.tointegervalue((1)));
end; BluetoothI2C:__defineGetter__("name", function () return "BluetoothI2C"; end); return BluetoothI2C; end)();

BluetoothPin = (function () local BluetoothPin = nil; BluetoothPin = function (this, controller, port, pin)
--[[54879]] this["_port"] = port;
--[[54902]] this["_pin"] = pin;
--[[54923]] this["_controller"] = controller;
--[[54958]] this.direction = ("input");
--[[54988]] this.value = (false);
--[[55012]] this.interruptOn = (null);
end; BluetoothPin:__defineGetter__("name", function () return "BluetoothPin"; end); return BluetoothPin; end)();
--[[17]] Peripheral = require(_global, ("./lib/peripheral")); 
--[[65]] Descriptor = require(_global, ("./lib/descriptor")); 
--[[113]] Characteristic = require(_global, ("./lib/characteristic")); 
--[[169]] Service = require(_global, ("./lib/service")); 
--[[211]] Messenger = require(_global, ("./lib/messenger")); 
--[[257]] UUID = require(_global, ("./lib/uuid")); 
--[[293]] Address = require(_global, ("./lib/address")); 
--[[335]] attributes = require(_global, ("./lib/attributes.json")); 
--[[388]] events = require(_global, ("events")); 
--[[422]] util = require(_global, ("util")); 
--[[452]] async = require(_global, ("async")); 
--[[878]] 
--[[1387]] 
--[[3091]] util:inherits(BluetoothController, events.EventEmitter);
--[[3151]] BluetoothController.prototype.bootSequence = (function (this, callback, err)
--[[3255]] if (not (err)) then
--[[3273]] this:createGPIOs();
--[[3298]] setImmediate(_global, (function (this)
--[[3332]] this:emit(("ready"));
end):bind(this));
else
--[[3420]] setImmediate(_global, (function (this)
--[[3454]] this:emit(("error"), err);
end):bind(this));
end;
--[[3511]] this.messenger:removeAllListeners(("error"));
--[[3559]] this.messenger:removeAllListeners(("ready"));
--[[3633]] if ((callback)and(callback(_global, err))) then end;
end);
--[[3667]] BluetoothController.prototype.reset = (function (this, callback)
--[[3730]] this.messenger:reset(callback);
end);
--[[3910]] BluetoothController.prototype.onScanStart = (function (this, err, result)
--[[3982]] this:emit(("scanStart"), err);
end);
--[[4018]] BluetoothController.prototype.onScanStop = (function (this, err, result)
--[[4089]] this:emit(("scanStop"), err);
end);
--[[4124]] BluetoothController.prototype.onDiscover = (function (this, peripheralData)
--[[4280]] this:getPeripheralFromData(peripheralData.rssi, peripheralData.data, peripheralData.sender, peripheralData["address_type"], (function (this, peripheral, undiscovered)
--[[4516]] if ((undiscovered)or(this["_allowDuplicates"])) then
--[[4642]] if (((not (this.filteredUUIDs.length)))or(this:matchAdvDataUUID(peripheralData.data))) then
--[[4760]] setImmediate(_global, (function (this)
--[[4798]] this:emit(("discover"), peripheral);
end):bind(this));
end;
end;
end):bind(this));
end);
--[[4902]] BluetoothController.prototype.matchAdvDataUUID = (function (this, data)
local i, datum, j, uuid, k, filter = i, datum, j, uuid, k, filter;
--[[4972]] for i in _pairs(data) do 
i = ""+i; 
--[[5000]] datum = data[i]; 
--[[5072]] if ((((datum.typeFlag)>=((2))))and(((datum.typeFlag)<=((7))))) then
--[[5169]] for j in _pairs(datum.data) do 
j = ""+j; 
--[[5234]] uuid = datum.data[j]; 
--[[5298]] uuid = uuid:substr((2)):toLowerCase();
--[[5380]] for k in _pairs(this.filteredUUIDs) do 
k = ""+k; 
--[[5459]] filter = this.filteredUUIDs[k]; 
--[[5538]] if ((filter)==(uuid)) then
--[[5604]] if true then return (true); end
end;
end;
end;
end;
end;
--[[5697]] if true then return (false); end
end);
--[[5718]] BluetoothController.prototype.onConnectionStatus = (function (this, status)
--[[5834]] if this.advertising then
--[[5923]] setImmediate(_global, (function (this)
--[[5957]] this:emit(("connect"), status.connection);
end):bind(this));
else
--[[6102]] this:getPeripheralFromData((null), (null), status.address, status["address_type"], (function (this, peripheral, undiscovered)
--[[6224]] if peripheral then
--[[6301]] peripheral.connection = status.connection;
--[[6354]] peripheral.flags = status.flags;
--[[6397]] peripheral.bondHandle = status.bonding;
--[[6491]] this["_connectedPeripherals"][peripheral.connection] = peripheral;
--[[6652]] if _bit.band(_G.tointegervalue(peripheral.flags),_G.tointegervalue(_bit.lshift(_G.tointegervalue((1)),_G.tointegervalue((2))))) then
--[[6699]] peripheral.connected = (true);
--[[6740]] setImmediate(_global, (function (this)
--[[6780]] this:emit(("connect"), peripheral);
end):bind(this));
end;
end;
end):bind(this));
end;
--[[6894]] this:emit(("connectionStatus"), status);
end);
--[[6940]] BluetoothController.prototype.onDisconnect = (function (this, response)
local peripheral = peripheral;
--[[7011]] peripheral = this["_connectedPeripherals"][response.connection]; 
--[[7138]] if peripheral then
--[[7185]] peripheral.flags = (0);
--[[7213]] peripheral.connection = (null);
--[[7248]] peripheral.connected = (false);
--[[7309]] setImmediate(_global, (function (this)
--[[7343]] this:emit(("disconnect"), peripheral, response.reason);
end):bind(this));
else
--[[7515]] setImmediate(_global, (function (this)
--[[7549]] this:emit(("disconnect"), response.connection, response.reason);
end):bind(this));
end;
end);
--[[7696]] BluetoothController.prototype.onGroupFound = (function (this, group)
--[[7763]] this:emit(("groupFound"), group);
end);
--[[7856]] BluetoothController.prototype.onCompletedProcedure = (function (this, procedure)
--[[7935]] this:emit(("completedProcedure"), procedure);
end);
--[[8049]] BluetoothController.prototype.onFindInformationFound = (function (this, info)
--[[8125]] this:emit(("findInformationFound"), info);
end);
--[[8227]] BluetoothController.prototype.onAttributeValue = (function (this, value)
local peripheral, characteristic, peripheral, characteristic = peripheral, characteristic, peripheral, characteristic;
--[[8328]] if ((value.type)==((1))) then
--[[8399]] peripheral = this["_connectedPeripherals"][value.connection]; 
--[[8503]] if peripheral then
--[[8578]] characteristic = peripheral.characteristics[value.atthandle]; 
--[[8689]] if characteristic then
--[[8748]] characteristic.value = value.value;
--[[8820]] this:emit(("notification"), characteristic, characteristic.value);
--[[8895]] peripheral:emit(("notification"), characteristic, characteristic.value);
--[[8976]] characteristic:emit(("notification"), characteristic.value);
end;
end;
else
if ((((value.type)==((2))))or(((value.type)==((5))))) then
--[[9188]] peripheral = this["_connectedPeripherals"][value.connection]; 
--[[9292]] if peripheral then
--[[9367]] characteristic = peripheral.characteristics[value.atthandle]; 
--[[9478]] if characteristic then
--[[9537]] characteristic.value = value.value;
--[[9609]] this:emit(("indication"), characteristic, characteristic.value);
--[[9682]] peripheral:emit(("indication"), characteristic, characteristic.value);
--[[9761]] characteristic:emit(("indication"), characteristic.value);
end;
end;
end;
end;
--[[9847]] setImmediate(_global, (function (this)
--[[9879]] this:emit(("attributeValue"), value);
end):bind(this));
end);
--[[9941]] BluetoothController.prototype.onRemoteWrite = (function (this, value)
local index = index;
--[[10057]] if ((value.reason)==((2))) then
--[[10089]] this.messenger:remoteWriteAck(value.connection, (0), (function (this, err, response)

end));
end;
--[[10248]] index = this["_localHandles"]:indexOf(value.handle); 
--[[10306]] if ((index)~=((-((1))))) then
--[[10331]] setImmediate(_global, (function (this)
--[[10365]] this:emit(("remoteWrite"), value.connection, index, value.value);
end):bind(this));
end;
end);
--[[10463]] BluetoothController.prototype.onRemoteStatus = (function (this, status)
local index, action = index, action;
--[[10533]] index = this["_localHandles"]:indexOf(status.handle); 
--[[10592]] if ((index)~=((-((1))))) then
--[[10617]] action = nil; 
--[[10635]] if ((status.flags)==((0))) then
--[[10669]] action = ("remoteUpdateStop");
end;
--[[10712]] if ((status.flags)==((1))) then
--[[10746]] action = ("remoteNotification");
else
if ((status.flags)==((2))) then
--[[10830]] action = ("remoteIndication");
end;
end;
--[[10874]] setImmediate(_global, (function (this)
--[[10908]] this:emit(action, index);
end):bind(this));
end;
end);
--[[10968]] BluetoothController.prototype.onPortStatus = (function (this, portStatus)
local id, gpio, type = id, gpio, type;
--[[11069]] for id in _pairs(this.gpios) do 
id = ""+id; 
--[[11104]] gpio = this.gpios[id]; 
--[[11177]] if ((((gpio["_port"])==(portStatus.port)))and(_bit.band(_G.tointegervalue(portStatus.irq),_G.tointegervalue(_bit.lshift(_G.tointegervalue((1)),_G.tointegervalue(gpio["_pin"])))))) then
--[[11306]] type = ((_bit.band(_G.tointegervalue(portStatus.state),_G.tointegervalue(_bit.lshift(_G.tointegervalue((1)),_G.tointegervalue(gpio["_pin"]))))) and {("rise")} or {("fall")})[1]; 
--[[11435]] setImmediate(_global, (function (this)
--[[11471]] gpio:emit(("change"), (null), portStatus.timestamp, type);
--[[11536]] gpio:emit(type, (null), portStatus.timestamp, type);
end));
end;
end;
end);
--[[11620]] BluetoothController.prototype.onADCRead = (function (this, adcRead)
--[[11686]] this:emit(("ADCRead"), adcRead);
end);
--[[11724]] BluetoothController.prototype.onBondStatus = (function (this, bondStatus)
--[[11796]] this:emit(("bondStatus"), bondStatus);
end);
--[[11981]] BluetoothController.prototype.startScanning = (function (this, options, callback)
--[[12137]] if (((_typeof(options)))==(("function"))) then
--[[12179]] callback = options;
--[[12205]] options = _obj({
  
});
end;
--[[12230]] this.allowDuplications = ((options.allowDuplicates) and {(true)} or {(false)})[1];
--[[12302]] this.filteredUUIDs = ((options.serviceUUIDs) and {options.serviceUUIDs} or {_arr({}, 0)})[1];
--[[12416]] this["_discoveredPeripherals"] = _obj({
  
});
--[[12477]] this.messenger:startScanning(this.manageRequestResult:bind(this, ("scanStart"), callback));
end);
--[[12574]] BluetoothController.prototype.stopScanning = (function (this, callback)
--[[12644]] this.messenger:stopScanning(this.manageRequestResult:bind(this, ("scanStop"), callback));
end);
--[[12739]] BluetoothController.prototype.manageRequestResult = (function (this, event, callback, err, response)
--[[12870]] if (not (err)) then
--[[12912]] setImmediate(_global, (function (this)
--[[12946]] this:emit(event);
end):bind(this));
else
--[[13008]] setImmediate(_global, (function (this)
--[[13042]] this:emit(("error"), err);
end):bind(this));
end;
--[[13124]] if ((callback)and(callback(_global, err))) then end;
end);
--[[13157]] if g then end;
--[[13161]] BluetoothController.prototype.getPeripheralFromData = (function (this, rssi, data, address, addressType, callback)
local addr, peripheral = addr, peripheral;
--[[13275]] addr = _new(Address, address); 
--[[13394]] peripheral = this["_discoveredPeripherals"][addr:toString()]; 
--[[13502]] if (not (peripheral)) then
--[[13575]] peripheral = _new(Peripheral, this, rssi, data, addr);
--[[13708]] peripheral.addressType = addressType;
--[[13802]] this["_discoveredPeripherals"][addr:toString()] = peripheral;
--[[13868]] if ((callback)and(callback(_global, peripheral, (true)))) then end;
else
--[[13931]] if ((callback)and(callback(_global, peripheral, (false)))) then end;
end;
end);
--[[13985]] BluetoothController.prototype.connect = (function (this, peripheral, callback)
--[[14062]] this.messenger:connect(peripheral.address:toBuffer(), peripheral.addressType, (function (this, err, response)
local self, connectCallback = self, connectCallback;
connectCallback = (function () local connectCallback = nil; connectCallback = function (this, connectedPeripheral)
--[[14423]] if ((peripheral)==(connectedPeripheral)) then
--[[14514]] self:removeListener(("connect"), connectCallback);
--[[14609]] if ((callback)and(callback(_global))) then end;
--[[14646]] setImmediate(_global, (function (this)
--[[14726]] self:emit(("connect"), peripheral);
--[[14774]] peripheral:emit(("connect"));
end));
end;
end; connectCallback:__defineGetter__("name", function () return "connectCallback"; end); return connectCallback; end)();
--[[14203]] if err then
--[[14251]] if true then return ((callback)and(callback(_global, err))); end
else
--[[14340]] self = this; 
--[[14365]] 
--[[14839]] 
--[[14889]] this:on(("connect"), connectCallback);
end;
end):bind(this));
end);
--[[14960]] BluetoothController.prototype.disconnect = (function (this, peripheral, callback)
--[[15040]] this.messenger:disconnect(peripheral.connection, (function (this, err, response)
--[[15152]] if err then
--[[15200]] if true then return ((callback)and(callback(_global, err))); end
else
--[[15303]] this:on(("disconnect"), ((function () local disconnectCallback = nil; disconnectCallback = function (this, disconnectedPeripheral)
--[[15389]] if ((disconnectedPeripheral)==(peripheral)) then
--[[15483]] this:removeListener(("disconnect"), disconnectCallback);
--[[15584]] if ((callback)and(callback(_global, reason))) then end;
--[[15627]] setImmediate(_global, (function (this)
--[[15707]] peripheral:emit(("disconnect"), reason);
end):bind(this));
end;
end; disconnectCallback:__defineGetter__("name", function () return "disconnectCallback"; end); return disconnectCallback; end)()):bind(this));
end;
end):bind(this));
end);
--[[15841]] BluetoothController.prototype.discoverAllAttributes = (function (this, peripheral, callback)
--[[15988]] this:discoverAllServicesAndCharacteristics(peripheral, (function (this, err, results)
local funcs, characteristic = funcs, characteristic;
--[[16074]] funcs = _arr({}, 0); 
--[[16096]] for characteristic in _pairs(results.characteristics) do 
characteristic = ""+characteristic; 
--[[16158]] funcs:push(this.discoverDescriptorsOfCharacteristic:bind(this, results.characteristics[characteristic]));
end;
--[[16325]] async:series(funcs, (function (this, err, charDescriptors)
local allDescriptors, i, descriptor = allDescriptors, i, descriptor;
--[[16415]] allDescriptors = _arr({}, 0); 
--[[16488]] for i in _pairs(charDescriptors) do 
i = ""+i; 
--[[16578]] for descriptor in _pairs(charDescriptors[i]) do 
descriptor = ""+descriptor; 
--[[16670]] allDescriptors:push(charDescriptors[i][descriptor]);
end;
end;
--[[16805]] results[("descriptors")] = allDescriptors;
--[[16884]] if ((callback)and(callback(_global, err, results))) then end;
end));
end):bind(this));
end);
--[[16956]] BluetoothController.prototype.discoverAllServices = (function (this, peripheral, callback)
--[[17047]] this:discoverServices(peripheral, _arr({}, 0), callback);
end);
--[[17103]] BluetoothController.prototype.discoverServices = (function (this, peripheral, filter, callback)
--[[17243]] this:serviceDiscovery(peripheral, (function (this, err, allServices)
--[[17312]] if err then
--[[17331]] if true then return ((callback)and(callback(_global, err))); end
else
--[[17394]] this:attributeDiscoveryHandler(err, filter, allServices, (function (this, err, services)
--[[17519]] if ((callback)and(callback(_global, err, services))) then end;
--[[17567]] if (((not (err)))and(services.length)) then
--[[17655]] setImmediate(_global, (function (this)
--[[17695]] this:emit(("servicesDiscover"), services);
--[[17750]] peripheral:emit(("servicesDiscover"), services);
end):bind(this));
end;
end):bind(this));
end;
end):bind(this));
end);
--[[17928]] BluetoothController.prototype.discoverIncludedServices = (function (this, peripheral, serviceUUID)
--[[18026]] this:on(("groupFound"), this.createService);
--[[18072]] this.messenger:discoverIncludedServices(peripheral, serviceUUID, callback);
end);
--[[18155]] BluetoothController.prototype.serviceDiscovery = (function (this, peripheral, callback)
local services, groupFoundListener, self = services, groupFoundListener, self;
--[[18242]] services = _arr({}, 0); 
--[[18329]] groupFoundListener = this.createServiceFromGroup:bind(this, peripheral, services); 
--[[18421]] this:on(("groupFound"), groupFoundListener);
--[[18469]] self = this; 
--[[18576]] this:on(("completedProcedure"), ((function () local serviceDiscoveryComplete = nil; serviceDiscoveryComplete = function (this, procedure)
--[[18707]] if ((procedure.connection)==(peripheral.connection)) then
--[[18801]] self:removeListener(("groupFound"), groupFoundListener);
--[[18864]] self:removeListener(("completedProcedure"), serviceDiscoveryComplete);
--[[18971]] if ((callback)and(callback(_global, (null), services))) then end;
end;
end; serviceDiscoveryComplete:__defineGetter__("name", function () return "serviceDiscoveryComplete"; end); return serviceDiscoveryComplete; end)()));
--[[19089]] this.messenger:discoverServices(peripheral, (function (this, err, response)
--[[19214]] if err then
--[[19270]] if true then return ((callback)and(callback(_global, err))); end
end;
end):bind(this));
end);
--[[19337]] BluetoothController.prototype.attributeDiscoveryHandler = (function (this, err, filter, attributes, callback)
local ret, i, match, j = ret, i, match, j;
--[[19485]] if err then
--[[19502]] if ((callback)and(callback(_global, err))) then end;
--[[19536]] setImmediate(_global, (function (this)
--[[19570]] this:emit(("error"), err);
end):bind(this));
--[[19623]] if true then return ; end
else
--[[19699]] ret = _arr({}, 0); 
--[[19781]] if ((filter.length)~=((0))) then
--[[19865]] i = (0); 
while ((i)<(filter.length)) do 

--[[19959]] match = filter[i]:toLowerCase(); 
--[[20065]] j = (0); 
while ((j)<(attributes.length)) do 

--[[20176]] if ((attributes[j].uuid:toString())==(match)) then
--[[20273]] ret:push(attributes[j]);
--[[20312]] if true then break; end;
end;

local _r = j; j = _r + 1;
end;

local _r = i; i = _r + 1;
end;
else
--[[20436]] ret = attributes;
end;
--[[20496]] if ((callback)and(callback(_global, (null), ret))) then end;
end;
end);
--[[20542]] BluetoothController.prototype.createServiceFromGroup = (function (this, peripheral, ret, groupItem)
local uuid, service = uuid, service;
--[[20679]] if ((groupItem.connection)==(peripheral.connection)) then
--[[20795]] uuid = _new(UUID, groupItem.uuid); 
--[[20839]] service = nil; 
--[[20905]] if (not ((function () local _r =  peripheral[uuid:toString()]; service  = _r; return _r; end)())) then
--[[20991]] service = _new(Service, peripheral, uuid, groupItem.start, groupItem["end"]);
--[[21136]] peripheral:syncService(service);
end;
--[[21248]] ret:push(service);
end;
end);
--[[21280]] BluetoothController.prototype.discoverAllCharacteristics = (function (this, peripheral, callback)
--[[21377]] this:discoverAllServices(peripheral, (function (this, err, services)
local characteristics, self, discoveryListener = characteristics, self, discoveryListener;
--[[21446]] if err then
--[[21465]] if true then return ((callback)and(callback(_global, err))); end
else
--[[21528]] characteristics = _arr({}, 0); 
--[[21563]] self = this; 
--[[21589]] discoveryListener = this.createCharacteristicFromInformationFound:bind(this, peripheral, characteristics); 
--[[21709]] this:on(("findInformationFound"), discoveryListener);
--[[21770]] this:on(("completedProcedure"), ((function () local charDiscoveryComplete = nil; charDiscoveryComplete = function (this, procedure)
--[[21854]] if ((procedure.connection)==(peripheral.connection)) then
--[[21921]] self:removeListener(("findInformationFound"), discoveryListener);
--[[21997]] self:removeListener(("completedProcedure"), charDiscoveryComplete);
--[[22112]] if ((procedure.result)~=((0))) then
--[[22156]] if ((callback)and(callback(_global, procedure.result, (null)))) then end;
else
--[[22250]] if ((callback)and(callback(_global, (null), characteristics))) then end;
--[[22310]] setImmediate(_global, (function (this)
--[[22352]] self:emit(("characteristicsDiscover"), characteristics);
--[[22423]] peripheral:emit(("characteristicsDiscover"), characteristics);
end));
end;
end;
end; charDiscoveryComplete:__defineGetter__("name", function () return "charDiscoveryComplete"; end); return charDiscoveryComplete; end)()));
--[[22549]] this.messenger:discoverAllAttributes(peripheral, (function (this, err, response)
--[[22687]] if err then
--[[22751]] if true then return ((callback)and(callback(_global, err))); end
end;
end):bind(this));
end;
end):bind(this));
end);
--[[22893]] BluetoothController.prototype.discoverCharacteristics = (function (this, peripheral, uuids, callback)
local funcs, i = funcs, i;
--[[23091]] funcs = _arr({}, 0); 
--[[23111]] i = (0); 
while ((i)<(uuids.length)) do 

--[[23158]] funcs:push(this.discoverCharacteristic:bind(this, peripheral, _new(UUID, uuids[i])));

local _r = i; i = _r + 1;
end;
--[[23253]] async:series(funcs, (function (this, err, characteristics)
--[[23313]] if ((callback)and(callback(_global, err, characteristics))) then end;
--[[23363]] if (((not (err)))and(characteristics.length)) then
--[[23409]] setImmediate(_global, (function (this)
--[[23445]] this:emit(("characteristicsDiscover"), characteristics);
--[[23510]] peripheral:emit(("characteristicsDiscover"), characteristics);
end):bind(this));
end;
end):bind(this));
end);
--[[23629]] BluetoothController.prototype.discoverCharacteristic = (function (this, peripheral, characteristicUUID, callback)
local self, ret, listener, charDiscoveryComplete = self, ret, listener, charDiscoveryComplete;
charDiscoveryComplete = (function () local charDiscoveryComplete = nil; charDiscoveryComplete = function (this, procedure)
--[[23966]] if ((procedure.connection)==(peripheral.connection)) then
--[[24028]] if ((procedure.result)~=((0))) then
--[[24067]] if ((callback)and(callback(_global, procedure.result))) then end;
else
--[[24143]] self:removeListener(("attributeValue"), listener);
--[[24202]] self:removeListener(("completedProcedure"), charDiscoveryComplete);
--[[24279]] if ((ret.length)~=((1))) then
--[[24314]] if true then return ((callback)and(callback(_global, (null), _arr({}, 0)))); end
else
--[[24394]] self:discoverCharacteristicUUID(peripheral, ret[(0)], callback);
end;
end;
end;
end; charDiscoveryComplete:__defineGetter__("name", function () return "charDiscoveryComplete"; end); return charDiscoveryComplete; end)();
--[[23742]] self = this; 
--[[23763]] ret = _arr({}, 0); 
--[[23781]] listener = this.createCharacteristicFromAttributeValue:bind(this, peripheral, ret); 
--[[23874]] this:on(("attributeValue"), listener);
--[[23916]] 
--[[24498]] this:on(("completedProcedure"), charDiscoveryComplete);
--[[24626]] this.messenger:discoverCharacteristicsInRangeForUUID(peripheral, (1), (65535), characteristicUUID, (function (this, err, response)
--[[24808]] if err then
--[[24864]] if true then return ((callback)and(callback(_global, err))); end
end;
end):bind(this));
end);
--[[24932]] BluetoothController.prototype.discoverCharacteristicUUID = (function (this, peripheral, characteristic, callback)
local self, setCharacteristicUUID, procedureComplete = self, setCharacteristicUUID, procedureComplete;
setCharacteristicUUID = (function () local setCharacteristicUUID = nil; setCharacteristicUUID = function (this, info)
--[[25206]] if ((((peripheral.connection)==(info.connection)))and(((characteristic.handle)==(info.chrhandle)))) then
--[[25363]] characteristic:setUUID(_new(UUID, info.uuid));
--[[25470]] peripheral:syncCharacteristic(characteristic);
--[[25558]] self:removeListener(("findInformationFound"), setCharacteristicUUID);
end;
end; setCharacteristicUUID:__defineGetter__("name", function () return "setCharacteristicUUID"; end); return setCharacteristicUUID; end)();

procedureComplete = (function () local procedureComplete = nil; procedureComplete = function (this, procedure)
--[[25864]] if ((procedure.connection)==(peripheral.connection)) then
--[[25978]] self:removeListener(("completedProcedure"), procedureComplete);
--[[26081]] if ((procedure.result)~=((0))) then
--[[26167]] if ((callback)and(callback(_global, procedure.result, (null)))) then end;
else
--[[26291]] if ((callback)and(callback(_global, (null), characteristic))) then end;
end;
end;
end; procedureComplete:__defineGetter__("name", function () return "procedureComplete"; end); return procedureComplete; end)();
--[[25075]] self = this; 
--[[25097]] 
--[[25708]] this:on(("findInformationFound"), setCharacteristicUUID);
--[[25769]] 
--[[26399]] this:on(("completedProcedure"), procedureComplete);
--[[26536]] this.messenger:discoverCharacteristicUUID(characteristic, (function (this, err, response)
--[[26673]] if err then
--[[26729]] if ((callback)and(callback(_global, err))) then end;
end;
end):bind(this));
end);
--[[26926]] BluetoothController.prototype.discoverAllServicesAndCharacteristics = (function (this, peripheral, callback)
--[[27115]] this:discoverAllCharacteristics(peripheral, (function (this, err, characteristics)
local services, service = services, service;
--[[27228]] if err then
--[[27276]] if ((callback)and(callback(_global, err))) then end;
else
--[[27392]] services = _arr({}, 0); 
--[[27467]] for service in _pairs(peripheral.services) do 
service = ""+service; 
--[[27556]] services:push(peripheral.services[service]);
end;
--[[27661]] if ((callback)and(callback(_global, err, _obj({
  ["services"]=services,
  ["characteristics"]=characteristics
})))) then end;
end;
end):bind(this));
end);
--[[27779]] BluetoothController.prototype.createCharacteristicFromInformationFound = (function (this, peripheral, ret, info)
local uuid, characteristic = uuid, characteristic;
--[[27890]] if ((peripheral.connection)==(info.connection)) then
--[[27982]] uuid = _new(UUID, info.uuid); 
--[[28101]] if (((((((not (peripheral.services[uuid:toString()])))and((not (Service:isStandardService(uuid:toString()))))))and((not (Descriptor:isStandardDescriptor(uuid:toString()))))))and((not (attributes[uuid:toString()])))) then
--[[28345]] characteristic = _new(Characteristic, peripheral, uuid, info.chrhandle); 
--[[28482]] peripheral:syncCharacteristic(characteristic);
--[[28579]] ret:push(characteristic);
end;
end;
end);
--[[28625]] BluetoothController.prototype.createCharacteristicFromAttributeValue = (function (this, peripheral, ret, value)
local characteristic = characteristic;
--[[28776]] if ((peripheral.connection)==(value.connection)) then
--[[28867]] characteristic = _new(Characteristic, peripheral, (null), value.atthandle, value.value); 
--[[29034]] ret:push(characteristic);
end;
end);
--[[29073]] BluetoothController.prototype.discoverAllCharacteristicsOfService = (function (this, service, callback)
--[[29175]] this:discoverCharacteristicsOfService(service, _arr({}, 0), callback);
end);
--[[29415]] BluetoothController.prototype.discoverCharacteristicsOfService = (function (this, service, filter, callback)
--[[29584]] this:serviceCharacteristicDiscovery(service, (function (this, err, allCharacteristics)
--[[29717]] this:attributeDiscoveryHandler(err, filter, allCharacteristics, (function (this, err, characteristics)
--[[29853]] if ((callback)and(callback(_global, err, characteristics))) then end;
--[[29953]] if characteristics.length then
--[[30044]] setImmediate(_global, (function (this)
--[[30082]] this:emit(("characteristicsDiscover"), characteristics);
--[[30149]] service["_peripheral"]:emit(("characteristicsDiscover"), characteristics);
--[[30231]] service:emit(("characteristicsDiscover"), characteristics);
end):bind(this));
end;
end):bind(this));
end):bind(this));
end);
--[[30371]] BluetoothController.prototype.serviceCharacteristicDiscovery = (function (this, service, callback)
local self, characteristics, listener = self, characteristics, listener;
--[[30498]] self = this; 
--[[30520]] characteristics = _arr({}, 0); 
--[[30551]] listener = this.createCharacteristicFromInformationFound:bind(this, service["_peripheral"], characteristics); 
--[[30730]] this:on(("findInformationFound"), listener);
--[[30813]] this:on(("completedProcedure"), ((function () local procedureComplete = nil; procedureComplete = function (this, procedure)
--[[30938]] if ((procedure.connection)==(service["_peripheral"].connection)) then
--[[31061]] self:removeListener(("completedProcedure"), procedureComplete);
--[[31131]] self:removeListener(("findInformationFound"), listener);
--[[31227]] if ((procedure.result)~=((0))) then
--[[31313]] if ((callback)and(callback(_global, procedure.result, (null)))) then end;
else
--[[31437]] if ((callback)and(callback(_global, (null), characteristics))) then end;
end;
end;
end; procedureComplete:__defineGetter__("name", function () return "procedureComplete"; end); return procedureComplete; end)()));
--[[31595]] this.messenger:discoverCharacteristicsInRange(service["_peripheral"], service["_startHandle"], service["_endHandle"], (function (this, err, response)
--[[31783]] if err then
--[[31840]] if ((callback)and(callback(_global, err))) then end;
end;
end):bind(this));
end);
--[[31901]] BluetoothController.prototype.read = (function (this, characteristic, callback)
--[[31979]] this:readAttribute(characteristic, (function (this, err, value)
--[[32043]] characteristic.value = value;
--[[32080]] if ((callback)and(callback(_global, err, value))) then end;
--[[32121]] if value then
--[[32142]] this:emit(("characteristicRead"), characteristic, value);
--[[32206]] characteristic["_peripheral"]:emit(("characteristicRead"), characteristic, value);
--[[32292]] characteristic:emit(("characteristicRead"), value);
end;
end):bind(this));
end);
--[[32376]] BluetoothController.prototype.readAttribute = (function (this, attribute, callback)
local readNum, self, ret, valueListener, attributeReadComplete = readNum, self, ret, valueListener, attributeReadComplete;
valueListener = (function () local valueListener = nil; valueListener = function (this, reading)
--[[32636]] if ((((readNum)==((0))))or(((reading.type)==((0))))) then
--[[32716]] ret = reading.value;
else
--[[32812]] ret = Buffer:concat(_arr({[0]=ret, reading.value}, 2));
end;
--[[32869]] local _r = readNum; readNum = _r + 1;
end; valueListener:__defineGetter__("name", function () return "valueListener"; end); return valueListener; end)();

attributeReadComplete = (function () local attributeReadComplete = nil; attributeReadComplete = function (this, procedure)
--[[33037]] if ((procedure.connection)==(attribute["_peripheral"].connection)) then
--[[33162]] self:removeListener(("attributeValue"), valueListener);
--[[33224]] self:removeListener(("completedProcedure"), attributeReadComplete);
--[[33331]] if ((procedure.result)~=((0))) then
--[[33371]] if ((callback)and(callback(_global, procedure.result, (null)))) then end;
else
--[[33483]] if ((callback)and(callback(_global, (null), ret))) then end;
end;
end;
end; attributeReadComplete:__defineGetter__("name", function () return "attributeReadComplete"; end); return attributeReadComplete; end)();
--[[32459]] readNum = (0); 
--[[32481]] self = this; 
--[[32503]] ret = nil; 
--[[32517]] 
--[[32891]] this:on(("attributeValue"), valueListener);
--[[32938]] 
--[[33631]] this:on(("completedProcedure"), attributeReadComplete);
--[[33751]] this.messenger:readHandle(attribute["_peripheral"], attribute, (function (this, err, response)
--[[33892]] if err then
--[[33948]] if ((callback)and(callback(_global, err))) then end;
end;
end):bind(this));
end);
--[[34010]] BluetoothController.prototype.write = (function (this, characteristic, value, callback)
--[[34096]] this:writeAttribute(characteristic, value, (function (this, err, written)
--[[34171]] if ((callback)and(callback(_global, err, written))) then end;
--[[34214]] if (not (err)) then
--[[34234]] setImmediate(_global, (function (this)
--[[34270]] this:emit(("characteristicWrite"), characteristic, written);
--[[34339]] characteristic["_peripheral"]:emit(("characteristicWrite"), characteristic, written);
--[[34430]] characteristic:emit(("write"), written);
end):bind(this));
end;
end):bind(this));
end);
--[[34525]] BluetoothController.prototype.writeAttribute = (function (this, attribute, value, callback)
--[[34661]] this:splitWriteIntoBuffers(value, (function (this, err, buffers)
--[[34726]] if err then
--[[34745]] if true then return ((callback)and(callback(_global, err))); end
else
--[[34847]] if ((buffers.length)==((1))) then
--[[34924]] this:writeAttributeImmediately(attribute, buffers[(0)], callback);
else
--[[35118]] this:prepareAttributeWrite(attribute, buffers, callback);
end;
end;
end));
end);
--[[35208]] BluetoothController.prototype.writeAttributeImmediately = (function (this, attribute, singleBuffer, callback)
--[[35389]] this:once(("completedProcedure"), (function (this, procedure)
--[[35498]] if ((((procedure.connection)==(attribute["_peripheral"].connection)))and(((procedure.chrhandle)==(attribute.handle)))) then
--[[35660]] if ((procedure.result)~=((0))) then
--[[35700]] if ((callback)and(callback(_global, procedure.result, (null)))) then end;
else
--[[35812]] if ((callback)and(callback(_global, (null), singleBuffer))) then end;
end;
end;
end):bind(this));
--[[35896]] this.messenger:writeAttributeImmediately(attribute, singleBuffer, (function (this, err, response)
--[[36043]] if err then
--[[36099]] if true then return ((callback)and(callback(_global, err))); end
end;
end));
end);
--[[36155]] BluetoothController.prototype.prepareAttributeWrite = (function (this, attribute, multipleBuffers, callback)
local bufSize, offset, self, bufferWriteIterate = bufSize, offset, self, bufferWriteIterate;
bufferWriteIterate = (function () local bufferWriteIterate = nil; bufferWriteIterate = function (this, procedure)
--[[36437]] if ((((procedure.connection)==(attribute["_peripheral"].connection)))and(((procedure.chrhandle)==(attribute.handle)))) then
--[[36623]] if ((procedure.result)~=((0))) then
--[[36702]] self.messenger:cancelWrite(attribute, (function (this, cancelErr, response)
--[[36825]] if true then return ((callback)and(callback(_global, procedure.result))); end
end));
else
--[[37029]] if ((offset)<(multipleBuffers.length)) then
--[[37132]] self.messenger:prepareWrite(attribute, multipleBuffers[offset], ((offset)*(bufSize)), (function (this, err, response)
--[[37309]] if err then
--[[37382]] self.messenger:cancelWrite(attribute, (function (this, cancelErr, response)
--[[37518]] if true then return ((callback)and(callback(_global, err))); end
end));
end;
--[[37673]] local _r = offset; offset = _r + 1;
end));
else
if ((offset)==(multipleBuffers.length)) then
--[[37923]] self:removeListener(("completedProcedure"), bufferWriteIterate);
--[[38051]] self:once(("completedProcedure"), (function (this, procedure)
local ret, i = ret, i;
--[[38158]] if ((procedure.result)~=((0))) then
--[[38239]] if ((callback)and(callback(_global, procedure.result))) then end;
else
--[[38421]] ret = nil; 
--[[38446]] i = (0); 
while ((i)<(multipleBuffers.length)) do 

--[[38515]] ret = Buffer:concat(ret, multipleBuffers[i]);

local _r = i; i = _r + 1;
end;
--[[38629]] if ((callback)and(callback(_global, (null), ret))) then end;
end;
end));
--[[38754]] self.messenger:executeWrite(attribute, (function (this, err, response)
--[[38890]] if err then
--[[38962]] if true then return ((callback)and(callback(_global, err))); end
end;
end));
end;
end;
end;
end;
end; bufferWriteIterate:__defineGetter__("name", function () return "bufferWriteIterate"; end); return bufferWriteIterate; end)();
--[[36262]] bufSize = (20); 
--[[36284]] offset = (0); 
--[[36329]] self = this; 
--[[36351]] 
--[[39120]] this:on(("completedProcedure"), bufferWriteIterate);
--[[39176]] this.messenger:prepareWrite(attribute, multipleBuffers[offset], ((offset)*(bufSize)), (function (this, err, response)
--[[39339]] if err then
--[[39395]] if true then return ((callback)and(callback(_global, err))); end
end;
--[[39443]] local _r = offset; offset = _r + 1;
end));
end);
--[[39468]] BluetoothController.prototype.splitWriteIntoBuffers = (function (this, value, callback)
local buf, maxBufLen, maxNumBufs, iter, ret, i, start, _K_end = buf, maxBufLen, maxNumBufs, iter, ret, i, start, _K_end;
--[[39608]] if (not (value)) then
--[[39628]] if true then return ((callback)and(callback(_global, _new(Error, ("No value passed to write function"))))); end
else
--[[39762]] buf = nil; 
--[[39837]] if (((_typeof(value)))==(("string"))) then
--[[39878]] buf = _new(Buffer, value);
else
if Buffer:isBuffer(value) then
--[[40006]] buf = value;
else
if (not (isNaN(_global, value))) then
--[[40144]] buf = _new(Buffer, (4));
--[[40173]] buf:writeUInt32BE(value, (0));
else
--[[40291]] if true then return ((callback)and(callback(_global, ("Can only write strings, numbers, and buffers.")))); end
end;
end;
end;
--[[40424]] maxBufLen = (20); 
--[[40450]] maxNumBufs = (5); 
--[[40523]] iter = Math:ceil(((buf.length)/(maxBufLen))); 
--[[40609]] ret = _new(Array, iter); 
--[[40667]] i = (0); 
while ((i)<(iter)) do 

--[[40739]] start = ((i)*(maxBufLen)); 
--[[40862]] _K_end = ((((i)==(((iter)-((1)))))) and {((buf.length)%(maxBufLen))} or {maxBufLen})[1]; 
--[[40987]] ret[i] = buf:slice(start, ((start)+(_K_end)));

local _r = i; i = _r + 1;
end;
--[[41042]] if ((ret.length)>(maxNumBufs)) then
--[[41081]] if ((callback)and(callback(_global, _new(Error, ("Write data must be 100 bytes or less"))))) then end;
else
--[[41207]] if ((callback)and(callback(_global, (null), ret))) then end;
end;
end;
end);
--[[41376]] BluetoothController.prototype.discoverDescriptorsOfCharacteristic = (function (this, characteristic, callback)
local self, descriptors, offset, done, findDescriptorInformation, descriptorDiscoveryComplete = self, descriptors, offset, done, findDescriptorInformation, descriptorDiscoveryComplete;
findDescriptorInformation = (function () local findDescriptorInformation = nil; findDescriptorInformation = function (this, info)
local uuid, descriptor = uuid, descriptor;
--[[41673]] if ((characteristic["_peripheral"].connection)==(info.connection)) then
--[[41786]] uuid = _new(UUID, info.uuid); 
--[[41871]] if Descriptor:isStandardDescriptor(uuid:toString()) then
--[[41966]] descriptor = _new(Descriptor, characteristic["_peripheral"], uuid, info.chrhandle); 
--[[42116]] characteristic.descriptors[uuid:toString()] = descriptor;
--[[42228]] descriptors:push(descriptor);
else
--[[42324]] done = (true);
--[[42382]] self:removeListener(("findInformationFound"), findDescriptorInformation);
end;
end;
end; findDescriptorInformation:__defineGetter__("name", function () return "findDescriptorInformation"; end); return findDescriptorInformation; end)();

descriptorDiscoveryComplete = (function () local descriptorDiscoveryComplete = nil; descriptorDiscoveryComplete = function (this, procedure)
--[[42718]] if ((procedure.connection)==(characteristic["_peripheral"].connection)) then
--[[42829]] if ((procedure.result)~=((0))) then
--[[43011]] if ((procedure.result.message)~=(("Attribute Not Found"))) then
--[[43129]] if ((callback)and(callback(_global, procedure.result, (null)))) then end;
--[[43218]] setImmediate(_global, (function (this)
--[[43258]] self:emit(("error"), procedure.result);
end));
--[[43325]] if true then return ; end
else
--[[43374]] done = (true);
end;
end;
--[[43473]] if done then
--[[43545]] self:removeListener(("completedProcedure"), descriptorDiscoveryComplete);
--[[43671]] if ((callback)and(callback(_global, (null), descriptors))) then end;
--[[43748]] setImmediate(_global, (function (this)
--[[43786]] self:emit(("descriptorsDiscover"), descriptors);
--[[43845]] characteristic["_peripheral"]:emit(("descriptorsDiscover"), descriptors);
end));
else
--[[44052]] local _r = offset; offset = _r + 1;
--[[44127]] self.messenger:findHandle(characteristic["_peripheral"], ((characteristic.handle)+(offset)), (function (this, err, response)
--[[44306]] if err then
--[[44373]] if ((callback)and(callback(_global, err))) then end;
--[[44414]] setImmediate(_global, (function (this)
--[[44455]] self:emit(("error"), err);
end));
end;
end));
end;
end;
end; descriptorDiscoveryComplete:__defineGetter__("name", function () return "descriptorDiscoveryComplete"; end); return descriptorDiscoveryComplete; end)();
--[[41486]] self = this; 
--[[41508]] descriptors = _arr({}, 0); 
--[[41535]] offset = (1); 
--[[41556]] done = (false); 
--[[41579]] 
--[[42548]] this:on(("findInformationFound"), findDescriptorInformation);
--[[42613]] 
--[[44611]] this:on(("completedProcedure"), descriptorDiscoveryComplete);
--[[44716]] this.messenger:findHandle(characteristic["_peripheral"], ((characteristic.handle)+(offset)), (function (this, err, response)
--[[44883]] if err then
--[[44940]] if ((callback)and(callback(_global, err))) then end;
--[[45002]] setImmediate(_global, (function (this)
--[[45038]] this:emit(("error"), err);
end):bind(this));
end;
end):bind(this));
end);
--[[45119]] BluetoothController.prototype.readDescriptor = (function (this, descriptor, callback)
--[[45203]] this:readAttribute(descriptor, (function (this, err, value)
--[[45263]] descriptor.value = value;
--[[45296]] if ((callback)and(callback(_global, err, value))) then end;
--[[45337]] if value then
--[[45358]] setImmediate(_global, (function (this)
--[[45394]] this:emit(("descriptorRead"), descriptor, value);
--[[45452]] descriptor["_peripheral"]:emit(("descriptorRead"), descriptor, value);
--[[45528]] descriptor:emit(("descriptorRead"), value);
end):bind(this));
end;
end):bind(this));
end);
--[[45627]] BluetoothController.prototype.writeDescriptor = (function (this, descriptor, value, callback)
--[[45719]] this:writeAttribute(descriptor, value, (function (this, err, written)
--[[45790]] if ((callback)and(callback(_global, err, written))) then end;
--[[45833]] if (not (err)) then
--[[45853]] setImmediate(_global, (function (this)
--[[45889]] this:emit(("descriptorWrite"), descriptor, written);
--[[45950]] descriptor["_peripheral"]:emit(("descriptorWrite"), descriptor, written);
--[[46029]] descriptor:emit(("descriptorWrite"), written);
end):bind(this));
end;
end):bind(this));
end);
--[[46130]] BluetoothController.prototype.startNotifications = (function (this, characteristic, callback)
--[[46222]] this:writeToConfigDescriptorOfCharacteristic(characteristic, _new(Buffer, _arr({[0]=(1), (0)}, 2)), (function (this, err)
--[[46331]] if ((callback)and(callback(_global, err))) then end;
end));
end);
--[[46373]] BluetoothController.prototype.stopNotifications = (function (this, characteristic, callback)
--[[46464]] this:stopRemoteUpdates(characteristic, callback);
end);
--[[46521]] BluetoothController.prototype.startIndications = (function (this, characteristic, callback)
--[[46611]] this:writeToConfigDescriptorOfCharacteristic(characteristic, _new(Buffer, _arr({[0]=(2), (0)}, 2)), (function (this, err)
--[[46720]] if ((callback)and(callback(_global, err))) then end;
end));
end);
--[[46762]] BluetoothController.prototype.stopIndications = (function (this, characteristic, callback)
--[[46851]] this:stopRemoteUpdates(characteristic, callback);
end);
--[[46908]] BluetoothController.prototype.stopRemoteUpdates = (function (this, characteristic, callback)
--[[46999]] this:writeToConfigDescriptorOfCharacteristic(characteristic, _new(Buffer, _arr({[0]=(0), (0)}, 2)), (function (this, err)
--[[47108]] if ((callback)and(callback(_global, err))) then end;
end));
end);
--[[47150]] BluetoothController.prototype.writeToConfigDescriptorOfCharacteristic = (function (this, characteristic, value, callback)
--[[47330]] this:retrieveConfigDescriptor(characteristic, (function (this, err, descriptor)
--[[47410]] if err then
--[[47429]] if true then return ((callback)and(callback(_global, err))); end
else
--[[47492]] if (not (descriptor)) then
--[[47521]] if true then return ((callback)and(callback(_global, _new(Error, ("Characteristic is not configured for notifications"))))); end
else
--[[47650]] descriptor:write(value, (function (this, err, written)
--[[47711]] if true then return ((callback)and(callback(_global, err))); end
end));
end;
end;
end));
end);
--[[47791]] BluetoothController.prototype.retrieveConfigDescriptor = (function (this, characteristic, callback)
--[[47949]] this:getConfigDescriptorFromFetched(characteristic, (function (this, descriptor)
--[[48053]] if (not (descriptor)) then
--[[48116]] this:discoverDescriptorsOfCharacteristic(characteristic, (function (this, err, descriptors)
--[[48212]] if err then
--[[48235]] if true then return ((callback)and(callback(_global, err))); end
else
--[[48367]] this:getConfigDescriptorFromFetched(characteristic, (function (this, descriptor)
--[[48543]] if (not (descriptor)) then
--[[48578]] if true then return ((callback)and(callback(_global))); end
else
--[[48662]] if true then return ((callback)and(callback(_global, (null), descriptor))); end
end;
end):bind(this));
end;
end):bind(this));
else
--[[48816]] if true then return ((callback)and(callback(_global, (null), descriptor))); end
end;
end):bind(this));
end);
--[[48897]] BluetoothController.prototype.getConfigDescriptorFromFetched = (function (this, characteristic, callback)
local d = d;
--[[49001]] for d in _pairs(characteristic.descriptors) do 
d = ""+d; 
--[[49051]] if ((characteristic.descriptors[d].uuid:toString())==(("2902"))) then
--[[49122]] if true then return ((callback)and(callback(_global, characteristic.descriptors[d]))); end
end;
end;
--[[49200]] if ((callback)and(callback(_global))) then end;
end);
--[[49231]] BluetoothController.prototype.confirmIndication = (function (this, characteristic, callback)
--[[49322]] this.messenger:confirmIndication(characteristic, (function (this, err, response)
--[[49452]] if err then
--[[49509]] if ((callback)and(callback(_global, err))) then end;
--[[49571]] setImmediate(_global, (function (this)
--[[49607]] this:emit(("error"), err);
end):bind(this));
end;
end):bind(this));
end);
--[[49688]] BluetoothController.prototype.updateRssi = (function (this, peripheral, callback)
--[[49768]] this.messenger:updateRssi(peripheral, (function (this, err, response)
--[[49839]] if ((callback)and(callback(_global, err, response.rssi))) then end;
--[[49888]] if (not (err)) then
--[[49908]] setImmediate(_global, (function (this)
--[[49944]] this:emit(("rssiUpdate"), response.rssi);
--[[49994]] peripheral:emit(("rssiUpdate"), response.rssi);
end):bind(this));
end;
end):bind(this));
end);
--[[50143]] BluetoothController.prototype.getBluetoothAddress = (function (this, callback)
--[[50220]] this.messenger:getAddress((function (this, err, response)
local address = address;
--[[50278]] address = nil; 
--[[50297]] if ((response)and((not (err)))) then
--[[50329]] address = Address:bufToStr(response.address);
end;
--[[50389]] if ((callback)and(callback(_global, err, address))) then end;
end));
end);
--[[50440]] BluetoothController.prototype.getMaxConnections = (function (this, callback)
--[[50515]] this.messenger:getMaxConnections((function (this, err, response)
--[[50580]] if ((callback)and(callback(_global, err, response.maxconn))) then end;
end));
end);
--[[50640]] BluetoothController.prototype.startAdvertising = (function (this, callback)
--[[50714]] this.messenger:startAdvertising((function (this, err, response)
--[[50779]] if (not (err)) then
--[[50799]] this.advertising = (true);
--[[50858]] setImmediate(_global, (function (this)
--[[50894]] this:emit(("startAdvertising"));
end):bind(this));
else
--[[50977]] this.advertising = (false);
--[[51037]] setImmediate(_global, (function (this)
--[[51073]] this:emit(("error"), err);
end):bind(this));
end;
--[[51171]] if ((callback)and(callback(_global, err))) then end;
end):bind(this));
end);
--[[51225]] BluetoothController.prototype.stopAdvertising = (function (this, callback)
--[[51298]] this.messenger:stopAdvertising((function (this, err, response)
--[[51361]] if (not (err)) then
--[[51381]] this.advertising = (false);
--[[51441]] setImmediate(_global, (function (this)
--[[51477]] this:emit(("stopAdvertising"));
end):bind(this));
else
--[[51559]] this.advertising = (true);
--[[51618]] setImmediate(_global, (function (this)
--[[51654]] this:emit(("error"), err);
end):bind(this));
end;
--[[51752]] if ((callback)and(callback(_global, err))) then end;
end):bind(this));
end);
--[[51806]] BluetoothController.prototype.setAdvertisingData = (function (this, data, callback)
--[[51888]] this:advHelper(data, (0), callback);
end);
--[[51930]] BluetoothController.prototype.setScanResponseData = (function (this, data, callback)
--[[52013]] this:advHelper(data, (1), callback);
end);
--[[52054]] BluetoothController.prototype.advDataHelper = (function (this, data, advParam, callback)
--[[52141]] this.messenger:setAdvertisementData(advParam, data, (function (this, err, response)
--[[52226]] if ((callback)and(callback(_global, err))) then end;
--[[52260]] setImmediate(_global, (function (this)
--[[52294]] this:emit(("error"));
end):bind(this));
end):bind(this));
end);
--[[52362]] BluetoothController.prototype.getFirmwareVersion = (function (this, callback)
--[[52438]] this.messenger:readLocalValue(this["_firmwareVersionHandle"], (0), (function (this, err, response)
local version = version;
--[[52533]] version = nil; 
--[[52552]] if response.value then
--[[52582]] version = response.value:toString();
end;
--[[52633]] if ((callback)and(callback(_global, err, version))) then end;
end));
end);
--[[52684]] BluetoothController.prototype.maxNumValues = (function (this, callback)
--[[52754]] this:getFirmwareVersion((function (this, err, version)
local max = max;
--[[52809]] max = nil; 
--[[52824]] if (not (err)) then
--[[52844]] max = this["_maxNumValues"][version];
end;
--[[52893]] if ((callback)and(callback(_global, err, max))) then end;
end):bind(this));
end);
--[[52950]] BluetoothController.prototype.readLocalValue = (function (this, index, offset, callback)
--[[53037]] this.messenger:readLocalValue(this["_localHandles"][index], offset, (function (this, err, response)
--[[53134]] if ((callback)and(callback(_global, err, response.value))) then end;
end));
end);
--[[53191]] BluetoothController.prototype.writeLocalValue = (function (this, index, data, callback)
--[[53277]] this.messenger:writeLocalValue(this["_localHandles"][index], data, (function (this, err, response)
--[[53373]] if ((callback)and(callback(_global, err))) then end;
end));
end);
--[[53439]] BluetoothController.prototype.I2C = (function (this, address)
--[[53499]] if true then return _new(BluetoothI2C, this.messenger, address); end
end);
--[[53556]] 
--[[53672]] BluetoothI2C.prototype.transfer = (function (this, txbuf, rxLen, callback)
--[[53745]] this:send(txbuf, (function (this, err)
--[[53784]] if err then
--[[53803]] if true then return ((callback)and(callback(_global, err))); end
else
--[[53866]] this:receive(rxLen, (function (this, err, rx)
--[[53916]] if true then return ((callback)and(callback(_global, err, rx))); end
end));
end;
end):bind(this));
end);
--[[54000]] BluetoothI2C.prototype.send = (function (this, txbuf, callback)
--[[54135]] this.messenger:I2CSend(this.address, (1), txbuf, (function (this, err, response)
--[[54241]] if ((callback)and(callback(_global, err))) then end;
end));
end);
--[[54283]] BluetoothI2C.prototype.receive = (function (this, length, callback)
--[[54349]] this.messenger:I2CRead(this.address, (1), length, (function (this, err, response)
--[[54429]] if ((callback)and(callback(_global, err, response.data))) then end;
end));
end);
--[[54486]] BluetoothController.prototype.gpio = (function (this, index)
--[[54545]] if (not (this.gpios)) then
--[[54570]] this:createGPIOs();
end;
--[[54600]] if true then return this.gpios[index]; end
end);
--[[54633]] BluetoothController.prototype.createGPIOs = (function (this)
--[[54694]] this.gpios = _obj({
  
});
--[[54715]] this.gpios[("p0_3")] = _new(BluetoothPin, this, (0), (3));
--[[54770]] this.gpios[("p0_2")] = _new(BluetoothPin, this, (0), (2));
end);
--[[54828]] 
--[[55044]] util:inherits(BluetoothPin, events.EventEmitter);
--[[55097]] BluetoothPin.prototype.toString = (function (this)
--[[55148]] if true then return JSON:stringify(_obj({
  ["direction"]=this.direction,
  ["value"]=this.value
})); end
end);
--[[55244]] BluetoothPin.prototype.setInput = (function (this, callback)
--[[55303]] this.direction = ("input");
--[[55333]] this:setPinDirections(callback);
end);
--[[55373]] BluetoothPin.prototype.setOutput = (function (this, initial, callback)
--[[55442]] if (((_typeof(initial)))==(("function"))) then
--[[55484]] next = initial;
--[[55506]] initial = (null);
end;
--[[55533]] this.direction = ("output");
--[[55565]] this:setPinDirections((function (this, err)
--[[55609]] if err then
--[[55628]] if true then return ((callback)and(callback(_global, err))); end
else
--[[55691]] this:write(initial, callback);
end;
end):bind(this));
end);
--[[55756]] BluetoothPin.prototype.write = (function (this, value, callback)
--[[55819]] if ((this.direction)==(("output"))) then
--[[55861]] this.value = value;
--[[55888]] this:setPinValues(value, callback);
end;
end);
--[[55938]] BluetoothPin.prototype.read = (function (this, callback)
--[[56012]] this["_controller"].messenger:readPin(this["_port"], _bit.lshift(_G.tointegervalue((1)),_G.tointegervalue(this["_pin"])), (function (this, err, response)
local val = val;
--[[56107]] val = nil; 
--[[56122]] if (not (err)) then
--[[56142]] val = _bit.arshift(_G.tointegervalue(response.data),_G.tointegervalue(this["_pin"]));
end;
--[[56192]] this.value = val;
--[[56216]] if ((callback)and(callback(_global, err, val))) then end;
end):bind(this));
end);
--[[56274]] BluetoothPin.prototype.setPinDirections = (function (this, callback)
local mask, id, gpio = mask, id, gpio;
--[[56342]] mask = (0); 
--[[56417]] for id in _pairs(this["_controller"].gpios) do 
id = ""+id; 
--[[56498]] gpio = this["_controller"].gpios[id]; 
--[[56543]] if ((gpio.direction)==(("output"))) then
--[[56621]] mask = mask+_bit.lshift(_G.tointegervalue((1)),_G.tointegervalue(gpio["_pin"]));
end;
end;
--[[56666]] this["_controller"].messenger:setPinDirections(this["_port"], mask, (function (this, err, response)
--[[56760]] if ((callback)and(callback(_global, err))) then end;
end));
end);
--[[56802]] BluetoothPin.prototype.setPinValues = (function (this, value, callback)
local mask, data, id, gpio = mask, data, id, gpio;
--[[56872]] mask = (0); 
--[[56890]] data = (0); 
--[[56965]] for id in _pairs(this["_controller"].gpios) do 
id = ""+id; 
--[[57046]] gpio = this["_controller"].gpios[id]; 
--[[57091]] if ((gpio.direction)==(("output"))) then
--[[57169]] mask = mask+_bit.lshift(_G.tointegervalue((1)),_G.tointegervalue(gpio["_pin"]));
--[[57235]] if ((gpio.value)==((true))) then
--[[57306]] data = data+_bit.lshift(_G.tointegervalue((1)),_G.tointegervalue(gpio["_pin"]));
end;
end;
end;
--[[57361]] this["_controller"].messenger:writePin(this["_port"], mask, data, (function (this, err, response)
--[[57455]] if ((callback)and(callback(_global, err))) then end;
end));
end);
--[[57496]] BluetoothPin.prototype.watch = (function (this, type, callback)
--[[57559]] if ((((((type)~=(("rise"))))and(((type)~=(("fall"))))))and(((type)~=(("change"))))) then
--[[57624]] if true then return ((callback)and(callback(_global, _new(Error, ("Invalid pin watch type. Must be 'rise', 'fall', or 'change'."))))); end
end;
--[[57768]] this:on(type, callback);
--[[57830]] this.onInterrupt = type;
--[[57860]] this:setPinWatches(type, (function (this, err)
--[[57907]] if err then
--[[57926]] if ((callback)and(callback(_global, err))) then end;
end;
end):bind(this));
end);
--[[57987]] BluetoothPin.prototype.unwatch = (function (this, type, callback)
--[[58051]] if ((this.onInterrupt)==(type)) then
--[[58090]] this.onInterrupt = (null);
--[[58121]] this:setPinWatches(type, callback);
else
--[[58180]] if ((callback)and(callback(_global))) then end;
end;
end);
--[[58217]] BluetoothPin.prototype.setPinWatches = (function (this, type, callback)
local mask, id, gpio = mask, id, gpio;
--[[58288]] mask = (0); 
--[[58335]] for id in _pairs(this["_controller"].gpios) do 
id = ""+id; 
--[[58413]] gpio = this["_controller"].gpios[id]; 
--[[58522]] if ((gpio.onInterrupt)==(type)) then
--[[58592]] mask = mask+_bit.lshift(_G.tointegervalue((1)),_G.tointegervalue(gpio["_pin"]));
end;
end;
--[[58679]] this["_controller"].messenger:watchPin((0), mask, ((((type)==(("rise")))) and {(0)} or {(1)})[1], (function (this, err, response)
--[[58823]] if ((type)==(("change"))) then
--[[58911]] this["_controller"].messenger:watchPin((0), mask, (0), (function (this, err, response)
--[[58995]] if ((callback)and(callback(_global, err))) then end;
end));
else
--[[59063]] if ((callback)and(callback(_global, err))) then end;
end;
end):bind(this));
end);
--[[59124]] BluetoothController.prototype.readADC = (function (this, callback)
--[[59189]] this:once(("ADCRead"), (function (this, adc)
local normalized = normalized;
--[[59500]] normalized = ((_bit.arshift(_G.tointegervalue(adc.value),_G.tointegervalue((4))))/((2047))); 
--[[59549]] if ((callback)and(callback(_global, (null), normalized))) then end;
end));
--[[59706]] this.messenger:readADC((1), (3), (2), (function (this, err, response)
--[[59826]] if err then
--[[59882]] if ((callback)and(callback(_global, err))) then end;
--[[59944]] setImmediate(_global, (function (this)
--[[59980]] this:emit(("error"), err);
end):bind(this));
end;
end):bind(this));
end);
--[[60100]] BluetoothController.prototype.setBondable = (function (this, bondable, callback)
--[[60179]] this.messenger:setBondable(((bondable) and {(1)} or {(0)})[1], callback);
end);
--[[60277]] BluetoothController.prototype.getBonds = (function (this, callback)
local bonds, numBondsToSatisfy = bonds, numBondsToSatisfy;
--[[60343]] bonds = _arr({}, 0); 
--[[60363]] numBondsToSatisfy = (0); 
--[[60394]] this:on(("bondStatus"), ((function () local bondStatus = nil; bondStatus = function (this, status)
--[[60452]] console:log(("Got this buddy!"), status);
--[[60498]] bonds:push(status);
--[[60525]] if ((bonds.length)==(bumBondsToSatisfy)) then
--[[60575]] this:removeListener(("bondStatus"), bondStatus);
--[[60630]] if ((callback)and(callback(_global, (null), bonds))) then end;
end;
end; bondStatus:__defineGetter__("name", function () return "bondStatus"; end); return bondStatus; end)()):bind(this));
--[[60697]] this.messenger:getBonds((function (this, err, response)
--[[60754]] if err then
--[[60773]] if ((callback)and(callback(_global, err))) then end;
else
if ((response.bonds)==((0))) then
--[[60855]] if ((callback)and(callback(_global, (null), bonds))) then end;
else
--[[60919]] numBondsToSatisfy = response.bonds;
end;
end;
end));
end);
--[[61013]] BluetoothController.prototype.deleteBond = (function (this, peripheral, callback)
--[[61093]] this.messenger:deleteBond(peripheral, (function (this, err)
--[[61153]] if (not (err)) then
--[[61173]] peripheral.bondHandle = (255);
end;
--[[61218]] if ((callback)and(callback(_global, err))) then end;
end));
end);
--[[61260]] BluetoothController.prototype.startEncryption = (function (this, peripheral, callback)
local self, successHandler, failHandler, removeHandlers = self, successHandler, failHandler, removeHandlers;
successHandler = (function () local successHandler = nil; successHandler = function (this, status)
--[[61407]] console:log(("Got a connection status"), status);
--[[61461]] if ((status.connection)==(peripheral.connection)) then
--[[61520]] peripheral.bondHandle = status.bonding;
--[[61559]] 
--[[61569]] removeHandlers(_global);
--[[61595]] if ((callback)and(callback(_global, (null), peripheral.bondHandle))) then end;
end;
end; successHandler:__defineGetter__("name", function () return "successHandler"; end); return successHandler; end)();

failHandler = (function () local failHandler = nil; failHandler = function (this, failDetails)
--[[61707]] console:log(("Failure details"), failDetails);
--[[61758]] if ((peripheral.connection)==(failDetails.handle)) then
--[[61818]] removeHandlers(_global);
--[[61844]] if ((callback)and(callback(_global, failDetails.reason))) then end;
end;
end; failHandler:__defineGetter__("name", function () return "failHandler"; end); return failHandler; end)();

removeHandlers = (function () local removeHandlers = nil; removeHandlers = function (this)
--[[61939]] self:removeListener(("connectionStatus"), successHandler);
--[[62002]] self:removeListener(("bondingFail"), failHandler);
end; removeHandlers:__defineGetter__("name", function () return "removeHandlers"; end); return removeHandlers; end)();
--[[61345]] self = this; 
--[[61367]] 
--[[61665]] 
--[[61905]] 
--[[62062]] this:on(("connectionStatus"), successHandler);
--[[62111]] this:on(("bondingFail"), failHandler);
--[[62153]] this.messenger:startEncryption(peripheral, (true), (function (this, err, response)
--[[62234]] if err then
--[[62253]] if ((callback)and(callback(_global, err))) then end;
end;
end));
end);
--[[62303]] BluetoothController.prototype.enterPasskey = (function (this, peripheral, passKey, callback)
--[[62394]] if ((((passKey)<((0))))or(((passkey)>((999999))))) then
--[[62439]] if true then return ((callback)and(callback(_global, _new(Error, ("Passkey must be between 0 and 999999 inclusive."))))); end
else
--[[62553]] this.messenger:enterPasskey(peripheral, passKey, callback);
end;
end);
--[[62626]] BluetoothController.prototype.setEncryptionSize = (function (this, size, callback)
--[[62783]] if ((((size)<((7))))or(((size)>((16))))) then
--[[62818]] if true then return ((callback)and(callback(_global, _new(Error, ("Invalid encryption key size. Must be between 7 and 16 bytes"))))); end
else
--[[62944]] this.messenger:setSecurityParameters(this["_MITMEnabled"], size, (3), (function (this, err, response)
--[[63043]] if (not (err)) then
--[[63065]] this["_minKeySize"] = size;
end;
--[[63109]] if ((callback)and(callback(_global, err))) then end;
end));
end;
end);
--[[63159]] BluetoothController.prototype.setOOBData = (function (this, data, callback)
--[[63233]] if (((not (Buffer:isBuffer(data))))or(((((data.length)~=((0))))and(((data.length)~=((16))))))) then
--[[63312]] if true then return ((callback)and(callback(_global, _new(Error, ("OOB Data must be a buffer of 0 or 16 octets long"))))); end
else
--[[63427]] this.messenger:setOOBData(data, callback);
end;
end);
--[[63483]] BluetoothController.prototype.enableMITMProtection = (function (this, enable, callback)
--[[63645]] this.messenger:setSecurityParameters(((enable) and {(1)} or {(0)})[1], this["_minKeySize"], (3), (function (this, err, response)
--[[63751]] if (not (err)) then
--[[63771]] this["_MITMEnabled"] = enable;
end;
--[[63814]] if ((callback)and(callback(_global, err))) then end;
end));
end);
--[[64000]] module.exports.use = use;
--[[64028]] module.exports.BluetoothController = BluetoothController;
end) then end;

return _module.exports;
end 
