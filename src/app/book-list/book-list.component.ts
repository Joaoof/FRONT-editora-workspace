import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  books = [
    {
      title: 'Book One',
      author: 'Author One',
      description: 'This is the description for Book One.',
      coverImage: 'path/to/cover1.jpg'
    },
    {
      title: 'Book Two',
      author: 'Author Two',
      description: 'This is the description for Book Two.',
      coverImage: 'path/to/cover2.jpg'
    },
    // Adicione mais livros aqui
  ];
  constructor(private router: Router) { }

  onBookClick(bookId: number): void {
    this.router.navigate(['/books', bookId])
  }

}
