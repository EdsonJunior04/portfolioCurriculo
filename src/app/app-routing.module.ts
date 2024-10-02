import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CurriculosComponent } from './curriculos/curriculos.component';
import { PostagensComponent } from './postagens/postagens.component';
import { SobreSiteComponent } from './sobre-site/sobre-site.component';
import { CadastroComponent } from './cadastro/cadastro.component';



const routes: Routes = [
  {path: 'curriculos', component:CurriculosComponent},
  {path: 'postagens', component:PostagensComponent},
  {path: 'cadastro', component:CadastroComponent},
  {path: 'sobreSite', component:SobreSiteComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
