import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import {CharacterListComponent} from './character-list/character-list.component';
import {CharacterDetailComponent} from './character-detail/character-detail.component';

@Component({
  selector: 'starwars-app',
  templateUrl: 'app.html',
  directives: [CharacterListComponent, CharacterDetailComponent]
})
@Routes([
  {
    path: '/list/...',
    component: CharacterListComponent
  },
  {
    path: '/detail/:id',
    component: CharacterDetailComponent
  }
])
export class AppComponent {}
