import { Component } from '@angular/core';
import { RouteConfig } from '@angular/router-deprecated';
import {CharacterListComponent} from './character-list/character-list.component';
import {CharacterDetailComponent} from './character-detail/character-detail.component';

@Component({
  selector: 'starwars-app',
  templateUrl: 'app.html',
  directives: [CharacterListComponent, CharacterDetailComponent]
})
@RouteConfig([
  {
    path: '/',
    name: 'App',
    component: AppComponent
  },
  {
    path: '/detail/:id',
    name: 'CharacterDetail',
    component: CharacterDetailComponent
  }
])
export class AppComponent {}
