import add from '../../app/controller/server/add';

it('it works', () => {
  expect(add(4, 2)).toBe(6);
  expect(add('a', 'b')).toBe('ab');
});