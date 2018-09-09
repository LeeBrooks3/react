import * as _ from 'lodash';
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
        return _.get(this.config, key);
    }

    /** @inheritDoc */
    public set(key: string, value: any): void {
        _.set(this.config, key, value);
    }
}
