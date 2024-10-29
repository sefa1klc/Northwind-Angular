import { Component } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'northwind';

  isLoginRoute: boolean = false;
  isRegisterRoute: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getLoginPage();
    this.getRegisterPage();
  }

  getLoginPage(){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isLoginRoute = event.url === '/login';
      }
    });
  }

  getRegisterPage(){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isRegisterRoute = event.url === '/register';
      }
    });
  }
}
