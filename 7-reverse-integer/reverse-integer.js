/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let firstDigit;
    let reverseNum=0;
    let negative=false;
    if(x<0){
        x=Math.abs(x);
        negative=true;
    }
    let n=x;
    while(n>0){
        firstDigit=n%10;
        reverseNum=reverseNum*10+firstDigit;
        n=Math.floor(n/10);
    }
    if(negative){
        reverseNum=-reverseNum;
    }
    let safeRange=Math.pow(2,31);
    if(reverseNum>(safeRange-1) || reverseNum<(-safeRange)){
        return 0;
    }
    return reverseNum;
};