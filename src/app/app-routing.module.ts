import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { FormasDePagamentoComponent } from './formas-de-pagamento/formas-de-pagamento.component';
import { SubmissoesComponent } from './submissoes/submissoes.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';

const routes: Routes = [
  {
    path: '',
    // component: AppComponent,
    children: [
      { path: '', component: MainLayoutComponent },
      { path: 'books', component: BookListComponent },
      { path: 'books/:id', component: BookDetailComponent },
    ]
  },
  { path: 'book-details/:id', component: BookDetailComponent }, // Rota para a página de detalhes sem o layout principal
  { path: 'books-catalogo', component: CatalogoComponent },
  { path: 'books-pagamento', component: FormasDePagamentoComponent },
  { path: 'books-submissoes', component: SubmissoesComponent },
  { path: 'cadastro-usuario', component: CadastroUsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
