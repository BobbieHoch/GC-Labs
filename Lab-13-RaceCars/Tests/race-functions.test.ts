import { getFastestRacer } from '../Services/racer-functions';
import { findRacersWithEmptyFuel } from '../Services/racer-functions';
import { findAverageSpeed } from '../Services/racer-functions';
import { GasCar } from '../Models/GasCar';
import { SolarCar } from '../Models/SolarCar';

describe('getFasterRacer', () => {
  test('with racerA faster', () => {
    const racerA = new GasCar('ABC Team', 5, 10);
    const racerB = new GasCar('XYZ Team', 5, 8);
    const result = getFastestRacer(racerA, racerB);
    expect(result).toBe(racerA);
  });

  test('with racerB faster', () => {
    const racerA = new GasCar('ABC Team', 5, 8);
    const racerB = new GasCar('XYZ Team', 5, 10);
    const result = getFastestRacer(racerA, racerB);
    expect(result).toBe(racerB);
  });

  test('with both racers the same speed', () => {
    const racerA = new GasCar('ABC Team', 5, 10);
    const racerB = new GasCar('XYZ Team', 5, 10);
    const result = getFastestRacer(racerA, racerB);
    expect(result).toBe(null);
  });

  test('with a mix of GasCar and SolarCar in the parameters', () => {
    const racerA = new GasCar('ABC Team', 5, 8);
    const racerB = new SolarCar('XYZ Team', 10);
    const result = getFastestRacer(racerA, racerB);
    expect(result).toBe(racerB);
  });
});