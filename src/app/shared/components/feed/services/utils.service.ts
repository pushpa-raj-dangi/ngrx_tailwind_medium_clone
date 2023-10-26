import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  range(start: number, end: number): number[] {
    return [...Array(end, start).keys()].map((e) => e + start);
  }
}
