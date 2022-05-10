module.exports = class FizzBuzzService{
    static applyValidationInNumber(score){
        let result
        if(score%3 === 0 && score %5 === 0){
            result = "FIZZBUZZ"
        } else if (score %3===0){
            result = "FIZZ"
        } else if(score %5 ===0){
            result = "BUZZ"
        }else{
            result = score 
        }
        console.log(result);
        return result
    }
}