import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';
@Component({
  selector: 'app-attente',
  templateUrl: './attente.component.html',
  styleUrls: ['./attente.component.css']
})
export class AttenteComponent implements OnInit {
  
  code = ""

  players = [{id:1, name:""}]
  //[{id:1, name:"clement"},{id:2, name:"francois"},{id:3, name:"a"},
  //{id:4, name:"b"},{id:5, name:"c"},{id:6, name:"d"},{id:7, name:"e"}]

  started = false

  constructor(private http: HttpClient){
    const url = window.location.href
    if(url.includes("partie")||url.includes("endgame")) this.started = true;
  }

  connect(): void {
    let source = new EventSource('http://localhost:8080/stream/game/'+this.code+ "/new_player");
    source.addEventListener('new_player', message => {
      var corsHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': 'null'
    });
      
    this.http.get<any>("http://localhost:8080/api/game/"+this.code,{headers:corsHeaders}).subscribe(data => {
      
      this.players = data.players
      console.log(this.players);
    });
    });
  }

  ngOnInit(): void {
    var corsHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': 'null'
    });
    
    this.http.post<any>("http://localhost:8080/api/game/create",{headers:corsHeaders}).subscribe(data => {
      console.log(data);
      this.code = data.gameId
      this.players = data.players
      Pseudo = this.players
      Code = this.code
      this.connect()
  })
  }

  

  start(e: HTMLElement){
    e.remove()
  }

}

export var Pseudo: { id: number; name: string; }[];
export var Code: string;