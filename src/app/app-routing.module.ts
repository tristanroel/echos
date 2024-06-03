import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AproposComponent } from './page/apropos/apropos.component';
import { BaladesComponent } from './page/balades/balades.component';
import { BilletsComponent } from './page/billets/billets.component';
import { DossiersComponent } from './page/dossiers/dossiers.component';
import { LecturesComponent } from './page/lectures/lectures.component';
import { NewsComponent } from './page/news/news.component';
import { RencontresComponent } from './page/rencontres/rencontres.component';
import { SondagesComponent } from './page/sondages/sondages.component';
import { AdminZoneComponent } from './admin-zone/admin-zone.component';
import { ArticlePageComponent } from './page/article-page/article-page.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'about', component: AproposComponent},
  {path:'balades', component: BaladesComponent},
  {path:'billets', component: BilletsComponent},
  {path:'dossiers', component: DossiersComponent},
  {path:'lectures', component: LecturesComponent},
  {path:'news', component: NewsComponent},
  {path:'rencontres', component: RencontresComponent},
  {path:'sondages', component: SondagesComponent},
  {path:'admin_zone', component: AdminZoneComponent},
  {path:'article_page/:id', component: ArticlePageComponent},
  {path:'balades', component: BaladesComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
