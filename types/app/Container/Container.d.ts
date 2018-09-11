import ContainerInterface from './ContainerInterface';
export default class Container implements ContainerInterface {
    /**
     * The class map.
     */
    protected map: object;
    /**
     * Sets the class map.
     */
    constructor(map: object);
    /** @inheritDoc */
    make<T>(key: string): T;
}
//# sourceMappingURL=Container.d.ts.map