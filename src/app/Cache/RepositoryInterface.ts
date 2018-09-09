export default interface RepositoryInterface {
    /**
     * Returns the value for the given key from storage.
     *
     * @param {string} key
     * @return {*}
     */
    get(key: string): any;

    /**
     * Sets the value for the given key in storage.
     *
     * @param {string} key
     * @param {*} value
     * @return {void}
     */
    set(key: string, value: any): void;

    /**
     * Removes the value for the given key from storage.
     *
     * @param {string} key
     * @return {void}
     */
    remove(key: string): void;
}
