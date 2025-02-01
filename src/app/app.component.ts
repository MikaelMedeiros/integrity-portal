import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastService } from './shared/toast.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,    
    ToastModule
  ],
  providers: [ToastService, MessageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'integrity-portal';
}
