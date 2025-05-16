import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importando o CommonModule
import { CarrinhoItem } from './carrinho-item.interface'; // Importando a interface

@Component({
  selector: 'app-carrinho',
  standalone: true,
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
  imports: [CommonModule] // Adicionando CommonModule nos imports do componente
})
export class CarrinhoComponent {
  // Itens no carrinho tipados com a interface CarrinhoItem
  carrinho: CarrinhoItem[] = [
    {
      id: 1,
      nome: 'Produto 1',
      imagem: 'https://via.placeholder.com/150',
      preco: 100.00,
      quantidade: 2
    },
    {
      id: 2,
      nome: 'Produto 2',
      imagem: 'https://via.placeholder.com/150',
      preco: 50.00,
      quantidade: 1
    },
    {
      id: 3,
      nome: 'Produto 3',
      imagem: 'https://via.placeholder.com/150',
      preco: 30.00,
      quantidade: 3
    }
  ];

  // Função para calcular o valor total do carrinho
  calcularTotal() {
    return this.carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
  }

  // Função para aumentar a quantidade de um item
  aumentarQuantidade(item: CarrinhoItem): void {
    item.quantidade++;
  }

  // Função para diminuir a quantidade de um item
  diminuirQuantidade(item: CarrinhoItem): void {
    if (item.quantidade > 1) {
      item.quantidade--;
    }
  }

  // Função para remover um item do carrinho
  removerItem(item: CarrinhoItem): void {
    this.carrinho = this.carrinho.filter(i => i.id !== item.id);
  }
}
