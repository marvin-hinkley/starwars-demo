export class Character {
  id: number;
  name: string;
  image: string;
  description: string;
  faction: string;

  constructor(id: number, name: string, image: string, description: string, faction: string) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.description = description;
    this.faction = faction;
  }
}
