import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Button, ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { UploadEvent } from '../../../model/UploadEvent';
@Component({
  selector: 'app-upload-evidence',
  imports: [
    DataViewModule,
    DialogModule,
    CommonModule,
    ButtonModule,
    FormsModule
  ],
  templateUrl: './upload-evidence.component.html',
  styleUrl: './upload-evidence.component.css'
})
export class UploadEvidenceComponent {
 @Input() anexos: any[] = [] ;
 @Input() visible: boolean =  false;


 onFileSelected(event: any) {
  const input = event.target as HTMLInputElement;
  if (input.files) {
    for (let file of input.files) {
      this.anexos.push(file);
    }
  }
}

}
