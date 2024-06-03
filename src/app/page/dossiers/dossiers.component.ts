import { Component } from '@angular/core';
import { Article } from '../../model/article';
import { ArticleService } from 'src/app/service/article.service';
import { ExtraService } from 'src/app/service/extra.service';

@Component({
  selector: 'app-dossiers',
  templateUrl: './dossiers.component.html',
  styleUrls: ['./dossiers.component.scss']
})
export class DossiersComponent {
  articleText : string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quisquam error corporis porro ut voluptatibus alias saepe soluta, sint aut temporibus quas, modi eius magnam blanditiis quibusdam sed perspiciatis doloremque nisi. Distinctio dolorem nobis consectetur ducimus itaque voluptas cum iste eius sapiente error, ea voluptatibus eveniet velit cupiditate suscipit alias, rerum et expedita blanditiis aliquid nisi quam. Ea maxime sint exercitationem mollitia quo quos deleniti, nihil perferendis rem iure cumque ad veniam voluptatem impedit, sunt, natus praesentium libero doloremque dolorum voluptate consectetur dolore? Repellendus deserunt voluptatibus ea doloribus explicabo recusandae eligendi? Maiores doloremque iure autem corrupti saepe temporibus fuga itaque fugiat, soluta, consequatur voluptatem alias. Pariatur eaque laudantium nemo laborum? Aut, dolorum excepturi possimus nihil a soluta corporis maxime laudantium sit voluptas itaque beatae aliquid velit praesentium doloremque ipsa saepe nemo. Perspiciatis accusantium laborum deserunt consectetur, debitis fugit dolor nostrum sapiente, magnam quos doloremque eaque, laboriosam quaerat? Ex error non minima culpa vel provident quae impedit corrupti, maxime assumenda pariatur quisquam aliquid asperiores expedita commodi porro dolore reiciendis modi similique dolorum veritatis illum quaerat, neque inventore. Itaque dolorum ut sint labore quaerat nostrum blanditiis corrupti consectetur! Totam aliquam nulla iure sequi reprehenderit hic dignissimos quidem repellendus! Itaque, excepturi commodi? Quibusdam"
  articles! : Article[] | undefined;
  sortedDossiers! : Article[];

  constructor(
    private articleService : ArticleService,
    private extraService : ExtraService
  ){}
  ngOnInit() : void {
    window.scrollTo(0, 0);
    this.articles = this.articleService.getDossierArticle();
    console.log(this.articles);
    
  }

  returnUrl(url : string) : string | null{
    console.log(this.extraService.extractIdFromUrl(url));
    return this.extraService.extractIdFromUrl(url);
    
  }
}
