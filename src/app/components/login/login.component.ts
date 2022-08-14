import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
  
      this.loginService.login(this.form.value.username,this.form.value.password).subscribe((result) => {
        this.loginService.storeLoggedInUser(result)
        this.router.navigateByUrl('/app')
      })
     
    }
  }
  constructor(private router :Router, private loginService: CommonService) { }

  ngOnInit(): void {
  }

}
