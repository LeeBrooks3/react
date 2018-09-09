import RepositoryInterface from './RepositoryInterface';

export default class Repository implements RepositoryInterface {
    protected config: object;

    /**
     * @param {object} config
     */
    public constructor(config: object) {
        this.config = config;
    }

    /** @inheritDoc */
    public get(key: string): any {
        return localStorage.getItem(key);
    }

    /** @inheritDoc */
    public set(key: string, value: any): void {
        localStorage.setItem(key, value);
    }

    /** @inheritDoc */
    public remove(key: string): void {
        localStorage.removeItem(key);
    }
}
