import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CurriculosComponent } from './curriculos/curriculos.component';
import { PostagensComponent } from './postagens/postagens.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';



const routes: Routes = [
  { path: 'curriculos', component: CurriculosComponent },
  { path: 'postagens', component: PostagensComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'favoritos', component: FavoritesPageComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
