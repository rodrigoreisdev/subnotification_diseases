import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registers-adm',
  templateUrl: './registers-adm.component.html',
  styleUrls: ['./registers-adm.component.less']
})
export class RegistersAdmComponent implements OnInit {

  constructor() { }

  public registers: any;

  ngOnInit(): void {
    this.getRegisters();
  }

  getRegisters(): any {
    this.registers = [
      {
        id: 1,
        name: 'Adm',
        document: '1234567891',
        date: '20/02/2000',
        city: 'Alfenas',
        obs: 'nada a declararar'
      },
      {
        id: 2,
        name: 'Adm',
        document: '1234567891',
        date: '20/02/2000',
        city: 'Alfenas',
        obs: 'nada a declararar'
      },
      {
        id: 3,
        name: 'Adm',
        document: '1234567891',
        date: '20/02/2000',
        city: 'Alfenas',
        obs: 'nada a declararar'
      },
      {
        id: 4,
        name: 'Adm',
        document: '1234567891',
        date: '20/02/2000',
        city: 'Alfenas',
        obs: 'nada a declararar'
      },
      {
        id: 5,
        name: 'Adm',
        document: '1234567891',
        date: '20/02/2000',
        city: 'Alfenas',
        obs: 'nada a declararar'
      },
      {
        id: 6,
        name: 'Adm',
        document: '1234567891',
        date: '20/02/2000',
        city: 'Alfenas',
        obs: 'nada a declararar'
      },
      {
        id: 7,
        name: 'Adm',
        document: '1234567891',
        date: '20/02/2000',
        city: 'Alfenas',
        obs: 'nada a declararar'
      },
    ]

  }

}
