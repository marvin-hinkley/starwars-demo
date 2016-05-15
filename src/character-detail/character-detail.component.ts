import { Component, Input, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { Character } from '../character';
import {CharacterService} from '../services/character.service';

@Component({
  selector: 'character-detail',
  templateUrl: 'character-detail/character-detail.html',
  styleUrls: ['character-detail/character-detail.css'],
  providers: [CharacterService, RouteParams]
})
export class CharacterDetailComponent implements OnInit {
  character: Character;

  constructor(private characterService: CharacterService, private routeParams: RouteParams){}
  ngOnInit() {
    let id = +this.routeParams.get('id');
    this.characterService.getCharacter(id).then(character => this.character = character);
  }
}
