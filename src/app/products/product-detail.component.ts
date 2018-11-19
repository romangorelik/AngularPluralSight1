import { Component, OnInit } from '@angular/core';
import { IProduct } from './products'
@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  title: string = 'Product Detail'
  product: IProduct

  constructor() { }

  ngOnInit() {
  }

}
