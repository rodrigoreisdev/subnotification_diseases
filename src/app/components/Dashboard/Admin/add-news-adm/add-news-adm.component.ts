import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { MessageService } from 'primeng/api';
import { SharedService } from 'src/app/Services/shared.service';


@Component({
  selector: 'app-add-news-adm',
  templateUrl: './add-news-adm.component.html',
  styleUrls: ['./add-news-adm.component.less']
})
export class AddNewsAdmComponent implements OnInit {

  categories: any;
  newsForm = new FormGroup({
    Title: new FormControl('', [Validators.required]),
    CategoryId: new FormControl('', [Validators.required]),
    Content: new FormControl('', [Validators.required]),
  });

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '200px',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Digite o conteúdo aqui...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    // uploadUrl: 'v1/image',
    // sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
  };

  constructor(
    private sharedService: SharedService,
    private messageService: MessageService
  ) { }


  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.sharedService.GetAllCategories().subscribe((data: any) => {
      this.categories = data;
    });
  }

  onSubmit() {
    if (this.newsForm.valid) {
      this.sharedService.InsertNews(this.newsForm.value).subscribe(
        (data: any) => {
          this.messageService.add({ severity: 'success', summary: 'Successo', detail: 'Publicação realizada com sucesso!' });
          this.newsForm.reset();
        });
    }
  }

}
