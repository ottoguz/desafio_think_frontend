import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private router: Router,
    ) {}

  ngOnInit(): void {
    try {
      this.login();
    } catch {
      throw new Error('Method not implemented.');
    }

    try {
      this.logout();
    } catch {
      throw new Error('Method not implemented.');
    }
  }

  private my_email = '';
  public getEmail(email: string) {
    this.my_email = email
    console.log(this.my_email)
    return this.my_email
  }

  private my_password = '';
  public getPassword(password: string) {
    this.my_password = password
    console.log(this.my_password)
    return this.my_password
  }

  public user: any;
  public async login(): Promise<void> {
    const header = new HttpHeaders({
      contentType: 'application/json'
    })
    let body = {
      email: this.my_email,
      password: this.my_password,
    }
    if(this.my_email && this.my_password) {
      this.http.post('https://reqres.in/api/login', body, { headers: header }).subscribe((data) => {
        this.user = data;

        localStorage.setItem('token', JSON.stringify(this.user));
        let token: any = localStorage.getItem('token');
        let json = this.user = JSON.parse(token);
        if(json.token === "QpwL5tke4Pnpja7X4") {
          this.router.navigateByUrl('/paint');
        } else {
          console.log('aaaaaaaaaa')
        }
      });
    }
  }

  
  public logout() {
    let token = localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
    console.log('token: ' + token)
  } 
}