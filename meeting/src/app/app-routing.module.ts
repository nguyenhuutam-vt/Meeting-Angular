import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackagesComponent } from './pages/packages/packages.component';
import { ClientComponent } from './pages/client/client.component';
import { UserComponent } from './pages/user/user.component';
import { PackageActivationComponent } from './pages/package-activation/package-activation.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'package',
    component: PackagesComponent,
  },
  {
    path: 'client',
    component: ClientComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'package-activation',
    component: PackageActivationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
