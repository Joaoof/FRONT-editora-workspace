import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SessionComponent } from './session/session.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListComponent } from './book-list/book-list.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SessionComponent,
    BookDetailComponent,
    BookListComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
