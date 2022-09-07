import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-adm',
  templateUrl: './news-adm.component.html',
  styleUrls: ['./news-adm.component.less']
})
export class NewsAdmComponent implements OnInit {

  constructor() { }
  public news: any;

  ngOnInit(): void {
    this.getNews();
  }

  getNews(): any {
    this.news = [
      {
        id: 1,
        date: '10/08/2022',
        title: 'Lorem ipsum dolor sit amet',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et tincidunt diam. Etiam gravida sit amet mauris id aliquet. Pellentesque convallis arcu ac posuere condimentum. Quisque id risus felis. Pellentesque sapien lorem, ullamcorper sed tellus non, pretium ultricies nunc. Duis iaculis, turpis quis luctus tincidunt, magna urna rhoncus nisl, pretium porta nunc nibh non quam. Praesent neque sapien, faucibus ac eros sed, iaculis suscipit dui. Maecenas pulvinar venenatis lacus vel feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        id: 2,
        date: '10/08/2022',
        title: 'Lorem ipsum dolor sit amet',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et tincidunt diam. Etiam gravida sit amet mauris id aliquet. Pellentesque convallis arcu ac posuere condimentum. Quisque id risus felis. Pellentesque sapien lorem, ullamcorper sed tellus non, pretium ultricies nunc. Duis iaculis, turpis quis luctus tincidunt, magna urna rhoncus nisl, pretium porta nunc nibh non quam. Praesent neque sapien, faucibus ac eros sed, iaculis suscipit dui. Maecenas pulvinar venenatis lacus vel feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        id: 3,
        date: '10/08/2022',
        title: 'Lorem ipsum dolor sit amet',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et tincidunt diam. Etiam gravida sit amet mauris id aliquet. Pellentesque convallis arcu ac posuere condimentum. Quisque id risus felis. Pellentesque sapien lorem, ullamcorper sed tellus non, pretium ultricies nunc. Duis iaculis, turpis quis luctus tincidunt, magna urna rhoncus nisl, pretium porta nunc nibh non quam. Praesent neque sapien, faucibus ac eros sed, iaculis suscipit dui. Maecenas pulvinar venenatis lacus vel feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        id: 4,
        date: '10/08/2022',
        title: 'Lorem ipsum dolor sit amet',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et tincidunt diam. Etiam gravida sit amet mauris id aliquet. Pellentesque convallis arcu ac posuere condimentum. Quisque id risus felis. Pellentesque sapien lorem, ullamcorper sed tellus non, pretium ultricies nunc. Duis iaculis, turpis quis luctus tincidunt, magna urna rhoncus nisl, pretium porta nunc nibh non quam. Praesent neque sapien, faucibus ac eros sed, iaculis suscipit dui. Maecenas pulvinar venenatis lacus vel feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        id: 5,
        date: '10/08/2022',
        title: 'Lorem ipsum dolor sit amet',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et tincidunt diam. Etiam gravida sit amet mauris id aliquet. Pellentesque convallis arcu ac posuere condimentum. Quisque id risus felis. Pellentesque sapien lorem, ullamcorper sed tellus non, pretium ultricies nunc. Duis iaculis, turpis quis luctus tincidunt, magna urna rhoncus nisl, pretium porta nunc nibh non quam. Praesent neque sapien, faucibus ac eros sed, iaculis suscipit dui. Maecenas pulvinar venenatis lacus vel feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
    ]

  }
}
