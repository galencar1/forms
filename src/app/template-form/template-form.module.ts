import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateFormComponent } from './template-form.component';
import { FormDebugComponent } from '../form-debug/form-debug.component';
import { CampoControleErroComponent } from '../campo-controle-erro/campo-controle-erro.component';







@NgModule({
  declarations: [
    TemplateFormComponent,
    FormDebugComponent,
    CampoControleErroComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TemplateFormModule { }
