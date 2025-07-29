import { AfterViewInit, Component, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { MovieCard } from "../../shared/movie-card/movie-card";
import { MatIconModule } from '@angular/material/icon';
import { SectionHeading } from "../section-heading/section-heading";
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-card-scroll',
  imports: [MovieCard, MatIconModule, SectionHeading],
  templateUrl: './card-scroll.html',
  styleUrl: './card-scroll.css'
})
export class CardScroll implements AfterViewInit, OnInit {
  @ViewChild('movieCarousel') movieCarouselRef!: ElementRef;

  canScrollLeft = signal<boolean>(false);
  canScrollRight = signal<boolean>(false);

  movieService = inject(MovieService);

  movies: MovieType[] = [];

  scrollCarousel(direction: 'left' | 'right'): void {
    const scrollContainer = this.movieCarouselRef.nativeElement;
    // คำนวณระยะเลื่อน (เช่น เลื่อนไป 80% ของความกว้าง Container)
    // หรือ เลื่อนตามความกว้างของ Card + gap
    const cardWidth = 13 * 16; // 15rem * 16px/rem = 240px
    const gap = 5 * 4; // gap-5 = 20px
    const scrollAmount = cardWidth * 4 + gap * 4; // เลื่อนทีละ 4 Cards + gap

    if (direction === 'left') {
      scrollContainer.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth' // ทำให้การเลื่อนนุ่มนวล
      });
    } else {
      scrollContainer.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }

    // อาจจะหน่วงเวลาเล็กน้อยก่อนเช็คสถานะปุ่ม เพื่อให้ animation จบ
    setTimeout(() => this.checkScrollButtons(), 600);
  }

  checkScrollButtons(): void {
    const scrollContainer = this.movieCarouselRef.nativeElement;
    this.canScrollLeft.set(scrollContainer.scrollLeft > 0);
    this.canScrollRight.set(scrollContainer.scrollLeft + scrollContainer.clientWidth < scrollContainer.scrollWidth - 1);
  }

  ngAfterViewInit(): void {
    // หลังจาก View ถูก Render แล้ว ค่อยตรวจสอบสถานะการ Scroll
    this.checkScrollButtons();
    // เพิ่ม Listener เมื่อมีการ Scroll ด้วยมือ (เผื่อใช้ Mouse Wheel)
    this.movieCarouselRef.nativeElement.addEventListener('scroll', this.checkScrollButtons.bind(this));
  }

  ngOnInit(): void {
    this.movies = this.movieService.getMovies();
  }
}
