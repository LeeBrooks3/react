import * as _ from 'lodash';
import RepositoryInterface from './RepositoryInterface';

export default class Repository implements RepositoryInterface {
    /**
     * The config map.
     */
    protected config: object;

    /**
     * Sets the config map.
     */
    public constructor(config: object) {
        this.config = config;
    }

    /** @inheritDoc */
    public get<T = any>(key: string): T {
        return _.get(this.config, key);
    }

    /** @inheritDoc */
    public set<T = any>(key: string, value: T): void {
        _.set(this.config, key, value);
    }
}
