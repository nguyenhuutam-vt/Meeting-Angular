import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../core/service/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {}
  constructor(private accService: ServiceService, private router: Router) {}

  loginObj: any = {
    UserName: '',
    UserPassword: '',
  };

  onLogin() {
    this.accService.onLogin(this.loginObj).subscribe((res: any) => {
      // localStorage.setItem('userName', res.data.userName);
      localStorage.setItem('reqObj', JSON.stringify(res.data));
      if (res.data.role === 'admin') {
        this.router.navigateByUrl('package');
      } else if (res.data.Role == 'Employee') {
        this.router.navigateByUrl('package');
      } else {
        alert('sai');
      }
    });
  }
}
