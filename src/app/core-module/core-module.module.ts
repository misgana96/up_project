import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { CoreRoutingModule } from './core-module-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { Ng5SliderModule } from 'ng5-slider';


@NgModule({
  declarations: [
    HomeComponent,
    JobsComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    Ng5SliderModule
  ]
})
export class CoreModuleModule { }
