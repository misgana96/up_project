import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { SigninComponent } from './auth/signin/signin.component';
import { EmploymentComponent } from './auth/employment/employment.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path:"", component:SigninComponent },
  { path:"register", component: RegisterComponent},
  { path:"signin", component: SigninComponent},
  { path:"employment", component: EmploymentComponent},
  { path:"home", component: HomeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
