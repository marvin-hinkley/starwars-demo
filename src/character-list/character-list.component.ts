import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
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
  //selectedCharacter: Character;

  constructor(private characterService: CharacterService, private router: Router){}
  getCharacters() {
    this.characterService.getCharacters().then(characters => this.characters = characters);
  }
  ngOnInit() {
    this.getCharacters();
  }
  // onSelect(character: Character) {
  //   this.selectedCharacter = character;
  // }
  viewDetail(character: Character) {
    console.log('ViewDetail called with: ' + character);
    this.router.navigate(['CharacterDetail', {id: character.id}]);
  }
}
