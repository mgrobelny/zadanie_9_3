// scripts.js

var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'Triceratops';
// zmiana na duże litery w zmiennej 'dinosaur':
var nameUpperCased = dinosaur.toUpperCase();
// podmiana Velociraptora na TRICERATOPSA w 'text':
var triRepVelo = text.replace('Velociraptor', nameUpperCased)
// odnalezienie połowy łańcucha znaków 'triRepVelo' (czyli 'text' z podmienionym TRICERATOPSEM):
var indexNumber = triRepVelo.length/2;
// wyświetlenie łańcucha od początku (index=0) do połowy (indexNumber/2):
var textFinal = triRepVelo.slice(0, indexNumber)

console.log(nameUpperCased);
// wyświetlenie text z podmienionym dinozautem:
console.log(triRepVelo)
// wyświetlenie liczby indeksów połowy łańcucha text z podmienionym dinozaurem:
console.log(triRepVelo.length/2);
// wyświetlenie połowy łańcucha tekstu po zmianach:
console.log(textFinal)
