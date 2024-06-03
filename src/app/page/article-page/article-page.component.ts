import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/model/article';
import { ArticleService } from 'src/app/service/article.service';
import { ExtraService } from 'src/app/service/extra.service';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {
  article_Exemple : Article = {
    id : 0,
    auteur : "Boris Vian",
    categorie : "Dossier",
    date : "10-02-1948",
    image_link : "https://drive.google.com/file/d/1BdUCOCLXXkpgWX2COXucBgpjQsIf1GfU/view?usp=drive_link",
    hashtags : "#Penis#Vide#Hashtag",
    title : "Lorem ipsum dolor sit amet. Totam aut esse neque consequatur cumque ducimus",
    text : "<b>Delectus sunt obcaecati exercitationem consectetur ipsa harum suscipit quisquam. Totam aut esse neque consequatur cumque ducimus id voluptate incidunt placeat</b> </br></br> illo natus aliquid ab officiis molestiae officia repellat eligendi saepe odio quia culpa similique at praesentium omnis suscipit. Cum possimus ex repellat, iure laboriosam dolores dolore omnis. Vel enim vitae nesciunt veniam facere ipsum in incidunt maiores deserunt corporis modi dolorem suscipit voluptatibus ipsa qui laboriosam, </br></br> maxime alias asperiores earum magni. Minima dicta consequuntur architecto excepturi quidem ut, optio suscipit modi odio a sequi tenetur impedit! Quasi quod reiciendis neque? Culpa distinctio odio ratione architecto quibusdam dolore pariatur voluptatum perspiciatis odit, fugiat repellat ea laboriosam optio vero, qui repellendus saepe dolores. Odio fugiat sint culpa. Alias iste saepe minus quo obcaecati, reiciendis accusamus nihil voluptas. Eligendi voluptatibus maxime modi! Aliquid porro ad odit quae nulla perferendis cumque eligendi? </br></br> Non dignissimos reprehenderit nesciunt eaque alias perferendis, praesentium voluptate iure optio doloribus, similique ab! Exercitationem, omnis. Labore placeat laudantium magni inventore fuga at facere deserunt deleniti enim tempore consequuntur rerum dolores repellat qui, commodi minus facilis id dolorem asperiores obcaecati nemo! Assumenda blanditiis hic nulla incidunt doloremque soluta et, possimus sequi iusto a ipsam?"
  }
  thisArticle! : Article | undefined;
  //img_link : string | null = "https://lh3.googleusercontent.com/d/" + this.extractIdFromUrl(this.thisArticle!.image_link)
  articleId! : number;

  img_link! : string | null;

  constructor(
    private route: ActivatedRoute,
    private articleService : ArticleService,
    private extraService : ExtraService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      window.scrollTo(0, 0);
      this.articleId = parseInt(params['id']); // Récupérer l'ID du produit depuis les paramètres de la route
      // Charger les détails du produit en fonction de l'ID ici...

      console.log(this.articleId);
      console.log( 5);
      //this.thisArticle = this.articleService.getArticleById(1);
      this.viewArticle(this.articleId);
      //this.img_link = this.returnUrl(this.articleId)
    });
    //this.extraService.extractIdFromUrl()
  }
  viewArticle( id : number){
    console.log(this.articleId);
    if(id != null){
      console.log("fdp" + id);

      this.thisArticle = this.articleService.getArticleById(this.articleId);
      this.img_link = this.extraService.extractIdFromUrl(this.thisArticle!.image_link)
    }else{
      console.log("id est null");

    }

  }

  // returnUrl(id : number): string | null {
  //   console.log("id = " + id);
    
  //  return this.extraService.extractIdFromUrl(this.thisArticle!.image_link)
  // }
}
