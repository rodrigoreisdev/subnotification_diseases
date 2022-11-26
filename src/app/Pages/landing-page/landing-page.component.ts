import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NguCarouselConfig } from '@ngu/carousel';
import { MessageService } from 'primeng/api';
import { CustomValidatorService } from 'src/app/Services/custom-validator.service';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.less']
})
export class LandingPageComponent implements OnInit {

  constructor(
    private sharedService: SharedService,
    private messageService: MessageService,
    private route: Router
  ) { }

  public registerForm = new FormGroup({
    Email: new FormControl('', [Validators.required, Validators.email]),
    Password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    Name: new FormControl('', [Validators.required]),
    Phone: new FormControl('', [Validators.required, Validators.min(10)]),
    City: new FormControl('', [Validators.required]),
    State: new FormControl('', [Validators.required]),
    Cpf: new FormControl('', [Validators.required, Validators.min(11), CustomValidatorService.isCpf]),
    BirthDate: new FormControl('', [Validators.required]),
    Gender: new FormControl('', [Validators.required]),
  });

  public carouselItems: any[] = [
    {
      img: 'https://picsum.photos/1120/340?random=1',
      link: '/noticias',
    },
    {
      img: 'https://picsum.photos/1120/340?random=2',
      link: '/noticias',
    },
    {
      img: 'https://picsum.photos/1120/340?random=3',
      link: '/noticias',
    },
    {
      img: 'https://picsum.photos/1120/340?random=4',
      link: '/noticias',
    },
  ];
  public states: any[] = [
    {
      value: 'AC',
      label: 'Acre',
    },
    {
      value: 'AL',
      label: 'Alagoas',
    },
    {
      value: 'AP',
      label: 'Amapá',
    },
    {
      value: 'AM',
      label: 'Amazonas',
    },
    {
      value: 'BA',
      label: 'Bahia',
    },
    {
      value: 'CE',
      label: 'Ceará',
    },
    {
      value: 'DF',
      label: 'Distrito Federal',
    },
    {
      value: 'ES',
      label: 'Espírito Santo',
    },
    {
      value: 'GO',
      label: 'Goiás',
    },
    {
      value: 'MA',
      label: 'Maranhão',
    },
    {
      value: 'MT',
      label: 'Mato Grosso',
    },
    {
      value: 'MS',
      label: 'Mato Grosso do Sul',
    },
    {
      value: 'MG',
      label: 'Minas Gerais',
    },
    {
      value: 'PA',
      label: 'Pará',
    },
    {
      value: 'PB',
      label: 'Paraíba',
    },
    {
      value: 'PR',
      label: 'Paraná',
    },
    {
      value: 'PE',
      label: 'Pernambuco',
    },
    {
      value: 'PI',
      label: 'Piauí',
    },
    {
      value: 'RJ',
      label: 'Rio de Janeiro',
    },
    {
      value: 'RN',
      label: 'Rio Grande do Norte',
    },
    {
      value: 'RS',
      label: 'Rio Grande do Sul',
    },
    {
      value: 'RO',
      label: 'Rondônia',
    },
    {
      value: 'RR',
      label: 'Roraima',
    },
    {
      value: 'SC',
      label: 'Santa Catarina',
    },
    {
      value: 'SP',
      label: 'São Paulo',
    },
    {
      value: 'SE',
      label: 'Sergipe',
    },
    {
      value: 'TO',
      label: 'Tocantins',
    },
  ];
  public carouselTile: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    slide: 1,
    speed: 600,
    point: {
      visible: true
    },
    load: 2,
    loop: true,
    touch: true,
    easing: 'cubic-bezier(0, 0, 0.2, 1)'
  };

  ngOnInit(): void {
  }

  onRegister() {
    if (this.registerForm.valid) {
      this.sharedService.InsertUser(this.registerForm.value).subscribe(
        (res: any) => {
          this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Usuário cadastrado com sucesso!' });
          this.route.navigate(['/login']);
          this.registerForm.reset();
        }
      );
    }
  }

  verifyPassword() {
    if (this.registerForm.value.Password !== '' && this.registerForm.value.confirmPassword !== '') {
      if (this.registerForm.value.Password !== this.registerForm.value.confirmPassword) {
        this.registerForm.controls.confirmPassword.setErrors({ notSame: true });
        this.registerForm.controls.Password.setErrors({ notSame: true });
      } else {
        this.registerForm.controls.confirmPassword.setErrors(null);
        this.registerForm.controls.Password.setErrors(null);
      }
    }
  }

}
