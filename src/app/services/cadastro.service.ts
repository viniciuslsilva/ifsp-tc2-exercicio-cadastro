import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  pessoaArray: any[] = [];

  constructor() {}

  adicionaPessoa(pessoa: any) {
    let pessoasEncontradas = this.pessoaArray.filter((p) => p.nome === pessoa.nome)
    if (pessoasEncontradas.length === 0) {
      this.pessoaArray.push(pessoa);
      alert('cadastro realizado com sucesso!');
    } else { 
      alert('Nome já cadastrado! Não foi possível concluir o cadastro');
    }
  }

  getPessoaArray() {
    return this.pessoaArray;
  }
}
