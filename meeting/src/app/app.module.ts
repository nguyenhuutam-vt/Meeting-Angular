import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PackagesComponent } from './pages/packages/packages.component';
import { ClientComponent } from './pages/client/client.component';
import { UserComponent } from './pages/user/user.component';
import { PackageActivationComponent } from './pages/package-activation/package-activation.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
@NgModule({
  declarations: [
    AppComponent,
    PackagesComponent,
    ClientComponent,
    UserComponent,
    PackageActivationComponent,
    LoginComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
