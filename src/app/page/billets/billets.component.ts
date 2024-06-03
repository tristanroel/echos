import { Component } from '@angular/core';
import { Article } from 'src/app/model/article';
import { ArticleService } from 'src/app/service/article.service';
import { ExtraService } from 'src/app/service/extra.service';

@Component({
  selector: 'app-billets',
  templateUrl: './billets.component.html',
  styleUrls: ['./billets.component.scss']
})
export class BilletsComponent {
  articles! : Article[] | undefined;
  sortedDossiers! : Article[];
  constructor(
    private articleService : ArticleService,
    private extraService : ExtraService
  ){}
  ngOnInit() : void {
    this.articles = this.articleService.getBilletArticle();
  }

  returnUrl(url : string) : string | null{
    console.log(this.extraService.extractIdFromUrl(url));
    return this.extraService.extractIdFromUrl(url);
    
  }
}
