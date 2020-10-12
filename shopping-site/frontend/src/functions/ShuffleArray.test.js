import { ShuffleArray } from "./ShuffleArray";

const mockData = [1, 2, 3, 4, 5],
    shuffledData = ShuffleArray([...mockData]);

describe('test shuffle array method', () => {
    it('should differ from the original array', () => {
        expect(shuffledData).not.toEqual(mockData);
    });
});