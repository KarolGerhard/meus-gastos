import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nome',
  templateUrl: './nome.component.html',
  styleUrls: ['./nome.component.css']
})
export class NomeComponent implements OnInit {
  @Input() nomeAExibir: string;

  constructor() {}

  ngOnInit() {}
}
