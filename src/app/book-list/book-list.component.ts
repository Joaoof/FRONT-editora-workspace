import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  books = [
    { id: 1, title: 'Livro 1' },
    { id: 2, title: 'Livro 2' },
  ]

  constructor(private router: Router) { }

  onBookClick(bookId: number): void {
    this.router.navigate(['/books', bookId])
  }

}
