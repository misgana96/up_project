import { Component, OnInit } from '@angular/core';
import $ from "jquery";
@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.scss']
})
export class EmploymentComponent implements OnInit {
  
  isEmployment: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
    $(document).ready(function() {
      $('.filebtn').on('click', function() {
        $('.file').trigger('click');
      });
    
      $('.file').on('change', function() {
        var fileName = $(this)[0].files[0].name;    
        $('#file-name').val(fileName);
      });
    })
  }

  goSecondStep(){
    this.isEmployment = !this.isEmployment
  }

}
