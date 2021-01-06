import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PdfComponent } from './pdf/pdf.component';
import { ExcelComponent } from './excel/excel.component';

import {PdfViewerModule} from 'ng2-pdf-viewer';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PdfComponent,
    ExcelComponent
  ],
  imports: [
    BrowserModule,
    PdfViewerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
