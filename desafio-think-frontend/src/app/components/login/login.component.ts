import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public users: any;
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
  }

  private my_email = '';
  public getEmail(email: string) {
    this.my_email = email
    return this.my_email
  }

  private my_password = '';
  public getPassword(password: string) {
    this.my_password = password
    return this.my_password
  }

  public async login(): Promise<void> {
    const header = new HttpHeaders({
      contentType: 'application/json'
    })
    let body = {
      email: this.my_email,
      password: this.my_password,
    }
    await this.http.post('https://reqres.in/api/login', body, { headers: header }).subscribe((data) => {
      this.users = data;
      if (this.users === "QpwL5tke4Pnpja7X4") {
        this.router.navigateByUrl('/paint');
      } else {
        alert('wrong pass')
      }
    });
  }
}
