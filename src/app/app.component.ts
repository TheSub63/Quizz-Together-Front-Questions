import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quizz-together';
  
  started = false
  constructor(){
    const url = window.location.href
    if(url.includes("attente")||url.includes("partie")||url.includes("endgame")) this.started = true;
    else this.started = false
  }
  ngOndestroy() {
  }
  start(e: HTMLElement){
    e.remove()
  }
}
