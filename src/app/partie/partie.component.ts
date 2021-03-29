import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partie',
  templateUrl: './partie.component.html',
  styleUrls: ['./partie.component.css']
})
export class PartieComponent implements OnInit {

  question = "Quel est le monument le plus célèbre de Paris?"

  propositions = [{id:1, txt:"La Tour Eiffel"},{id:2, txt:"Notre Dame"},{id:3, txt:"L'Arc de Triomphe"},{id:4, txt:"Le Moulin Rouge"}]

  constructor() { }

  ngOnInit(): void {
  }

}
