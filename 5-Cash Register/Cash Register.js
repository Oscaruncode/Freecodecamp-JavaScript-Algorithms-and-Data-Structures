// FUNCTIONS
const totalCidFunc = (cid) => { 
    let totalCid = 0
    for (let element of cid){
    totalCid += element[1]
    }
    return totalCid.toFixed(2)
  } 
  
  const insuficientFoundsFunc = () => ({status: "INSUFFICIENT_FUNDS", change: []})//if cash-in-drawer is less than the change due, or if you cannot return the exact change.
  
  const statusClose = (cid) => ({status: "CLOSED", change: cid})
  
  const changeAmountFunc = (cid,change,changeArr) => {
  
      const equivalence = {
      "PENNY": .01,
      "NICKEL": .05,
      "DIME": .10,
      "QUARTER": .25,
      "ONE": 1.00,
      "FIVE": 5.00,
      "TEN": 10.00,
      "TWENTY": 20.00,
      "ONE HUNDRED": 100.00
    }
  
  cid = cid.reverse() //order highest to lowest
  
    for (let el of cid){
    let temp = [el[0],0]
  
      while(change>= equivalence[el[0]] && el[1] > 0){
      temp[1] += equivalence[el[0]]
      el[1] -= equivalence[el[0]]
      change -= equivalence[el[0]]
      change = change.toFixed(2)
      }
  
      if(temp[1]>0){changeArr.push(temp)}
    }
  
    return ({change,changeArr})
  
  }
  
  
  
  
  //Funcionality
  function checkCashRegister(price, cash, cid) {
    //vars
    const totalCid = totalCidFunc(cid)
    let change = cash-price
    let changeArr = []
  
  if(change>totalCid){
    return insuficientFoundsFunc() // if cash-in-drawer is less than the change
  }  
  else if(change.toFixed(2)===totalCid){ // if it is equal to the change due.
    return statusClose(cid)
  }
  else{
    const changeAmount = changeAmountFunc(cid,change,changeArr)
    change = changeAmount["change"]
    changeArr = changeAmount["changeArr"]
  }
  
  if(change>0){return insuficientFoundsFunc()} // if you cannot return the exact change
  
  return {status: "OPEN", change: changeArr} //Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key
  
  }