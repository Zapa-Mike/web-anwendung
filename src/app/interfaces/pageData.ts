export interface PageItem {
    id: string;
    label: string;
    parentIds?: string;
    contentReference: string;
    seoRoute: string;
    children?: PageItem[];
  }