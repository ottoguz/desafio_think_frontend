import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(
    private http: HttpClient,
    private router: Router, 
    ) {}
  
  //Método: Captura a entrada de teclado no campo email da tela de registro
  private my_email = '';
  public getEmail(email: string) {
    this.my_email = email
    return this.my_email
  }

  //Método: Captura a entrada de teclado no campo senha da tela de registro
  private my_password = '';
  public getPassword(password: string) {
    this.my_password = password
    return this.my_password
  }

  //Método: comunica com a fake API reqres para capturar o token e realizar o registro
  //Utilizar email: "eve.holt@reqres.in" e senha: "pistol" para testar
  public user: any;
  public async signup(): Promise<void> {
    const header = new HttpHeaders({
      contentType: 'application/json'
    })

    let body = {
      email: this.my_email,
      password: this.my_password,
    }

    if(this.my_email && this.my_password) {
      this.http.post('https://reqres.in/api/register', body, { headers: header }).subscribe((data) => {
        this.user = data;
        localStorage.setItem('token', JSON.stringify(this.user));
        let token: any = localStorage.getItem('token');
        let json = this.user = JSON.parse(token);
        if(this.user.token === json.token) {
          this.router.navigateByUrl('/login');
        } 
      });
    }
  }
}
