import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service'; // Importa o serviço que criamos
import jsPDF from 'jspdf';

@Component({
  selector: 'app-curriculos',
  templateUrl: './curriculos.component.html',
  styleUrls: ['./curriculos.component.css']
})
export class CurriculosComponent implements OnInit {
  curriculos: any[] = [];
  isModalOpen = false;
  selectedCurriculo: any;

  constructor(private serverService: ServerService) {} // Injetando o serviço

  ngOnInit() {
    this.listarCurriculos();
  }

  listarCurriculos() {
    this.serverService.listarCurriculos().subscribe(
      data => {
        this.curriculos = data;
      },
      error => {
        console.error('Erro ao buscar currículos:', error);
      }
    );
  }

  abrirModal(curriculo: any) {
    this.selectedCurriculo = curriculo;
    this.isModalOpen = true;
  }

  fecharModal() {
    this.isModalOpen = false;
    this.selectedCurriculo = null;
  }

  downloadPDF(curriculo: any) {
    const doc = new jsPDF();
    
    doc.setFontSize(16);
    doc.text(`Currículo de ${curriculo.nome}`, 20, 20);
    doc.setFontSize(12);
    doc.text(`E-mail: ${curriculo.email}`, 20, 30);
    doc.text(`Telefone: ${curriculo.telefone}`, 20, 40);
    doc.text(`Cargo: ${curriculo.cargo}`, 20, 50);
    doc.text(`Nome da Empresa: ${curriculo.nomeEmpresa}`, 20, 60);
    doc.text(`Cargo Anterior: ${curriculo.cargoAnterior}`, 20, 70);
    doc.text(`Tempo Trabalhado: ${curriculo.tempoTrabalhado}`, 20, 80);
    doc.text(`Habilidades: ${curriculo.habilidades}`, 20, 90);

    doc.save(`${curriculo.nome}_curriculo.pdf`);
  }

  // Método para adicionar ou remover o currículo dos favoritos
  toggleFavorite(curriculo: any): void {
    let favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');

    const index = favoritos.findIndex((fav: any) => fav.id === curriculo.id);
    if (index === -1) {
      favoritos.push(curriculo);  // Adiciona aos favoritos
    } else {
      favoritos.splice(index, 1);  // Remove dos favoritos
    }

    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }

  // Verifica se o currículo está favoritado
  isFavorite(curriculo: any): boolean {
    const favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
    return favoritos.some((fav: any) => fav.id === curriculo.id);
  }
}
