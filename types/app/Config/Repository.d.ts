import RepositoryInterface from './RepositoryInterface';
export default class Repository implements RepositoryInterface {
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
//# sourceMappingURL=Repository.d.ts.map