import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListEmenta } from '../../list';

@Component({
  selector: 'app-marmore-ementa',
  templateUrl: './marmore-ementa.component.html',
  styleUrls: ['./marmore-ementa.component.css'],
})
export class MarmoreEmentaComponent implements OnInit {
  materia;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.materia = ListEmenta[params.get('index')];
    });
  }
}
