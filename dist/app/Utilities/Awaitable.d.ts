export default interface Awaitable {
    /**
     * Returns whether the asynchronous action should be awaited.
     */
    shouldAwait(): boolean;
}
