import { HeaderComponent } from './Client/header/header.component';
import { RegisterComponent } from './Client/register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Client/login/login.component';
import { HomeComponent } from './Client/home/home.component';

const routes: Routes = [
  {path: '', component: HeaderComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
