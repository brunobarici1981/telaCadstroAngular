import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  imports: [FormsModule]  // Importando FormsModule para componentes standalone
})
export class CadastroComponent {
  email: string = '';
  senha: string = '';
  confirmarSenha: string = '';
  cep: string = '';
  rua: string = '';
  bairro: string = '';
  cidade: string = '';
  estado: string = '';

  constructor(private router: Router) {}

  // Função para cadastrar o usuário
  cadastrar() {
    if (this.senha === this.confirmarSenha) {
      alert('Cadastro bem-sucedido!');
      this.router.navigate(['/login']); // Redireciona para o login após o cadastro
    } else {
      alert('As senhas não coincidem!');
    }
  }

  // Função para buscar o endereço automaticamente ao digitar o CEP
  buscarEndereco() {
    // Validar se o CEP tem 8 caracteres e é numérico
    if (this.cep && this.cep.length === 8 && /^[0-9]+$/.test(this.cep)) {
      // Requisição para a API ViaCEP
      fetch(`https://viacep.com.br/ws/${this.cep}/json/`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Não foi possível buscar o CEP');
          }
          return response.json();
        })
        .then((data) => {
          // Verificar se houve erro na API
          if (data.erro) {
            alert('CEP não encontrado!');
          } else {
            // Preencher os campos automaticamente com as informações do CEP
            this.rua = data.logradouro || ''; // Garantir que o campo não seja preenchido com undefined
            this.bairro = data.bairro || ''; // Garantir que o campo não seja preenchido com undefined
            this.cidade = data.localidade || '';
            this.estado = data.uf || '';
          }
        })
        .catch((error) => {
          alert('Erro ao buscar o CEP. Verifique o número do CEP.');
        });
    } else {
      alert('O CEP deve ter 8 dígitos numéricos!');
    }
  }
}
