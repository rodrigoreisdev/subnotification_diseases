import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  public news: any;
  public listNews: any;

  constructor(
    private toxicityService: ToxicityService,
    private sharedService: SharedService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.listenerParams();
  }

  listenerParams() {
    this.activatedRoute.params.subscribe((params) => {
      this.getNewsById(params['id']);
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
    });
  }

  sendMessage() {
    if (this.formMessage.valid) {
      let messageTransalated = this.translate(this.formMessage.value.message)
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
        console.log(mappedData);
      }).catch((err: any) => { console.log(err) });
  }

}
