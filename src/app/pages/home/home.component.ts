import { Component, OnInit } from '@angular/core';
import { BookService } from '../../core/services/book/book.service';
import { Observable } from 'rxjs';
import { Book } from '../../core/models/book/book.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  searchSubject = 'Finance';
  books$!: Observable<Book[]>;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.books$ = this.bookService.getBooks('Finance') || [];
  }
}
