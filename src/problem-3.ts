{

    function countWordOccurrences(sentence: string, word: string): number {
        const lowerCaseSentence = sentence.toLowerCase();
        const lowerCaseWord = word.toLowerCase();
    
        const wordsArray = lowerCaseSentence.split(' ');
        const wordCount = wordsArray.filter(w => w === lowerCaseWord).length;
    
        return wordCount;
    }
    

    
}