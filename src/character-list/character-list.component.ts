import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import {CharacterService} from '../services/character.service';

@Component({
  selector: 'character-list',
  templateUrl: 'character-list/character-list.html',
  styleUrls: ['character-list/character-list.css'],
  providers: [CharacterService]
})

export class CharacterListComponent  implements OnInit {
  characters: Character[];
  selectedCharacter: Character;

  constructor(private characterService: CharacterService){}
  getCharacters() {
    this.characterService.getCharacters().then(characters => this.characters = characters);
  }
  ngOnInit() {
    this.getCharacters();
  }
  onSelect(character: Character) { this.selectedCharacter = character; }
}
