export default class Route {
    public name: string;
    public readonly url: string;
    public readonly component: any;
    public readonly middleware: string[];

    /**
     * Sets the route url, component and middleware.
     */
    public constructor(url: string, component: any, middleware: string[] = []) {
        this.url = url;
        this.component = component;
        this.middleware = middleware;
    }
}
