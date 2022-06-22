// Data
export const Areas = [
	{ name: 'Cała Polska', key: 0},
	{ name: 'Dolnośląskie', key: 1},
	{ name: 'Kujawsko-pomorskie', key: 2},
	{ name: 'Lubelskie', key: 3},
	{ name: 'Lubuskie', key: 4},
	{ name: 'Łódzkie', key: 5},
	{ name: 'Małopolskie', key: 6},
	{ name: 'Mazowieckie', key: 7},
	{ name: 'Opolskie', key: 8},
	{ name: 'Podkarpackie', key: 9},
	{ name: 'Podlaskie', key: 10},
	{ name: 'Pomorskie', key: 11},
	{ name: 'Śląskie', key: 12},
	{ name: 'Świętokrzyskie', key: 13},
	{ name: 'Warmińsko-mazurskie', key: 14},
	{ name: 'Wielkopolskie', key: 15},
	{ name: 'Zachodniopomorskie', key: 16},
];

export const OnlyAreas = [
	{ name: 'Dolnośląskie', key: 1},
	{ name: 'Kujawsko-pomorskie', key: 2},
	{ name: 'Lubelskie', key: 3},
	{ name: 'Lubuskie', key: 4},
	{ name: 'Łódzkie', key: 5},
	{ name: 'Małopolskie', key: 6},
	{ name: 'Mazowieckie', key: 7},
	{ name: 'Opolskie', key: 8},
	{ name: 'Podkarpackie', key: 9},
	{ name: 'Podlaskie', key: 10},
	{ name: 'Pomorskie', key: 11},
	{ name: 'Śląskie', key: 12},
	{ name: 'Świętokrzyskie', key: 13},
	{ name: 'Warmińsko-mazurskie', key: 14},
	{ name: 'Wielkopolskie', key: 15},
	{ name: 'Zachodniopomorskie', key: 16},
];

export const Categories = [
	{ name: 'Wszystkie Kategorie', key: 0},
	{ name: 'Motoryzacja', key: 1},
	{ name: 'Elektronika', key: 2},
	{ name: 'Praca', key: 3},
	{ name: 'Dom', key: 4},
];

export const OnlyCategories = [
	{ name: 'Motoryzacja', key: 1},
	{ name: 'Elektronika', key: 2},
	{ name: 'Praca', key: 3},
	{ name: 'Dom', key: 4},
];

export const Sorting = [
	{ name: 'Cena: Najniższa', key: 0},
	{ name: 'Cena: Najwyższa', key: 1},
	{ name: 'Czas dodania: Najstarsze', key: 2},
	{ name: 'Czas dodania: Najnowsze', key: 3},

];

// Data functions
export const getCategoryKey = (name: string) => {
	let categoryFound = 0;
	Categories.forEach(category => {
		if (category.name === name) {
			categoryFound = category.key;
		}
	});
	return categoryFound;
}

export const getAreaKey = (name: string) => {
	let areaFound = 0;
	Areas.forEach(area => {
		if (area.name === name) {
			areaFound = area.key;
		}
	});
	return areaFound;
}

// Regex
export const regexPrice = /^(\d+(?:[\.]\d{2})?)$/;
export const regexEmpty = /^[^\s]+(\s+[^\s]+)*$/;
export const regexEmail = /^$|^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/;
export const regexPhoneNumber = /^$|^\d{9}$/;

// Convertions

export function arrayBufferToBase64( buffer: ArrayBuffer ) {
	var binary = '';
	var bytes = new Uint8Array( buffer );
	var len = bytes.byteLength;
	for (var i = 0; i < len; i++) {
		binary += String.fromCharCode( bytes[ i ] );
	}
	return window.btoa( binary );
}

export function base64ToArrayBuffer(base64: string) {
    var binary_string =  window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array( len );
    for (var i = 0; i < len; i++)        {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
}