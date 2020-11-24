import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  title = 'my-dream-app';
  currentPath = '';

  constructor(private router: Router, private activeRoute: ActivatedRoute) {
    router.events.subscribe(event => {
      // see also
      if (event instanceof NavigationEnd) {
        // event is an instance of NavigationEnd, get url!
        const url = event.urlAfterRedirects;
        this.currentPath = url;
        console.log('url is', url);
      }
    });
  }

  ngOnInit(): void {
    // this.activeRoute.queryParams.subscribe(params => {
    //   console.log(params);
    //   this.currentPath = params.name;
    // });
  }
  selectMenu(path: string): boolean {
    if (this.currentPath === path) {
      return true;
    }
    return false;
  }
  selectOpen(path: string): boolean {
    if (this.currentPath.indexOf('/home/') !== -1) {
      return true;
    }
    return false;
  }
  logOut(): void {
    localStorage.setItem('token', '');
    this.router.navigate(['/sign']);
  }
}
