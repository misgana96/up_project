import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  public sideNavItems = [
    { label: "My Info", path: '/profile/my-info' },
    { label: "Profession", path: '/profile/profession' },
    { label: "Job Detail", path: '/profile/job-details' },
    { label: "Notification", path: '/profilenotification' },
    { label: "Settings", path: '/profile/settings' },
  ]

  @Output() navSelected: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  navigation(navItem) {
    this.navSelected.emit(navItem)
  }

}
