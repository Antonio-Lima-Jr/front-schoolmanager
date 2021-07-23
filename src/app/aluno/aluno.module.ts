import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoRoutingModule } from './aluno-routing.module';
import { AlunoCadastroComponent } from './aluno-cadastro/aluno-cadastro.component';
import { AlunoComponent } from './aluno.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AlunoCadastroComponent,
    AlunoComponent
  ],
  imports: [
    CommonModule,
    AlunoRoutingModule,
    NgbModule,
    FontAwesomeModule
  ]
})
export class AlunoModule { }
