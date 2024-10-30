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
    doc.text(`Objetivo: ${curriculo.objetivo}`, 20, 60);
    doc.text(`Experiência: ${curriculo.experiencia}`, 20, 70);
    doc.text(`Formação: ${curriculo.formacao}`, 20, 80);
    doc.text(`Hardskills: ${curriculo.hardskills}`, 20, 90);

    doc.save(`${curriculo.nome}_curriculo.pdf`);
  }
}
