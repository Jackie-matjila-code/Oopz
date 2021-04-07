import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  register(){
    this.router.navigateByUrl('register');
  }

    // tslint:disable-next-line: typedef
    login(){
      this.router.navigateByUrl('login');
      }
}
