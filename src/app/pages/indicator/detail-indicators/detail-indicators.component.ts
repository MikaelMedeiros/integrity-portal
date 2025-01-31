import { Component, Input } from '@angular/core';
import { Indicator } from '../../../model/Indicator';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-detail-indicators',
  imports: [TableModule],
  templateUrl: './detail-indicators.component.html',
  styleUrl: './detail-indicators.component.css'
})
export class DetailIndicatorsComponent {
  @Input() indicators: Indicator[] = [];
  id: string | null = null;




}
