import { Component } from '@angular/core';
import { ServerService } from '../../app/server.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  curriculo = {
    nome: '',
    email: '',
    telefone: '',
    cargo: '',
    objetivo: '',
    ja_trabalhou: '',
    empresa: '',
    cargoAnterior: '',
    tempoTrabalho: '',
    formacao: '',
    grau: '',
    nomeInstituicao: '',
    habilidades: ''
  };

  constructor(private servico: ServerService) {}

  cadastrarCurriculo() {
    console.log('Currículo cadastrado:', this.curriculo);
    
    this.servico.postCurriculo(this.curriculo).subscribe(
      (response: any) => {
        alert("Currículo cadastrado com sucesso!");
        this.limparFormulario();
      },
      (error: any) => {
        alert("Erro ao cadastrar currículo: " + error);
      }
    );
  }

  limparFormulario() {
    this.curriculo = {
      nome: '',
      email: '',
      telefone: '',
      cargo: '',
      objetivo: '',
      ja_trabalhou: '',
      empresa: '',
      cargoAnterior: '',
      tempoTrabalho: '',
      formacao: '',
      grau: '',
      nomeInstituicao: '',
      habilidades: ''
    };
  }
}
