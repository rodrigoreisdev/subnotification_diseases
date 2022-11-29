import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { CommonService } from 'src/app/Services/common.service';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-personal-data-user',
  templateUrl: './personal-data-user.component.html',
  styleUrls: ['./personal-data-user.component.less']
})
export class PersonalDataUserComponent implements OnInit {
  public personalData = new FormGroup({
    Id: new FormControl(''),
    Email: new FormControl('', [Validators.required, Validators.email]),
    Name: new FormControl('', [Validators.required]),
    Phone: new FormControl('', [Validators.required, Validators.min(10)]),
    City: new FormControl('', [Validators.required]),
    State: new FormControl('', [Validators.required]),
    Cpf: new FormControl(''),
    BirthDate: new FormControl('', [Validators.required]),
    Gender: new FormControl('', [Validators.required]),
  })
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
  public user: any;

  constructor(
    private sharedService: SharedService,
    private commonService: CommonService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getPersonalData();
  }

  getPersonalData() {
    this.user = this.commonService.getUserData();
    this.sharedService.GetUserById(this.user.nameid).subscribe(
      (res: any) => {
        this.personalData.patchValue({
          Id: res.id,
          Email: res.email,
          Name: res.name,
          Phone: res.phone,
          City: res.city,
          State: res.state,
          Cpf: res.cpf,
          BirthDate: res.birthDate.split('T')[0],
          Gender: res.gender
        });
      })
  }

  onUpdate() {
    if (this.personalData.valid) {
      this.sharedService.UpdateUser(this.personalData.value).subscribe(
        (res: any) => {
          this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Dados atualizados com sucesso!' });
        }
      );
    }
  }

}
