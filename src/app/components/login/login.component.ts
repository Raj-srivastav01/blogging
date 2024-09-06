import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.email && this.password) {
      const user = {
        name: 'Raj Srivastav',
        email: this.email,
        joined: 'July 22, 2023'
      };
      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['/profile']);
    } else {
      alert('Please enter valid credentials');
    }
  }
}
