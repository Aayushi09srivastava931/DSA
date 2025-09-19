/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let result=[]
    for(let i=0;i<words.length;i++){
        for(let char of words[i]){
            if(char === x){
                result.push(i)
                break;
            }
        }
    }
    return result
};