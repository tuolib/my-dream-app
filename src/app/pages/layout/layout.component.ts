import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
// import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  title = 'my-dream-app';
  currentPath = '';
  mode = false;
  dark = false;
  idStr = '';
  isCollapsed = false;
  innerWidth = 0;
  menus = [
    {
      level: 1,
      title: 'Home',
      icon: 'home',
      path: '/',
      id: '1',
      idStr: '1'
      // open: true,
      // selected: false,
      // disabled: false
    },
    {
      id: '2',
      idStr: '2',
      level: 1,
      title: 'Poster',
      icon: 'mail',
      open: false,
      selected: false,
      disabled: false,
      children: [
        {
          id: '3',
          idStr: '2-3',
          level: 2,
          title: 'User',
          selected: false,
          disabled: false,
          path: '/poster'
        }
      ]
    }
  ];

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {
    router.events.subscribe(event => {
      // see also
      if (event instanceof NavigationEnd) {
        // event is an instance of NavigationEnd, get url!
        const url = event.urlAfterRedirects;
        this.currentPath = url;
        console.log('url is', url);
        const getMenuBtnList = (menuTreeList: any) => {
          for (const item of menuTreeList) {
            if (!item.children) {
              if (this.currentPath === item.path) {
                this.idStr = item.idStr;
                console.log('this.idStr', this.idStr);
                this.setOpen();
              }
            } else {
              getMenuBtnList(item.children);
            }
          }
        };
        getMenuBtnList(this.menus);
      }
    });
    // Observable.fromEvent(window, 'resize')
    //   .debounceTime(100) // 以免频繁处理
    //   .subscribe((event: any) => {
    //     // 这里处理页面变化时的操作,处理高度和宽度都可以
    //     console.log('come on ..', event);
    //     if (window.innerWidth < 576) {
    //       this.isCollapsed = true;
    //     }
    //   });
  }

  ngOnInit(): void {
    // this.activeRoute.queryParams.subscribe(params => {
    //   console.log(params);
    //   this.currentPath = params.name;
    // });
    // console.log(window.innerWidth);
    if (window.innerWidth > 1200) {
      this.isCollapsed = false;
    } else {
      this.isCollapsed = true;
    }
    this.innerWidth = window.innerWidth;
  }

  onResize(event: any): void {
    // console.log(event.target.innerWidth);
    this.innerWidth = event.target.innerWidth;
    if (event.target.innerWidth < 576) {
      this.isCollapsed = true;
    }
    if (event.target.innerWidth > 1200) {
      this.isCollapsed = false;
    } else {
      this.isCollapsed = true;
    }
  }

  selectMenu(menu: any): boolean {
    // console.log('selectMenu');
    if (menu.children) {
      return false;
    } else {
      if (this.currentPath === menu.path) {
        this.idStr = menu.idStr;
        // this.setOpen();
        return true;
      }
      return false;
    }
  }
  selectLink(menu: any): void {
    console.log('click');
    // this.idStr = menu.idStr;
    // this.setOpen();
    this.router.navigate([menu.path]);
    if (this.innerWidth < 1200) {
      this.isCollapsed = true;
    }
  }
  setOpen(): void {
    const selectId = this.idStr.split('-');
    const getMenuBtnList = (menuTreeList: any) => {
      for (let item of menuTreeList) {
        if (item.children && item.children.length > 0) {
          if (selectId.includes(item.id)) {
            if (item.open === false) {
              item.open = true;
              item.selected = true;
            } else {
              item.selected = false;
            }
          } else {
            item.selected = false;
          }
          getMenuBtnList(item.children);
        }
      }
    };
    // const newMenus = JSON.parse(JSON.stringify(this.menus));
    // getMenuBtnList(newMenus);
    // this.menus = newMenus;
    setTimeout(() => {
      let newMenus = JSON.parse(JSON.stringify(this.menus));
      getMenuBtnList(newMenus);
      this.menus = newMenus;
    }, 1);
  }
  selectOpen(menu: any): boolean {
    const selectId = this.idStr.split('-');
    if (selectId.includes(menu.id)) {
      return true;
    }
    // if (this.currentPath.indexOf(menu.path) !== -1) {
    //   return true;
    // }

    return false;
  }
  traverse(arr: any): any {}
  logOut(): void {
    localStorage.setItem('token', '');
    this.router.navigate(['/sign']);
  }
  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
