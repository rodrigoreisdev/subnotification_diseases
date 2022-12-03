import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-messages-adm',
  templateUrl: './messages-adm.component.html',
  styleUrls: ['./messages-adm.component.less']
})
export class MessagesAdmComponent implements OnInit {

  constructor(
    private sharedService: SharedService,
    private messageService: MessageService
  ) { }

  public messages: any;

  ngOnInit(): void {
    this.getMessages();
  }

  getMessages(): any {
    this.sharedService.GetAllComments().subscribe(
      (data: any) => {
        this.messages = data;
      });
  }

  changeStatus(id: string, status: boolean): any {
    this.sharedService.UpdateComment(id, status).subscribe(
      (data: any) => {
        this.getMessages();
        this.messageService.add({ severity: 'success', summary: 'Successo', detail: status ? 'Comentário aprovado!' : 'Comentário reprovado!' });
      });
  }

}
