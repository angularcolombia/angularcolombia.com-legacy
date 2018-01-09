import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  currentYearInFooter:number;

  constructor(private router: Router) { }

  ngOnInit() {
    window.scrollTo(0,0);
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
    /**/
    this.currentYearInFooter=new Date().getFullYear();
  }
}
