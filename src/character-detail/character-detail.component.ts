import { Component, Input } from '@angular/core';
import { Character } from '../character';

@Component({
  selector: 'character-detail',
  templateUrl: 'character-detail/character-detail.html',
  styleUrls: ['character-detail/character-detail.css']
})
export class CharacterDetailComponent {
  character: Character;
}
