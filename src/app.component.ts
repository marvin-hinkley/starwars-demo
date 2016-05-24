import { Component, OnInit, Inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { Character } from './character';
import {CharacterService} from './services/character.service';
import {CharacterDetailComponent} from './character-detail/character-detail.component';

@Component({
  selector: 'starwars-app',
  templateUrl: 'app.html',
  directives: [CharacterDetailComponent, ROUTER_DIRECTIVES, NgClass]
})
@Routes([
  {
    path: '/detail/:id',
    component: CharacterDetailComponent
  }
])
export class AppComponent implements OnInit {
  characters: Character[];

  constructor(@Inject(CharacterService) private characterService: CharacterService){}
  getCharacters() {
    this.characterService.getCharacters().then(characters => this.characters = characters);
  }
  ngOnInit() {
    this.getCharacters();
  }
}
