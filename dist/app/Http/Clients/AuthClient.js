"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var typescript_1 = require("@leebrooks3/typescript");
var AuthClient = /** @class */ (function (_super) {
    __extends(AuthClient, _super);
    /**
     * @param {Config} config
     */
    function AuthClient(config) {
        var _this = _super.call(this) || this;
        _this.clientId = config.get('oauth2.client_id');
        _this.clientSecret = config.get('oauth2.client_secret');
        _this.serverUrl = config.get('oauth2.server_url');
        _this.userEndpoint = config.get('oauth2.user_endpoint');
        _this.tokenEndpoint = config.get('oauth2.token_endpoint');
        _this.authorizeEndpoint = config.get('oauth2.authorize_endpoint');
        return _this;
    }
    return AuthClient;
}(typescript_1.Client));
exports["default"] = AuthClient;
//# sourceMappingURL=AuthClient.js.map