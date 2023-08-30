import { HttpMethod, HttpRequest } from "./product";

// Abstract Builder: Declares steps to build parts of the product.
export interface HttpRequestBuilder {
    setMethod(method: HttpMethod): HttpRequestBuilder;
    setBaseURL(baseURL: string): HttpRequestBuilder;
    setEndpoint(endpoint: string): HttpRequestBuilder;
    setHeaders(headers: Record<string, string>): HttpRequestBuilder;
    setBody(body: any): HttpRequestBuilder;
    build(): HttpRequest;
}
