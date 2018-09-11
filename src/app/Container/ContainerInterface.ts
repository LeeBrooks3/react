export default interface ContainerInterface {
    /**
     * Makes an instance of the class defined by a factory with the given key.
     *
     * @param {string} key
     * @return {*}
     */
    make<T>(key: string): T;
}
