import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages-adm',
  templateUrl: './messages-adm.component.html',
  styleUrls: ['./messages-adm.component.less']
})
export class MessagesAdmComponent implements OnInit {

  constructor() { }

  public messages: any;

  ngOnInit(): void {
    this.getMessages();
  }

  getMessages(): any {
    this.messages = [
      {
        id: 1,
        name: 'Adm',
        email: 'personal@mail.com',
        phone: '(35) 9 99999-9999',
        date: '10/08/2022',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et tincidunt diam. Etiam gravida sit amet mauris id aliquet. Pellentesque convallis arcu ac posuere condimentum. Quisque id risus felis. Pellentesque sapien lorem, ullamcorper sed tellus non, pretium ultricies nunc. Duis iaculis, turpis quis luctus tincidunt, magna urna rhoncus nisl, pretium porta nunc nibh non quam. Praesent neque sapien, faucibus ac eros sed, iaculis suscipit dui. Maecenas pulvinar venenatis lacus vel feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        id: 2,
        name: 'Adm',
        email: 'personal@mail.com',
        phone: '(35) 9 99999-9999',
        date: '10/08/2022',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et tincidunt diam. Etiam gravida sit amet mauris id aliquet. Pellentesque convallis arcu ac posuere condimentum. Quisque id risus felis. Pellentesque sapien lorem, ullamcorper sed tellus non, pretium ultricies nunc. Duis iaculis, turpis quis luctus tincidunt, magna urna rhoncus nisl, pretium porta nunc nibh non quam. Praesent neque sapien, faucibus ac eros sed, iaculis suscipit dui. Maecenas pulvinar venenatis lacus vel feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        id: 3,
        name: 'Adm',
        email: 'personal@mail.com',
        phone: '(35) 9 99999-9999',
        date: '10/08/2022',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et tincidunt diam. Etiam gravida sit amet mauris id aliquet. Pellentesque convallis arcu ac posuere condimentum. Quisque id risus felis. Pellentesque sapien lorem, ullamcorper sed tellus non, pretium ultricies nunc. Duis iaculis, turpis quis luctus tincidunt, magna urna rhoncus nisl, pretium porta nunc nibh non quam. Praesent neque sapien, faucibus ac eros sed, iaculis suscipit dui. Maecenas pulvinar venenatis lacus vel feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        id: 4,
        name: 'Adm',
        email: 'personal@mail.com',
        phone: '(35) 9 99999-9999',
        date: '10/08/2022',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et tincidunt diam. Etiam gravida sit amet mauris id aliquet. Pellentesque convallis arcu ac posuere condimentum. Quisque id risus felis. Pellentesque sapien lorem, ullamcorper sed tellus non, pretium ultricies nunc. Duis iaculis, turpis quis luctus tincidunt, magna urna rhoncus nisl, pretium porta nunc nibh non quam. Praesent neque sapien, faucibus ac eros sed, iaculis suscipit dui. Maecenas pulvinar venenatis lacus vel feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        id: 5,
        name: 'Adm',
        email: 'personal@mail.com',
        phone: '(35) 9 99999-9999',
        date: '10/08/2022',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et tincidunt diam. Etiam gravida sit amet mauris id aliquet. Pellentesque convallis arcu ac posuere condimentum. Quisque id risus felis. Pellentesque sapien lorem, ullamcorper sed tellus non, pretium ultricies nunc. Duis iaculis, turpis quis luctus tincidunt, magna urna rhoncus nisl, pretium porta nunc nibh non quam. Praesent neque sapien, faucibus ac eros sed, iaculis suscipit dui. Maecenas pulvinar venenatis lacus vel feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        id: 6,
        name: 'Adm',
        email: 'personal@mail.com',
        phone: '(35) 9 99999-9999',
        date: '10/08/2022',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et tincidunt diam. Etiam gravida sit amet mauris id aliquet. Pellentesque convallis arcu ac posuere condimentum. Quisque id risus felis. Pellentesque sapien lorem, ullamcorper sed tellus non, pretium ultricies nunc. Duis iaculis, turpis quis luctus tincidunt, magna urna rhoncus nisl, pretium porta nunc nibh non quam. Praesent neque sapien, faucibus ac eros sed, iaculis suscipit dui. Maecenas pulvinar venenatis lacus vel feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
    ]

  }

}
