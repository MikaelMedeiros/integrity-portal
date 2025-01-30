import { Component } from '@angular/core';
import { SkeletonModule } from 'primeng/skeleton';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule, SkeletonModule, CardModule, ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public principles = [
    { title: 'First Principle', subtitle: 'This is the first principle', description: '', image: 'https://via.placeholder.com/150' },
    { title: 'Second Principle', subtitle: 'This is the second principle', description: '', image: 'https://via.placeholder.com/150' },
    { title: 'Third Principle', subtitle: 'This is the third principle', description: '', image: 'https://via.placeholder.com/150' },
    { title: 'Fourth Principle', subtitle: 'This is the fourth principle', description: '', image: 'https://via.placeholder.com/150' },
    { title: 'Fifth Principle', subtitle: 'This is the fifth principle', description: '', image: 'https://via.placeholder.com/150' },
    { title: 'Sixth Principle', subtitle: 'This is the sixth principle', description: '', image: 'https://via.placeholder.com/150' },
    { title: 'Seventh Principle', subtitle: 'This is the seventh principle', description: '', image: 'https://via.placeholder.com/150' },
    { title: 'Eighth Principle', subtitle: 'This is the eighth principle', description: '', image: 'https://via.placeholder.com/150' },
  ]
}
