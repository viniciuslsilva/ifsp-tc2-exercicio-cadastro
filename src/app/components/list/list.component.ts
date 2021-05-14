import { CadastroService } from '../../services/cadastro.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  pessoaArray: any[] = [];
  exibirDetalhes = "";

  constructor(
    private readonly CadastroService : CadastroService
  ) { }

  ngOnInit(): void {
    this.pessoaArray = this.CadastroService.getPessoaArray();
  }

  exibir(nome: string){
    this.exibirDetalhes = nome;
  }

}
