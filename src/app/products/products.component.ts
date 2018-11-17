import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title: string = 'Product List'
  constructor() { }

  ngOnInit() {
  }

}
