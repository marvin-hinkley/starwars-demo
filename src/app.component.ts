import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {CharacterListComponent} from './character-list/character-list.component';
import {CharacterDetailComponent} from './character-detail/character-detail.component';

@Component({
  selector: 'starwars-app',
  templateUrl: 'app.html',
  directives: [CharacterListComponent, CharacterDetailComponent, ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
  {
    path: '/detail/:id',
    name: 'CharacterDetail',
    component: CharacterDetailComponent
  }
])
export class AppComponent {}
