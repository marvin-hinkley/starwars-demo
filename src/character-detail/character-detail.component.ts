import { Component, Input, Inject } from '@angular/core';
import { Router, RouteSegment, OnActivate } from '@angular/router';
import { Character } from '../character';
import {CharacterService} from '../services/character.service';

@Component({
  selector: 'character-detail',
  templateUrl: 'character-detail/character-detail.html',
  styleUrls: ['character-detail/character-detail.css']
})
export class CharacterDetailComponent implements OnActivate {
  character: Character;

  constructor(@Inject(CharacterService) private characterService: CharacterService){}
  routerOnActivate(current: RouteSegment) {
    this.characterService.getCharacter(+current.getParam('id')).then(
      character => this.character = character
    );
  }
}
