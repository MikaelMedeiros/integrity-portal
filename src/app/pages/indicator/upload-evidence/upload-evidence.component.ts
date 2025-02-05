import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { MessageService} from 'primeng/api';
import { PrimeNG } from 'primeng/config';
import { FileUpload } from 'primeng/fileupload';
import { BadgeModule } from 'primeng/badge';
import { HttpClientModule } from '@angular/common/http';
import { ProgressBar } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
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
    FormsModule,
    FileUpload,
    BadgeModule,
    ToastModule,
    ProgressBar
  ],
  templateUrl: './upload-evidence.component.html',
  styleUrl: './upload-evidence.component.css'
})
export class UploadEvidenceComponent {
  @Input() visible: boolean = false;
  anexos: FilePreview[] = [];
  index: any;

  files: File[] = [];

    totalSize : number = 0;

    totalSizePercent : number = 0;

    constructor(private config: PrimeNG, private messageService: MessageService) {}

    choose(event: any, callback: () => void) {
        callback();
    }

    onRemoveTemplatingFile(event: any, file: { size: number; }, removeFileCallback: (arg0: any, arg1: any) => void, index: any) {
        removeFileCallback(event, index);
        this.totalSize -= parseInt(this.formatSize(file.size));
        this.totalSizePercent = this.totalSize / 10;
    }

    onClearTemplatingUpload(clear: () => void) {
        clear();
        this.totalSize = 0;
        this.totalSizePercent = 0;
    }

    onTemplatedUpload() {
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
    }

    onSelectedFiles(event: { currentFiles: File[]; }) {
        this.files = event.currentFiles;
        this.files.forEach((file) => {
            this.totalSize += parseInt(this.formatSize(file.size));
        });
        this.totalSizePercent = this.totalSize / 10;
    }

    uploadEvent(callback: () => void) {
        callback();
    }

    formatSize(bytes: number) {
        const k = 1024;
        const dm = 3;
        const sizes = this.config.translation.fileSizeTypes || ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes === 0) {
            return `0 ${sizes[0]}`;
        }

        const i = Math.floor(Math.log(bytes) / Math.log(k));
        const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));

        return `${formattedSize} ${sizes[i]}`;
    }
}
