import ContainerInterface from './ContainerInterface';
export default class Container implements ContainerInterface {
    protected map: object;
    /**
     * @param {object} map
     */
    constructor(map: object);
    /** @inheritDoc */
    make<T>(key: string): T;
}
//# sourceMappingURL=Container.d.ts.map