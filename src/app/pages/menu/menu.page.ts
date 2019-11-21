import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

   pages = [
     {
       title: 'Movies Search',
       url: '/menu/movies',
       icon: 'home'
     },
     {
       title: 'About App',
       url: '/menu/about',
       icon: 'information-circle'
     }
   ];

   selectedPath = '';

  constructor(private router: Router) { 
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
   }

  ngOnInit() {
  }

}
