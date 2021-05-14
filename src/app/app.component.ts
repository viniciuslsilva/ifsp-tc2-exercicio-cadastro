import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ifsp-tc2-exercicio-cadastro';

  mostrarFormulario = false;

  exibirComponente(event: any) {
    this.mostrarFormulario = false;

    if(event === 'form') {
      this.mostrarFormulario = true;
    }
  }
} 
