import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { ArticleListComponent } from './pages/article-list/article-list.component';
import { ArticleDetailsComponent } from './pages/article-details/article-details.component';
import { FooterComponent } from './pages/footer/footer.component';
import { CategoryNewsComponent } from './pages/category-news/category-news.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ArticleListComponent,
    ArticleDetailsComponent,
    FooterComponent,
    CategoryNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
