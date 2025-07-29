import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Movie } from './pages/movie/movie';
import { People } from './pages/people/people';

export const routes: Routes = [
  {
    path: "",
    component: Home
  },
  {
    path: "movies/:id",
    component: Movie
  },
  {
    path: "people/:id",
    component: People
  },
  {
    path: "**",
    redirectTo: ""
  }
];
