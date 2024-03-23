import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { Book } from '../../models/book/book.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = 'https://openlibrary.org';
  private selectedBookSubject: BehaviorSubject<Book | null> =
    new BehaviorSubject<Book | null>(null);

  constructor(private http: HttpClient) {}

  getBooks(queryStr: string): Observable<Book[]> {
    const encodedQuery = encodeURIComponent(queryStr).replace(/%20/g, '+');
    return this.http
      .get<any>(
        `${this.apiUrl}/search.json?title=${encodedQuery}&fields=title,author_name,first_publish_year,edition_count,number_of_pages_median,author_key,cover_edition_key,isbn`
      )
      .pipe(
        map((response: any) => {
          if (response && response.docs) {
            const books = response.docs.slice(0, 9);
            return books.map((book: any) => new Book(book));
          } else {
            return [];
          }
        }),
        catchError((error) => {
          console.error('Error fetching books:', error);
          return throwError(
            () => new Error('Failed to fetch books. Please try again later.')
          );
        })
      );
  }

  updateSelectedBook(book: Book | null): void {
    this.selectedBookSubject.next(book);
  }

  getSelectedBook(): Observable<Book | null> {
    return this.selectedBookSubject.asObservable();
  }
}
