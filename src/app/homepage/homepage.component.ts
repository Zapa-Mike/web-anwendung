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
    this.apiService.filterPageData('Startseite').subscribe((data) => {
      this.pageData = data;
    });
  }
}
