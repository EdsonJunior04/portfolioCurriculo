import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf'; // Importa a biblioteca para gerar PDFs

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})
export class FavoritesPageComponent implements OnInit {
  favoritos: any[] = [];
  isModalOpen = false; // Controle do modal
  selectedCurriculo: any = null; // Currículo selecionado para exibir no modal

  ngOnInit() {
    this.carregarFavoritos();
  }

  // Carrega os currículos favoritos do localStorage
  carregarFavoritos() {
    const favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
    this.favoritos = favoritos;
  }

  // Método para excluir todos os favoritos
  excluirFavoritos() {
    localStorage.removeItem('favoritos');
    this.favoritos = [];
  }

  // Função para exibir os detalhes do currículo no modal
  abrirModal(curriculo: any) {
    this.selectedCurriculo = curriculo;
    this.isModalOpen = true;
  }

  // Função para fechar o modal
  fecharModal() {
    this.isModalOpen = false;
    this.selectedCurriculo = null;
  }

  // Função para gerar e baixar o PDF do currículo
  downloadPDF(curriculo: any) {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text(`Currículo de ${curriculo.nome}`, 20, 20);
    doc.setFontSize(12);
    doc.text(`E-mail: ${curriculo.email}`, 20, 30);
    doc.text(`Telefone: ${curriculo.telefone}`, 20, 40);
    doc.text(`Cargo: ${curriculo.cargo}`, 20, 50);
    doc.text(`Nome da Empresa: ${curriculo.nomeEmpresa || ''}`, 20, 60);
    doc.text(`Cargo Anterior: ${curriculo.cargoAnterior || ''}`, 20, 70);
    doc.text(`Tempo Trabalhado: ${curriculo.tempoTrabalhado || ''}`, 20, 80);
    doc.text(`Habilidades: ${curriculo.habilidades || ''}`, 20, 90);

    // Baixa o PDF com o nome do currículo
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

    // Recarrega os favoritos
    this.carregarFavoritos();
  }

  // Verifica se o currículo está favoritado
  isFavorite(curriculo: any): boolean {
    const favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
    return favoritos.some((fav: any) => fav.id === curriculo.id);
  }
}
