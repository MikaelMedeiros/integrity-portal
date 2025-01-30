// breadcrumb.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private breadcrumbItems = new BehaviorSubject<MenuItem[]>([]);
  private homeItem: MenuItem = { icon: 'pi pi-home', routerLink: '/home' };

  breadcrumbItems$ = this.breadcrumbItems.asObservable();

  setBreadcrumb(items: MenuItem[]) {
    this.breadcrumbItems.next(items);
  }

  addItem(item: MenuItem) {
    const currentItems = this.breadcrumbItems.value;
    this.breadcrumbItems.next([...currentItems, item]);
  }

  clear() {
    this.breadcrumbItems.next([]);
  }

  getHomeItem(): MenuItem {
    return this.homeItem;
  }
}
