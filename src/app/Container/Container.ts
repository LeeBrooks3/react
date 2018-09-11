import * as _ from 'lodash';
import ContainerInterface from './ContainerInterface';

export default class Container implements ContainerInterface {
    protected map: object;

    /**
     * @param {object} map
     */
    public constructor(map: object) {
        this.map = map;
    }

    /** @inheritDoc */
    public get(key: string): any {
        return _.get(this.map, key);
    }

    /** @inheritDoc */
    public set(key: string, value: any): void {
        _.set(this.map, key, value);
    }
}
