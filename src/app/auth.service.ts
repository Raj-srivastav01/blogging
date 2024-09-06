import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private userProfile = new BehaviorSubject<any>(null);

  constructor() { }

  register(username: string, password: string): void {
    // Save the user credentials (in reality, you'd make an HTTP request here)
    localStorage.setItem('user', JSON.stringify({ username, password }));
    this.loggedIn.next(true);
  }

  login(username: string, password: string): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user.username === username && user.password === password) {
      this.loggedIn.next(true);
      this.userProfile.next(user);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('user');
    this.loggedIn.next(false);
    this.userProfile.next(null);
  }

  getUserStatus(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  getUserProfile(): Observable<any> {
    return this.userProfile.asObservable();
  }
}
