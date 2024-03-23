import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { PageTitleComponent } from './components/page-title/page-title.component';

@NgModule({
  declarations: [
    HomeComponent,
    BookCardComponent,
    PageTitleComponent
  ],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
