// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';  // Importando o componente principal
import { routes } from './app/app.routes';            // Importando as rotas

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)] // Fornecendo as rotas no bootstrap da aplicação
});

