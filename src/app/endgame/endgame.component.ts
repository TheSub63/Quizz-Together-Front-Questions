import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-endgame',
  templateUrl: './endgame.component.html',
  styleUrls: ['./endgame.component.css']
})
export class EndgameComponent implements OnInit {

  players = [{id:1, name:"", points:0}]
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //REVERSE SORT TYPE SCRIPT
    console.log(window.location.toString().split("/")[4])
    this.http.delete<any>("http://localhost:8080/api/game/"+window.location.toString().split("/")[4]+"/end_game").subscribe(data => {
      this.players = data.players
      this.players = this.players.sort(((p1,p2)=>(p1.points-p2.points)*-1))
  });
  }

  start(e: HTMLElement){
    e.remove()
  }
}
