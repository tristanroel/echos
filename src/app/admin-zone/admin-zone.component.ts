import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Article } from '../model/article';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-admin-zone',
  templateUrl: './admin-zone.component.html',
  styleUrls: ['./admin-zone.component.scss']
})
export class AdminZoneComponent {

  articleForm! : FormGroup;
  // categorie! : FormControl<string>;
  // title! : FormControl<string>;
  // image_link! : FormControl<string>;
  // text! : FormControl<string>;
  // hashtags! : FormControl<string>;
  // auteur! : FormControl<string>;
  // date! : FormControl<string>;
  sondageForm! : FormGroup;
  article! : Article;

  constructor(
    private formbuilder : FormBuilder,
    private articleService : ArticleService
  ){}

  ngOnInit(){
    
    this.articleForm = this.formbuilder.group({
      categorie : [],
      title : [],
      image_link : [],
      text : [],
      hashtags : [],
      auteur : [],
      date : []
    })
  }

  articleSubmit(){
    console.log(this.articleForm.value);  
    this.articleService.addArticle(this.articleForm.value)  
    console.log("hello");    
  }
  sondageSubmit(){
    console.log(this.sondageForm.value);
    
  }
}
