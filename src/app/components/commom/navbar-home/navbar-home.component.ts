import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Services/common.service';

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.less']
})
export class NavbarHomeComponent implements OnInit {

  constructor(
    private commonService: CommonService,
  ) { }

  public user: any;
  public isLogged: boolean = false;

  ngOnInit(): void {
    this.user = this.commonService.getUserData();
    this.isLogged = this.user != null ? true : false;
  }

}
