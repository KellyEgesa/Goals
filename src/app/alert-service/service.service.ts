import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  alertMe(message: string): void {
    alert(message);
  }
  constructor() {}
}
