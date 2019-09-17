import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  customOptions: OwlOptions = {        
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,    
    responsive: {
      100: {
        items: 1
      }     
    },
    nav: false
  }

  carouselData = [
    {
      'title': '100% Fresh Organic Foods',
      'image': './assets/images/bg_1.jpg'
    },
    {
      'title': '200% Fresh Organic Foods',
      'image': './assets/images/bg_2.jpg'
    },
    {
      'title': '</form>300% Fresh Organic Foods',
      'image': './assets/images/bg_3.jpg'
    },
  ]  
  constructor() { }  

  ngOnInit() {    
    window.scrollTo(0, 0)        
    let ss = sessionStorage.getItem("showSubscriber");
    console.log(ss);
    if(ss === 'null' || ss === null) {
      $('.popup').addClass('open');
    }
  }

  closePopup() {
    $('.popup').removeClass('open');    
    sessionStorage.setItem("showSubscriber", "false");
  }

}
