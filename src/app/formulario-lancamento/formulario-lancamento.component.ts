import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario-lancamento',
  templateUrl: './formulario-lancamento.component.html',
  styleUrls: ['./formulario-lancamento.component.css']
})
export class FormularioLancamentoComponent implements OnInit {
  @Input() variavel;

  @Output() aoSalvar: EventEmitter<string> = new EventEmitter<string>();
  nome: string;

  constructor() {}

  ngOnInit() {
    //alert('formulario iniciou');
  }

  salvar() {
    this.aoSalvar.emit(this.nome);
  }
}
