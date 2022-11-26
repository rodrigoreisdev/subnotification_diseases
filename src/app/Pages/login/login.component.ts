import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookiesService } from 'src/app/Services/cookies.service';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  public loginForm = new FormGroup({
    Email: new FormControl('', [Validators.required]),
    Password: new FormControl('', [Validators.required])
  });

  constructor(
    private sharedService: SharedService,
    private cookieService: CookiesService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.sharedService.Login(this.loginForm.value).subscribe(
        (res: any) => {
          this.cookieService.setCookie('authentication', res.token);
          this.route.navigate(['/painel']);
        });
    }
  }

}
