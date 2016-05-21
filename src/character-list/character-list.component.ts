import { Component, OnInit, Inject } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';
import { Character } from '../character';
import {CharacterService} from '../services/character.service';
import {CharacterDetailComponent} from '../character-detail/character-detail.component';

@Component({
  selector: 'character-list',
  templateUrl: 'character-list/character-list.html',
  styleUrls: ['character-list/character-list.css'],
  directives: [ROUTER_DIRECTIVES]
})

// @Routes([
//   {
//     path: '/:id',
//     component: CharacterDetailComponent
//   }
// ])

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
