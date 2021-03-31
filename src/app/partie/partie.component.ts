import { Component, OnInit } from '@angular/core';
import { Pseudo, Code } from '../attente/attente.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-partie',
  templateUrl: './partie.component.html',
  styleUrls: ['./partie.component.css']
})
export class PartieComponent implements OnInit {

  question = ""

  code = Code

  rounds = 5

  propositions = [{id:1, txt:""},{id:2, txt:""},{id:3, txt:""},{id:4, txt:""}]
  answers = [0,0,0,0]
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log(this.requestQuestion())

  }

  requestQuestion(){
    this.rounds--
    if(this.rounds==0) {
      window.location.href = "http://localhost:4200/endgame/"+Code
    }
    var corsHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': 'null'
    });
    this.http.post<any>("http://localhost:8080/api/game/"+Code+"/new_round", "",{headers:corsHeaders}).subscribe(data => {
      this.question = data.statement
      var i=0
      this.propositions.forEach(element => {
        element.txt=data.answers[i]
        i++
    });
  })
}

  onTime(mark :string){
    switch(mark){
      case "get_reponses":{
        var corsHeaders = new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': 'null'
        });
        this.http.put<any>("http://localhost:8080/api/game/"+Code+"/end_round", "",{headers:corsHeaders}).subscribe(data => {
            this.answers = [data.answers["0"].length,data.answers["1"].length,data.answers["2"].length,data.answers["3"].length]
            console.log("answers " + this.answers)
            for (var _i = 1; _i < 5; _i++) {
              var num = this.answers[_i-1];
              var props = document.getElementById(_i.toString())
              var elt = document.createElement("p")
              elt.id="temp"
              elt.className="align"
              elt.textContent=num.toString()
              props?.append(elt)
            }
      });
        break;
      }
      case "display_bonhommes":{
        
        break;
      }
      case "display_question":{
        var propsList = Array.from(document.getElementsByClassName("align"))
        for(let item of propsList){
          item.remove()
        }
        this.requestQuestion()
        break;
      }
      default:{
        break;
      }
    }
  }

}
