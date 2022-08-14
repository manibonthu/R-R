import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';
import { LoginService } from 'src/app/services/login.service';
import { User } from '../models/user.model';

export interface MenuItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuItems: MenuItem[] = [
    {
      label: 'Recognitions',
      icon: 'menu_open',
      route: '/app/recognition',
    },
    {
      label: 'Gratitude',
      icon: 'menu_open',
      route: '/app/gratitude',
    },
    {
      label: 'Events',
      icon: 'attach_money',
      route: '/app/events',
    },
    {
      label: 'Logout',
      icon: 'exit_to_app',
      route: '/',
    },
  ];
  user$: Observable<User>
  constructor(private loginService: CommonService) {
    this.user$ = this.loginService.getLoggedInUser() as Observable<User>
  }

  ngOnInit(): void {
    
  }
}
