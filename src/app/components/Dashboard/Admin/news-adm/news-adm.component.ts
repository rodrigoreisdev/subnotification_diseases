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
        this.news.map((item: any) => {
          item.content = item.content.replace(/<[^>]*>/g, '').substring(0, 250).concat('...');
          item.createdAt = item.createdAt.split('T')[0].split('-').reverse().join('/');
        });
      });
  }

  deleteNews(id: string): any {
    this.sharedService.DeleteNews(id).subscribe(
      (data: any) => {
        this.getNews();
      });
  }
}
