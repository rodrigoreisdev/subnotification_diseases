import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Services/common.service';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-home-adm',
  templateUrl: './home-adm.component.html',
  styleUrls: ['./home-adm.component.less']
})
export class HomeAdmComponent implements OnInit {

  constructor(
    private sharedService: SharedService,
    private commonService: CommonService
  ) { }

  public listNews: any;
  public listComments: any;

  ngOnInit(): void {
    this.getNews();
    this.getComments();
  }

  goto(id: string) {
    window.open('/noticias/' + id, '_blank');
  }

  getNews() {
    this.sharedService.GetAllNewsLimit().subscribe(
      (res: any) => {
        this.listNews = res;
        this.listNews.map((item: any) => {
          item.content = item.content.replace(/<[^>]*>/g, '').substring(0, 250).concat('...');
        });
      });
  }

  getComments() {
    this.sharedService.GetAllCommentsLimit().subscribe(
      (res: any) => {
        this.listComments = res;
      });
  }

}
