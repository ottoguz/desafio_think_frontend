import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { ErrorHandlerMessage } from 'src/app/error-handler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private router: Router,
    //private errorHandlerMessage: ErrorHandlerMessage,
    ) {}

  ngOnInit(): void {
    try {
      this.login();
    } catch {
      throw new Error('Method not implemented.');
    }
  }

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
    console.log('email: ' + this.my_email)
    console.log('pass: ' + this.my_password)
    /*
    if(this.my_email !== '' && this.my_password !== '') {
      try {
        this.http.post('https://reqres.in/api/login', body, { headers: header }).subscribe((data) => {
          localStorage.setItem('token', JSON.stringify(data));
        })
      } catch (error) {
        //this.errorHandlerMessage.handleError(error);
        alert('eita')
      }
    }*/
    
    
    if(this.my_email && this.my_password) {
      this.http.post('https://reqres.in/api/login', body, { headers: header }).subscribe((data) => {
        this.user = data;
        localStorage.setItem('token', JSON.stringify(this.user));
        let token: any = localStorage.getItem('token');
        let json = this.user = JSON.parse(token);
        if(json.token === "QpwL5tke4Pnpja7X4" && this.my_email === "eve.holt@reqres.in") {
          this.router.navigateByUrl('/paint');
        } 
      });
    }
  }
}
