export function isLeap(year: number): boolean {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true; // Es bisiesto
    } else {
      return false; // No es bisiesto
    }
  }