const Calculate = {
    factorial(num){
      if(num === 0){
        return 0;
      }
      if(num === 1){
        return 1;
      }
      const result = num * this.factorial(num - 1);
      return result;
    }
  }
  
  module.exports = Calculate;  