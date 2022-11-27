import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-registers-adm',
  templateUrl: './registers-adm.component.html',
  styleUrls: ['./registers-adm.component.less']
})
export class RegistersAdmComponent implements OnInit {

  constructor(
    private sharedService: SharedService
  ) { }

  public registers: any;

  ngOnInit(): void {
    this.getRegisters();
  }

  getRegisters(): any {
    this.sharedService.GetAllUsers().subscribe(
      (res: any) => {
        this.registers = res;
      });

  }

}
