import { Component } from 'react';
import { Middleware } from 'redux';

export default class Route {
    public name: string;
    public readonly url: string;
    public readonly component: Component;
    public readonly middleware: string[];

    /**
     * @param {string} url
     * @param {Component} component
     * @param {string[]} middleware
     */
    public constructor(url: string, component: Component, middleware: string[] = []) {
        this.url = url;
        this.component = component;
        this.middleware = middleware;
    }
}
