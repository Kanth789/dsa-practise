function checkCashRegister(price, cash, cid) {
    const currencyValues = {
      "PENNY": 0.01,
      "NICKEL": 0.05,
      "DIME": 0.1,
      "QUARTER": 0.25,
      "ONE": 1,
      "FIVE": 5,
      "TEN": 10,
      "TWENTY": 20,
      "ONE HUNDRED": 100,
    };
  
    let changeDue = cash - price; //.5
  
    let totalCID = 0;
    for (let i = 0; i < cid.length; i++) {
      totalCID += cid[i][1];//0.01+0.05+0.1+0.25+1+5+10+20+100 = 136 + 0.31+0.1 = 136.41
    }
    totalCID = totalCID.toFixed(2);  
  
    function isDrawerClosed() {
      return changeDue == totalCID;
    }
  
    function isInsufficientFunds() {
      return changeDue > totalCID;
    }
  
    function roundToTwoDecimalPlaces(num) {
      return parseFloat(num.toFixed(2));
    }
    let change = [];
    for (let i = cid.length - 1; i >= 0; i--) {
      const denomination = cid[i][0];
      const value = currencyValues[denomination];
      const availableAmount = cid[i][1];
      let numberOfCoinsOrBills = Math.floor(availableAmount / value);
      let returnedAmount = 0;
  
      while (numberOfCoinsOrBills > 0 && changeDue >= value) {
        changeDue = roundToTwoDecimalPlaces(changeDue - value);
        returnedAmount = roundToTwoDecimalPlaces(returnedAmount + value);
        numberOfCoinsOrBills--;
      }
  
      if (returnedAmount > 0) {
        change.push([denomination, returnedAmount]);
      }
    }
  
    let status = "";
    let result = { status, change };
  
    if (isDrawerClosed()) {
      status = "CLOSED";
      result.status = status;
      result.change = cid;
    } else if (isInsufficientFunds()) {
      status = "INSUFFICIENT_FUNDS";
      result.status = status;
      result.change = [];
    } else {
      status = "OPEN";
      result.status = status;
    }
  
    return result;
  }
  
  const result = checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ]);
  
  console.log(result);
  