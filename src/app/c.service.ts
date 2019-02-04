import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from "rxjs/operators";
import {nextContext} from "@angular/core/src/render3";
import { pipe} from "rxjs";
import { BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CService {
  source = new BehaviorSubject('message text');
  obsMessage$ = this.source.asObservable();

  observable = Observable.create((observer) => {
      observer.next('communicate message');
  });

  changeMessage(newData: string){
    this.source.next(newData)}

  constructor() {
  }
}
