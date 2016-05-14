import { Component, Input } from '@angular/core';
import { Character } from '../character';

@Component({
  selector: 'character-detail',
  templateUrl: 'character-detail/character-detail.html'
})
export class CharacterDetailComponent {
  character: Character;
}
