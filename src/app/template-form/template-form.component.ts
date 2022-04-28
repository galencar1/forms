//import { HttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';







@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null,
  }
  @ViewChild('nome') nomeValidado!: ElementRef;

  onSubmit(form: any){
    //console.log(form);
    //console.log(this.nomeValidado);
    

    //console.log(this.usuario);
  }

  constructor(private http: HttpClient ) { }

  ngOnInit(): void {
  }

  verificaValidTouched(campo:any){
    
    return !campo.valid && campo.touched
    
  }

  aplicaCssErro(campo:any){
    return {
      'has-error':this.verificaValidTouched(campo),
      'has-feedback':this.verificaValidTouched(campo)
   }
  }

  consultaCEP(cep: any){
    //Variável para consultar o CEP
    cep = cep.replace(/\D/g, '');

    //Verifica se o campo ce possui valor informado
    if  (cep != ""){
      //expressão regular para validar o cep
      let validacep = /^[0-9]{8}$/;
      //Valida o formato do cep
      if(validacep.test(cep)){
        //this.http.get(`//viacep.com.br/ws/${cep}/json/`).subscribe(dados => (dados))
        //.map((dados: { json: () => any; }) => dados.json())
        //console.log(dados);
      }
    }

  }



}
