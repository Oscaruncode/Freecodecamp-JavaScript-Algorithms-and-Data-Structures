function convertToRoman(num) {
    const decimal = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    const roman = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
    let inRomanNums = ""
  
  for(let i=0;i<decimal.length;i++){
    while (decimal[i] <= num){
      inRomanNums += roman[i]
      num -= decimal[i]
    }
  }
   return inRomanNums;
  }
  
  convertToRoman(36);