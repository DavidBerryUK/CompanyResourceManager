export default class StringCompare {

/**
 * compares a body of text with input test and returns a ranking on how
 * well it matches. The comparison may be multi word.
 * All matches are case insensitive
 * @param comparison The string to search for in the body of text
 * @param body The body of text
 * @returns     100 = exact match
 *               75 = body begins with comparison
 *               25 = body contains comparison
 *                0 = not a match at all
 * If the comparison contains multiple works, the scores of each word are
 * calculated and averaged.
 */
    public static compareWithRanking(comparison: string, body: string): number {

        const comparisonLowerCase = comparison.toLowerCase();
        const bodyLowerCase = body.toLowerCase();

        if ( comparisonLowerCase === bodyLowerCase) {
            return 100;
        }

        let ranking = 0;
        const comparisonWords = comparisonLowerCase.split(' ');
        const bodyWords = bodyLowerCase.split(' ');

        comparisonWords.forEach((word) => {
            ranking = ranking + this.compareWordWithRanking(word, bodyLowerCase, bodyWords);
        });

        return ranking / comparisonWords.length;
    }

    private static compareWordWithRanking(word: string, body: string, bodyWords: Array<string>): number {

        if ( word === body) {
            return 100;
        }

        const indexWord = body.indexOf(word);

        if ( indexWord < 0) {
            return 0;
        }

        let bestResult = 0;
        bodyWords.forEach((bodyWord) => {

            if ( bodyWord === word) {
                bestResult = Math.max( bestResult, 100 );
            } else {
                const index = bodyWord.indexOf(word);
                if ( index === 0) {
                    bestResult = Math.max( bestResult, 75 );
                }
                if ( index > 0) {
                    bestResult = Math.max( bestResult, 25 );
                }
            }

        });
        return bestResult;
    }
}
