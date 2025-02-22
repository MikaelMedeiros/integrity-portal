import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private messageService: MessageService) {

  }

  errorHandler(error: HttpErrorResponse) {
    this.messageService.clear();
    if(error.error.errors) {
      error.error.errors.forEach((ex: any) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro.',
          detail: ex,
          life: 3500,
        });
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Erro.',
        detail: this.verifyAuthenticationError(error.error.error),
        life: 3500,
      });      
    }
  }

  verifyAuthenticationError(error: any): string {
    if(error == 'Usuário não encontrado.') {
      return `${error} Por favor, relogue.`;
    } else {
      return error;
    }
  }

  errorMsg(msg: string){
    this.messageService.clear();
   this.messageService.add({
     severity: 'error',
     detail: msg,
     life: 3500,
   });
 }


  successHandler(success: HttpResponse<any>){
    this.messageService.clear();
    this.messageService.add({
      severity: 'success',
      detail: success.statusText ,
      life: 3500,
    });
  }


  successMsg(msg: string){
    this.messageService.clear();
    this.messageService.add({
      severity: 'success',
      detail: msg,
      life: 3500,
    });
  }
  
  infoMsg(msg: string){
    this.messageService.clear();
    this.messageService.add({
      severity: 'info',
      detail: msg,
      life: 3500,
    });
  }

}
