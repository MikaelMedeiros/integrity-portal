import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';


@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink, RouterOutlet, TooltipModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
 changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent {
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
}
