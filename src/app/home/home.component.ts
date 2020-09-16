import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  HomeImages = ['assets/images/banner.jpg', 'assets/images/banner.jpg', 'assets/images/banner.jpg'];  
  ArivalImages = [
    {
      img: 'assets/images/usa-travel.jpg',
      title: 'Office Work',
      category: '- Travel',
      address:'at USA Travel',
      experience:'6+ month',
      salary: '$205 to $500',
      location: 'Nevadam,USA',
      type: 'Full Time'
    }, 
    {
      img:'assets/images/ount-verno.jpg',
      title: 'Wordpress Developer',
      category: '- IT & Development',
      address:'at Mount Vernon Company',
      experience:'6+ month',
      salary: '$205 to $500',
      location: 'Nevadam,USA',
      type: 'Full Time'
    }, 
    {
      img:'assets/images/mkt-exp.jpg',
      title: 'Marketing Executive',
      category: '- Real Estate',
      address:'at The Stovall Group',
      experience:'6+ month',
      salary: '$205 to $500',
      location: 'Nevadam,USA',
      type: 'Full Time'
    }
  ];  
  PartnerImages = ['assets/images/google.png', 'assets/images/intel.png', 'assets/images/microsoft.png', 'assets/images/HP-Logo.png'];  
  
  SlideOptions = {
    loop:true,
    margin:10,
    nav:true,
    dots: true, 
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  }; 

  ArivalSlideOptions = {
    loop:true,
    margin:15,
    items : 1, // THIS IS IMPORTANT
    nav:true,
    dots:false,
    responsive:{
      480 : { items : 1  }, // from zero to 480 screen width 4 items
      768 : { items : 2  }, // from 480 screen widthto 768 6 items
      1024 : { items : 3 }  // from 768 screen width to 1024 8 items
    }
  }; 

  PartnersSlideOptions = {
    loop:true,
    margin:15,
    center: true,
    nav:true,
    dots:false,
    responsive:{
        320:{
            items:2
        },
        767:{
            items:4
        },
        1000:{
            items:5
        }
    }
  }; 
  
  //CarouselOptions = { items: 3, dots: true, nav: true };  
  constructor() { }

  ngOnInit(): void {
  }

}
