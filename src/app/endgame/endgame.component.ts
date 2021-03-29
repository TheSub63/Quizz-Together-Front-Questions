import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-endgame',
  templateUrl: './endgame.component.html',
  styleUrls: ['./endgame.component.css']
})
export class EndgameComponent implements OnInit {

  players = [{id:1, name:"clement", points:1000},{id:2, name:"francois", points:50},{id:3, name:"a", points:0},
  {id:4, name:"b", points:0},{id:5, name:"c", points:0},{id:6, name:"d", points:400},{id:7, name:"e", points:0}]

  constructor() { }

  ngOnInit(): void {
    //REVERSE SORT TYPE SCRIPT
    this.players = this.players.sort(((p1,p2)=>(p1.points-p2.points)*-1))
  }

  start(e: HTMLElement){
    e.remove()
  }
}
