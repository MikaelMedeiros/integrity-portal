import { Component } from '@angular/core';
import { SkeletonModule } from 'primeng/skeleton';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { SelectPrincipleComponent } from "../principle/select-principle/select-principle.component";
import { BreadcrumbService } from '../../shared/breadcrumb.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, SkeletonModule, CardModule, ButtonModule, SelectPrincipleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

    constructor(
      private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setBreadcrumb([
        ]);
       }

}
