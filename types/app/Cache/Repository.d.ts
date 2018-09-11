import RepositoryInterface from './RepositoryInterface';
export default class Repository implements RepositoryInterface {
    /** @inheritDoc */
    get<T = any>(key: string): Promise<T>;
    /** @inheritDoc */
    set<T = any>(key: string, value: T): Promise<void>;
    /** @inheritDoc */
    remove(key: string): Promise<void>;
}
//# sourceMappingURL=Repository.d.ts.map