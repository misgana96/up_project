import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MyInfoComponent } from './profile/my-info/my-info.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfessionComponent } from './profile/profession/profession.component';
import { JobDetailsComponent } from './profile/job-details/job-details.component';
import { NotificationComponent } from './profile/notification/notification.component';
import { SettingsComponent } from './profile/settings/settings.component';


@NgModule({
  declarations: [SidenavComponent, MyInfoComponent, ProfileComponent, ProfessionComponent, JobDetailsComponent, NotificationComponent, SettingsComponent],
  imports: [
    CommonModule,
    UserProfileRoutingModule
  ]
})
export class UserProfileModule { }
