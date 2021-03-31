import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { interval } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  duree = 20
  interQuestion = 5
  timer : number | undefined
  titre = "Temps restant"
  get secondes() : number {return this.duree}

  @Output() time = new EventEmitter<string>();

  start(){
    interval(1000).subscribe(x => {
      this.duree--;
      if(this.duree<=0 && this.interQuestion==5) 
      {
        this.duree=0
        this.interQuestion--
        this.time.emit("get_reponses")
        this.time.emit("display_bonhommes")
      }
      else if (this.interQuestion==0){
        this.time.emit("display_question")
        this.duree = 20
        this.interQuestion = 5
      }
      else if(this.interQuestion<5)
        {
          this.duree=0
          this.interQuestion--
        }
      
    });
  }

  constructor() { 
  }

  ngOnInit(): void {
    this.start()
  }

}
