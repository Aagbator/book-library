import { Component, Input } from '@angular/core';
import { Book } from '../../../core/models/book/book.model';

@Component({
  selector: 'app-book-grid',
  templateUrl: './book-grid.component.html',
  styleUrl: './book-grid.component.scss'
})
export class BookGridComponent {
  @Input() books: Book[] = [];
}
