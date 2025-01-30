import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';
import { Router } from '@angular/router';
import { BreadcrumbModule } from 'primeng/breadcrumb';  // Adicione esta linha
import { BreadcrumbService } from '../../shared/breadcrumb.service';


@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink, RouterOutlet, TooltipModule, BreadcrumbModule  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
 changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent {
  items$;
  home;
  constructor(private router: Router, private breadcrumbService: BreadcrumbService) {
    this.items$ = this.breadcrumbService.breadcrumbItems$;
    this.home = this.breadcrumbService.getHomeItem();
  }

  @Input() pageTitle: string = 'Sistema';
  @Input() isFilterOpen = false;
  @ContentChild('actionTemplate') actionTemplate!: TemplateRef<any>;

  isMenuOpen = true;

  menuItems = [
    {
      label: 'Home',
      icon: 'pi-home',
      route: '/home',
      description: 'Página inicial do sistema'
    },

    {
      label: 'Cadastro',
      icon: 'pi-user-plus',
      route: '/cadastro',
      description: 'Cadastro de pacientes e funcionários'
    },

  ];

  toggleSidebar() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  singout() {
    this.router.navigate(['/login']);
  }
}
