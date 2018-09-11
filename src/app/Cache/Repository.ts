import RepositoryInterface from './RepositoryInterface';

export default class Repository implements RepositoryInterface {
    /** @inheritDoc */
    public get<T = any>(key: string): Promise<T> {
        const json: string = localStorage.getItem(key);
        const value: T = JSON.parse(json);

        return Promise.resolve(value);
    }

    /** @inheritDoc */
    public set<T = any>(key: string, value: T): Promise<void> {
        const json: string = JSON.stringify(value);

        localStorage.setItem(key, json);

        return Promise.resolve();
    }

    /** @inheritDoc */
    public remove(key: string): Promise<void> {
        localStorage.removeItem(key);

        return Promise.resolve();
    }
}
