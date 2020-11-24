import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss']
})
export class PosterComponent {
  title = 'my-dream-app';

  constructor(private router: Router) {}
  logOut(): void {
    localStorage.setItem('token', '');
    this.router.navigate(['/sign']);
  }
}
