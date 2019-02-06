import { Component, OnInit } from '@angular/core';
import {CService} from "../c.service";
import {combineLatest, fromEvent, Observable} from "rxjs";

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {
  message: string;
  click1Event$: Observable<any>;
  click2Event$: Observable<any>;
  constructor(private service: CService) { }

  ngOnInit() {

    this.click1Event$ = fromEvent(document.getElementById('btn1'),'click');
    this.click2Event$ = fromEvent(document.getElementById('btn2'),'click');
    let commonObserv$ = combineLatest(this.click1Event$,this.click2Event$);
    commonObserv$.subscribe((data) => {
      console.log(data);
      this.message = 'both buttons have been clicked';
    })
  }

  click1(e){
    this.message = 'button 1 has been clicked';
  }

  click2(e){
    this.message = 'button 2 has been clicked';
  }
}
