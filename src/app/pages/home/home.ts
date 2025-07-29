import { Component, inject, OnInit }  from '@angular/core';
import { SectionHeading } from "../../components/home/section-heading/section-heading";
import { MatIconModule } from '@angular/material/icon';
import { CardScroll } from "../../components/home/card-scroll/card-scroll";
import { Actor, ActorThumbnail } from "../../components/shared/actor-thumbnail/actor-thumbnail";
import { ActorService } from '../../services/actor.service';

@Component({
  selector: 'app-home',
  imports: [SectionHeading, MatIconModule, CardScroll, ActorThumbnail],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  actors: Actor[] = [];

  actorService = inject(ActorService);

  ngOnInit(): void {
      this.actors = this.actorService.getPeople();
  }

}
