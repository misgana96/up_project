import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './auth/main/main.component';
import { RegisterComponent } from './auth/register/register.component';
import { SigninComponent } from './auth/signin/signin.component';
import { EmploymentComponent } from './auth/employment/employment.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';


const routes: Routes = [
  { path:"", component:SigninComponent },
  { path:"register", component: RegisterComponent},
  { path:"signin", component: SigninComponent},
  { path:"employment", component: EmploymentComponent},
  { path:"privacy-policy", component: PrivacyPolicyComponent},
  { path:"profile", loadChildren: () => import('./pages/user-profile/user-profile.module').then(m => m.UserProfileModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
