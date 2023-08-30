import { Component } from '@angular/core';
import { HttpRequestBuilder } from './creational-patterns/builder/abstract-builder';
import { HtmlRequestDirector } from './creational-patterns/builder/director';
import { ConcreteHttpRequestBuilder } from './creational-patterns/builder/concrete-builder';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  // Usage
  builder: HttpRequestBuilder = new ConcreteHttpRequestBuilder();
  director: HtmlRequestDirector = new HtmlRequestDirector(this.builder);

  constructor() {
    const simpleHtmlRequest = this.director.buildSimpleHtmlRequest('/home');
    const htmlRequestWithToken = this.director.buildHtmlRequestWithToken(
      '/profile',
      'myAuthToken'
    );
    /* Output: simpleHtmlRequest
      {
        "method":"GET",
        "baseURL":"https://api.example.com",
        "endpoint":"/home",
        "headers":{
          "Content-Type":"text/html"
        },
        "body":null
      }
    */
    console.table(simpleHtmlRequest);
    /* Output:htmlRequestWithToken
      {
        "method":"GET",
        "baseURL":"https://api.example.com",
        "endpoint":"/profile",
        "headers":{
            "Content-Type":"text/html",
            "Authorization":"Bearer myAuthToken"
        },
        "body":null
      } 
    */
    console.table(htmlRequestWithToken);
  }
}
