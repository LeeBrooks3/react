export default interface RepositoryInterface {
    /**
     * Returns the value for the given key from config.
     *
     * @param {string} key
     * @return {*}
     */
    get(key: string): any;
    /**
     * Sets the value for the given key in config.
     *
     * @param {string} key
     * @param {*} value
     * @return {void}
     */
    set(key: string, value: any): void;
}
//# sourceMappingURL=RepositoryInterface.d.ts.map