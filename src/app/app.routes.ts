import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { NewsComponent } from './news/news.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'startseite', component: HomepageComponent },
  { path: 'ueber-uns', component: AboutComponent },
  { path: 'produkte', component: ProductsComponent },
  { path: 'news', component: NewsComponent },
];
