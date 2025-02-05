import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';

interface FilePreview {
  file: File;
  preview: string;
}

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
  @Input() visible: boolean = false;
  anexos: FilePreview[] = [];

  onFileSelected(event: any) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      for (let file of Array.from(input.files)) {
        if (file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.anexos.push({
              file: file,
              preview: e.target?.result as string
            });
          };
          reader.readAsDataURL(file);
        } else {
          this.anexos.push({
            file: file,
            preview: ''
          });
        }
      }
    }
  }

  removeFile(index: number) {
    this.anexos.splice(index, 1);
  }
}
