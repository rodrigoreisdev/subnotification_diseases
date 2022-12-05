import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {

  constructor(
    private sharedService: SharedService,
  ) { }

  private phoneWpp = '5535991616728';

  public messageForm = new FormGroup({
    message: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.messageForm.value.message);
    if (this.messageForm.valid) {
      window.open(`https://api.whatsapp.com/send?phone=${this.phoneWpp}&text=${this.messageForm.value.message}`);
    }
  }

}
