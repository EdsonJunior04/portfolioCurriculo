import { Component } from '@angular/core';

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
    experiencia: '',
    empresa: '',
    cargoAnterior: '',
    tempoTrabalho: '',
    formacao: '',
    grau: '',
    instituicao: '',
    hardskills: ''
  };

  cadastrarCurriculo() {
    console.log('Currículo cadastrado:', this.curriculo);
    // Aqui você pode adicionar lógica para enviar os dados para um servidor, se necessário
    // Limpar os campos após o cadastro
    this.limparFormulario();
  }

  limparFormulario() {
    this.curriculo = {
      nome: '',
      email: '',
      telefone: '',
      cargo: '',
      objetivo: '',
      experiencia: '',
      empresa: '',
      cargoAnterior: '',
      tempoTrabalho: '',
      formacao: '',
      grau: '',
      instituicao: '',
      hardskills: ''
    };
  }
}
