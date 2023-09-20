import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/core/service/service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  ngOnInit(): void {}
  useList: any[] = [];
  loogedUserData: any;
  constructor(private allUser: ServiceService, private http: HttpClient) {
    //tham chiu localstore
    const localData = localStorage.getItem('reqObj');
    if (localData != null) {
      this.loogedUserData = JSON.parse(localData);
      if (this.loogedUserData.role == 'admin') {
        this.getAllUser();
      } else {
        this.allUserById();
      }
    }
  }
  getAllUser() {
    this.allUser.allUser().subscribe((res: any) => {
      this.useList = res.data;
    });
  }
  allUserById() {
    this.http
      .get(
        'https://onlinetestapi.gerasim.in/api/Meeting/GetAllUsersByClientId?id=' +
          this.loogedUserData.clientId
      )
      .subscribe((res: any) => {
        this.useList = res.data;
      });
  }
}
