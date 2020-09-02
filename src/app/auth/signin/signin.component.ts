import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  @ViewChild('inputPassword') inputPasswordRef: ElementRef;
  @ViewChild('passwordIcon') passwordIconRef: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  showHidePassword(): void {
    if(this.inputPasswordRef.nativeElement.type == "text"){
      this.inputPasswordRef.nativeElement.type = 'password';
      this.passwordIconRef.nativeElement.classList.add( "fa-eye-slash" );
      this.passwordIconRef.nativeElement.classList.remove( "fa-eye" );
    }else if(this.inputPasswordRef.nativeElement.type == "password"){
        this.inputPasswordRef.nativeElement.type = 'text';
        this.passwordIconRef.nativeElement.classList.remove( "fa-eye-slash" );
        this.passwordIconRef.nativeElement.classList.add( "fa-eye" );
    }
  }

}
