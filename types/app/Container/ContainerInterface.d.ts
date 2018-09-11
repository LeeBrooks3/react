export default interface ContainerInterface {
    /**
     * Returns the value for the given key from the container.
     *
     * @param {string} key
     * @return {*}
     */
    get(key: string): any;
    /**
     * Sets the value for the given key in the container.
     *
     * @param {string} key
     * @param {*} value
     * @return {void}
     */
    set(key: string, value: any): void;
}
//# sourceMappingURL=ContainerInterface.d.ts.map