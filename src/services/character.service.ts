import { Injectable } from '@angular/core';
import { Character } from '../character';
import { Characters } from '../mock-characters';

@Injectable()
export class CharacterService {
  getCharacters() {
    return Promise.resolve(Characters);
  }
}
