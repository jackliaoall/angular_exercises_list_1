1. FIRSTLY FRIENDS WE NEED FRESH ANGULAR 10 SETUP AND FOR THIS WE NEED TO RUN BELOW COMMANDS BUT IF YOU ALREADY HAVE ANGULAR 10 SETUP THEN YOU CAN AVOID BELOW COMMANDS. SECONDLY WE SHOULD ALSO HAVE LATEST NODE VERSION INSTALLED ON OUR SYSTEM:
ng new htmltopdf //Create new Angular Project
cd htmltopdf

2. NOW FRIENDS, HERE WE NEED TO RUN BELOW COMMANDS INTO OUR PROJECT TERMINAL TO INSTALL PDFMAKE, BOOTSTRAP(GOOD LOOKS) MODULES INTO OUR ANGULAR APPLICATION:
npm install --save pdfmake
npm install html-to-pdfmake
npm install jspdf --save
npm i --save bootstrap

3. NOW FRIENDS, HERE WE NEED TO ADD BELOW  INTO OUR ANGULAR.JSON FILE:
"styles": [
           ...
           "node_modules/bootstrap/dist/css/bootstrap.min.css",
          
         ]

4. NOW FRIENDS WE JUST NEED TO ADD BELOW CODE INTO SRC/APP/APP.COMPONENT.TS FILE:
import { Component, ViewChild, ElementRef  } from '@angular/core';
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';
...
export class AppComponent {
  @ViewChild('pdfTable') pdfTable: ElementRef;
  ...
  //PDF genrate button click function
  public downloadAsPDF() {
    const doc = new jsPDF();
    //get table html
    const pdfTable = this.pdfTable.nativeElement;
    //html to pdf format
    var html = htmlToPdfmake(pdfTable.innerHTML);
   
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).open();
  } 
}

5. NOW FRIENDS WE JUST NEED TO ADD BELOW CODE INTO SRC/APP/APP.COMPONENT.HTML FILE:
<div id="pdfTable" #pdfTable>
        <h2>HTML To PDF</h2>
                  
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ajay</td>
              <td>Malhotra</td>
              <td>Therichpost.com</td>
            </tr>
            <tr>
              <td>Ajay</td>
              <td>Malhotra</td>
              <td>Therichpost.com</td>
            </tr>
            <tr>
              <td>Ajay</td>
              <td>Malhotra</td>
              <td>Therichpost.com</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <button class="btn btn-primary" (click)="downloadAsPDF()">Export To PDF</button>
