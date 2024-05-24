import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiService } from '../services/api.service';
import { PageItem } from '../interfaces/pageData';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  pageData: PageItem[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.filterPageData('Produkte').subscribe((data) => {
      this.pageData = data;
    });
  }
}
