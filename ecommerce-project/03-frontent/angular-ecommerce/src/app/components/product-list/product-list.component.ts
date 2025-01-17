import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/common/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list.component.css']
})


export class ProductListComponent implements OnInit {

  products: Product[] = [];
  currentCategoryId: number = 1;
  
  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe( () => {
      this.listProducts();
    }
  );
  }

  listProducts() {

    //check if 'id' param is available

    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if(hasCategoryId){
      //We need to convert that id to a number.
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!; // This '!' tells the compiler that the object cannot be null.

    }else{
      //not category available ... default categoty to 1.
      this.currentCategoryId = 1;

    }

    this.productService.getProductList(this.currentCategoryId).subscribe(
      data => {
        this.products = data;
      }
    )
  }

}
