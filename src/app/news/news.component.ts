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
    this.apiService
      .getPageData()
      .subscribe((response: { idMap: { [key: string]: PageItem } }) => {
        const newsPageItem = Object.values(response.idMap).find(
          (item) => item.label === 'News'
        );
        if (newsPageItem) {
          this.pageData.push(newsPageItem);
          const newsPageId = newsPageItem.id;
          const newsPageChildren = Object.values(response.idMap).filter(
            (item) => item.parentIds && item.parentIds.includes(newsPageId)
          );
          this.pageData = this.pageData.concat(newsPageChildren);
        }
      });
  }
}
