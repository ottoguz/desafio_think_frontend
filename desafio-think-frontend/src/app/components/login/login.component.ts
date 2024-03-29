import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private http: HttpClient,
    private router: Router,
    //private errorHandlerMessage: ErrorHandlerMessage,
    ) {}

  //Método: Captura a entrada de teclado no campo email da tela de login
  private my_email = '';
  public getEmail(email: string) {
    this.my_email = email
    return this.my_email
  }

  //Método: Captura a entrada de teclado no campo senha da tela de login
  private my_password = '';
  public getPassword(password: string) {
    this.my_password = password
    return this.my_password
  }

  //Método: comunica com a fake API reqres para capturar o token e realizar login
  //Utilizar email: "eve.holt@reqres.in" e senha: "cityslicka" para testar
  public user: any;
  public async login(): Promise<void> {
    const header = new HttpHeaders({
      contentType: 'application/json'
    })
    
    let body = {
      email: this.my_email,
      password: this.my_password,
    }
    
    this.http.post('https://reqres.in/api/login', body, { headers: header }).subscribe((data) => {
      this.user = data;
      localStorage.setItem('token', JSON.stringify(this.user));
     
      let token: any = localStorage.getItem('token');
      let json = JSON.parse(token)
      if(this.user.token === json.token) {
        this.router.navigateByUrl('/paint');
      } else {
        alert('Please check your login credentials!')
      }
    });
  }
}
