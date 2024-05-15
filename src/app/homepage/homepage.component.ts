import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiService } from '../services/api.service';
import { PageItem } from '../interfaces/pageData';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent implements OnInit {
  pageData: PageItem[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService
      .getPageData()
      .subscribe((response: { idMap: { [key: string]: PageItem } }) => {
        const homePageItem = Object.values(response.idMap).find(
          (item) => item.label === 'Startseite'
        );
        if (homePageItem) {
          this.pageData.push(homePageItem);
          const homepageId = homePageItem.id;
          const aboutPageChildren = Object.values(response.idMap).filter(
            (item) => item.parentIds && item.parentIds.includes(homepageId)
          );
          this.pageData = this.pageData.concat(aboutPageChildren);
        }
      });
  }
}
