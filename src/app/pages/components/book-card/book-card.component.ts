import { Component, Input } from '@angular/core';
import { Book } from '../../../core/models/book/book.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent {
  @Input() book!: Book;
  @Input() isWishlist: boolean = false;
}
