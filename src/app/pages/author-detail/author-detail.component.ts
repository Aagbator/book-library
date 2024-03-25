import { Component, OnInit } from '@angular/core';
import { Author } from '../../core/models/author/author.model';
import { Observable } from 'rxjs';
import { AuthorService } from '../../core/services/author/author.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrl: './author-detail.component.scss',
})
export class AuthorDetailComponent implements OnInit {
  author$!: Observable<Author | null>;

  constructor(
    private authorService: AuthorService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const query = this.activatedRoute.snapshot.paramMap.get('name') || '';
    this.author$ = this.authorService.getAuthor(query);
  }
}
