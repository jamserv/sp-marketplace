import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  items = [
    {
      name: 'BELL PEPPER',
      price_old: '$120.00',
      price_new: '$80.00',
      image: './assets/images/product-1.jpg'
    },
    {
      name: 'BELL PEPPER',
      price_old: '$45.00',
      price_new: '$20.00',
      image: './assets/images/product-2.jpg'
    },
    {
      name: 'BELL PEPPER',
      price_old: '$300.00',
      price_new: '$220.00',
      image: './assets/images/product-3.jpg'
    },
    {
      name: 'BELL PEPPER',
      price_old: '$60.00',
      price_new: '$25.00',
      image: './assets/images/product-4.jpg'
    },
    {
      name: 'BELL PEPPER',
      price_old: '$120.00',
      price_new: '$80.00',
      image: './assets/images/product-5.jpg'
    },
    {
      name: 'BELL PEPPER',
      price_old: '$120.00',
      price_new: '$80.00',
      image: './assets/images/product-6.jpg'
    },
    {
      name: 'BELL PEPPER',
      price_old: '$120.00',
      price_new: '$80.00',
      image: './assets/images/product-7.jpg'
    },
    {
      name: 'BELL PEPPER',
      price_old: '$120.00',
      price_new: '$80.00',
      image: './assets/images/product-8.jpg'
    },
  ]

}
