import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PdfServiceService {

  constructor() { }

  getPDF():string {
    return '/assets/demo.pdf';
  }
}
