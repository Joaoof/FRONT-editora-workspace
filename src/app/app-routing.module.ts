import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    // component: AppComponent,
    children: [
      { path: '', component: MainLayoutComponent },
      { path: 'books', component: BookListComponent },
      { path: 'books/:id', component: BookDetailComponent }
    ]
  },
  { path: 'book-details/:id', component: BookDetailComponent } // Rota para a página de detalhes sem o layout principal
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
