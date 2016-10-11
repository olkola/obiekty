function Telefon(marka, cena, kolor) {
	this.marka = marka; 
	this.cena = cena;
	this.kolor = kolor;
};
Telefon.prototype.printInfo = function() {
		console.log('Marka telefonu to ' + this.marka + ', kolor to ' + this.kolor + ', a cena to ' + this.cena + '.');
};
var samsungGalaxyS6 = new Telefon('Samsung', 1861, 'czarny');
var iPhone6S = new Telefon('Apple', 2250, 'srebrny');
var oneplusOne= new Telefon('OnePlus One', 1174, 'biały');
samsungGalaxyS6.printInfo();
iPhone6S.printInfo();
oneplusOne.printInfo();
