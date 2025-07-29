import { Component, inject, OnInit, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { CategoryChip } from "../../components/movie/category-chip/category-chip";
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie',
  imports: [MatIcon, MatChipsModule, CategoryChip, RouterModule, CommonModule, MatDividerModule],
  templateUrl: './movie.html',
  styleUrl: './movie.css'
})
export class Movie implements OnInit {
  route = inject(ActivatedRoute);
  movieService = inject(MovieService);

  movie = signal<MovieType | undefined>(undefined);

  ngOnInit(): void {
    const movieId: number = Number.parseInt(this.route.snapshot.paramMap.get("id")!);
    this.movie.set(this.movieService.getMovieById(movieId));
  }
}
