import Repository from '../../../src/app/Cache/Repository';

describe('app/Cache/Repository', () => {
    let cache: Repository;

    beforeEach(() => {
        cache = new Repository();

        // @ts-ignore
        window.localStorage = {
            getItem: jest.fn(),
            removeItem: jest.fn(),
            setItem: jest.fn(),
        };
    });

    describe('get', () => {
        it('returns the value from local storage', async () => {
            const key: string = 'key';
            const value: string = 'value';

            window.localStorage.getItem = jest.fn(() => JSON.stringify(value));

            const result: string = await cache.get(key);

            expect(result).toBe(value);
            expect(window.localStorage.getItem).toHaveBeenCalledWith(key);
        });
    });

    describe('set', () => {
        it('stores the value in local storage', async () => {
            const key: string = 'key';
            const value: string = 'value';

            await cache.set(key, value);

            expect(window.localStorage.setItem).toHaveBeenCalledWith(key, JSON.stringify(value));
        });
    });

    describe('remove', () => {
        it('deletes the value from local storage', async () => {
            const key: string = 'key';

            await cache.remove(key);

            expect(window.localStorage.removeItem).toHaveBeenCalledWith(key);
        });
    });
});
