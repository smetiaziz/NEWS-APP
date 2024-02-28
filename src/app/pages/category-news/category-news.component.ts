import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { CategoryService } from '../../services/category.service';
import { response } from 'express';

@Component({
  selector: 'app-category-news',
  templateUrl: './category-news.component.html',
  styleUrl: './category-news.component.css'
})
export class CategoryNewsComponent implements OnInit{
  articles: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
    private categoryService: CategoryService
  ){}
    ngOnInit(): void {
        this.route.params.subscribe(params => {
          const category = params['category'];
          this.categoryService.setSelectedCategory(category);
          this.loadArticles();
        }

        )
    }
    loadArticles(): void{
      const category = this.categoryService.getSelectedCategory();
      this.newsService.getArticlesByCategory(category).subscribe(response =>
        {
          this.articles = response.articles;
          console.log(this.articles);
        }
        );
    }

}
