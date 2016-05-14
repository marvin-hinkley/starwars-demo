import { Component } from '@angular/core';
import {Character} from './character';
import {CharacterListComponent} from './character-list/character-list.component';
import {CharacterDetailComponent} from './character-detail/character-detail.component';

@Component({
  selector: 'starwars-app',
  templateUrl: 'app.html',
  directives: [CharacterListComponent, CharacterDetailComponent]
})
export class AppComponent {}
