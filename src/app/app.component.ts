import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  innerWidth: number;
  status: boolean;

  ngOnInit() {
    this.innerWidth = window.innerWidth;

    if (innerWidth < 768) {
      this.status = false;
    }

    $(document).on('show.bs.modal', '.modal', function () {
      $(this).appendTo('body');
    });

  }

  sidebarToggle() {
    this.status = !this.status;
  }
}
