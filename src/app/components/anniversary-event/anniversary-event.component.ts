import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anniversary-event',
  templateUrl: './anniversary-event.component.html',
  styleUrls: ['./anniversary-event.component.scss']
})
export class AnniversaryEventComponent implements OnInit {
  members = [
    {
      name : 'Mani'
    },
    {
      name : 'Mani'
    },
    {
      name : 'Mani'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
