
export function parse(datestring: string): Date {
  // Map units to seconds.
  const unitsMap: {[index: string]: number} = {
    'd': 86400,
    'M': 2.628e+6,
    'y': 3.154e+7,
    'h': 3600,
    'm': 60,
    's': 1,
    'w': 604800
  };

  // Split up our input with lookahead.
  const defaultDate = Date.now();
  const newVal: number = datestring.split(/(?=[+|\-|\/])/).reduce((accumulator, item) => {
    if (item === 'now') {
      return Date.now();
    }
    // Act on instruction statements e.g. '+1d'.
    else {
      const unit: string = item.charAt(item.length - 1);

      // Rounding.
      if (item.startsWith('/')) {
        const unitAsMs = unitsMap[unit] * 1000;
        return Math.round(accumulator / unitAsMs) * unitAsMs;
      }
      // Add/subtract.
      else {
        const instructionNumVal = Number(item.slice(0, -1)) * unitsMap[unit] * 1000;
        return accumulator + instructionNumVal;
      }
    }
  }, defaultDate) as number;

  return new Date(newVal);
}
