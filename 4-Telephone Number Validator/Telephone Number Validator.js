function telephoneCheck(str) {
    const regex = /^(1\s|1)?(\([0-9]{3}\)|[0-9]{3})(\s|-)?[0-9]{3}(-|\s)?[0-9]{4}$/  
    return regex.test(str);
  }
  
  telephoneCheck("27576227382");