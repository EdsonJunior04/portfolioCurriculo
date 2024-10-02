import { Component } from '@angular/core';

@Component({
  selector: 'app-postagens',
  templateUrl: './postagens.component.html',
  styleUrls: ['./postagens.component.css']
})
export class PostagensComponent {
  postagens = [
    { titulo: 'Título da Postagem 1', resumo: 'Resumo da postagem 1.' },
    { titulo: 'Título da Postagem 2', resumo: 'Resumo da postagem 2.' },
    { titulo: 'Título da Postagem 3', resumo: 'Resumo da postagem 3.' }
  ];

  novaPostagem = {
    titulo: '',
    resumo: ''
  };

  adicionarPostagem() {
    if (this.novaPostagem.titulo && this.novaPostagem.resumo) {
      this.postagens.push({ ...this.novaPostagem });
      this.novaPostagem.titulo = '';
      this.novaPostagem.resumo = '';
    }
  }
}
