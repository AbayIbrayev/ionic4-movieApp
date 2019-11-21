import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
        { 
          path: 'movies', 
          loadChildren: '../movies/movies.module#MoviesPageModule' ,
        },
        {
          path: 'movies/:id',
          loadChildren: '../movie-details/movie-details.module#MovieDetailsPageModule'
        },
        { path: 'about', 
          loadChildren: '../about/about.module#AboutPageModule' 
        },
    ]
  },
  {
    path: '',
    redirectTo: '/menu/movies'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
