import { Client } from '@leebrooks3/typescript';
import { default as Config } from '../../Config/RepositoryInterface';
export default class AuthClient extends Client {
    /**
     * The oauth2 client id.
     *
     * @var {number}
     */
    private clientId;
    /**
     * The oauth2 client secret.
     *
     * @var {string}
     */
    private clientSecret;
    /**
     * The oauth2 server url
     *
     * @var {string}
     */
    private serverUrl;
    /**
     * The oauth2 user endpoint.
     *
     * @var {string}
     */
    private userEndpoint;
    /**
     * The oauth2 token endpoint.
     *
     * @var {string}
     */
    private tokenEndpoint;
    /**
     * The oauth2 authorize endpoint.
     *
     * @var {string}
     */
    private authorizeEndpoint;
    /**
     * @param {Config} config
     */
    constructor(config: Config);
}
//# sourceMappingURL=AuthClient.d.ts.map