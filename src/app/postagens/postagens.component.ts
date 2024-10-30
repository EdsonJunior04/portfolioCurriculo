import { Component } from '@angular/core';
import { ServerService } from '../server.service'; // ajuste o caminho conforme necessário

@Component({
  selector: 'app-postagens',
  templateUrl: './postagens.component.html',
  styleUrls: ['./postagens.component.css']
})
export class PostagensComponent {
  postagens: any[] = [];
  novaPostagem = {
    titulo: '',
    descricao: ''
  };

  constructor(private serverService: ServerService) {
    this.listarPostagens();
  }

  listarPostagens() {
    this.serverService.listarPostagens().subscribe(data => {
      this.postagens = data;
    });
  }

  adicionarPostagem() {
    if (this.novaPostagem.titulo && this.novaPostagem.descricao) {
      this.serverService.postPostagem(this.novaPostagem).subscribe(response => {
        console.log(response);
        this.listarPostagens();  // Atualiza a lista após a adição
        this.novaPostagem.titulo = '';
        this.novaPostagem.descricao = '';
      });
    }
  }
}
