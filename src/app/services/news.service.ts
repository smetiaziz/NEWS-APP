import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey = 'be97706302f14d5793f01d8551aff10d';
  private apiUrl = 'https://newsapi.org/v2/everything';

  private categories = ['business','entertainment','generalhealth','science','sports','technology'];
  constructor(private http: HttpClient) { }

  getAllArticles(): Observable<any> {
    const url = `${this.apiUrl}?q=crypto&from=2024-01-28&sortBy=publishedAt&apiKey=${this.apiKey}`;
    return this.http.get(url);
  }
  
}
