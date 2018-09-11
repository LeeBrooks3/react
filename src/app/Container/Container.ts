import * as _ from 'lodash';
import ContainerInterface from './ContainerInterface';
import { Factory } from './Factory';

export default class Container implements ContainerInterface {
    protected map: object;

    /**
     * @param {object} map
     */
    public constructor(map: object) {
        this.map = map;
    }

    /** @inheritDoc */
    public make<T>(key: string): T {
        const factory: Factory<T> = _.get(this.map, key);

        return factory(this);
    }
}
