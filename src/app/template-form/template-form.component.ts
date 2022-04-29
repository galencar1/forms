//import { HttpClient } from '@angular/common/http';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
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
    console.log(form);
    //console.log(this.nomeValidado);
    this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
    .pipe(map(res => res)).subscribe(dados => console.log(dados));

    //console.log(this.usuario);
  }

  constructor(/*private http: HttpClient*/ private http: HttpClient ) { }

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
  
  consultaCEP(cep: any, form:any){
    //Variável para consultar o CEP
   //cep = cep.replace(/\D/g, '');

    //Verifica se o campo ce possui valor informado
    if  (cep != '' ){
      //expressão regular para validar o cep
      let validacep = /^[0-9]{8}$/;
      //Valida o formato do cep
      if(validacep.test(cep)){

        this.resetaDadosForm(form);
        
        this.http.get(`//viacep.com.br/ws/${cep}/json/`)
        .pipe(map(dados => dados)).subscribe(dados => this.populaDadosForm(dados, form));
         //.subscribe(dados => console.log(dados))
        //.subscribe(dados => this.populaDadosForm(dados, form));       
      }
    }

  }

  populaDadosForm(dados:any, form:any){
    form.setValue({
      nome: form.value.nome,
      email: form.value.email,
      endereco: {
        cep: dados.cep,
        numero: '',
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      } 
    });


    

    }
    
    resetaDadosForm(form:any){
      form.form.patchValue({
        endereco: {
          complemento: null,
          bairro: null,
          cidade: null,
          estado: null
        }
      });
    }
  
  }





