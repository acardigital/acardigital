import { Component, OnInit } from '@angular/core';

import { of } from 'rxjs';

@Component({
  selector: 'acardigital-publishable',
  templateUrl: './publishable.component.html',
  styleUrls: ['./publishable.component.scss']
})
export class PublishableComponent implements OnInit {

  staticData: ToLearn[] = [
    { title: 'NgRx', learned: false },
    { title: 'NestJS', learned: false },
    { title: 'GraphQL', learned: false },
    { title: 'Configuration without cPanel', learned: false },
    { title: 'Webpack', learned: false }
  ];

  toLearn$ = of(this.staticData);

  constructor() { }

  ngOnInit() {
  }

}

interface ToLearn {
  title: string;
  learned: boolean;
}
