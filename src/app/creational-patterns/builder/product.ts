export enum HttpMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}

// Product: The complex object under construction
export class HttpRequest {
    constructor(
        public method: HttpMethod = HttpMethod.GET,
        public baseURL: string = '',
        public endpoint: string = '',
        public headers: Record<string, string> = {},
        public body: any = null // Avoid using 'any' this type is not safe; used here for simplification.
    ) { }
}
