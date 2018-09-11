export default interface RepositoryInterface {
    /**
     * Returns the value for the given key from storage.
     */
    get<T = any>(key: string): Promise<T>;

    /**
     * Sets the value for the given key in storage.
     */
    set<T = any>(key: string, value: T): Promise<void>;

    /**
     * Removes the value for the given key from storage.
     */
    remove(key: string): Promise<void>;
}
