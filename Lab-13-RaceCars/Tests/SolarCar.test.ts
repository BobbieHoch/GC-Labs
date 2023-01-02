import { SolarCar } from "../Models/SolarCar";


describe('SolarCar', () => {
  test('team property is set from the constructor parameter', () => {
    const solarCar = new SolarCar('ABC Team');
    expect(solarCar.team).toBe('ABC Team');
  });

  test('speed property starts at 0', () => {
    const solarCar = new SolarCar('ABC Team');
    expect(solarCar.speed).toBe(0);
  });

  test('calling accelerate once brings speed to 1', () => {
    const solarCar = new SolarCar('ABC Team');
    solarCar.accelerate();
    expect(solarCar.speed).toBe(1);
  });

  test('calling accelerate twice brings speed to 2', () => {
    const solarCar = new SolarCar('ABC Team');
    solarCar.accelerate();
    solarCar.accelerate();
    expect(solarCar.speed).toBe(2);
  });

  test('isFuelEmpty returns false', () => {
    const solarCar = new SolarCar('ABC Team');
    expect(solarCar.isFuelEmpty()).toBe(false);
  });
});
