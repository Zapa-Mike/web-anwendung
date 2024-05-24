import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { PageItem } from '../interfaces/pageData';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl =
    'https://partner-navigationservice.e-spirit.cloud/navigation/preview.20eb4e8b-19a2-496a-b151-3317cd7dacd9?language=de_DE&format=caas';

  constructor(private http: HttpClient) {}

  getPageData(): Observable<{ idMap: { [key: string]: PageItem } }> {
    return this.http.get<{ idMap: { [key: string]: PageItem } }>(this.apiUrl);
  }

  filterPageData(label: string): Observable<PageItem[]> {
    return this.getPageData().pipe(
      map((response) => {
        const items = Object.values(response.idMap);
        const parentItem = items.find((item) => item.label === label);
        if (!parentItem) return [];
        const children = items.filter(
          (item) => item.parentIds && item.parentIds.includes(parentItem.id)
        );
        return [parentItem, ...children];
      })
    );
  }
}
