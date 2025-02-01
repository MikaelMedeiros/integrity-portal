import { Component, OnInit } from '@angular/core';
import { SkeletonModule } from 'primeng/skeleton';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { SelectPrincipleComponent } from "../principle/select-principle/select-principle.component";
import { ToastService } from '../../shared/toast.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, SkeletonModule, CardModule, ButtonModule, SelectPrincipleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [ToastService]
})

export class HomeComponent implements OnInit {

    constructor(private toastService: ToastService
      ) {
       }

    ngOnInit() {
      this.toastService.successMsg('Welcome to the Integrity Portal');
    }


}
