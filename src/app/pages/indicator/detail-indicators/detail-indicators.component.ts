import { Component, Input } from '@angular/core';
import { Indicator } from '../../../model/Indicator';
import { TableModule } from 'primeng/table';
import { SelectModule } from 'primeng/select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../../../shared/toast.service';
import { ButtonModule } from 'primeng/button';
import { UploadEvidenceComponent } from '../upload-evidence/upload-evidence.component';

@Component({
  selector: 'app-detail-indicators',
  imports: [CommonModule, FormsModule , TableModule, SelectModule, ButtonModule, UploadEvidenceComponent],
  templateUrl: './detail-indicators.component.html',
  styleUrl: './detail-indicators.component.css',
  providers: [ToastService]
})
export class DetailIndicatorsComponent {
  @Input() indicators: Indicator[] = [];

  id: string | null = null;

  anexos: any[] = [];
  visible: boolean = false;

  evidences: any[] = [
    { name: 'Sim', code: 1 },
    { name: 'Não', code: 0 },
    { name: 'N/A', code: -1 }
  ];
  selectedEvidence: boolean | null = null;

  getEvidenceDescription(code: number): string {
    return this.evidences.find(e => e.code === code)?.name || '';
  }

  addAnexo(anexos: any) {
    this.anexos = anexos;
    this.visible = true;
  }

}
