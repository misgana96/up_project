import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './auth/main/main.component';
import { RegisterComponent } from './auth/register/register.component';
import { SigninComponent } from './auth/signin/signin.component';
import { EmploymentComponent } from './auth/employment/employment.component';


const routes: Routes = [
  { path:"", component:MainComponent },
  { path:"register", component: RegisterComponent},
  { path:"signin", component: SigninComponent},
  { path:"employment", component: EmploymentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
