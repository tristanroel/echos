import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { AdminZoneComponent } from './admin-zone/admin-zone.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { NewsComponent } from './page/news/news.component';
import { BilletsComponent } from './page/billets/billets.component';
import { LecturesComponent } from './page/lectures/lectures.component';
import { RencontresComponent } from './page/rencontres/rencontres.component';
import { DossiersComponent } from './page/dossiers/dossiers.component';
import { BaladesComponent } from './page/balades/balades.component';
import { AproposComponent } from './page/apropos/apropos.component';
import { SondagesComponent } from './page/sondages/sondages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './component/footer/footer.component';
import { ArticlePageComponent } from './page/article-page/article-page.component';
import { LoginComponent } from './page/login/login.component';
import { InfoPubComponent } from './page/info-pub/info-pub.component';
import { EditArticleComponent } from './page/edit-article/edit-article.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminZoneComponent,
    NavBarComponent,
    NewsComponent,
    BilletsComponent,
    LecturesComponent,
    RencontresComponent,
    DossiersComponent,
    BaladesComponent,
    AproposComponent,
    SondagesComponent,
    FooterComponent,
    ArticlePageComponent,
    LoginComponent,
    InfoPubComponent,
    EditArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
