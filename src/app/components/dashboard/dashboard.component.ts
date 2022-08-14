import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { browserRefresh } from 'src/app/app.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private router : Router){}
  ngOnInit(): void {
    if(browserRefresh) {
      this.router.navigateByUrl('/')
    }
  }
}
