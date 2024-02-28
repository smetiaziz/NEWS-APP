import { Component } from '@angular/core';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrl: './article-details.component.css'
})
export class ArticleDetailsComponent {
  articleUrl!: string;
  article: any;
  
}
