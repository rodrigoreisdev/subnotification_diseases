import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Services/common.service';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.less']
})
export class HomeUserComponent implements OnInit {

  constructor(
    private sharedService: SharedService,
    private commonService: CommonService
  ) {
    this.user = this.commonService.getUserData();
  }

  public category: string = '';
  public listNews: any;
  public listNewsByCategory: any;
  public listCategories: any;
  public listComments: any;
  user: any;

  ngOnInit(): void {
    this.getNews();
    this.getAllCategories();
    this.getCommentsByUserId(this.user.nameid);
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

  getAllCategories() {
    this.sharedService.GetAllCategories().subscribe(
      (res: any) => {
        this.listCategories = res;
      });
  }

  getNewsByCategory() {
    console.log(this.category);
    if (this.category !== '') {
      this.sharedService.GetAllNewsLimitByCategory(this.category).subscribe(
        (res: any) => {
          this.listNews = res;
          this.listNews.map((item: any) => {
            item.content = item.content.replace(/<[^>]*>/g, '').substring(0, 250).concat('...');
          });
        });
    } else {
      this.getNews();
    }
  }

  goto(id: string) {
    window.open('/noticias/' + id, '_blank');
  }

  getCommentsByUserId(id: string) {
    this.sharedService.GetCommentsByUserId(id).subscribe(
      (res: any) => {
        this.listComments = res;
      });
  }

}
