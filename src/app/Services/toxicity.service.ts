import { Injectable } from '@angular/core';
import * as toxicity from '@tensorflow-models/toxicity';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToxicityService {
  toxicityModel: any;
  threshold = 0.85;

  private loaderSource = new BehaviorSubject(null);
  loading$ = this.loaderSource.asObservable();

  setLoader(value: any) {
    this.loaderSource.next(value);
  }
  constructor() {
    this.getToxicityModel();
  }

  getToxicityModel() {
    toxicity.load(this.threshold, []).then((model: any) => {
      this.toxicityModel = model;
    });
  }
}
