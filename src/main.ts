import { bootstrap }    from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS, RouteParams} from '@angular/router-deprecated';
import { AppComponent } from './app.component';
import {CharacterService} from './services/character.service';

bootstrap(AppComponent, [ROUTER_PROVIDERS, CharacterService]);
