import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private breadcrumbItems = new BehaviorSubject<MenuItem[]>([]);
  private homeItem: MenuItem = { icon: 'pi pi-home', routerLink: '/home' };

  public principles = [
    { id: 1, title: 'Comprometimento da Alta Administração', subtitle: 'This is the first principle', description: '', image: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg' },
    { id: 2, title: 'Código de Conduta, Políticas e Procedimentos', subtitle: 'This is the second principle', description: '', image: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg' },
    { id: 3, title: 'Treinamento e Capacitação', subtitle: 'This is the third principle', description: '', image: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg' },
    { id: 4, title: 'Gestão de Riscos', subtitle: 'This is the fourth principle', description: '', image: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg' },
    { id: 5, title: 'Contabilidade, Controles Internos e Due Diligence', subtitle: 'This is the fifth principle', description: '', image: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg' },
    { id: 6, title: 'Canal de Denúncias', subtitle: 'This is the sixth principle', description: '', image: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg' },
    { id: 7, title: 'Investigações Internas', subtitle: 'This is the seventh principle', description: '', image: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg' },
    { id: 8, title: 'Monitoramento e Auditoria', subtitle: 'This is the eighth principle', description: '', image: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg' }
  ]

  breadcrumbItems$ = this.breadcrumbItems.asObservable();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const breadcrumbs = this.createBreadcrumbs(this.activatedRoute.root);
      this.breadcrumbItems.next(breadcrumbs);
    });
  }

  private createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: MenuItem[] = []): MenuItem[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');

      // Debugar os valores
      console.log('Route URL:', routeURL);
      console.log('Params:', child.snapshot.paramMap);
      console.log('Data:', child.snapshot.data);

      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      const principleIdParam = child.snapshot.paramMap.get('id');
      const label = child.snapshot.data['breadcrumb'];

      if (label) {
        if (principleIdParam) {
          const principleId = Number(principleIdParam);
          const principle = this.principles.find(p => p.id === principleId);

          if (principle) {
            // Verifica se já não existe um item "Princípios" no breadcrumb
            const hasPrinciples = breadcrumbs.some(item => item.label === 'Princípios');
            // if (!hasPrinciples) {
            //   breadcrumbs.push({
            //     label: 'Princípios',
            //     routerLink: '/principle'
            //   });
            // }

            breadcrumbs.push({
              label: principle.title,
              routerLink: url
            });
          }
        } else {
          breadcrumbs.push({
            label,
            routerLink: url
          });
        }
      }

      return this.createBreadcrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }

  getHomeItem(): MenuItem {
    return this.homeItem;
  }
}
