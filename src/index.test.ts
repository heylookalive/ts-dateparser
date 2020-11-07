import { parse } from './index';

describe('parse function', () => {
  Date.now = jest.fn(() => Date.parse('2020-05-01'));

  xit('now minus one year rounded to the nearest year', () => {
    expect(parse('now-1y/y')).toEqual(new Date('2019-01-01T00:00:00.000Z'));
  });

  xit('now rounded to the nearest year', () => {
    expect(parse('now/y')).toEqual(new Date('2020-01-01T00:00:00.000Z'));
  });

  it('now minus 1 day', () => {
    expect(parse('now-1d')).toEqual(new Date('2020-04-30T00:00:00.000Z'));
  });

  it('now add 1 day', () => {
    expect(parse('now+1d')).toEqual(new Date('2020-05-02T00:00:00.000Z'));
  });

  it('now minus four days and four hours', () => {
    expect(parse('now-4d-4h')).toEqual(new Date('2020-04-26T20:00:00.000Z'));
  });
});
