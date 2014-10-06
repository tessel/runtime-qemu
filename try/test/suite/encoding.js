

return function (_ENV, _module)
local exports, module = _module.exports, _module;


local tap, reservedChars, unescapedChars, score, a, url, b = tap, reservedChars, unescapedChars, score, a, url, b;
--[[0]] tap = require(_global, ("../tap")); 
--[[30]] tap:count((14));
--[[46]] tap:eq(String:fromCharCode((26)), ("\026"));
--[[91]] tap:eq(String:fromCharCode((26)), ("\026"));
--[[317]] tap:eq(encodeURI(_global, ("www. spaces .com")), ("www.%20spaces%20.com"), ("Encode URI didn't provide"));
--[[409]] reservedChars = (";,/?:@&=+$"); 
--[[442]] tap:eq(reservedChars, encodeURI(_global, reservedChars), ("encodeURI does not encode reserved characters"));
--[[540]] unescapedChars = ("-_.!~*'()"); 
--[[574]] tap:eq(unescapedChars, encodeURI(_global, unescapedChars, ("encodeURI does not encode unescaped characters")));
--[[674]] score = ("#"); 
--[[691]] tap:eq(score, encodeURI(_global, score), ("encodeURI does not encode score character"));
--[[769]] a = _obj({
  
}); 
--[[781]] tap:eq(encodeURI(_global, a), ("%5Bobject%20Object%5D"), ("encoding an object encoded the string representation"));
--[[895]] tap:eq(escape(_global, ("abc123")), ("abc123"), ("Escaping non-encoded characters"));
--[[966]] tap:eq(escape(_global, ("@*_+-./")), ("@*_+-./"), ("Escaping non-encoded special characters"));
--[[1047]] tap:eq(escape(_global, ("!@#hello$%^")), ("%21@%23hello%24%25%5E"), ("Escaping non-special characters"));
--[[1153]] tap:eq(decodeURI(_global, ("https://developer.mozilla.org/ru/docs/JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B")), ("https://developer.mozilla.org/ru/docs/JavaScript_\209\136\208\181\208\187\208\187\209\139"), ("Decoding is not working properly"));
--[[1348]] url = ("http:// the original_ . example.com"); 
--[[1396]] tap:eq(url, decodeURI(_global, encodeURI(_global, url)), ("Decoding an Encoded URI returns the original string"));
--[[1491]] tap:eq(decodeURI(_global, a), a:toString(), ("Decoding an object returns the string representation of the object"));
--[[1597]] b = (1); 
--[[1608]] tap:eq(decodeURI(_global, b), b:toString(), ("Decoding an number just returns the string representation of the number"));

return _module.exports;
end 
