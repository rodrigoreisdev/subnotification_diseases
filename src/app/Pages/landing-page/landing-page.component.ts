import { Component, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.less']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  public carouselItems: any[] = [
    {
      img: 'https://picsum.photos/1120/340?random=1',
      link: '#',
    },
    {
      img: 'https://picsum.photos/1120/340?random=2',
      link: '#',
    },
    {
      img: 'https://picsum.photos/1120/340?random=3',
      link: '#',
    },
    {
      img: 'https://picsum.photos/1120/340?random=4',
      link: '#',
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

}
