import Character from '../character';

test('Should throw error. Level up avaliable only for alive', () => {
  expect(() => {
    const received = new Character('Name', 'Zombie');
    received.health = 0;
    received.levelUp();
  }).toThrow('level up avaliable only for alive');
});

test('Should increase level', () => {
  const received = new Character('Name', 'Zombie');
  received.levelUp();
  expect(received.level).toEqual(2);
});

test('Should restore health', () => {
  const received = new Character('Name', 'Zombie');
  received.health = 50;
  received.levelUp();
  expect(received.health).toEqual(100);
});

test('Should increase attack', () => {
  const received = new Character('Name', 'Zombie');
  received.levelUp();
  expect(received.attack).toEqual(12);
});

test('Should increase defence', () => {
  const received = new Character('Name', 'Zombie');
  received.levelUp();
  expect(received.defence).toEqual(48);
});
