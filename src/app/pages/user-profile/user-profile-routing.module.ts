import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { MyInfoComponent } from './profile/my-info/my-info.component';
import { ProfessionComponent } from './profile/profession/profession.component';
import { JobDetailsComponent } from './profile/job-details/job-details.component';
import { NotificationComponent } from './profile/notification/notification.component';
import { SettingsComponent } from './profile/settings/settings.component';


const routes: Routes = [
  {path:'', component:ProfileComponent,
    children: [
      { path: 'my-info', component: MyInfoComponent },
      { path: 'profession', component: ProfessionComponent },
      { path: 'job-details', component: JobDetailsComponent },
      { path: 'notification', component: NotificationComponent },
      { path: 'settings', component: SettingsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
