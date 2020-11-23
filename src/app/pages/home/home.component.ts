import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'my-dream-app';

  constructor(private router: Router) {}
  logOut(): void {
    localStorage.setItem('token', '');
    this.router.navigate(['/sign']);
  }
}
