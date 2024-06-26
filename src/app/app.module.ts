import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SessionComponent } from './session/session.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListComponent } from './book-list/book-list.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
<<<<<<< HEAD
import { CatalogoComponent } from './catalogo/catalogo.component';
import { SessionCatalogoComponent } from './session-catalogo/session-catalogo.component';
import { FormasDePagamentoComponent } from './formas-de-pagamento/formas-de-pagamento.component';
=======
>>>>>>> fa93404 (Your commit message)

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SessionComponent,
    BookDetailComponent,
    BookListComponent,
    MainLayoutComponent,
<<<<<<< HEAD
    SidebarComponent,
    CatalogoComponent,
    SessionCatalogoComponent,
    FormasDePagamentoComponent
=======
    SidebarComponent
>>>>>>> fa93404 (Your commit message)
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
