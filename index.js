var SI_SYMBOL = ["", "K", "M", "G", "T", "P", "E"];

function abbreviateNumber(number,decimalsToBeFixed){

    let numberIsNegative=false;
    if(number<0){
        numberIsNegative=true;
        number=(-1)*number;
    }        

    // what tier? (determines SI symbol)
    var tier = Math.log10(number) / 3 | 0;

    // if zero, we don't need a suffix
    if(tier == 0) return number;

    // get suffix and determine scale
    var suffix = SI_SYMBOL[tier];
    var scale = Math.pow(10, tier * 3);

    // scale the number
    var scaled = number / scale;

    // format number and add suffix
    if(numberIsNegative){
        return "-"+scaled.toFixed(decimalsToBeFixed) + suffix;
    }
    else{
        return scaled.toFixed(decimalsToBeFixed) + suffix;
    }
    
}

module.exports=abbreviateNumber;