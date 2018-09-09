import { default as Config } from '../app/Config/Repository';
import oauth2 from './oauth2';

export const config: object = new Config({
    oauth2,
});
