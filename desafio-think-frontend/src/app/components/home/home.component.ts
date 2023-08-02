import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(
    private router: Router,
    ) {}

  //Método: apaga o token da sessão, faz o log out e retorna à tela de login
  public logout() {
    let token = localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  } 
}
