import { Injectable } from '@angular/core';
import { Article } from '../model/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articleIdSelected! : number;
  private articleList : Article[] = [];
  private articleDossierList : Article[] = [];
  private articleBilletList : Article[] = [];
  //private sortedArticleList : Article[] = [];
  constructor() { }

  addArticle(element : Article){
    element.id = this.articleList.length + 1;
    this.articleList.push(element);
  }

  // IdSelected()

  getAllArticle() : Article[]{
    return this.articleList;
  }

  getArticleByCategory(categorie : string, sortedArtclList : Article[]) : Article[] | undefined{ 
    for (let i = 0; i < this.articleList.length; i++) {
      if (this.articleList[i].categorie === categorie) {
        sortedArtclList.push(this.articleList[i]);
        return sortedArtclList;
      }
    }
    return undefined;
  }

  getDossierArticle() : Article[] | undefined{ 
    for (let i = 0; i < this.articleList.length; i++) {
      if (this.articleList[i].categorie === "Dossier") {
        this.articleDossierList.push(this.articleList[i]);
        return this.articleDossierList;
      }
    }
    return undefined;
  }

  getBilletArticle() : Article[] | undefined{ 
    for (let i = 0; i < this.articleList.length; i++) {
      if (this.articleList[i].categorie === "Billet") {
        this.articleBilletList.push(this.articleList[i]);
        return this.articleBilletList;
      }
    }
    return undefined;
  }

  getArticleById(id: number): Article | undefined {
    for (let i = 0; i < this.articleList.length; i++) {
      if (this.articleList[i].id === id) {
        console.log( this.articleList[i].title);
        return this.articleList[i];
      }
    }
    return undefined; // Retourne undefined si aucun article correspondant n'est trouvé
  }
}
