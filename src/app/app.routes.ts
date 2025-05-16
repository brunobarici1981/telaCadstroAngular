// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {CarrinhoComponent} from './pages/carrinho/carrinho.component';
import {ContatoComponent} from './pages/contato/contato.component';
import {ProdutosComponent} from './pages/produtos/produtos.component';
import {PromocaoComponent} from './pages/promocao/promocao.component';
import {LoginComponent} from './pages/login/login.component';
import {CadastroComponent} from './pages/cadastro/cadastro.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'promocao', component: PromocaoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },

];
