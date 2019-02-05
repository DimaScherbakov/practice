import {EventEmitter, Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from "rxjs/operators";
import {nextContext} from "@angular/core/src/render3";
import { pipe} from "rxjs";
import { BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CService {
  emitterSource$ = new EventEmitter();

  constructor() {
    setTimeout(() => {
      this.emitterSource$.emit('my message');
    },0)
  }

  changeMessage(newData: string){
    this.emitterSource$.emit(newData);
  }
}
