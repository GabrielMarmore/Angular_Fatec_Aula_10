import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { MarmoreComponent } from './marmore/marmore.component';
import { MarmoreListaComponent } from './marmore-lista/marmore-lista.component';
import { MarmoreDisciplinasService } from './marmore-disciplinas.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: MarmoreComponent },
      { path: 'materias', component: MarmoreListaComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    MarmoreComponent,
    MarmoreListaComponent,
  ],
  bootstrap: [AppComponent],
  providers: [MarmoreDisciplinasService],
})
export class AppModule {}
