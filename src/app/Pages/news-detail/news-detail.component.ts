import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CommonService } from 'src/app/Services/common.service';
import { CookiesService } from 'src/app/Services/cookies.service';
import { SharedService } from 'src/app/Services/shared.service';
import { ToxicityService } from 'src/app/Services/toxicity.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.less']
})
export class NewsDetailComponent implements OnInit {

  public formMessage: FormGroup = new FormGroup({
    message: new FormControl(
      { value: '', disabled: false },
    )
  });

  public loginForm = new FormGroup({
    Email: new FormControl('', [Validators.required]),
    Password: new FormControl('', [Validators.required])
  });

  public news: any;
  public listNews: any;
  public listComments: any;
  public user: any;
  public isLogged: boolean = false;

  constructor(
    private toxicityService: ToxicityService,
    private sharedService: SharedService,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private cookieService: CookiesService,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.listenerParams();
    this.user = this.commonService.getUserData();
    console.log(this.user);
    this.isLogged = this.user != null ? true : false;
  }

  listenerParams() {
    this.activatedRoute.params.subscribe((params) => {
      this.getNewsById(params['id']);
      this.getAllComments(params['id'])
    });
  }

  getNewsById(id: string) {
    this.sharedService.GetNewsById(id).subscribe(
      (data: any) => {
        this.news = data;
        this.getNewsByCategory();
      });
  }

  getNewsByCategory() {
    this.sharedService.GetNewsByCategory(this.news.categoryId).subscribe((data: any) => {
      this.listNews = data;
      this.listNews.map((item: any) => {
        item.content = item.content.replace(/<[^>]*>/g, '').substring(0, 200).concat('...');
      });
    });
  }

  sendMessage() {
    if (this.formMessage.valid) {
      this.translate(this.formMessage.value.message)
    }
  }

  translate(msg: string) {
    const result = fetch("https://translate.argosopentech.com/translate", {
      method: "POST",
      body: JSON.stringify({
        q: msg,
        source: "pt",
        target: "en"
      }),
      headers: { "Content-Type": "application/json" }
    }).then(res => res.json()).then(res => {
      this.toxicityVerify(res.translatedText);
    }).catch(err => { console.log(err) });
  }

  toxicityVerify(text: string) {
    this.toxicityService.toxicityModel
      .classify(text)
      .then((predictions: any) => {
        const mappedData = predictions.map((data: any) => {
          return {
            label: data.label,
            match: data.results[0].match
          };
        });
        this.insertComment(mappedData);
      }).catch((err: any) => { console.log(err) });
  }

  insertComment(data: any) {
    const comment = {
      NoticeId: this.news.id,
      UserId: this.user.nameid,
      Content: this.formMessage.value.message,
      CreatedBy: this.user.unique_name,
      Aproved: false
    };
    if (data.find((item: any) => item.match === true)) {
      comment.Aproved = false;
      this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: 'Seu comentário foi enviado para avaliação dos moderadores.' });
    } else {
      comment.Aproved = true;
      this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Comentário enviado com sucesso.' });
    }
    this.sharedService.InsertComment(comment).subscribe(
      (res: any) => {
        this.formMessage.get('message')?.setValue('');
        this.getAllComments(this.news.id);
      });
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.sharedService.Login(this.loginForm.value).subscribe(
        (res: any) => {
          this.cookieService.setCookie('authentication', res.token);
          this.user = this.commonService.getUserData();

          this.isLogged = true;
        },
        (err: any) => {
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: err.erro.message });
        });
    }
  }

  getAllComments(id: string) {
    this.sharedService.GetAllCommentsByNews(id).subscribe(
      (res: any) => {
        this.listComments = res;
      });
  }

}
