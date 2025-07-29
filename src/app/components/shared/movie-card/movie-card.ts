import { NgOptimizedImage, CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  imports: [NgOptimizedImage, MatIconModule, MatButtonModule, RouterModule, CommonModule],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.css'
})
export class MovieCard {
  movie = input.required<MovieType>();
  isFavorited = false;

  toggleIsFavorite() {
    this.isFavorited = !this.isFavorited;
  }
}
