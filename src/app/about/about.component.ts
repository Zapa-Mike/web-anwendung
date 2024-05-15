import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiService } from '../services/api.service';
import { PageItem } from '../interfaces/pageData';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  pageData: PageItem[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService
      .getPageData()
      .subscribe((response: { idMap: { [key: string]: PageItem } }) => {
        const aboutPageItem = Object.values(response.idMap).find(
          (item) => item.label === 'Über uns'
        );
        if (aboutPageItem) {
          this.pageData.push(aboutPageItem);
          const aboutPageId = aboutPageItem.id;
          const aboutPageChildren = Object.values(response.idMap).filter(
            (item) => item.parentIds && item.parentIds.includes(aboutPageId)
          );
          this.pageData = this.pageData.concat(aboutPageChildren);
        }
      });
  }
}