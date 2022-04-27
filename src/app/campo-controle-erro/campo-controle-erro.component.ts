import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-campo-controle-erro',
  templateUrl: './campo-controle-erro.component.html',
  styleUrls: ['./campo-controle-erro.component.css']
})
export class CampoControleErroComponent implements OnInit {

  @Input() mostrarErro!: boolean;
  @Input() msgErro!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
