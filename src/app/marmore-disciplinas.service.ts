import { Injectable } from '@angular/core';

interface Materias {
  codigo: string;
  nome: string;
  dia: string;
  hora: string;
  ementa: string;
}
@Injectable()
export class MarmoreDisciplinasService {
  list: Array<Materias> = [
    {
      codigo: 'ISW012A',
      nome: 'Desenvolvimento para Dispositivos Móveis I',
      dia: 'Segunda',
      hora: '19:00',
      ementa: '',
    },
    {
      codigo: 'ING011A',
      nome: 'Inglês V',
      dia: 'Terça',
      hora: '19:00',
      ementa: '',
    },
    {
      codigo: 'ING012A',
      nome: 'Inglês VI',
      dia: 'Terça',
      hora: '20:50',
      ementa: '',
    },
    {
      codigo: 'AGM004A',
      nome: 'Negócios e Marketing e Eletrônicos',
      dia: 'Quarta',
      hora: '19:00',
      ementa: '',
    },
    {
      codigo: 'IDS002A',
      nome: 'Desenvolvimento para Servidores II',
      dia: 'Quinta',
      hora: '19:00',
      ementa: '',
    },
    {
      codigo: 'ITE004A',
      nome: 'Tópicos Especiais em Sistemas para Internet II',
      dia: 'Sexta',
      hora: '19:00',
      ementa: '',
    },
    {
      codigo: 'ISW011A',
      nome: 'Projeto de Prototipagem e Testes de Usabilidade',
      dia: 'Sabado',
      hora: '08:00',
      ementa: '',
    },
  ];

  constructor() {}

  getList() {
    return this.list;
  }

  add() {}

  remove(index: number) {
    this.list.splice(index, 1);
  }
}
