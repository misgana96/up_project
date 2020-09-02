import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public isMobile = false;
  public navSelected = false;

  constructor(private router:Router) { }

  ngOnInit(): void {
    if (window.innerWidth <= 767) {
      this.isMobile = true;
      this.router.navigate(['/profile']);
    } else {
      this.isMobile = false;
      this.router.navigate(['/profile/my-info']);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth <= 767) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }

  selectedNav(event) {
    this.navSelected = true;
  }

}
