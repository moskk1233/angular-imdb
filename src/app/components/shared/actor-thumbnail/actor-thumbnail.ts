import { NgOptimizedImage } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface Actor {
  id: number;
  name: string;
  image: string;
  age: number
}

@Component({
  selector: 'app-actor-thumbnail',
  imports: [NgOptimizedImage, RouterModule],
  templateUrl: './actor-thumbnail.html',
  styleUrl: './actor-thumbnail.css'
})
export class ActorThumbnail {
  actor = input.required<Actor>();
}
