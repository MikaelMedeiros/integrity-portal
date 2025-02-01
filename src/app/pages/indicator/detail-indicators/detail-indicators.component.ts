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
    { name: 'Sim', code: 1 },
    { name: 'Não', code: 0 },
    { name: 'N/A', code: -1 }
  ];
  selectedEvidence: boolean | null = null;

  getEvidenceDescription(code: number): string {
    return this.evidences.find(e => e.code === code)?.name || '';
  }


}
