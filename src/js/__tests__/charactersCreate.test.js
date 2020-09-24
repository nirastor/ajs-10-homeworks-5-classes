import Character from '../character';

test('should convert name to string', () => {
  const expected = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: '123',
    type: 'Bowman',
  };

  const received = new Character(123, 'Bowman');

  expect(received).toEqual(expected);
});

test('should create Bowman', () => {
  const expected = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Bow',
    type: 'Bowman',
  };

  const received = new Character('Bow', 'Bowman');

  expect(received).toEqual(expected);
});

test('should create Swordsman', () => {
  const expected = {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Sword',
    type: 'Swordsman',
  };

  const received = new Character('Sword', 'Swordsman');

  expect(received).toEqual(expected);
});

test('should create Magician', () => {
  const expected = {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Mag',
    type: 'Magician',
  };

  const received = new Character('Mag', 'Magician');

  expect(received).toEqual(expected);
});

test('should create Daemon', () => {
  const expected = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Daem',
    type: 'Daemon',
  };

  const received = new Character('Daem', 'Daemon');

  expect(received).toEqual(expected);
});

test('should create Undead', () => {
  const expected = {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Und',
    type: 'Undead',
  };

  const received = new Character('Und', 'Undead');

  expect(received).toEqual(expected);
});

test('should create Zombie', () => {
  const expected = {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Zom',
    type: 'Zombie',
  };

  const received = new Character('Zom', 'Zombie');

  expect(received).toEqual(expected);
});

test('Should throw error about 1 char name', () => {
  expect(() => {
    const test = new Character('a', 'Zombie');
  }).toThrow('Name length should be 2-10 characters');
});

test('Should not throw error about 2 char name', () => {
  expect(() => {
    const test = new Character('aa', 'Zombie');
  }).not.toThrow('Name length should be 2-10 characters');
});

test('Should not throw error about 5 char name', () => {
  expect(() => {
    const test = new Character('abcde', 'Zombie');
  }).not.toThrow('Name length should be 2-10 characters');
});

test('Should not throw error about 10 char name', () => {
  expect(() => {
    const test = new Character('abcdeABCDE', 'Zombie');
  }).not.toThrow('Name length should be 2-10 characters');
});

test('Should throw error about 11 char name', () => {
  expect(() => {
    const test = new Character('abcdeABCDEf', 'Zombie');
  }).toThrow('Name length should be 2-10 characters');
});

test('Should throw error about more than 10 char name', () => {
  expect(() => {
    const test = new Character('abcdeABCDEabcdeabcde', 'Zombie');
  }).toThrow('Name length should be 2-10 characters');
});

test('Should not creae unknown character', () => {
  expect(() => {
    const test = new Character('Name', 'not_Zombie');
  }).toThrow('Unknown character type');
});
