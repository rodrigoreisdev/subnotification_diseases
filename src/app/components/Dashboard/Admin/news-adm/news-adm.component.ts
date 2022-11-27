import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-news-adm',
  templateUrl: './news-adm.component.html',
  styleUrls: ['./news-adm.component.less']
})
export class NewsAdmComponent implements OnInit {

  constructor(
    private sharedService: SharedService,
  ) { }
  public news: any;

  ngOnInit(): void {
    this.getNews();
  }

  getNews(): any {
    this.sharedService.GetAllNews().subscribe(
      (data: any) => {
        this.news = data;
      });
  }
}
