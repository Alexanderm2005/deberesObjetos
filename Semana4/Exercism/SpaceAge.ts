export function age(planet: string, seconds: number): number {
  
    const EARTH_YEAR_SECONDS = 31557600;


    const orbitalPeriods: { [key: string]: number } = {
        'Mercury': 0.2408467,
        'Venus': 0.61519726,
        'Earth': 1.0,
        'Mars': 1.8808158,
        'Jupiter': 11.862615,
        'Saturn': 29.447498,
        'Uranus': 84.016846,
        'Neptune': 164.79132
    };


    const formattedPlanet = planet.charAt(0).toUpperCase() + planet.slice(1).toLowerCase();


    if (orbitalPeriods[formattedPlanet]) {

        const ageInPlanetYears = seconds / EARTH_YEAR_SECONDS / orbitalPeriods[formattedPlanet];

        return Math.round(ageInPlanetYears * 100) / 100;
    } else {

        throw new Error('Planeta no válido.');
    }
}