import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ServiceService } from 'src/app/core/service/service.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss'],
})
export class PackagesComponent implements OnInit {
  //bien giu du lieu
  packageArray: any[] = [];
  packageObj = {
    packageId: 0,
    packageName: '',
    packageCost: '',
    packageDescription: '',
    isPackageActive: false,
  };
  isloader: boolean = false;

  // tao ra mot doi tuong de tro wa ben serve
  constructor(private packageSrv: ServiceService) {}

  ngOnInit(): void {
    //da tao ra chuc nang ma k phai no tu tao
    //vi vay khi du lieu tai len va se dc khoi tao tai day

    this.loadPackage();
  }

  //lay du lieu ra tu doi tuong packageSrv
  loadPackage() {
    this.isloader = true;
    this.packageSrv.getAppPackage().subscribe((res: any) => {
      //can giu du lieu thi phai tro tk packageArray xuong
      this.isloader = false;
      this.packageArray = res.data;
    });
  }

  createPackage() {
    this.isloader = true;
    this.packageSrv.addNewPackage(this.packageObj).subscribe((res: any) => {
      this.isloader = false;
      if (res.result) {
        this.loadPackage();
        alert('Package added');
      } else {
        alert('Fail');
      }
    });
  }
  editRecord(id: number) {
    this.packageSrv.getPackageById(id).subscribe((res: any) => {
      if (res.result) {
        this.packageObj = res.data;
      } else {
        alert('Fail');
      }
    });
  }
  updatePackage() {
    this.isloader = true;
    this.packageSrv.updatePackage(this.packageObj).subscribe((res: any) => {
      this.isloader = false;
      if (res.result) {
        this.loadPackage();
        alert('Package added');
      } else {
        alert('Fail');
      }
    });
  }

  onDelete(id: number) {
    const isDelete = confirm('Are u sure delete');
    if (isDelete == true) {
      this.isloader = true;
      this.packageSrv.deletePackageById(id).subscribe((res: any) => {
        this.isloader = false;
        if (res.result) {
          this.loadPackage();
          alert('Delete Success');
        } else {
          alert('Fail');
        }
      });
    }
  }
}
