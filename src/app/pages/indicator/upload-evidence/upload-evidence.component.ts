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
 @Input() uploadEvent: any ;
 @Input() visible: boolean =  false;


 onFileSelected(event: any) {
    for (let file of event.files) {
      this.uploadEvent.files.push(file);
    }
  }
}
