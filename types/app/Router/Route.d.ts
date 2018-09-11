export default class Route {
    name: string;
    readonly url: string;
    readonly component: any;
    readonly middleware: string[];
    /**
     * Sets the route url, component and middleware.
     */
    constructor(url: string, component: any, middleware?: string[]);
}
//# sourceMappingURL=Route.d.ts.map