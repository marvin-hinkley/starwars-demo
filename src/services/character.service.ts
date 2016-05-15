import { Injectable } from '@angular/core';
import { Character } from '../character';
import { Characters } from '../mock-characters';

@Injectable()
export class CharacterService {
  getCharacters() {
    return Promise.resolve(Characters);
  };
  getCharacter(id: number) {
    console.log('GetCharacter returning: ' + (Characters.filter(character => character.id === id)[0]));
    return Promise.resolve(Characters).then(
      characters => characters.filter(character => character.id === id)[0]
    );
  };
}
