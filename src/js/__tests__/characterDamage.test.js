import Character from '../character';

test('Should decrease health', () => {
  const received = new Character('Name', 'Zombie');
  received.damage(10);
  expect(received.health).toEqual(94);
});
