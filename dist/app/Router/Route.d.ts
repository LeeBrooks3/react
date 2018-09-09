import { ComponentClass } from 'react';
export default class Route {
    name: string;
    readonly url: string;
    readonly component: ComponentClass;
    readonly middleware: string[];
    /**
     * @param {string} url
     * @param {ComponentClass} component
     * @param {string[]} middleware
     */
    constructor(url: string, component: ComponentClass, middleware?: string[]);
}
