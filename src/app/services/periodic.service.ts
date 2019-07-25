import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { PeriodicElement } from 'src/models/periodic-element.model';
import { ELEMENT_DATA } from 'src/mocks/periodic-element.mock';

@Injectable({
  providedIn: 'root'
})
export class PeriodicService {

  constructor() { }

  public fetchPeriodicElements(): Observable<PeriodicElement[]> {
    const elements: PeriodicElement[] = ELEMENT_DATA;
    const simpleObservable = new Observable((observer: Observer<PeriodicElement[]>) => {
      // observable execution
      observer.next(elements);
      observer.complete();
    });
    return simpleObservable;
  }
}
