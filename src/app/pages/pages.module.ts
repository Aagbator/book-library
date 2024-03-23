import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { BookGridComponent } from './components/book-grid/book-grid.component';
import { HttpClientModule } from '@angular/common/http';
import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  declarations: [
    HomeComponent,
    BookCardComponent,
    PageTitleComponent,
    BookGridComponent,
    BookDetailComponent,
  ],
  imports: [CommonModule, PagesRoutingModule, HttpClientModule],
})
export class PagesModule {}
