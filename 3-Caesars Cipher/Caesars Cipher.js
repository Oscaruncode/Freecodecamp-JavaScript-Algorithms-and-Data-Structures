function rot13(str) {
    let charCode=0; //private var
    
    return str.split("").map(el=>{
      if(/\W/.test(el)){return el} // Return non-metacharacters (like whitespace ? !)
      else{
        charCode=el.charCodeAt() //get charCode from ASCII
    
        if(charCode>77)  //Above this we can substract 13 places from the charcode (because 77 is M and 77-13=64(A))
        {return String.fromCharCode(charCode-13)} 
    
        else{return String.fromCharCode(charCode+13)} //how we can´t substracts charcodes <77 (because we left from the alfhabet in charCode); We can plus 13 places, because is the form how the Rot13 moves the words (13 places) acording the ABC number of letters (26); **** Rewrite this explaining because will be confuse
      }}).join("")  
    
    }