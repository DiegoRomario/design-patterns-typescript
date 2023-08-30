import { HttpRequestBuilder } from "./abstract-builder";
import { HttpMethod, HttpRequest } from "./product";

// Director: Constructs the product using the Builder interface
export class HtmlRequestDirector {
    constructor(private builder: HttpRequestBuilder) { }

    // Builds a simple HTML request
    buildSimpleHtmlRequest(endpoint: string): HttpRequest {
        return this.builder
            .setMethod(HttpMethod.GET)
            .setBaseURL('https://api.example.com')
            .setEndpoint(endpoint)
            .setHeaders({ 'Content-Type': 'text/html' })
            .build();
    }

    // Builds an HTML request with an authentication token
    buildHtmlRequestWithToken(endpoint: string, token: string): HttpRequest {
        return this.builder
            .setMethod(HttpMethod.GET)
            .setBaseURL('https://api.example.com')
            .setEndpoint(endpoint)
            .setHeaders({ 'Content-Type': 'text/html', Authorization: `Bearer ${token}` })
            .build();
    }
}

