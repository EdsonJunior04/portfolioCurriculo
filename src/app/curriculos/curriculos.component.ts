import { Component } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-curriculos',
  templateUrl: './curriculos.component.html',
  styleUrl: './curriculos.component.css'
})
export class CurriculosComponent {
  curriculos = [
    {
      nome: 'Edson',
      email: 'edson@gmail.com',
      telefone: '(11) 91234-5678',
      cargo: 'DevOps',
      objetivo: 'Contribuir para projetos desafiadores.',
      experiencia: 'Sim',
      formacao: 'Graduação em Ciência da Computação',
      hardskills: 'JavaScript, Angular, CSS'
    },
    // Adicione mais currículos aqui
  ];

  isModalOpen = false;
  selectedCurriculo: any;

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