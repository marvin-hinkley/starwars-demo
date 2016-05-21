import { Component, OnInit, Inject } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { Character } from '../character';
import {CharacterService} from '../services/character.service';

@Component({
  selector: 'character-list',
  templateUrl: 'character-list/character-list.html',
  styleUrls: ['character-list/character-list.css'],
  directives: [ROUTER_DIRECTIVES]
})

export class CharacterListComponent  implements OnInit {
  characters: Character[];

  constructor(@Inject(CharacterService) private characterService: CharacterService){}
  getCharacters() {
    this.characterService.getCharacters().then(characters => this.characters = characters);
  }
  ngOnInit() {
    this.getCharacters();
  }
}
