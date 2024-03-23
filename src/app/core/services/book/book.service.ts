import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Book } from '../../models/book/book.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = 'https://openlibrary.org';
  private searchFields =
    'title,author_name,first_publish_year,edition_count,number_of_pages,author_key,cover_edition_key,isbn';

  constructor(private http: HttpClient) {}

  getBooks(queryStr: string): Observable<Book[]> {
    const encodedQuery = encodeURIComponent(queryStr).replace(/%20/g, '+');
    return this.http
      .get<any>(
        `${this.apiUrl}/search.json?title=${encodedQuery}&fields=${this.searchFields}`
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

  getBookByIsbn(isbn: string): Observable<Book> {
    return this.http
      .get<Observable<Book>>(
        `${this.apiUrl}/isbn/${isbn}.json?fields=${this.searchFields}`
      )
      .pipe(
        map((response) => {
          return new Book(response);
        }),
        catchError((error) => {
          console.error('Error fetching book:', error);
          return throwError(
            () => new Error('Failed to fetch book. Please try again later.')
          );
        })
      );
  }
}
