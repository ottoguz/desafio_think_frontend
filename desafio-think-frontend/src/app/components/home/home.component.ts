import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//declare function removeColor(): void;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(
    private router: Router,
    ) {}

  show:boolean = true;
  public logout() {
    let token = localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  } 
}
