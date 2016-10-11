function Telefon(marka, cena, kolor) {
	this.marka = marka; 
	this.cena = cena;
	this.kolor = kolor;
};
Telefon.prototype.printInfo = function() {
		console.log('Marka telefonu to ' + this.marka + ', kolor to ' + this.kolor + ', a cena to ' + this.cena + '.');
};
var samsungGalaxyS6 = new Telefon('Samsung', 'czarny', 1861);
var iPhone6S = new Telefon('Apple', 'srebrny', 2250);
var oneplusOne= new Telefon('OnePlus One', 'biały', 1174);
samsungGalaxyS6.printInfo();
iPhone6S.printInfo();
oneplusOne.printInfo();
