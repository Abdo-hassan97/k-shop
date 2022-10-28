import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  // router =Router;

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }
  openProductDetails(){
   (<any> this.router).navigate(['Products']);
  
  };
}



