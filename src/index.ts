export class CustomParseError extends Error {
	constructor() {
    super();
		this.name = 'CustomParseError';
		this.message = 'Could not parse that date...'
  }
}

export function parse(datestring: string): Date {
	const unitsMap: {[index: string]: number} = {
		'd': 86400,
		'M': 2.628e+6,
		'y': 3.154e+7,
		'h': 3600,
		'm': 60,
		's': 1,
		'w': 604800
	};
console.log(datestring, datestring.split(/(?=[+|\-|\/])/));
	// Split up our input with lookbehind.
	// const newVal = datestring.split(/(?=+|?=-|?=\/)/).reduce((value, item) => {
	// 	console.log('a', value, item);
	// 	if () {

	// 	}
	// 	// Expect we're at the start, try and parse a date.
	// 	else {
	// 		try {
	// 			return Date.parse(item);
	// 		} catch {
	// 			throw new CustomParseError();
	// 		}
	// 	}
	// });

  return new Date();
}
