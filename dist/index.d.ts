declare module "app/Cache/RepositoryInterface" {
    export interface RepositoryInterface {
        /**
         * Returns the value for the given key from storage.
         *
         * @param {string} key
         * @return {*}
         */
        get(key: string): any;
        /**
         * Sets the value for the given key in storage.
         *
         * @param {string} key
         * @param {*} value
         * @return {void}
         */
        set(key: string, value: any): void;
        /**
         * Removes the value for the given key from storage.
         *
         * @param {string} key
         * @return {void}
         */
        remove(key: string): void;
    }
}
declare module "app/Cache/Repository" {
    import RepositoryInterface from "app/Cache/RepositoryInterface";
    export class Repository implements RepositoryInterface {
        protected config: object;
        /**
         * @param {object} config
         */
        constructor(config: object);
        /** @inheritDoc */
        get(key: string): any;
        /** @inheritDoc */
        set(key: string, value: any): void;
        /** @inheritDoc */
        remove(key: string): void;
    }
}
declare module "app/Config/RepositoryInterface" {
    export interface RepositoryInterface {
        /**
         * Returns the value for the given key from config.
         *
         * @param {string} key
         * @return {*}
         */
        get(key: string): any;
        /**
         * Sets the value for the given key in config.
         *
         * @param {string} key
         * @param {*} value
         * @return {void}
         */
        set(key: string, value: any): void;
    }
}
declare module "app/Config/Repository" {
    import RepositoryInterface from "app/Config/RepositoryInterface";
    export class Repository implements RepositoryInterface {
        protected config: object;
        /**
         * @param {object} config
         */
        constructor(config: object);
        /** @inheritDoc */
        get(key: string): any;
        /** @inheritDoc */
        set(key: string, value: any): void;
    }
}
declare module "app/Events/EventInterface" {
    import { Action } from 'redux';
    import ListenerInterface from "app/Listeners/ListenerInterface";
    export interface EventInterface extends Action {
        /**
         * Returns the listeners for the event.
         *
         * @return {ListenerInterface[]}
         */
        getListeners(): ListenerInterface[];
    }
}
declare module "app/Utilities/Awaitable" {
    export interface Awaitable {
        /**
         * Returns whether the asynchronous action should be awaited.
         */
        shouldAwait(): boolean;
    }
}
declare module "app/Listeners/ListenerInterface" {
    import { Action, Dispatch } from 'redux';
    import EventInterface from "app/Events/EventInterface";
    import Awaitable from "app/Utilities/Awaitable";
    export interface ListenerInterface<StateInterface = any> extends Action, Awaitable {
        /**
         * Handles the event.
         *
         * @param {EventInterface} event
         * @param {Dispatch} dispatch
         * @param {} getState
         */
        handle(event: EventInterface, dispatch: Dispatch, getState: () => StateInterface): Promise<void>;
    }
}
declare module "app/Events/Event" {
    import ListenerInterface from "app/Listeners/ListenerInterface";
    import EventInterface from "app/Events/EventInterface";
    export class Event implements EventInterface {
        /**
         * The type of the event.
         *
         * @var {string}
         */
        readonly type: string;
        /**
         * Sets the event type from the constructor name.
         */
        constructor(type?: string, props?: object);
        /** @inheritDoc */
        getListeners(): ListenerInterface[];
    }
}
declare module "app/Http/Clients/AuthClient" {
    import { Client } from '@leebrooks3/typescript';
    import { default as Config } from "app/Config/RepositoryInterface";
    export class AuthClient extends Client {
        /**
         * The oauth2 client id.
         *
         * @var {number}
         */
        private clientId;
        /**
         * The oauth2 client secret.
         *
         * @var {string}
         */
        private clientSecret;
        /**
         * The oauth2 server url
         *
         * @var {string}
         */
        private serverUrl;
        /**
         * The oauth2 user endpoint.
         *
         * @var {string}
         */
        private userEndpoint;
        /**
         * The oauth2 token endpoint.
         *
         * @var {string}
         */
        private tokenEndpoint;
        /**
         * The oauth2 authorize endpoint.
         *
         * @var {string}
         */
        private authorizeEndpoint;
        /**
         * @param {Config} config
         */
        constructor(config: Config);
    }
}
declare module "app/Jobs/JobInterface" {
    import { Action, Dispatch } from 'redux';
    import Awaitable from "app/Utilities/Awaitable";
    export interface JobInterface<StateInterface = any> extends Action, Awaitable {
        /**
         * Does the job.
         *
         * @param {Dispatch} dispatch
         * @param {} getState
         */
        handle(dispatch: Dispatch, getState: () => StateInterface): Promise<void>;
    }
}
declare module "app/Jobs/Job" {
    import { Dispatch } from 'redux';
    import JobInterface from "app/Jobs/JobInterface";
    export abstract class Job<StateInterface = any> implements JobInterface<StateInterface> {
        /**
         * The type of the job.
         *
         * @var {string}
         */
        readonly type: string;
        /**
         * Whether the job should be ran synchronously.
         *
         * @var {boolean}
         */
        protected readonly await: boolean;
        /**
         * Sets the job type from the constructor name.
         */
        constructor();
        /** @inheritDoc */
        abstract handle(dispatch: Dispatch, getState: () => StateInterface): Promise<void>;
        /** @inheritDoc */
        shouldAwait(): boolean;
    }
}
declare module "app/Jobs/Redirect" {
    import { Dispatch } from 'redux';
    import Job from "app/Jobs/Job";
    export class Redirect extends Job {
        readonly await: boolean;
        /**
         * The URL to redirect to.
         */
        protected url: string;
        /**
         * @param {string} url
         */
        constructor(url: string);
        /**
         * Redirects to the url given on construction.
         *
         * @param {Dispatch} dispatch
         * @param {Function} getState
         */
        handle(dispatch: Dispatch, getState: <StateInterface = any>() => StateInterface): Promise<void>;
    }
}
declare module "app/Listeners/Listener" {
    import { Dispatch } from 'redux';
    import EventInterface from "app/Events/EventInterface";
    import ListenerInterface from "app/Listeners/ListenerInterface";
    export abstract class Listener<StateInterface = any> implements ListenerInterface<StateInterface> {
        /**
         * The type of the listener.
         *
         * @var {string}
         */
        readonly type: string;
        /**
         * Whether the listener should be ran synchronously.
         *
         * @var {boolean}
         */
        protected readonly await: boolean;
        /**
         * Sets the listener type from the constructor name.
         */
        constructor();
        /** @inheritDoc */
        abstract handle(event: EventInterface, dispatch: Dispatch, getState: () => StateInterface): Promise<void>;
        /** @inheritDoc */
        shouldAwait(): boolean;
    }
}
declare module "app/Router/Route" {
    export class Route {
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
}
declare module "app/Router/RouteManager" {
    import Route from "app/Router/Route";
    export class RouteManager {
        routes: Route[];
        /**
         * @param {Route[]} routes
         */
        constructor(routes: Route[]);
        /**
         * Sets the routes.
         *
         * @param {object} routeMap
         * @return {void}
         */
        setRoutes(routeMap: object): void;
        /**
         * Gets the route at the given key.
         *
         * @return {Route}
         */
        getCurrentRoute(location: Location): Route;
    }
}
declare module "config/oauth2" {
    const _default: {
        authorizeEndpoint: string;
        clientId: string;
        clientSecret: string;
        serverUrl: string;
        tokenEndpoint: string;
        userEndpoint: string;
    };
    export default _default;
}
declare module "config/index" {
    export const config: object;
}
declare module "store/history" {
    import { History } from 'history';
    export const history: History;
}
declare module "store/middleware/guest" {
    import { Middleware } from 'redux';
    import RouteManager from "app/Router/RouteManager";
    export const GUEST: string;
    export function createGuestMiddleware(routeManager: RouteManager): Middleware;
}
declare module "store/middleware/handler" {
    import { Action, Dispatch, Store } from 'redux';
    const _default_1: (store: Store<any, Action<any>>) => (next: Dispatch<Action<any>>) => (action: Action<any>) => Promise<any>;
    export default _default_1;
}
declare module "store/middleware/user" {
    import { Middleware } from 'redux';
    import RouteManager from "app/Router/RouteManager";
    export const USER: string;
    export function createUserMiddleware(routeManager: RouteManager): Middleware;
}
declare module "store/middleware/router" {
    import { Middleware } from 'redux';
    export const router: Middleware;
}
declare module "store/middleware/logger" {
    import { Action, Dispatch, Store } from 'redux';
    const _default_2: (store: Store<any, Action<any>>) => (next: Dispatch<Action<any>>) => (action: Action<any>) => Promise<any>;
    export default _default_2;
}
declare module "store/middleware/index" {
    export * from "store/middleware/guest";
    export * from "store/middleware/user";
    export * from "store/middleware/router";
    export { default as handler } from "store/middleware/handler";
    export { default as logger } from "store/middleware/logger";
}
declare module "store/reducers/router" {
    import { Reducer } from 'redux';
    export function createRouterReducer(reducer: Reducer): Reducer;
}
declare module "store/reducers/index" {
    export * from "store/reducers/router";
}
