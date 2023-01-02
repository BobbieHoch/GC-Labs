import { GasCar } from "../Models/GasCar";

describe('GasCar', () => {
  test('team and fuel properties are set from the constructor parameters', () => {
    const gasCar = new GasCar('Robs Team', 5);
    expect(gasCar.team).toBe('Robs Team');
    expect(gasCar.fuel).toBe(5);
  });

  test('fuel defaults to 10, when the second constructor parameter is omitted', () => {
    const gasCar = new GasCar('XYZ Team');
    expect(gasCar.fuel).toBe(10);
  });

  test('speed property starts at 0', () => {
    const gasCar = new GasCar('XYZ Team');
    expect(gasCar.speed).toBe(0);
  });

  test('calling accelerate once brings speed to 2', () => {
    const gasCar = new GasCar('XYZ Team');
    gasCar.accelerate();
    expect(gasCar.speed).toBe(2);
  });

  test('calling accelerate twice brings speed to 4', () => {
    const gasCar = new GasCar('XYZ Team');
    gasCar.accelerate();
    gasCar.accelerate();
    expect(gasCar.speed).toBe(4);
  });

  test('calling accelerate once reduces fuel by 1', () => {
    const gasCar = new GasCar('XYZ Team', 5);
    gasCar.accelerate();
    expect(gasCar.fuel).toBe(4);
  });

  test('calling accelerate twice reduces fuel by 2', () => {
    const gasCar = new GasCar('XYZ Team', 5);
    gasCar.accelerate();
    gasCar.accelerate();
    expect(gasCar.fuel).toBe(3);
  });

  test('isFuelEmpty returns true when fuel is 0', () => {
    const gasCar = new GasCar('XYZ Team', 0);
    expect(gasCar.isFuelEmpty()).toBe(true);
  });

  test('isFuelEmpty returns false when fuel is greater than 0', () => {
    const gasCar = new GasCar('XYZ Team', 5);
    expect(gasCar.isFuelEmpty()).toBe(false);
  });
});
