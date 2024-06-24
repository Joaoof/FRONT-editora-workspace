import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent {
  books = [
    { id: 1, imageUrl: 'https://example.com/book1.jpg', title: 'Livro 1', description: 'Descrição do Livro 1', year: 2024 },
    { id: 2, imageUrl: 'https://example.com/book2.jpg', title: 'Livro 2', description: 'Descrição do Livro 2', year: 2023 }
    // Adicione mais livros conforme necessário
  ];

  constructor(private router: Router) { }

  openBookDetail(bookId: number): void {
    this.router.navigateByUrl(`/book-detail?id=${bookId}`);
  }
}
