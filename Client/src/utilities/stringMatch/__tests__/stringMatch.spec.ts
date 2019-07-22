import StringCompare                            from '../StringCompare';

describe('String Match Tests', () => {

    test('Test Exact Match Single Word', () => {
        const comparison = 'Garden';
        const textBody = 'Garden';
        const result = StringCompare.compareWithRanking(comparison, textBody);

        expect(result).toBe(100);
    });

    test('Test Exact Match Multi  Word', () => {
        const comparison = 'Summer Country Garden';
        const textBody = 'Summer Country Garden';
        const result = StringCompare.compareWithRanking(comparison, textBody);

        expect(result).toBe(100);
    });

    test('Test Loose Match - Single word with complex body', () => {
        const comparison = 'english';
        const textBody = 'English Country Summer Garden';
        const result = StringCompare.compareWithRanking(comparison, textBody);

        expect(result).toBe(100);
    });

    test('Test Loose Match - 2 words with complex body', () => {
        const comparison = 'english Country';
        const textBody = 'English Country Summer Garden';
        const result = StringCompare.compareWithRanking(comparison, textBody);

        // should be 100 as 2 words match fully, but averaged by number of input words
        expect(result).toBe(100);
    });

    test('Test Loose Match - 2 partial match with complex body', () => {
        const comparison = 'mmer den';
        const textBody = 'English Country Summer Garden';
        const result = StringCompare.compareWithRanking(comparison, textBody);

        // should be 25 as 2 words contain, but averaged by number of input words
        expect(result).toBe(25);
    });

});
