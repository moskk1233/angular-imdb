import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ActorService } from '../../services/actor.service';

@Component({
  selector: 'app-people',
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './people.html',
  styleUrl: './people.css'
})
export class People implements OnInit {
  route = inject(ActivatedRoute);
  actorService = inject(ActorService);

  people = signal<PeopleType | undefined>(undefined);

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      const peopleId = Number.parseInt(param.get("id")!);
      this.people.set(this.actorService.getPersonById(peopleId));
    });
  }
}
