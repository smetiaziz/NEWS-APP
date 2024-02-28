import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent implements OnInit{
  articles: any[] = [];
  title = 'crypto';
  constructor(private newsService : NewsService){}
  ngOnInit(): void {
      this.newsService.getAllArticles().subscribe((response: any) =>{
        this.articles = response.articles;
        
      });
  }
}
