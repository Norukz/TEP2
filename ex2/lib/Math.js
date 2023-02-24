class Math  {

  /**
  * add
  * @param {number} a the first number to add
  * @param {number} b the second number to add 
  * @returns {number} the sum of a and b
  */
  add(a, b)   {
      if (typeof a !== 'number' || typeof b !== 'number') {
          throw new Error('both numbers must be type number')
      }
      return a + b;
  }

  /**
  * sumArr
  * @param {Array<number>} arr the array of numbers to add
  * @param {number} total numeros en el arreglo
  */
  sumArr(arr) {
      let total = 0;
      for(let i = 0; i < arr.length; i++) {
          total += arr[i];
      }
      return total;
  }

  /**
  * average
  * @param {Array<number>} arr arreglo
  * @param {number} promedio promedio del arreglo
  */
  avg(arr)    {
      let promedio = 0;
      let total = 0;
      for(let i = 0; i < arr.length; i++) {
          total += arr[i];
          promedio = total / arr.length
      }
      return promedio;
  }

  /**
  * uniques
  * @param {Array<number>} arr arreglo
  * @param {Array<number>} arr control
  */
  uniques(arr)   {
      let arr2 = [];
      for(let i = 0; i < arr.length; i++) {
          if(!arr2.includes(arr[i])){
              arr2.push(arr[i]);
          }
      }
      return arr2;
  }
}

module.exports = Math;