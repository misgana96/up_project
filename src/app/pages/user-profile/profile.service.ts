import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profileImg = new Subject();

  constructor() { }

  saveProfileImage(image) {
    this.profileImg.next(image);
  }

}
