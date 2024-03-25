import { Component, OnInit } from '@angular/core';
import { BookService } from '../../core/services/book/book.service';
import { Observable, tap } from 'rxjs';
import { Book } from '../../core/models/book/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss',
})
export class BookDetailComponent implements OnInit {
  book$!: Observable<Book | null>;

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.book$ = this.bookService.getSelectedBook().pipe(
      tap((data) => {
        if (!data) {
          this.router.navigate(['/']);
        }
      })
    );
  }
}
