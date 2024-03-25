import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError, throwError } from 'rxjs';
import { Author } from '../../models/author/author.model';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  private apiUrl = 'https://openlibrary.org/search/authors.json';

  constructor(private http: HttpClient) {}

  getAuthor(name: string): Observable<Author | null> {
    const encodedQuery = encodeURIComponent(name).replace(/%20/g, '+');
    return this.http.get<Author>(`${this.apiUrl}?q=${encodedQuery}`).pipe(
      map((response: any) => {
        if (response && response.docs) {
          const author = response.docs[0];
          return new Author(author);
        } else {
          return null;
        }
      }),
      catchError((error) => {
        console.error('Error fetching author:', error);
        return throwError(
          () => new Error('Failed to fetch author. Please try again later.')
        );
      })
    );
  }
}
