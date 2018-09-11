import ContainerInterface from './ContainerInterface';
export default class Container implements ContainerInterface {
    protected map: object;
    /**
     * @param {object} map
     */
    constructor(map: object);
    /** @inheritDoc */
    get(key: string): any;
    /** @inheritDoc */
    set(key: string, value: any): void;
}
//# sourceMappingURL=Container.d.ts.map