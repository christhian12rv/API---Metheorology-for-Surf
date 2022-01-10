import { StormGlass } from '@src/clients/stormGlass';

describe('StormGlass client', () => {
    it('should return the normalized forecast from the StormGlass service', async () => {
        const lat = -33.792767;
        const lgn = 151.289824;

        const stormGlass = new StormGlass();
        const response = await stormGlass.fetchPoints(lat, lgn);
        expect(response).toEqual({});
    })
})