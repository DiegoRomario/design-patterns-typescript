import { Component } from '@angular/core';
import { PlainText } from './structural-patterns/decorator/concrete-component';
import { BoldTextDecorator, ItalicTextDecorator } from './structural-patterns/decorator/concrete-decorators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor() {

    // Usage
    const plainText = new PlainText("Hello, World!");

    const italicText = new ItalicTextDecorator(plainText);
    const boldText = new BoldTextDecorator(italicText);

    console.log(boldText.format());
    // Output: <b><i>Hello, World!</i></b>

  }
}
