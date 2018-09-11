export default interface ContainerInterface {
    /**
     * Makes an instance of the class defined by a factory with the given key.
     */
    make<T>(key: string): T;
}
