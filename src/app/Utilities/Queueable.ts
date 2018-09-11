export default interface Queueable {
    /**
     * Returns whether the action should be called asynchronously.
     */
    shouldQueue(): boolean;
}
