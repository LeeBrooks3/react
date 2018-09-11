import RepositoryInterface from './RepositoryInterface';
export default class Repository implements RepositoryInterface {
    /**
     * The config map.
     */
    protected config: object;
    /**
     * Sets the config map.
     */
    constructor(config: object);
    /** @inheritDoc */
    get<T = any>(key: string): T;
    /** @inheritDoc */
    set<T = any>(key: string, value: T): void;
}
//# sourceMappingURL=Repository.d.ts.map