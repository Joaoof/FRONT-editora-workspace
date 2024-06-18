import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  @ViewChild('menuMobile') menuMobile: ElementRef | undefined | any;
  @ViewChild('iconImage') iconImage: ElementRef | undefined | any;

  menuShow() {
    if (this.menuMobile.nativeElement.classList.contains('open')) {
      this.menuMobile.nativeElement.classList.remove('open');
      this.iconImage.nativeElement.src = "../../assets/close_white_36dp.svg"; // Caminho quando o menu está fechado
    } else {
      this.menuMobile.nativeElement.classList.add('open');
      this.iconImage.nativeElement.src = "caminho/para/imagem/aberta.svg"; // Caminho quando o menu está aberto
    }
  }
}
