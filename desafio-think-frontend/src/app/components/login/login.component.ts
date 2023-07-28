import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public users: any;
  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    try {
      this.login();
    } catch {
      throw new Error('Method not implemented.');
    }
  }

  public async login() {
    const header = new HttpHeaders({
      contentType: 'application/json'
    })
    let body = {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
    }
    await this.http.post('https://reqres.in/api/login', body, {headers: header}).subscribe((data) => {
      console.log(data);
      this.users = data;
    });
  }
}
