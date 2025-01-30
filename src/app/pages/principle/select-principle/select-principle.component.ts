import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { SkeletonModule } from 'primeng/skeleton';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-principle',
  imports: [CommonModule, SkeletonModule, CardModule, ButtonModule],
  templateUrl: './select-principle.component.html',
  styleUrl: './select-principle.component.css'
})
export class SelectPrincipleComponent {
  constructor(private router: Router) { }
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

  public navigateToPrinciple(id: number) {
    this.router.navigate(['principle', id]);
  }
}
