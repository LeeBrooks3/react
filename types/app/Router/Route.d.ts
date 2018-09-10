export default class Route {
    name: string;
    readonly url: string;
    readonly component: any;
    readonly middleware: string[];
    /**
     * @param {string} url
     * @param {*} component
     * @param {string[]} middleware
     */
    constructor(url: string, component: any, middleware?: string[]);
}
//# sourceMappingURL=Route.d.ts.map