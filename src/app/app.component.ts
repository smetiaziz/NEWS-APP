import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  categorySelected: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const hasCategoryParam = this.activatedRoute.firstChild && this.activatedRoute.firstChild.snapshot.paramMap.has('category');
        this.categorySelected = hasCategoryParam !== null ? hasCategoryParam : false;
      }
    });
  }
}
