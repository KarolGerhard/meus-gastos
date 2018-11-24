import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FormularioLancamentoComponent } from './formulario-lancamento/formulario-lancamento.component';
import { SegundoComponent } from './segundo/segundo.component';
import { NomeComponent } from './nome/nome.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioLancamentoComponent,
    NomeComponent,
    SegundoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
