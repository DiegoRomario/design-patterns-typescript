import { Component } from '@angular/core';
import { DocumentClient } from './structural-patterns/proxy/client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor() {
    const client = new DocumentClient();
    client.print();
    /* OUTPUT:  Here is the document
                The image is:
                Loading the image...
                  
                ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
                ▓                  ▓
                ▓ Hey Ho! Let's Go ▓
                ▓                  ▓
                ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    */
  }
}
