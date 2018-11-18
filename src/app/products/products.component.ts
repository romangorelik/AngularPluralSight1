import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';
import { ProductsService } from './products.service'

@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title: string = 'Product List'
  imageWidth: number = 50
  imageMargin: number = 2
  showImage: boolean = false
  
  _listFilter: string 

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products
  }

  filteredProducts: IProduct[]
  products: IProduct[] = []

  constructor(private productsService: ProductsService) { 
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase()
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1)
  }

  onRatingClicked(message: string): void {
    this.title = 'Product List: ' + message
  }

  toggleImage(): void {
    this.showImage = !this.showImage
  }

  ngOnInit(): void {
    this.products = this.productsService.getProducts()
    this.filteredProducts = this.products;
  }

}
