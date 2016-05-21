import { bootstrap }    from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router';
import { AppComponent } from './app.component';
import {CharacterService} from './services/character.service';

bootstrap(AppComponent, [ROUTER_PROVIDERS, CharacterService]);
