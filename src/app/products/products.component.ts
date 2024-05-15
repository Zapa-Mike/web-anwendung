import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiService } from '../services/api.service';
import { PageItem } from '../interfaces/pageData';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  pageData: PageItem[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService
      .getPageData()
      .subscribe((response: { idMap: { [key: string]: PageItem } }) => {
        const productsPageItem = Object.values(response.idMap).find(
          (item) => item.label === 'Produkte'
        );
        if (productsPageItem) {
          this.pageData.push(productsPageItem);
          const productsPageId = productsPageItem.id;
          const ProductsPageChildren = Object.values(response.idMap).filter(
            (item) => item.parentIds && item.parentIds.includes(productsPageId)
          );
          this.pageData = this.pageData.concat(ProductsPageChildren);
        }
      });
  }
}
