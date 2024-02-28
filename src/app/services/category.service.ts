import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private selectedCategory = "business";
  constructor() { }
  getSelectedCategory(): string{
    return this.selectedCategory;
  }
  setSelectedCategory(category: string): void{
    this.selectedCategory = category;
  }
}
