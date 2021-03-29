import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { interval } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  duree = 20
  timer : number | undefined;
  titre = "Temps restant"
  get secondes() : number {return this.duree}

  start(){
    interval(1000).subscribe(x => {
      this.duree--;
      if(this.duree<0) 
      {
        console.log("appeler la question suivante ici")
        this.duree=0
      }
    });
  }

  constructor() { 
  }

  ngOnInit(): void {
    this.start()
  }

}
