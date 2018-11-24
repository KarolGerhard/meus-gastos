import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meus-gastos';
  nome = 'Joao';
  nome2 = 'Maria';

  exibirAlerta() {
    alert(this.nome2);
  }

  salvarEvento($evento: any){
    alert($evento);
  }
}
