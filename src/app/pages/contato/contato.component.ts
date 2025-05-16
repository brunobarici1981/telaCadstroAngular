import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  standalone: true,
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
  telefone = '(11) 1234-5678';
  email = 'contato@empresa.com';
}
