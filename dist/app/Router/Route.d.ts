import { Component } from 'react';
export default class Route {
    name: string;
    readonly url: string;
    readonly component: Component;
    readonly middleware: string[];
    /**
     * @param {string} url
     * @param {Component} component
     * @param {string[]} middleware
     */
    constructor(url: string, component: Component, middleware?: string[]);
}
