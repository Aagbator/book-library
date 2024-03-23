import { Component, OnInit } from '@angular/core';
import { BookService } from '../../core/services/book/book.service';
import { Observable } from 'rxjs';
import { Book } from '../../core/models/book/book.model';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss',
})
export class BookDetailComponent implements OnInit {
  book$!: Observable<Book>;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.book$ = this.bookService.getBookByIsbn('1');
  }
}
