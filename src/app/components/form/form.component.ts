import { CadastroService } from '../../services/cadastro.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly cadastroService: CadastroService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required]],
      idade: [''],
      imagem: [''],
    });
  }

  salvar() {
    const nome = this.form.get('nome').value
    if (!nome || nome === '') {
      alert('Nome é obrigatório! Não foi possível concluir o cadastro');
    } else {
      const imagem = this.form.get('imagem').value
      if (!imagem || imagem == '') {
        this.form.get('imagem').setValue(
          'https://upload.wikimedia.org/wikipedia/commons/2/27/Robert_C._Martin_surrounded_by_computers.jpg'
        );
      }
      this.cadastroService.adicionaPessoa(this.form.value);
      this.form.reset();
    }
  }
}
