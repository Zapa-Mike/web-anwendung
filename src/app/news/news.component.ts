import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiService } from '../services/api.service';
import { PageItem } from '../interfaces/pageData';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent implements OnInit {
  pageData: PageItem[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.filterPageData('News').subscribe((data) => {
      this.pageData = data;
    });
  }
}
