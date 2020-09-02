import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.scss']
})
export class MyInfoComponent implements OnInit {

  public imageUrl: string | ArrayBuffer = '../../../assets/images/user_img.png'

  constructor(private profile:ProfileService) { }

  ngOnInit(): void {
    this.profile.saveProfileImage(this.imageUrl);
  }

  uploadFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => {
        this.imageUrl = event.target.result;
        this.profile.saveProfileImage(this.imageUrl);
      }
    }
  }

}
