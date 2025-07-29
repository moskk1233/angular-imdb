import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardScroll } from './card-scroll';

describe('CardScroll', () => {
  let component: CardScroll;
  let fixture: ComponentFixture<CardScroll>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardScroll]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardScroll);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
