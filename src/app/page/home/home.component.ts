import { Component, Input } from '@angular/core';
import { Article } from 'src/app/model/article';
import { ArticleService } from 'src/app/service/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  article_Exemple : Article = {
    id : 0,
    auteur : "Boris Vian",
    categorie : "Dossier",
    date : "10-02-1948",
    image_link : "https://drive.google.com/file/d/1BdUCOCLXXkpgWX2COXucBgpjQsIf1GfU/view?usp=drive_link",
    hashtags : "#Penis#Vide#Hashtag",
    title : "Lorem ipsum dolor sit amet. Totam aut esse neque",
    text : "<b>Delectus sunt obcaecati exercitationem consectetur ipsa harum suscipit quisquam. Totam aut esse neque consequatur cumque ducimus id voluptate incidunt placeat</b> </br></br> illo natus aliquid ab officiis molestiae officia repellat eligendi saepe odio quia culpa similique at praesentium omnis suscipit. Cum possimus ex repellat, iure laboriosam dolores dolore omnis. Vel enim vitae nesciunt veniam facere ipsum in incidunt maiores deserunt corporis modi dolorem suscipit voluptatibus ipsa qui laboriosam, </br></br> maxime alias asperiores earum magni. Minima dicta consequuntur architecto excepturi quidem ut, optio suscipit modi odio a sequi tenetur impedit! Quasi quod reiciendis neque? Culpa distinctio odio ratione architecto quibusdam dolore pariatur voluptatum perspiciatis odit, fugiat repellat ea laboriosam optio vero, qui repellendus saepe dolores. Odio fugiat sint culpa. Alias iste saepe minus quo obcaecati, reiciendis accusamus nihil voluptas. Eligendi voluptatibus maxime modi! Aliquid porro ad odit quae nulla perferendis cumque eligendi? </br></br> Non dignissimos reprehenderit nesciunt eaque alias perferendis, praesentium voluptate iure optio doloribus, similique ab! Exercitationem, omnis. Labore placeat laudantium magni inventore fuga at facere deserunt deleniti enim tempore consequuntur rerum dolores repellat qui, commodi minus facilis id dolorem asperiores obcaecati nemo! Assumenda blanditiis hic nulla incidunt doloremque soluta et, possimus sequi iusto a ipsam?"
  }
  article_Exemple2 : Article = {
    id : 1,
    auteur : "René Delfosse",
    categorie : "Rencontre",
    date : "23-11-1995",
    image_link : "https://drive.google.com/file/d/1dmP63S11L6ewVrUO_zdk1WVgLT64MehR/view?usp=sharing",
    hashtags : "#Penis#Vide#Hashtag",
    title : "Delectus sunt obcaecati exercitationem consectetur",
    text : "<b> Lorem ipsum dolor sit amet. Totam aut esse neque consequatur cumque ducimus,Delectus sunt obcaecati exercitationem consectetur ipsa harum suscipit quisquam. Totam aut esse neque consequatur cumque ducimus id voluptate incidunt placeat</b> </br></br> illo natus aliquid ab officiis molestiae officia repellat eligendi saepe odio quia culpa similique at praesentium omnis suscipit. Cum possimus ex repellat, iure laboriosam dolores dolore omnis. Vel enim vitae nesciunt veniam facere ipsum in incidunt maiores deserunt corporis modi dolorem suscipit voluptatibus ipsa qui laboriosam, </br></br> maxime alias asperiores earum magni. Minima dicta consequuntur architecto excepturi quidem ut, optio suscipit modi odio a sequi tenetur impedit! Quasi quod reiciendis neque? Culpa distinctio odio ratione architecto quibusdam dolore pariatur voluptatum perspiciatis odit, fugiat repellat ea laboriosam optio vero, qui repellendus saepe dolores. Odio fugiat sint culpa. Alias iste saepe minus quo obcaecati, reiciendis accusamus nihil voluptas. Eligendi voluptatibus maxime modi! Aliquid porro ad odit quae nulla perferendis cumque eligendi? </br></br> Non dignissimos reprehenderit nesciunt eaque alias perferendis, praesentium voluptate iure optio doloribus, similique ab! Exercitationem, omnis. Labore placeat laudantium magni inventore fuga at facere deserunt deleniti enim tempore consequuntur rerum dolores repellat qui, commodi minus facilis id dolorem asperiores obcaecati nemo! Assumenda blanditiis hic nulla incidunt doloremque soluta et, possimus sequi iusto a ipsam?"
  }
  article_Exemple3 : Article = {
    id : 2,
    auteur : "Jean Vulve",
    categorie : "Billet",
    date : "12-05-2002",
    image_link : "https://drive.google.com/file/d/1u_laLd7lua-buOJUgfqUK_2V70dBQ5ef/view?usp=drive_link",
    hashtags : "#Penis#Vide#Hashtag",
    title : "Delectus sunt obcaecati exercitationem consectetur ipsa harum suscipit quisquam",
    text : "<b> Lorem ipsum dolor sit amet. Totam aut esse neque consequatur cumque ducimus,Delectus sunt obcaecati exercitationem consectetur ipsa harum suscipit quisquam. Totam aut esse neque consequatur cumque ducimus id voluptate incidunt placeat</b> </br></br> illo natus aliquid ab officiis molestiae officia repellat eligendi saepe odio quia culpa similique at praesentium omnis suscipit. Cum possimus ex repellat, iure laboriosam dolores dolore omnis. Vel enim vitae nesciunt veniam facere ipsum in incidunt maiores deserunt corporis modi dolorem suscipit voluptatibus ipsa qui laboriosam, </br></br> maxime alias asperiores earum magni. Minima dicta consequuntur architecto excepturi quidem ut, optio suscipit modi odio a sequi tenetur impedit! Quasi quod reiciendis neque? Culpa distinctio odio ratione architecto quibusdam dolore pariatur voluptatum perspiciatis odit, fugiat repellat ea laboriosam optio vero, qui repellendus saepe dolores. Odio fugiat sint culpa. Alias iste saepe minus quo obcaecati, reiciendis accusamus nihil voluptas. Eligendi voluptatibus maxime modi! Aliquid porro ad odit quae nulla perferendis cumque eligendi? </br></br> Non dignissimos reprehenderit nesciunt eaque alias perferendis, praesentium voluptate iure optio doloribus, similique ab! Exercitationem, omnis. Labore placeat laudantium magni inventore fuga at facere deserunt deleniti enim tempore consequuntur rerum dolores repellat qui, commodi minus facilis id dolorem asperiores obcaecati nemo! Assumenda blanditiis hic nulla incidunt doloremque soluta et, possimus sequi iusto a ipsam?"
  }
  article_Exemple4 : Article = {
    id : 3,
    auteur : "Pierre Huretre",
    categorie : "Lecture",
    date : "07-06-2013",
    image_link : "https://drive.google.com/file/d/1TOe2Wz6zKMlDtAcbVJH_p52AoMctF-cj/view?usp=drive_link",
    hashtags : "#Penis#Vide#Hashtag",
    title : "Exercitationem consectetur ipsa harum suscipit quisquam",
    text : "<b> Lorem ipsum dolor sit amet. Totam aut esse neque consequatur cumque ducimus,Delectus sunt obcaecati exercitationem consectetur ipsa harum suscipit quisquam. Totam aut esse neque consequatur cumque ducimus id voluptate incidunt placeat</b> </br></br> illo natus aliquid ab officiis molestiae officia repellat eligendi saepe odio quia culpa similique at praesentium omnis suscipit. Cum possimus ex repellat, iure laboriosam dolores dolore omnis. Vel enim vitae nesciunt veniam facere ipsum in incidunt maiores deserunt corporis modi dolorem suscipit voluptatibus ipsa qui laboriosam, </br></br> maxime alias asperiores earum magni. Minima dicta consequuntur architecto excepturi quidem ut, optio suscipit modi odio a sequi tenetur impedit! Quasi quod reiciendis neque? Culpa distinctio odio ratione architecto quibusdam dolore pariatur voluptatum perspiciatis odit, fugiat repellat ea laboriosam optio vero, qui repellendus saepe dolores. Odio fugiat sint culpa. Alias iste saepe minus quo obcaecati, reiciendis accusamus nihil voluptas. Eligendi voluptatibus maxime modi! Aliquid porro ad odit quae nulla perferendis cumque eligendi? </br></br> Non dignissimos reprehenderit nesciunt eaque alias perferendis, praesentium voluptate iure optio doloribus, similique ab! Exercitationem, omnis. Labore placeat laudantium magni inventore fuga at facere deserunt deleniti enim tempore consequuntur rerum dolores repellat qui, commodi minus facilis id dolorem asperiores obcaecati nemo! Assumenda blanditiis hic nulla incidunt doloremque soluta et, possimus sequi iusto a ipsam?"
  }

  constructor(
    private articleService : ArticleService
  ){}
  ngOnInit(){
    window.scrollTo(0, 0);
    this.articleService.addArticle(this.article_Exemple)
    this.articleService.addArticle(this.article_Exemple2)
    this.articleService.addArticle(this.article_Exemple3)
    this.articleService.addArticle(this.article_Exemple4)
    // console.log();
    
  }

  generateList(count : number){
    art : new ArticleService;
    for(let i = 0; i < count;i++){

    }
  }
}
