import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import * as $ from 'jquery';
import { Options } from 'ng5-slider';


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  @ViewChild(DataTableDirective) dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  datatableElement: DataTableDirective;

  minValue: number = 0;
  maxValue: number = 4000;
  options: Options = {
    floor: 0,
    ceil: 10000
  };


  public data = [
    { jobID: 'WP20XD', company: 'Dim World Solution', jobTitle: 'IT People Hires C++ Developer with Windows Experience', industry: 'IT Corporation', time: 'June 20th,2020 03:12 PM', seeJob: '2000', chat: '50', apply: '500' },
    { jobID: 'WP20XD', company: 'Dim World Solution', jobTitle: 'IT People Hires C++ Developer with Windows Experience', industry: 'IT Corporation', time: 'June 20th,2020 03:12 PM', seeJob: '2000', chat: '50', apply: '500' },
    { jobID: 'WP20XD', company: 'Dim World Solution', jobTitle: 'IT People Hires C++ Developer with Windows Experience', industry: 'IT Corporation', time: 'June 20th,2020 03:12 PM', seeJob: '2000', chat: '50', apply: '500' },
    { jobID: 'WP20XD', company: 'Dim World Solution', jobTitle: 'IT People Hires C++ Developer with Windows Experience', industry: 'IT Corporation', time: 'June 20th,2020 03:12 PM', seeJob: '2000', chat: '50', apply: '500' },
    { jobID: 'WP20XD', company: 'Dim World Solution', jobTitle: 'IT People Hires C++ Developer with Windows Experience', industry: 'IT Corporation', time: 'June 20th,2020 03:12 PM', seeJob: '2000', chat: '50', apply: '500' },
    { jobID: 'WP20XD', company: 'Dim World Solution', jobTitle: 'IT People Hires C++ Developer with Windows Experience', industry: 'IT Corporation', time: 'June 20th,2020 03:12 PM', seeJob: '2000', chat: '50', apply: '500' },
    { jobID: 'WP20XD', company: 'Dim World Solution', jobTitle: 'IT People Hires C++ Developer with Windows Experience', industry: 'IT Corporation', time: 'June 20th,2020 03:12 PM', seeJob: '2000', chat: '50', apply: '500' },
    { jobID: 'WP20XD', company: 'Dim World Solution', jobTitle: 'IT People Hires C++ Developer with Windows Experience', industry: 'IT Corporation', time: 'June 20th,2020 03:12 PM', seeJob: '2000', chat: '50', apply: '500' },
    { jobID: 'WP20XD', company: 'Dim World Solution', jobTitle: 'IT People Hires C++ Developer with Windows Experience', industry: 'IT Corporation', time: 'June 20th,2020 03:12 PM', seeJob: '2000', chat: '50', apply: '500' },
    { jobID: 'WP20XD', company: 'Dim World Solution', jobTitle: 'IT People Hires C++ Developer with Windows Experience', industry: 'IT Corporation', time: 'June 20th,2020 03:12 PM', seeJob: '2000', chat: '50', apply: '500' },
    { jobID: 'WP20XD', company: 'Dim World Solution', jobTitle: 'IT People Hires C++ Developer with Windows Experience', industry: 'IT Corporation', time: 'June 20th,2020 03:12 PM', seeJob: '2000', chat: '50', apply: '500' },
    { jobID: 'WP20XD', company: 'Dim World Solution', jobTitle: 'IT People Hires C++ Developer with Windows Experience', industry: 'IT Corporation', time: 'June 20th,2020 03:12 PM', seeJob: '2000', chat: '50', apply: '500' },
    { jobID: 'WP20XD', company: 'Dim World Solution', jobTitle: 'IT People Hires C++ Developer with Windows Experience', industry: 'IT Corporation', time: 'June 20th,2020 03:12 PM', seeJob: '2000', chat: '50', apply: '500' },
    { jobID: 'WP20XD', company: 'Dim World Solution', jobTitle: 'IT People Hires C++ Developer with Windows Experience', industry: 'IT Corporation', time: 'June 20th,2020 03:12 PM', seeJob: '2000', chat: '50', apply: '500' },
    { jobID: 'WP20XD', company: 'Dim World Solution', jobTitle: 'IT People Hires C++ Developer with Windows Experience', industry: 'IT Corporation', time: 'June 20th,2020 03:12 PM', seeJob: '2000', chat: '50', apply: '500' },
    { jobID: 'WP20XD', company: 'Dim World Solution', jobTitle: 'IT People Hires C++ Developer with Windows Experience', industry: 'IT Corporation', time: 'June 20th,2020 03:12 PM', seeJob: '2000', chat: '50', apply: '500' },
    { jobID: 'WP20XD', company: 'Dim World Solution', jobTitle: 'IT People Hires C++ Developer with Windows Experience', industry: 'IT Corporation', time: 'June 20th,2020 03:12 PM', seeJob: '2000', chat: '50', apply: '500' },
    { jobID: 'WP20XD', company: 'Dim World Solution', jobTitle: 'IT People Hires C++ Developer with Windows Experience', industry: 'IT Corporation', time: 'June 20th,2020 03:12 PM', seeJob: '2000', chat: '50', apply: '500' },
    { jobID: 'WP20XD', company: 'Dim World Solution', jobTitle: 'IT People Hires C++ Developer with Windows Experience', industry: 'IT Corporation', time: 'June 20th,2020 03:12 PM', seeJob: '2000', chat: '50', apply: '500' },
    { jobID: 'WP20XD', company: 'Dim World Solution', jobTitle: 'IT People Hires C++ Developer with Windows Experience', industry: 'IT Corporation', time: 'June 20th,2020 03:12 PM', seeJob: '2000', chat: '50', apply: '500' },
    { jobID: 'WP20XD', company: 'Dim World Solution', jobTitle: 'IT People Hires C++ Developer with Windows Experience', industry: 'IT Corporation', time: 'June 20th,2020 03:12 PM', seeJob: '2000', chat: '50', apply: '500' },
    { jobID: 'WP20XD', company: 'Dim World Solution', jobTitle: 'IT People Hires C++ Developer with Windows Experience', industry: 'IT Corporation', time: 'June 20th,2020 03:12 PM', seeJob: '2000', chat: '50', apply: '500' },


  ]

  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      lengthChange: false,
      searching: false
    };

  }

  showForm() {
    console.log('hero');
    $('#createJob-wrapper').slideDown(400);;
  }
  closeForm() {
    $('#createJob-wrapper').slideUp(400);
  }

  showFilter() {
    $('#filterBox-Wrapper').slideToggle(500);
  }

  closeFilter() {
    $('#filterBox-Wrapper').slideUp(500);
  }

  hideSalaryRange() {
    $('#salaryRange').slideToggle(500);
    $('#fa-angle-up-salary').toggleClass('flip');
  }

  hideJobIndustries() {
    $('#industriesTypeList').slideToggle(500);
    $('#fa-angle-up-industries').toggleClass('flip');
  }

  hideJobTypes() {
    $('#jobTypeList').slideToggle(500);
    $('#fa-angle-up-job').toggleClass('flip');
  }

}
