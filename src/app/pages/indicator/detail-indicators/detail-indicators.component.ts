import { Component, Input } from '@angular/core';
import { Indicator } from '../../../model/Indicator';
import { TableModule } from 'primeng/table';
import { SelectModule } from 'primeng/select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-detail-indicators',
  imports: [CommonModule, FormsModule , TableModule, SelectModule],
  templateUrl: './detail-indicators.component.html',
  styleUrl: './detail-indicators.component.css'
})
export class DetailIndicatorsComponent {
  @Input() indicators: Indicator[] = [];
  id: string | null = null;

  evidences: any[] = [
    { name: 'Sim', code: true },
    { name: 'Não', code: false },
    { name: 'Não se aplica', code: null }
  ];
  selectedEvidence: boolean | null = null;



}
