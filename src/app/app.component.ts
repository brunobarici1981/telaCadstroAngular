// src/app/app.component.ts
// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';  // Importando o RouterModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterModule],  // Adicionando RouterModule aqui
  templateUrl: './app.component.html',
  styleUrl:'app.component.css'// Mantendo o template em arquivo separado
})
export class AppComponent {
    title: any;
}
