import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public users: any;
  constructor(
    private http: HttpClient,
    private router: Router, 
    ) {}

  ngOnInit(): void {
    try {
      this.signup();
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
        this.users = data;
        console.log(this.users)
        if(this.users.token === 'QpwL5tke4Pnpja7X4' && this.my_email === "eve.holt@reqres.in" && this.my_password === "pistol") {
          this.router.navigateByUrl('/login');
        } else {
          console.log('aaaaaaaaaa')
        }
      });
    }
  }
}
