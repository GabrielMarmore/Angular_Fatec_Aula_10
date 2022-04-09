import { Component, OnInit } from '@angular/core';
import { MarmoreDisciplinasService } from '../marmore-disciplinas.service';

@Component({
  selector: 'app-marmore-lista',
  templateUrl: './marmore-lista.component.html',
  styleUrls: ['./marmore-lista.component.css'],
})
export class MarmoreListaComponent implements OnInit {
  constructor(public materias: MarmoreDisciplinasService) {}

  ngOnInit() {}
}
