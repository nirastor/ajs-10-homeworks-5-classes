const typesParameters = {
  Bowman: { attack: 25, defence: 25 },
  Swordsman: { attack: 40, defence: 10 },
  Magician: { attack: 10, defence: 40 },
  Daemon: { attack: 25, defence: 25 },
  Undead: { attack: 40, defence: 10 },
  Zombie: { attack: 10, defence: 40 },
};

export default class Character {
  constructor(name, type) {
    // name
    if (name.length < 2 || name.length > 10) {
      throw new Error('Name length should be 2-10 characters');
    }
    this.name = name.toString();

    // type
    if (!(type in typesParameters)) {
      throw new Error('Unknown character type');
    }
    this.type = type;

    // health & level
    this.health = 100;
    this.level = 1;

    // attack & defence
    this.attack = typesParameters[type].attack;
    this.defence = typesParameters[type].defence;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('level up avaliable only for alive');
    }

    this.level += 1;
    this.health = 100;
    this.attack *= 1.2;
    this.defence *= 1.2;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    /*
    А когда defence перевалит за 100
    У мага и зомби это произойдет всего-лишь на 7 уровне
    Удары начнут лечить :-)
    */
  }
}
