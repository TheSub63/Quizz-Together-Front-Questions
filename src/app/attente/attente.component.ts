import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attente',
  templateUrl: './attente.component.html',
  styleUrls: ['./attente.component.css']
})
export class AttenteComponent implements OnInit {
  
  code = "test"

  players = [{id:1, name:"clement"},{id:2, name:"francois"},{id:3, name:"a"},
  {id:4, name:"b"},{id:5, name:"c"},{id:6, name:"d"},{id:7, name:"e"}]

  started = false

  constructor(){
    const url = window.location.href
    if(url.includes("partie")||url.includes("endgame")) this.started = true;
  }

  ngOnInit(): void {
  }

  start(e: HTMLElement){
    e.remove()
  }

}
