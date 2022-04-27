import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  }
  @ViewChild('nome') nomeValidado!: ElementRef;

  onSubmit(form: any){
    //console.log(form);
    console.log(this.nomeValidado);
    

    //console.log(this.usuario);
  }

  constructor() { }

  ngOnInit(): void {
  }



}
