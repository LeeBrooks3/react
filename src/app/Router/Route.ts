import { ComponentClass } from 'react';

export default class Route {
    public name: string;
    public readonly url: string;
    public readonly component: ComponentClass;
    public readonly middleware: string[];

    /**
     * @param {string} url
     * @param {ComponentClass} component
     * @param {string[]} middleware
     */
    public constructor(url: string, component: ComponentClass, middleware: string[] = []) {
        this.url = url;
        this.component = component;
        this.middleware = middleware;
    }
}
