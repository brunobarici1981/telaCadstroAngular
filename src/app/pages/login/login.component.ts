import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Necessário para usar [(ngModel)]

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule]  // Necessário para usar [(ngModel)]
})
export class LoginComponent {
  email: string = '';
  senha: string = '';

  constructor(private router: Router) {}

  login() {
    // Simulação de login, você pode usar um serviço real
    if (this.email === 'user@example.com' && this.senha === '1234') {
      alert('Login bem-sucedido!');
      this.router.navigate(['/home']);  // Redireciona para a home após login
    } else {
      alert('Credenciais inválidas!');
    }
  }

  cadastro() {
    this.router.navigate(['/cadastro']);  // Navega para a tela de cadastro
  }
}
