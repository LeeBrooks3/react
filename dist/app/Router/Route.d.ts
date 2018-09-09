import { ComponentClass } from 'react';
export default class Route {
    name: string;
    readonly url: string;
    readonly component: ComponentClass<any>;
    readonly middleware: string[];
    /**
     * @param {string} url
     * @param {ComponentClass<any>>} component
     * @param {string[]} middleware
     */
    constructor(url: string, component: ComponentClass<any>, middleware?: string[]);
}
