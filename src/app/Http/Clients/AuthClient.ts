import { Client } from '@leebrooks3/typescript';
import { default as Config } from '../../Config/RepositoryInterface';

export default class AuthClient extends Client {
    /**
     * The oauth2 client id.
     *
     * @var {number}
     */
    private clientId: number;

    /**
     * The oauth2 client secret.
     *
     * @var {string}
     */
    private clientSecret: string;

    /**
     * The oauth2 server url
     *
     * @var {string}
     */
    private serverUrl: string;

    /**
     * The oauth2 user endpoint.
     *
     * @var {string}
     */
    private userEndpoint: string;

    /**
     * The oauth2 token endpoint.
     *
     * @var {string}
     */
    private tokenEndpoint: string;

    /**
     * The oauth2 authorize endpoint.
     *
     * @var {string}
     */
    private authorizeEndpoint: string;

    /**
     * @param {Config} config
     */
    public constructor(config: Config) {
        super();

        this.clientId = config.get('oauth2.client_id');
        this.clientSecret = config.get('oauth2.client_secret');
        this.serverUrl = config.get('oauth2.server_url');
        this.userEndpoint = config.get('oauth2.user_endpoint');
        this.tokenEndpoint = config.get('oauth2.token_endpoint');
        this.authorizeEndpoint = config.get('oauth2.authorize_endpoint');
    }
}
