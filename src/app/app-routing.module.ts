import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core-module/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent

  },
  {
    path: 'user',
    loadChildren: () => import('src/app/core-module/core-module.module').then(m => m.CoreModuleModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
