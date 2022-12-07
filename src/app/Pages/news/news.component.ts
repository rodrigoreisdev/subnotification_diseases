import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {

  listNews: any;

  constructor(
    private router: Router,
    private sharedService: SharedService,
  ) { }

  ngOnInit(): void {
    this.getAllNews();
  }

  getAllNews() {
    this.sharedService.GetAllNews().subscribe((data: any) => {
      this.listNews = data;
      this.listNews.map((item: any) => {
        if(item.content.match(/<img[^>]+src="?([^"\s]+)"?[^>]*>/g)) {
          item.image = item.content.match(/<img[^>]+src="?([^"\s]+)"?[^>]*>/g)[0].toString().replace(/<img[^>]+src="?([^"\s]+)"?[^>]*>/g, '$1');
        }
        item.content = item.content.replace(/<[^>]*>/g, '').substring(0, 250).concat('...');
        item.title = item.title.substring(0, 25).concat('...');
      });
    });
  }
}
