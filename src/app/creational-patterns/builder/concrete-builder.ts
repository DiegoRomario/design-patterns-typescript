import { HttpRequestBuilder } from "./abstract-builder";
import { HttpMethod, HttpRequest } from "./product";

// Concrete Builder: Implements the construction steps, returning the final product.
export class ConcreteHttpRequestBuilder implements HttpRequestBuilder {
    private method: HttpMethod = HttpMethod.GET;
    private baseURL: string = '';
    private endpoint: string = '';
    private headers: Record<string, string> = {};
    private body: any = null;

    setMethod(method: HttpMethod): HttpRequestBuilder {
        this.method = method;
        return this;
    }

    setBaseURL(baseURL: string): HttpRequestBuilder {
        this.baseURL = baseURL;
        return this;
    }

    setEndpoint(endpoint: string): HttpRequestBuilder {
        this.endpoint = endpoint;
        return this;
    }

    setHeaders(headers: Record<string, string>): HttpRequestBuilder {
        this.headers = headers;
        return this;
    }

    setBody(body: any): HttpRequestBuilder {
        this.body = body;
        return this;
    }

    build(): HttpRequest {
        return new HttpRequest(
            this.method,
            this.baseURL,
            this.endpoint,
            this.headers,
            this.body
        );
    }
}
