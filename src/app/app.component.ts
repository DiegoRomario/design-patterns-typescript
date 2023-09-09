import { Component } from '@angular/core';
import { Client } from './creational-patterns/prototype/client';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor() {
    new Client();
  }
}
