import { Component, VERSION } from '@angular/core';
import { ListEmenta } from '../list';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  lista = ListEmenta;
  name = 'Angular ' + VERSION.major;
}
