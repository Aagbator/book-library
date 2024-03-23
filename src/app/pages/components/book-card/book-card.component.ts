import { Component, Input } from '@angular/core';
import { Book } from '../../../core/models/book/book.model';
import { BookService } from '../../../core/services/book/book.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss',
})
export class BookCardComponent {
  @Input() book!: Book;
  @Input() isWishlist: boolean = false;

  constructor(private bookService: BookService, private router: Router) {}

  viewDetails = () => {
    this.bookService.updateSelectedBook(this.book);
    this.router.navigate(['/details']);
  };
}
