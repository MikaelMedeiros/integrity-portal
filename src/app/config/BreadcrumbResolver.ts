// breadcrumb.resolver.ts
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { BreadcrumbService } from '../shared/breadcrumb.service';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbResolver implements Resolve<void> {
  constructor(private breadcrumbService: BreadcrumbService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const breadcrumb = route.data['breadcrumb'];
    if (breadcrumb) {
      this.breadcrumbService.setBreadcrumb(breadcrumb);
    }
    return;
  }
}
