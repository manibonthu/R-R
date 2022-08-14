import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-birthday-event',
  templateUrl: './birthday-event.component.html',
  styleUrls: ['./birthday-event.component.scss']
})
export class BirthdayEventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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

}
