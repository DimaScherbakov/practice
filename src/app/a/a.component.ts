import { Component, OnInit } from '@angular/core';
import {CService} from "../c.service";

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {
  message: string;
  constructor(private service: CService) { }

  ngOnInit() {
    this.service.emitterSource$.subscribe((data) => {
      this.message = data;
    })
    setTimeout(() => {
      this.service.changeMessage('new message');
    },2000)
  }

}
