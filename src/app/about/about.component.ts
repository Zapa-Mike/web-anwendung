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
export class AboutComponent implements OnInit {
  pageData: PageItem[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.filterPageData('Über uns').subscribe((data) => {
      this.pageData = data;
    });
  }
}