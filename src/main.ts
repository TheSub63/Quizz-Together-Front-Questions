import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {WebsocketBuilder} from 'websocket-ts';
const port = 42421;


/*const ws = new WebsocketBuilder('ws://localhost:42421')
    .onOpen((ws, e) => { console.log("opened") })
    .onClose((ws, e) => { console.log("closed") })
    .onError((ws, e) => { console.log("error") })
    .onMessage((ws, e) => { ws.send(e.data) })
    .build();*/

if (environment.production) {
  enableProdMode();
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
