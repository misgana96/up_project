import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';

const routes: Routes = [

    {
        path: '',
        children: [
            {
                path: 'home',
                component: HomeComponent,
            },
            {
                path: 'jobs',
                component: JobsComponent
            }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }
