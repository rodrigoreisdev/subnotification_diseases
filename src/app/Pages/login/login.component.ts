import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
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
    private route: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.verifyLogged();
  }

  verifyLogged() {
    if (this.cookieService.getCookie('authentication')) {
      this.route.navigate(['/painel']);
    }
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.sharedService.Login(this.loginForm.value).subscribe(
        (res: any) => {
          this.cookieService.setCookie('authentication', res.token);
          this.route.navigate(['/painel']);
        },
        (err: any) => {
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: err.erro.message });
        });
    }
  }

}
