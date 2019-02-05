import { Component, OnInit } from '@angular/core';
import {CService} from "../c.service";
import {observable} from "rxjs";

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {
  message: string;

  constructor(public service: CService) {
  }

  ngOnInit() {
    this.service.emitterSource$.subscribe((data) => {
      this.message = data;
    });
  }
}
