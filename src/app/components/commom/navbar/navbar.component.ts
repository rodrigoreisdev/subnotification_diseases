import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookiesService } from 'src/app/Services/cookies.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  constructor(
    private cookieService: CookiesService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }


  logout () {
    this.cookieService.deleteCookie('authentication');
    this.route.navigate(['/']);
  }

}
