import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailsComponent } from './pages/article-details/article-details.component';
import { CategoryNewsComponent } from './pages/category-news/category-news.component';

const routes: Routes = [
  {
    path: 'article-details/:url',
    component: ArticleDetailsComponent 
  },
  {
    path: 'news/:category',
    component: CategoryNewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
