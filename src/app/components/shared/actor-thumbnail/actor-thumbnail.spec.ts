import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorThumbnail } from './actor-thumbnail';

describe('ActorThumbnail', () => {
  let component: ActorThumbnail;
  let fixture: ComponentFixture<ActorThumbnail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActorThumbnail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActorThumbnail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
