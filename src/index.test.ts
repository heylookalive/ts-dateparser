import { parse, CustomParseError } from './index';

describe('parse function', () => {
	Date.now = jest.fn(() => Date.parse('2020-05-01T00:00:00'));

  it('now minus one year rounded to the nearest year', () => {
    expect(parse('now-1y/y')).toEqual('2019-01-01T00:00:00');
  });

  it('now rounded to the nearest year', () => {
    expect(parse('now/y')).toEqual('2020-01-01T00:00:00');
  });

  it('now minus 1 day', () => {
    expect(parse('now-1d')).toEqual('2020-04-30T00:00:00');
  });

  it('now add 1 day', () => {
    expect(parse('now+1d')).toEqual('2020-05-02T00:00:00');
  });

  it('now minus four days and four hours', () => {
    expect(parse('now-4d-4h')).toEqual('2020-04-26T20:00:00');
	});

	it('fails invalid input', () => {
    expect(() => {
			parse('biscuit');
		}).toThrow(CustomParseError);
  });
});
