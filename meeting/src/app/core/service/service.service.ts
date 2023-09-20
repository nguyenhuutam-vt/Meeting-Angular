import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}
  getAppPackage() {
    return this.http.get(
      'https://onlinetestapi.gerasim.in/api/Meeting/GetAllPackages'
    );
  }
  addNewPackage(obj: any) {
    return this.http.post(
      'https://onlinetestapi.gerasim.in/api/Meeting/CreatePackage',
      obj
    );
  }

  getPackageById(packageId: number) {
    return this.http.get(
      'https://onlinetestapi.gerasim.in/api/Meeting/GetPackgeById?id=' +
        packageId
    );
  }
  updatePackage(obj: any) {
    return this.http.post(
      'https://onlinetestapi.gerasim.in/api/Meeting/UpdatePackge',
      obj
    );
  }
  deletePackageById(packageId: number) {
    return this.http.post(
      'https://onlinetestapi.gerasim.in/api/Meeting/DeletePackgeById?id=' +
        packageId,
      {}
    );
  }

  onLogin(obj: any) {
    return this.http.post(
      'https://onlinetestapi.gerasim.in/api/Meeting/login',
      obj
    );
  }

  allUser() {
    return this.http.get(
      'https://onlinetestapi.gerasim.in/api/Meeting/GetAllusers'
    );
  }

  // allUserById() {
  //   return this.http.get(
  //     'https://onlinetestapi.gerasim.in/api/Meeting/GetAllUsersByClientId?id=1'
  //   );
  // }
}
