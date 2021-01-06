import { Component, OnInit } from '@angular/core';
import { PdfServiceService } from '../services/pdf-service.service';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {

  page:number = 1;
  pdfSrc:string = '';

  constructor(private pdfService: PdfServiceService) { }

  ngOnInit() {
    this.pdfSrc= this.pdfService.getPDF();
  }

  onFileSelected() {
    let img: any = document.querySelector("#file");

    if(typeof (FileReader) !== 'undefined') {
      let reader = new FileReader();

      reader.onload = (e:any) => {
        this.pdfSrc = e.target.result;
      }

      reader.readAsArrayBuffer(img.files[0]);
    }
  }

}
