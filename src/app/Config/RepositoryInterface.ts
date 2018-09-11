export default interface RepositoryInterface {
    /**
     * Returns the value for the given key from config.
     */
    get<T = any>(key: string): T;

    /**
     * Sets the value for the given key in config.
     */
    set<T = any>(key: string, value: T): void;
}
