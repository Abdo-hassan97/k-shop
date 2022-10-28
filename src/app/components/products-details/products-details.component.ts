import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  openProductDetails(){
   (<any> this.router).navigate(['body']);
  
  };
}
