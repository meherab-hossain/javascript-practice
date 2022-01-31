let accounts= [[1,2,3],[3,2,1]]
var maximumWealth = function(accounts){
    let maxWealth= 0;
    accounts.forEach((account)=>{
        let currWealth = 0;
        account.forEach(accountWealth => {
            currWealth+=accountWealth;17
        });
        console.log("maxWealth :",maxWealth, "curr: ", currWealth);
        maxWealth= Math.max(maxWealth, currWealth) 
    })
    return maxWealth;
}
console.log(maximumWealth(accounts));